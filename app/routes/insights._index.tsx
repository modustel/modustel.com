import type { Route } from "./+types/insights";

export function meta({}: Route.MetaArgs) {
  const title = "Insights — ModusTel";
  const description =
    "Notes on building prototype-to-production systems: automation, integrations, and M365-native apps.";
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
