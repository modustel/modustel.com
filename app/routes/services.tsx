import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
  const title = "Services — Modus Tel Labs";
  const description =
    "Custom AI development, automation, and software solutions to modernize your business operations and drive results.";
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
      content: "Modus Tel Labs — AI-powered transformation services",
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

export default function Services() {
  return (
    <div className="prose">
      <h1>Services</h1>
      <p>
        We package outcomes, not hours. Each engagement is designed to ship a
        usable system quickly and then harden it for long-term use.
      </p>

      <section>
        <h2>Service packages</h2>
        <div className="grid">
          <section className="card">
            <h3>Proposal Automation System</h3>
            <p>
              A full pipeline from intake to pricing to PDF delivery with CRM
              sync.
            </p>
            <ul>
              <li>Typical timeline: 4–6 weeks</li>
              <li>Deliverables: workflow map, automation, PDF templates</li>
            </ul>
          </section>

          <section className="card">
            <h3>Operations Command Center</h3>
            <p>
              A single pane of glass for dashboards, alerts, and escalation
              workflows.
            </p>
            <ul>
              <li>Typical timeline: 6–8 weeks</li>
              <li>Deliverables: dashboards, alerts, SOP playbooks</li>
            </ul>
          </section>

          <section className="card">
            <h3>M365-native Internal Apps</h3>
            <p>
              Teams, SharePoint, and Outlook extensions that fit existing
              security and identity models.
            </p>
            <ul>
              <li>Typical timeline: 3–6 weeks</li>
              <li>Deliverables: app build, deployment plan, adoption guide</li>
            </ul>
          </section>

          <section className="card">
            <h3>Integration Layer</h3>
            <p>
              Microsoft Graph, CRMs, accounting, and custom data sources aligned
              with your architecture.
            </p>
            <ul>
              <li>Typical timeline: 4–8 weeks</li>
              <li>Deliverables: APIs, data contracts, observability</li>
            </ul>
          </section>
        </div>
      </section>

      <section>
        <h2>Engagement models</h2>
        <div className="grid">
          <section className="card">
            <h3>Fixed-scope sprint</h3>
            <p>
              Best for a defined prototype or workflow. We scope tightly, ship
              fast, and deliver a handoff-ready codebase.
            </p>
          </section>
          <section className="card">
            <h3>Retainer partnership</h3>
            <p>
              Ongoing support for incremental automation, maintenance, and
              continuous improvements.
            </p>
          </section>
          <section className="card">
            <h3>Prototype to production track</h3>
            <p>
              A phased engagement that starts with a POC and graduates into
              enterprise-grade delivery.
            </p>
          </section>
        </div>
      </section>

      <section>
        <h2>How we deliver</h2>
        <ol>
          <li>Discover workflows, constraints, and success metrics.</li>
          <li>Sprint build with weekly demos and feedback loops.</li>
          <li>Harden with security reviews, tests, and logging.</li>
          <li>Handoff or operate with training and runbooks.</li>
        </ol>
      </section>

      <p>
        Ready to start? <a href="/contact">Send a brief</a> and we’ll respond
        with a proposed plan.
      </p>
    </div>
  );
}
