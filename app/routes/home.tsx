import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ModusTel | Prototype-to-Production Systems" },
    {
      name: "description",
      content:
        "ModusTel builds outcomes-first systems: prototype-to-production automation, M365-native apps, and integration layers that remove operational friction.",
    },
  ];
}

export default function Home() {
  return (
    <div className="prose">
      {/* Hero Section */}
      <div className="hero">
        <h1>Prototype-to-production systems for operations teams.</h1>
        <p>
          ModusTel is an outcomes-first engineering lab. We design and ship AI-first
          internal tooling that quietly removes friction from proposals, scheduling,
          and operations — all with production-grade reliability.
        </p>

        <ul>
          <li>Automated proposals that move from intake to PDF in hours</li>
          <li>Operations dashboards that surface bottlenecks before they grow</li>
          <li>M365-native apps that keep teams in the tools they already use</li>
        </ul>

        <p style={{ marginTop: '2.5rem' }}>
          <a className="btn" href="/contact">
            Book a discovery call
          </a>{" "}
          <a href="/contact">Send a brief</a>
        </p>
      </div>

      <section>
        <h2>Who we build for</h2>
        <div className="grid">
          <section className="card">
            <h3>Enterprise teams</h3>
            <p>
              Operations-heavy groups that need durable automation, auditability,
              and clear handoff to internal owners.
            </p>
          </section>
          <section className="card">
            <h3>Founders modernizing workflows</h3>
            <p>
              Leaders with legacy processes who want a prototype fast — and a path
              to production without a rewrite.
            </p>
          </section>
          <section className="card">
            <h3>Microsoft 365 ecosystems</h3>
            <p>
              Teams standardizing on M365 who want Teams, SharePoint, and Outlook
              extensions that fit their security model.
            </p>
          </section>
        </div>
      </section>

      <section>
        <h2>What we build</h2>
        <div className="grid">
          <section className="card">
            <h3>Proposal Automation System</h3>
            <p>Intake → scope → pricing → PDF → CRM sync.</p>
          </section>
          <section className="card">
            <h3>Operations Command Center</h3>
            <p>Dashboards, alerts, and workflows that keep teams aligned.</p>
          </section>
          <section className="card">
            <h3>M365-native Internal Apps</h3>
            <p>Teams, SharePoint, and Outlook extensions built for adoption.</p>
          </section>
          <section className="card">
            <h3>Integration Layer</h3>
            <p>Microsoft Graph, CRMs, accounting, and custom data sources.</p>
          </section>
          <section className="card">
            <h3>Reliability Toolkit</h3>
            <p>Logging, monitoring, tests, and runbooks baked in.</p>
          </section>
        </div>
      </section>

      <section>
        <h2>How we work</h2>
        <ol>
          <li>
            <strong>Discover</strong> — map workflows, constraints, and success
            metrics in 1–2 sessions.
          </li>
          <li>
            <strong>Sprint build</strong> — deliver a prototype with weekly demos
            and iterative feedback.
          </li>
          <li>
            <strong>Harden</strong> — add security, logging, tests, and
            documentation.
          </li>
          <li>
            <strong>Handoff or operate</strong> — runbooks, training, and optional
            retainer support.
          </li>
        </ol>
      </section>

      <section>
        <h2>Selected work</h2>
        <div className="grid">
          <section className="card">
            <h3>Proposal automation for a services team</h3>
            <p>
              <strong>Problem:</strong> proposals took 3–5 days and required
              multiple handoffs.
            </p>
            <p>
              <strong>Shipped:</strong> intake workflow, pricing logic, PDF
              generation, and CRM sync.
            </p>
            <p>
              <strong>Impact:</strong> cycle time reduced to under 4 hours; 90% of
              proposals auto-generated.
            </p>
          </section>
          <section className="card">
            <h3>Ops command center for field teams</h3>
            <p>
              <strong>Problem:</strong> status updates lived across email, Teams,
              and spreadsheets.
            </p>
            <p>
              <strong>Shipped:</strong> real-time dashboards, alerting, and
              escalation workflows.
            </p>
            <p>
              <strong>Impact:</strong> response time improved by 45%; fewer missed
              handoffs.
            </p>
          </section>
          <section className="card">
            <h3>M365-native internal app rollout</h3>
            <p>
              <strong>Problem:</strong> adoption lagged when tools lived outside
              the Microsoft stack.
            </p>
            <p>
              <strong>Shipped:</strong> Teams app, SharePoint dashboard, and
              Outlook add-in.
            </p>
            <p>
              <strong>Impact:</strong> 3× weekly active usage after launch.
            </p>
          </section>
        </div>
      </section>

      <section>
        <h2>Enterprise-grade by default</h2>
        <ul>
          <li>Security reviews, access control, and audit-friendly logging</li>
          <li>Documentation, runbooks, and CI pipelines for handoff</li>
          <li>Performance budgets and observability baked into delivery</li>
        </ul>
      </section>

      <section className="card">
        <h2>Ready to remove operational friction?</h2>
        <p>
          Send a brief or book a discovery call and we’ll map the fastest path to
          production.
        </p>
        <p>
          <a className="btn" href="/contact">
            Send a brief
          </a>{" "}
          <a href="/contact">Book a call</a>
        </p>
      </section>
    </div>
  );
}
