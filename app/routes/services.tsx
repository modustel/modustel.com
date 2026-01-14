import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services — Modus Tel Labs" },
    {
      name: "description",
      content:
        "AI-first internal tooling: workflow automation, integrations, and M365-native apps that remove operational friction.",
    },
  ];
}

export default function Services() {
  return (
    <div className="prose">
      <h1>Services</h1>
      <p>
        We build AI-first internal tools that remove friction from operations —
        automation, integrations, and M365-native apps designed to scale.
      </p>

      <div className="grid">
        <section className="card">
          <h2>Discovery & Strategy</h2>
          <p>
            We learn your workflows and constraints so automation is reliable and
            aligned with how your teams work.
          </p>
        </section>

        <section className="card">
          <h2>Workflow Automation</h2>
          <p>
            Ship resilient automations that handle real-world edge cases and
            reduce manual toil.
          </p>
        </section>

        <section className="card">
          <h2>Integrations & APIs</h2>
          <p>
            Connect systems cleanly with durable integrations and robust
            observability.
          </p>
        </section>

        <section className="card">
          <h2>M365-native Apps</h2>
          <p>
            Build apps that fit directly into your Microsoft 365 environment for
            seamless adoption.
          </p>
        </section>

        <section className="card">
          <h2>Delivery & Support</h2>
          <p>
            We ship iteratively, add tests and logging, and hand over runbooks
            so systems operate reliably in production.
          </p>
        </section>
      </div>

      <p>
        Ready to talk? <a href="/contact">Contact us</a> and we’ll schedule a
        quick discovery conversation.
      </p>
    </div>
  );
}
