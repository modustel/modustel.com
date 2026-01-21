import type { Route } from "./+types/insights._index";
import { Page } from "../components/layout/Page";
import { PageHeader } from "../components/layout/PageHeader";
import { InsightsHeaderGraphic } from "../components/graphics/InsightsHeaderGraphic";

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

const insights = [
  {
    slug: "introducing-our-approach",
    title: "Introducing Our Approach to AI & Automation",
    description:
      "How we think about building AI solutions and automation systems that drive real business outcomes.",
    date: "January 15, 2025",
  },
  {
    slug: "designing-for-edge-cases",
    title: "Designing for Edge Cases",
    description:
      "Why the hardest 10% of cases often determine whether an automation system succeeds or fails.",
    date: "January 14, 2025",
  },
];

export default function InsightsIndex() {
  return (
    <Page>
      <PageHeader
        title="Insights"
        description="Short essays on patterns, lessons learned, and practical approaches to operational automation."
        graphic={<InsightsHeaderGraphic />}
        graphicPosition="right"
      />

      <div className="insights-grid stagger-animation">
        {insights.map((insight) => (
          <a
            key={insight.slug}
            href={`/insights/${insight.slug}`}
            className="insight-card"
          >
            <div className="insight-card-meta">{insight.date}</div>
            <h2 className="insight-card-title">
              {insight.title}
              <span className="insight-card-arrow">&rarr;</span>
            </h2>
            <p className="insight-card-description">{insight.description}</p>
          </a>
        ))}
      </div>

      <footer className="insights-footer">
        <p>
          Want more detail on a topic? <a href="/contact">Get in touch</a> and
          we'll share relevant notes.
        </p>
      </footer>
    </Page>
  );
}
