import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About — Modus Tel Labs" },
    {
      name: "description",
      content:
        "We build AI-first internal tools that remove operational friction with durable automations and M365-native apps.",
    },
  ];
}

export default function About() {
  return (
    <div className="prose">
      <h1>About</h1>
      <p>
        Modus Tel Labs builds AI-first internal tools that quietly eliminate
        operational friction — automation, integrations, and M365-native apps.
      </p>

      <div className="grid">
        <section className="card">
          <h2>Mission</h2>
          <p>
            Deliver practical AI-powered tooling that reduces toil, increases
            observability, and improves outcomes for teams.
          </p>
        </section>

        <section className="card">
          <h2>Approach</h2>
          <ol>
            <li>Discover constraints and success metrics</li>
            <li>Ship a focused sprint with working demos</li>
            <li>Harden with tests, monitoring, and runbooks</li>
          </ol>
        </section>

        <section className="card">
          <h2>Team</h2>
          <p>
            A small cross-functional team of engineers and operators who care
            about long-lived systems and smooth handoff to product teams.
          </p>
        </section>

        <section className="card">
          <h2>Values</h2>
          <ul>
            <li>Reliability over novelty</li>
            <li>Observability by default</li>
            <li>Design for real-world edge cases</li>
          </ul>
        </section>
      </div>

      <p>
        Ready to talk? <a href="/contact">Contact us</a> and we’ll schedule a
        discovery conversation.
      </p>
    </div>
  );
}
