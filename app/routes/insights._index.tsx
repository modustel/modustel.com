import type { Route } from "./+types/insights";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Insights — Modus Tel Labs" },
    {
      name: "description",
      content:
        "Thoughtful writing on building resilient automation, integrations, and M365-native apps.",
    },
  ];
}

export default function InsightsIndex() {
  return (
    <div className="prose">
      <h1>Insights</h1>
      <p>
        Short essays and case notes about building internal tooling, durable
        integrations, and operational observability.
      </p>

      <ul>
        <li>
          <a href="/insights/introducing-our-approach">Introducing our approach</a>
        </li>
        <li>
          <a href="/insights/designing-for-edge-cases">Designing for edge cases</a>
        </li>
      </ul>

      <p>
        Want to talk about a post or a project? <a href="/contact">Contact us</a>.
      </p>
    </div>
  );
}
