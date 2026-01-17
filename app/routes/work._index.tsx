import type { Route } from "./+types/work";

export function meta({}: Route.MetaArgs) {
  const title = "Work — Modus Tel Labs";
  const description =
    "Case studies and results from AI, automation, and custom software projects that transformed business operations.";
  const ogImage = "https://modustel.com/assets/og-modustel.svg";
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    {
      property: "og:image:alt",
      content: "Modus Tel Labs — AI transformation projects",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    {
      name: "twitter:image:alt",
      content: "Modus Tel Labs — Research and products at the frontier of safety",
    },
  ];
}

export default function WorkIndex() {
  return (
    <div className="prose">
      <div className="animate-fade-in">
        <h1>Work</h1>
        <p>
          Selected work that shows how we build outcomes-first systems without
          exposing client names. Each example includes what shipped and the impact.
        </p>
      </div>

      <div className="grid stagger-animation">
        <section className="card">
          <h2>Proposal automation for a services team</h2>
          <p>
            <strong>Before:</strong> 3–5 day proposal cycles and manual handoffs.
          </p>
          <p>
            <strong>After:</strong> automated intake, pricing logic, PDF outputs,
            and CRM sync.
          </p>
          <p>
            <strong>Result:</strong> 90% of proposals auto-generated, cycle time
            under 4 hours.
          </p>
        </section>

        <section className="card">
          <h2>Operations command center</h2>
          <p>
            <strong>Before:</strong> fragmented status updates across Teams,
            email, and spreadsheets.
          </p>
          <p>
            <strong>After:</strong> real-time dashboards, alerting, and escalation
            workflows.
          </p>
          <p>
            <strong>Result:</strong> 45% faster response time and fewer missed
            handoffs.
          </p>
        </section>

        <section className="card">
          <h2>M365-native internal apps</h2>
          <p>
            <strong>Before:</strong> low adoption for tools outside the Microsoft
            stack.
          </p>
          <p>
            <strong>After:</strong> Teams app, SharePoint dashboard, and Outlook
            add-in.
          </p>
          <p>
            <strong>Result:</strong> 3× weekly active usage within 30 days.
          </p>
        </section>
      </div>

      <p>
        Want similar outcomes? <a href="/contact">Get in touch</a> and we'll
        discuss scope and timing.
      </p>
    </div>
  );
}
