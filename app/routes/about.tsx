import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About — ModusTel" },
    {
      name: "description",
      content:
        "ModusTel builds outcomes-first systems that move from prototype to production with durable automation and M365-native apps.",
    },
  ];
}

export default function About() {
  return (
    <div className="prose">
      <h1>About</h1>
      <p>
        ModusTel exists to turn operational friction into dependable systems.
        We’re engineers who care about outcomes, long-lived codebases, and
        thoughtful handoff to internal teams.
      </p>

      <div className="grid">
        <section className="card">
          <h2>Why ModusTel</h2>
          <p>
            We saw too many prototypes stall before production. ModusTel bridges
            that gap with clear sprints, hardening, and delivery artifacts that
            teams can own.
          </p>
        </section>

        <section className="card">
          <h2>Background</h2>
          <p>
            Experience across enterprise operations, Microsoft 365 ecosystems,
            and applied AI means we build tools that are fast to adopt and safe
            to scale.
          </p>
        </section>

        <section className="card">
          <h2>Values</h2>
          <ul>
            <li>Outcomes over novelty</li>
            <li>Security and observability by default</li>
            <li>Documentation that enables handoff</li>
          </ul>
        </section>

        <section className="card">
          <h2>How we work</h2>
          <ol>
            <li>Discover constraints, workflows, and success metrics</li>
            <li>Ship a focused prototype with weekly demos</li>
            <li>Harden with tests, logging, and runbooks</li>
          </ol>
        </section>
      </div>

      <p>
        Let’s build something durable. <a href="/contact">Send a brief</a> and
        we’ll follow up quickly.
      </p>
    </div>
  );
}
