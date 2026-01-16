import type { Route } from "./+types/insights";

export function meta({}: Route.MetaArgs) {
  const title = "Insights — Modus Tel Labs";
  const description =
    "Articles and insights on AI implementation, business automation, and digital transformation for modern companies.";
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
      content: "Modus Tel Labs — Business transformation insights",
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
        Want more detail on a topic? <a href="/contact">Get in touch</a> and we'll
        share relevant notes.
      </p>
    </div>
  );
}
