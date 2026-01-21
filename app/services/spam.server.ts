// Simple in-memory rate limiter
// Note: This resets on server restart. For production at scale,
// consider using Redis or Vercel KV.

const submissions = new Map<string, number[]>();

const RATE_LIMIT = {
  maxRequests: 3,
  windowMs: 60 * 60 * 1000, // 1 hour
};

export function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;

  // Get existing timestamps for this identifier
  const timestamps = submissions.get(identifier) || [];

  // Filter to only timestamps within the window
  const recentTimestamps = timestamps.filter((t) => t > windowStart);

  // Check if over limit
  if (recentTimestamps.length >= RATE_LIMIT.maxRequests) {
    return false;
  }

  // Add current timestamp and update map
  recentTimestamps.push(now);
  submissions.set(identifier, recentTimestamps);

  // Cleanup old entries periodically (every 100 checks)
  if (Math.random() < 0.01) {
    cleanupOldEntries(windowStart);
  }

  return true;
}

function cleanupOldEntries(windowStart: number) {
  for (const [key, timestamps] of submissions.entries()) {
    const recent = timestamps.filter((t) => t > windowStart);
    if (recent.length === 0) {
      submissions.delete(key);
    } else {
      submissions.set(key, recent);
    }
  }
}

export function isHoneypotFilled(value: string | null): boolean {
  return !!value && value.length > 0;
}

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(token: string): Promise<boolean> {
  if (!TURNSTILE_SECRET_KEY) {
    console.warn("TURNSTILE_SECRET_KEY not set, skipping verification");
    return true;
  }

  if (!token) {
    return false;
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}
