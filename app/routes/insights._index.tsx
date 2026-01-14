import type { Route } from "./+types/insights";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Insights — ModusTel" },
    {
      name: "description",
      content:
        "Notes on building prototype-to-production systems: automation, integrations, and M365-native apps.",
    },
  ];
}

export default function InsightsIndex() {
  return (
    <div className="prose">
      <h1>Insights</h1>
      <p>
        Short essays on patterns, lessons learned, and practical approaches to
        operational automation.
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
        Want more detail on a topic? <a href="/contact">Send a brief</a> and we’ll
        share relevant notes.
      </p>
    </div>
  );
}
