import { Form, Link, useLoaderData, useNavigation } from "react-router";
import type { Route } from "./+types/admin.contacts.$id";
import { requireAdmin } from "../services/auth.server";
import {
  getContactById,
  markContactAsRead,
  markContactAsUnread,
} from "../services/contact.server";

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

export async function action({ request, params }: Route.ActionArgs) {
  await requireAdmin(request);

  const id = parseInt(params.id, 10);
  if (isNaN(id)) {
    throw new Response("Invalid contact ID", { status: 400 });
  }

  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "markRead") {
    await markContactAsRead(id);
  } else if (intent === "markUnread") {
    await markContactAsUnread(id);
  }

  return { success: true };
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
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isRead = !!contact.readAt;

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header-back">
          <Link to="/admin" className="admin-back-link">
            &larr; Back to Dashboard
          </Link>
          <h1>Contact Details</h1>
        </div>
        <Form method="post">
          <input
            type="hidden"
            name="intent"
            value={isRead ? "markUnread" : "markRead"}
          />
          <button
            type="submit"
            className={`btn ${isRead ? "btn-secondary" : "btn-accent"}`}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Updating..."
              : isRead
                ? "Mark as Unread"
                : "Mark as Read"}
          </button>
        </Form>
      </header>

      <main className="admin-main">
        <article className="admin-contact-detail">
          <header className="admin-contact-header">
            <div className="admin-contact-title">
              <h2>{contact.name}</h2>
              {isRead && (
                <span className="admin-read-badge">
                  Read {formatDate(contact.readAt!)}
                </span>
              )}
            </div>
            <time dateTime={new Date(contact.createdAt).toISOString()}>
              Submitted {formatDate(contact.createdAt)}
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
  );
}
