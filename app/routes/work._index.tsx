import type { Route } from "./+types/work._index";
import { CallToActionSection } from "../components/sections/CallToActionSection";
import { Page } from "../components/layout/Page";
import { PageHeader } from "../components/layout/PageHeader";
import { WorkHeaderGraphic } from "../components/graphics/WorkHeaderGraphic";

export function meta({}: Route.MetaArgs) {
  const title = "Work — Modus Tel Labs";
  const description =
    "Case studies and results from AI, automation, and custom software projects that transformed business operations.";
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
      content: "Modus Tel Labs — AI transformation projects",
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

const caseStudies = [
  {
    stat: "90%",
    statLabel: "Auto-generated",
    title: "Proposal Automation",
    subtitle: "Professional services firm",
    before: "3–5 day proposal cycles with manual handoffs between sales, pricing, and legal teams.",
    after: "Automated intake forms, dynamic pricing logic, branded PDF generation, and CRM sync.",
    secondaryStat: "4hrs",
    secondaryLabel: "Cycle time",
  },
  {
    stat: "45%",
    statLabel: "Faster response",
    title: "Operations Command Center",
    subtitle: "Regional logistics company",
    before: "Fragmented status updates scattered across Teams, email, and spreadsheets.",
    after: "Real-time dashboards, automated alerting, and escalation workflows with full audit trails.",
    secondaryStat: "0",
    secondaryLabel: "Missed handoffs",
  },
  {
    stat: "3×",
    statLabel: "User adoption",
    title: "M365-Native Internal Apps",
    subtitle: "Enterprise financial services",
    before: "Low adoption for tools outside the Microsoft ecosystem. Shadow IT concerns.",
    after: "Teams app, SharePoint dashboard, and Outlook add-in—all within existing security model.",
    secondaryStat: "30 days",
    secondaryLabel: "To full rollout",
  },
];

export default function WorkIndex() {
  return (
    <Page
      footer={
        <CallToActionSection
          heading="Want similar results?"
          body="Tell us about your workflow challenges and we'll show you what's possible."
          primaryCta={{ href: "/contact", label: "Start a conversation" }}
          secondaryCta={{ href: "/services", label: "View services" }}
        />
      }
    >
      <PageHeader
        title="Work"
        description="Real outcomes from real engagements. Each case study shows what we shipped and the measurable impact—without exposing client details."
        graphic={<WorkHeaderGraphic />}
        graphicPosition="left"
      />

      <div className="case-studies">
        {caseStudies.map((study, index) => (
          <article
            key={study.title}
            className="case-study animate-fade-in-stagger"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="case-study-impact">
              <div className="impact-primary">
                <span className="impact-stat">{study.stat}</span>
                <span className="impact-label">{study.statLabel}</span>
              </div>
              <div className="impact-secondary">
                <span className="impact-stat-small">{study.secondaryStat}</span>
                <span className="impact-label-small">{study.secondaryLabel}</span>
              </div>
            </div>
            <div className="case-study-content">
              <div className="case-study-header">
                <h2>{study.title}</h2>
                <span className="case-study-subtitle">{study.subtitle}</span>
              </div>
              <div className="case-study-narrative">
                <div className="narrative-block before">
                  <span className="narrative-label">Before</span>
                  <p>{study.before}</p>
                </div>
                <div className="narrative-block after">
                  <span className="narrative-label">After</span>
                  <p>{study.after}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}
