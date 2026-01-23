/**
 * HTTP utilities for route handlers
 * Centralizes common error responses and parameter parsing
 */

// Common HTTP error responses
export function badRequest(message: string): never {
  throw new Response(message, { status: 400 });
}

export function notFound(message: string): never {
  throw new Response(message, { status: 404 });
}

export function unauthorized(message: string = "Unauthorized"): never {
  throw new Response(message, { status: 401 });
}

export function forbidden(message: string = "Forbidden"): never {
  throw new Response(message, { status: 403 });
}

// Parameter parsing utilities
export function parseIntParam(
  params: Record<string, string | undefined>,
  key: string
): number {
  const value = params[key];
  const parsed = parseInt(value ?? "", 10);

  if (isNaN(parsed)) {
    badRequest(`Invalid ${key}`);
  }

  return parsed;
}
