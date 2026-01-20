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
