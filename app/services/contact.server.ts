import { db } from "./db.server";

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export async function createContact(data: ContactSubmission) {
  return db.contact.create({
    data: {
      name: data.name,
      email: data.email,
      company: data.company || null,
      budget: data.budget || null,
      timeline: data.timeline || null,
      message: data.message,
    },
  });
}

export async function getContacts() {
  return db.contact.findMany({
    orderBy: { createdAt: "desc" },
  });
}
