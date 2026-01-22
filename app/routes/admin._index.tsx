import { useState } from "react";
import { Form, useLoaderData } from "react-router";
import type { Route } from "./+types/admin._index";
import { Page } from "../components/layout/Page";
import { requireAdmin } from "../services/auth.server";
import { getContacts } from "../services/contact.server";

export async function loader({ request }: Route.LoaderArgs) {
  const admin = await requireAdmin(request);
  const contacts = await getContacts();

  return { admin, contacts };
}

export function meta() {
  return [
    { title: "Admin Dashboard — Modus Tel Labs" },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}

function formatBudget(budget: string | null) {
  if (!budget) return "—";
  const labels: Record<string, string> = {
    "under-25k": "Under $25k",
    "25-50k": "$25k–$50k",
    "50-100k": "$50k–$100k",
    "100k-plus": "$100k+",
  };
  return labels[budget] || budget;
}

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export default function AdminDashboard() {
  const { admin, contacts } = useLoaderData<typeof loader>();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Page>
      <div className="admin-dashboard">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
          <div className="admin-header-actions">
            <span className="admin-user">{admin.email}</span>
            <Form method="post" action="/admin/logout">
              <button type="submit" className="btn btn-secondary">
                Sign out
              </button>
            </Form>
          </div>
        </header>

        <main className="admin-main">
          <section className="admin-section">
            <h2>Contact Submissions ({contacts.length})</h2>

            {contacts.length === 0 ? (
              <p className="admin-empty">No contact submissions yet.</p>
            ) : (
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Budget</th>
                      <th>Timeline</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr
                        key={contact.id}
                        className={expandedId === contact.id ? "expanded" : ""}
                        onClick={() =>
                          setExpandedId(
                            expandedId === contact.id ? null : contact.id
                          )
                        }
                      >
                        <td className="nowrap">{formatDate(contact.createdAt)}</td>
                        <td>{contact.name}</td>
                        <td>
                          <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </td>
                        <td>{contact.company || "—"}</td>
                        <td>{formatBudget(contact.budget)}</td>
                        <td>{contact.timeline || "—"}</td>
                        <td className="message-cell">
                          {expandedId === contact.id
                            ? contact.message
                            : truncate(contact.message, 100)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>
      </div>
    </Page>
  );
}
