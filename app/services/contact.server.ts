import { db } from "./db.server";
import {
  CONTACT_LIMITS,
  type ContactSubmission,
  type ContactResult,
} from "./contact.shared";

export { CONTACT_LIMITS, type ContactSubmission, type ContactResult };

export function validateContact(data: ContactSubmission): ContactResult {
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (data.name.length > CONTACT_LIMITS.name) {
    return { success: false, error: `Name must be ${CONTACT_LIMITS.name} characters or less.` };
  }
  if (data.email.length > CONTACT_LIMITS.email) {
    return { success: false, error: `Email must be ${CONTACT_LIMITS.email} characters or less.` };
  }
  if (data.company && data.company.length > CONTACT_LIMITS.company) {
    return { success: false, error: `Company must be ${CONTACT_LIMITS.company} characters or less.` };
  }
  if (data.timeline && data.timeline.length > CONTACT_LIMITS.timeline) {
    return { success: false, error: `Timeline must be ${CONTACT_LIMITS.timeline} characters or less.` };
  }
  if (data.message.length > CONTACT_LIMITS.message) {
    return { success: false, error: `Message must be ${CONTACT_LIMITS.message} characters or less.` };
  }

  return { success: true };
}

export async function createContact(data: ContactSubmission): Promise<ContactResult> {
  const validation = validateContact(data);
  if (!validation.success) {
    return validation;
  }

  try {
    await db.contact.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company || null,
        budget: data.budget || null,
        timeline: data.timeline || null,
        message: data.message,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to save contact:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function getContacts() {
  return db.contact.findMany({
    orderBy: { createdAt: "desc" },
  });
}
