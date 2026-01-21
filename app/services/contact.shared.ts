export const CONTACT_LIMITS = {
  name: 100,
  email: 255,
  company: 100,
  timeline: 100,
  message: 5000,
} as const;

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export type ContactResult =
  | { success: true }
  | { success: false; error: string };
