import bcrypt from "bcryptjs";
import { redirect } from "react-router";
import { db } from "./db.server";

const SESSION_COOKIE_NAME = "admin_session";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const BCRYPT_ROUNDS = 12;

// Rate limiting for login attempts
const loginAttempts = new Map<string, number[]>();
const LOGIN_RATE_LIMIT = {
  maxAttempts: 5,
  windowMs: 15 * 60 * 1000, // 15 minutes
};

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createSession(adminId: string): Promise<string> {
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

  const session = await db.adminSession.create({
    data: {
      adminId,
      expiresAt,
    },
  });

  return session.id;
}

export async function validateSession(sessionId: string) {
  const session = await db.adminSession.findUnique({
    where: { id: sessionId },
    include: { admin: true },
  });

  if (!session) {
    return null;
  }

  if (session.expiresAt < new Date()) {
    await db.adminSession.delete({ where: { id: sessionId } });
    return null;
  }

  // Sliding expiry: extend session if more than halfway through its lifetime
  const halfwayPoint = new Date(session.expiresAt.getTime() - SESSION_DURATION_MS / 2);
  if (new Date() > halfwayPoint) {
    await db.adminSession.update({
      where: { id: sessionId },
      data: { expiresAt: new Date(Date.now() + SESSION_DURATION_MS) },
    });
  }

  // Opportunistic cleanup: 1% chance to clean expired sessions
  if (Math.random() < 0.01) {
    cleanupExpiredSessions().catch(() => {
      // Ignore cleanup errors - not critical
    });
  }

  return session;
}

export async function deleteSession(sessionId: string): Promise<void> {
  try {
    await db.adminSession.delete({ where: { id: sessionId } });
  } catch {
    // Session may already be deleted
  }
}

export async function cleanupExpiredSessions(): Promise<number> {
  const result = await db.adminSession.deleteMany({
    where: { expiresAt: { lt: new Date() } },
  });
  return result.count;
}

export function getSessionIdFromRequest(request: Request): string | null {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return null;

  const cookies = parseCookies(cookieHeader);
  return cookies[SESSION_COOKIE_NAME] || null;
}

export async function getAdminFromRequest(request: Request) {
  const sessionId = getSessionIdFromRequest(request);
  if (!sessionId) return null;

  const session = await validateSession(sessionId);
  return session?.admin || null;
}

export async function requireAdmin(request: Request) {
  const admin = await getAdminFromRequest(request);

  if (!admin) {
    throw redirect("/admin/login");
  }

  return admin;
}

export function createSessionCookie(sessionId: string): string {
  const expires = new Date(Date.now() + SESSION_DURATION_MS);
  const secure = process.env.NODE_ENV === "production" ? "Secure; " : "";
  return `${SESSION_COOKIE_NAME}=${sessionId}; Path=/; HttpOnly; ${secure}SameSite=Lax; Expires=${expires.toUTCString()}`;
}

export function createLogoutCookie(): string {
  const secure = process.env.NODE_ENV === "production" ? "Secure; " : "";
  return `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; ${secure}SameSite=Lax; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export async function authenticateAdmin(email: string, password: string) {
  const admin = await db.admin.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (!admin) {
    return null;
  }

  const isValid = await verifyPassword(password, admin.passwordHash);
  if (!isValid) {
    return null;
  }

  return admin;
}

export function checkLoginRateLimit(identifier: string): boolean {
  const now = Date.now();
  const windowStart = now - LOGIN_RATE_LIMIT.windowMs;

  const timestamps = loginAttempts.get(identifier) || [];
  const recentTimestamps = timestamps.filter((t) => t > windowStart);

  if (recentTimestamps.length >= LOGIN_RATE_LIMIT.maxAttempts) {
    return false;
  }

  recentTimestamps.push(now);
  loginAttempts.set(identifier, recentTimestamps);

  // Cleanup old entries periodically
  if (Math.random() < 0.01) {
    for (const [key, times] of loginAttempts.entries()) {
      const recent = times.filter((t) => t > windowStart);
      if (recent.length === 0) {
        loginAttempts.delete(key);
      } else {
        loginAttempts.set(key, recent);
      }
    }
  }

  return true;
}

function parseCookies(cookieHeader: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  const pairs = cookieHeader.split(";");

  for (const pair of pairs) {
    const [name, ...rest] = pair.trim().split("=");
    if (name && rest.length > 0) {
      cookies[name] = rest.join("=");
    }
  }

  return cookies;
}
