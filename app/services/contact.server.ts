import { db } from "./db.server";
import {
  CONTACT_LIMITS,
  isValidEmail,
  type ContactSubmission,
  type ContactResult,
} from "./contact.shared";

export { CONTACT_LIMITS, isValidEmail, type ContactSubmission, type ContactResult };

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
  if (!isValidEmail(data.email)) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (data.company && data.company.length > CONTACT_LIMITS.company) {
    return { success: false, error: `Company must be ${CONTACT_LIMITS.company} characters or less.` };
  }
  if (data.budget && data.budget.length > CONTACT_LIMITS.budget) {
    return { success: false, error: `Budget must be ${CONTACT_LIMITS.budget} characters or less.` };
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
    console.error("Failed to save contact:", error instanceof Error ? error.message : "Unknown error");
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

const DEFAULT_PAGE_SIZE = 25;

export type ContactFilter = "all" | "unread" | "read";

export async function getContacts(
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE,
  filter: ContactFilter = "all"
) {
  const skip = (page - 1) * pageSize;

  const where =
    filter === "unread"
      ? { readAt: null }
      : filter === "read"
        ? { readAt: { not: null } }
        : {};

  const [contacts, totalCount, unreadCount] = await Promise.all([
    db.contact.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: pageSize,
    }),
    db.contact.count({ where }),
    db.contact.count({ where: { readAt: null } }),
  ]);

  return {
    contacts,
    totalCount,
    unreadCount,
    page,
    pageSize,
    totalPages: Math.ceil(totalCount / pageSize),
    filter,
  };
}

export async function getContactById(id: number) {
  return db.contact.findUnique({
    where: { id },
  });
}

export async function markContactAsRead(id: number) {
  return db.contact.update({
    where: { id },
    data: { readAt: new Date() },
  });
}

export async function markContactAsUnread(id: number) {
  return db.contact.update({
    where: { id },
    data: { readAt: null },
  });
}
