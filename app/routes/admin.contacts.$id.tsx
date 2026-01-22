import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/admin.contacts.$id";
import { Page } from "../components/layout/Page";
import { requireAdmin } from "../services/auth.server";
import { getContactById } from "../services/contact.server";

export async function loader({ request, params }: Route.LoaderArgs) {
  await requireAdmin(request);

  const id = parseInt(params.id, 10);
  if (isNaN(id)) {
    throw new Response("Invalid contact ID", { status: 400 });
  }

  const contact = await getContactById(id);
  if (!contact) {
    throw new Response("Contact not found", { status: 404 });
  }

  return { contact };
}

export function meta({ data }: Route.MetaArgs) {
  const name = data?.contact?.name || "Contact";
  return [
    { title: `${name} — Admin — Modus Tel Labs` },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}

function formatBudget(budget: string | null) {
  if (!budget) return null;
  const labels: Record<string, string> = {
    "under-25k": "Under $25k",
    "25-50k": "$25k–$50k",
    "50-100k": "$50k–$100k",
    "100k-plus": "$100k+",
  };
  return labels[budget] || budget;
}

export default function ContactDetail() {
  const { contact } = useLoaderData<typeof loader>();

  return (
    <Page>
      <div className="admin-dashboard">
        <header className="admin-header">
          <div className="admin-header-back">
            <Link to="/admin" className="admin-back-link">
              &larr; Back to Dashboard
            </Link>
            <h1>Contact Details</h1>
          </div>
        </header>

        <main className="admin-main">
          <article className="admin-contact-detail">
            <header className="admin-contact-header">
              <h2>{contact.name}</h2>
              <time dateTime={new Date(contact.createdAt).toISOString()}>
                {formatDate(contact.createdAt)}
              </time>
            </header>

            <dl className="admin-contact-meta">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>

              {contact.company && (
                <div>
                  <dt>Company</dt>
                  <dd>{contact.company}</dd>
                </div>
              )}

              {formatBudget(contact.budget) && (
                <div>
                  <dt>Budget</dt>
                  <dd>{formatBudget(contact.budget)}</dd>
                </div>
              )}

              {contact.timeline && (
                <div>
                  <dt>Timeline</dt>
                  <dd>{contact.timeline}</dd>
                </div>
              )}
            </dl>

            <section className="admin-contact-message">
              <h3>Message</h3>
              <div className="admin-contact-message-content">
                {contact.message.split("\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            <footer className="admin-contact-actions">
              <a
                href={`mailto:${contact.email}?subject=Re: Your inquiry to Modus Tel Labs`}
                className="btn btn-accent"
              >
                Reply via Email
              </a>
              <Link to="/admin" className="btn btn-secondary">
                Back to List
              </Link>
            </footer>
          </article>
        </main>
      </div>
    </Page>
  );
}
