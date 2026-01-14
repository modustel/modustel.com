import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  const title = "About — ModusTel";
  const description =
    "ModusTel builds outcomes-first systems that move from prototype to production with durable automation and M365-native apps.";
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
      content: "ModusTel logo with Prototype-to-Production Systems",
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
      content: "ModusTel logo with Prototype-to-Production Systems",
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
