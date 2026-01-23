import { Form, Link, useLoaderData, useSearchParams } from "react-router";
import type { Route } from "./+types/admin._index";
import { requireAdmin } from "../services/auth.server";
import { getContacts, type ContactFilter } from "../services/contact.server";

export async function loader({ request }: Route.LoaderArgs) {
  const admin = await requireAdmin(request);

  const url = new URL(request.url);
  const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10));
  const filter = (url.searchParams.get("filter") || "all") as ContactFilter;

  const result = await getContacts(page, 25, filter);

  return { admin, ...result };
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
  const { admin, contacts, totalCount, unreadCount, page, totalPages, filter } =
    useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();

  const createPageUrl = (pageNum: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNum.toString());
    return `?${params.toString()}`;
  };

  const createFilterUrl = (newFilter: ContactFilter) => {
    const params = new URLSearchParams();
    params.set("filter", newFilter);
    return `?${params.toString()}`;
  };

  return (
    <div className="admin-page">
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
          <div className="admin-section-header">
            <h2>
              Contact Submissions
              {unreadCount > 0 && (
                <span className="admin-unread-count">{unreadCount} unread</span>
              )}
            </h2>
            <div className="admin-filter-tabs">
              <Link
                to={createFilterUrl("all")}
                className={`admin-filter-tab ${filter === "all" ? "active" : ""}`}
              >
                All ({totalCount})
              </Link>
              <Link
                to={createFilterUrl("unread")}
                className={`admin-filter-tab ${filter === "unread" ? "active" : ""}`}
              >
                Unread
              </Link>
              <Link
                to={createFilterUrl("read")}
                className={`admin-filter-tab ${filter === "read" ? "active" : ""}`}
              >
                Read
              </Link>
            </div>
          </div>

          {contacts.length === 0 ? (
            <p className="admin-empty">
              {filter === "unread"
                ? "No unread contacts."
                : filter === "read"
                  ? "No read contacts."
                  : "No contact submissions yet."}
            </p>
          ) : (
            <>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Budget</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr
                        key={contact.id}
                        className={contact.readAt ? "read" : "unread"}
                      >
                        <td>
                          <span
                            className={`admin-status-dot ${contact.readAt ? "read" : "unread"}`}
                            title={contact.readAt ? "Read" : "Unread"}
                          />
                        </td>
                        <td className="nowrap">
                          {formatDate(contact.createdAt)}
                        </td>
                        <td>{contact.name}</td>
                        <td>
                          <a href={`mailto:${contact.email}`}>
                            {contact.email}
                          </a>
                        </td>
                        <td>{contact.company || "—"}</td>
                        <td>{formatBudget(contact.budget)}</td>
                        <td className="message-cell">
                          <Link to={`/admin/contacts/${contact.id}`}>
                            {truncate(contact.message, 80)}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {totalPages > 1 && (
                <nav className="admin-pagination">
                  <Link
                    to={createPageUrl(page - 1)}
                    className={`btn btn-secondary ${page <= 1 ? "disabled" : ""}`}
                    aria-disabled={page <= 1}
                    onClick={(e) => page <= 1 && e.preventDefault()}
                  >
                    Previous
                  </Link>
                  <span className="admin-pagination-info">
                    Page {page} of {totalPages}
                  </span>
                  <Link
                    to={createPageUrl(page + 1)}
                    className={`btn btn-secondary ${page >= totalPages ? "disabled" : ""}`}
                    aria-disabled={page >= totalPages}
                    onClick={(e) => page >= totalPages && e.preventDefault()}
                  >
                    Next
                  </Link>
                </nav>
              )}
            </>
          )}
        </section>
      </main>
    </div>
  );
}
