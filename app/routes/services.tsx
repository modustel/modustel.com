import type { Route } from "./+types/services";
import { Card } from "../components/ui/Card";
import { ProposalAutomationGraphic } from "../components/graphics/ProposalAutomationGraphic";
import { OperationsCenterGraphic } from "../components/graphics/OperationsCenterGraphic";
import { M365AppsGraphic } from "../components/graphics/M365AppsGraphic";
import { IntegrationLayerGraphic } from "../components/graphics/IntegrationLayerGraphic";
import { FixedSprintGraphic } from "../components/graphics/FixedSprintGraphic";
import { RetainerGraphic } from "../components/graphics/RetainerGraphic";
import { PrototypeToProductionGraphic } from "../components/graphics/PrototypeToProductionGraphic";
import { DiscoverGraphic } from "../components/graphics/DiscoverGraphic";
import { SprintBuildGraphic } from "../components/graphics/SprintBuildGraphic";
import { HardenGraphic } from "../components/graphics/HardenGraphic";
import { HandoffGraphic } from "../components/graphics/HandoffGraphic";
import { CallToActionSection } from "../components/sections/CallToActionSection";
import { Page } from "../components/layout/Page";
import { PageHeader } from "../components/layout/PageHeader";
import { ServicesHeaderGraphic } from "../components/graphics/ServicesHeaderGraphic";

export function meta({}: Route.MetaArgs) {
  const title = "Services — Modus Tel Labs";
  const description =
    "Custom AI development, automation, and software solutions to modernize your business operations and drive results.";
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
      content: "Modus Tel Labs — AI-powered transformation services",
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

export default function Services() {
  return (
    <Page
      prose
      footer={
        <CallToActionSection
          heading="Ready to start?"
          body="Get in touch and we'll respond with a proposed plan tailored to your needs."
          primaryCta={{ href: "/contact", label: "Get in touch" }}
        />
      }
    >
      <PageHeader
        title="Services"
        description="We package outcomes, not hours. Each engagement is designed to ship a usable system quickly and then harden it for long-term use."
        graphic={<ServicesHeaderGraphic />}
        graphicPosition="right"
      />

      <section>
        <h2 className="section-title animate-fade-in">Service packages</h2>
        <div className="grid stagger-animation">
          <Card
            graphic={<ProposalAutomationGraphic />}
            title="Proposal Automation System"
            description="A full pipeline from intake to pricing to PDF delivery with CRM sync."
            variant="gradient"
          >
            <ul>
              <li>Typical timeline: 4–6 weeks</li>
              <li>Deliverables: workflow map, automation, PDF templates</li>
            </ul>
          </Card>

          <Card
            graphic={<OperationsCenterGraphic />}
            title="Operations Command Center"
            description="A single pane of glass for dashboards, alerts, and escalation workflows."
            variant="gradient"
          >
            <ul>
              <li>Typical timeline: 6–8 weeks</li>
              <li>Deliverables: dashboards, alerts, SOP playbooks</li>
            </ul>
          </Card>

          <Card
            graphic={<M365AppsGraphic />}
            title="M365-native Internal Apps"
            description="Teams, SharePoint, and Outlook extensions that fit existing security and identity models."
            variant="gradient"
          >
            <ul>
              <li>Typical timeline: 3–6 weeks</li>
              <li>Deliverables: app build, deployment plan, adoption guide</li>
            </ul>
          </Card>

          <Card
            graphic={<IntegrationLayerGraphic />}
            title="Integration Layer"
            description="Microsoft Graph, CRMs, accounting, and custom data sources aligned with your architecture."
            variant="gradient"
          >
            <ul>
              <li>Typical timeline: 4–8 weeks</li>
              <li>Deliverables: APIs, data contracts, observability</li>
            </ul>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="section-title animate-fade-in">Engagement models</h2>
        <div className="grid stagger-animation">
          <Card
            graphic={<FixedSprintGraphic />}
            title="Fixed-scope sprint"
            description="Best for a defined prototype or workflow. We scope tightly, ship fast, and deliver a handoff-ready codebase."
            variant="accent"
          />
          <Card
            graphic={<RetainerGraphic />}
            title="Retainer partnership"
            description="Ongoing support for incremental automation, maintenance, and continuous improvements."
            variant="accent"
          />
          <Card
            graphic={<PrototypeToProductionGraphic />}
            title="Prototype to production track"
            description="A phased engagement that starts with a POC and graduates into enterprise-grade delivery."
            variant="accent"
          />
        </div>
      </section>

      <section>
        <h2 className="section-title animate-fade-in">How we deliver</h2>
        <div className="grid stagger-animation">
          <Card
            graphic={<DiscoverGraphic />}
            title="Discover"
            description="Workflows, constraints, and success metrics."
            variant="default"
          />
          <Card
            graphic={<SprintBuildGraphic />}
            title="Sprint build"
            description="Weekly demos and feedback loops."
            variant="default"
          />
          <Card
            graphic={<HardenGraphic />}
            title="Harden"
            description="Security reviews, tests, and logging."
            variant="default"
          />
          <Card
            graphic={<HandoffGraphic />}
            title="Handoff"
            description="Training, runbooks, and support."
            variant="default"
          />
        </div>
      </section>
    </Page>
  );
}
