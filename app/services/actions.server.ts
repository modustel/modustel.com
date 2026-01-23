/**
 * Action utilities for route handlers
 * Provides type-safe intent handling for form actions
 */

type IntentHandler<T> = () => T | Promise<T>;

type IntentHandlers<T> = Record<string, IntentHandler<T>>;

/**
 * Handles form actions based on intent field
 * Returns the result of the matched handler, or defaultResult if no match
 *
 * @example
 * const result = await handleIntent(formData, {
 *   markRead: async () => {
 *     await markContactAsRead(id);
 *     return { success: true };
 *   },
 *   markUnread: async () => {
 *     await markContactAsUnread(id);
 *     return { success: true };
 *   },
 * }, { success: false, error: "Unknown intent" });
 */
export async function handleIntent<T>(
  formData: FormData,
  handlers: IntentHandlers<T>,
  defaultResult: T
): Promise<T> {
  const intent = formData.get("intent");

  if (typeof intent === "string" && intent in handlers) {
    return handlers[intent]();
  }

  return defaultResult;
}
