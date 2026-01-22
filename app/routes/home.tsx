import type { Route } from "./+types/home";
import { Card } from "../components/ui/Card";
import { AIPoweredGraphic } from "../components/graphics/AIPoweredGraphic";
import { FastImplementationGraphic } from "../components/graphics/FastImplementationGraphic";
import { MeasurableResultsGraphic } from "../components/graphics/MeasurableResultsGraphic";
import { CustomDevelopmentGraphic } from "../components/graphics/CustomDevelopmentGraphic";
import { ScaleOptimizeGraphic } from "../components/graphics/ScaleOptimizeGraphic";
import { HeroAIGraphic } from "../components/graphics/HeroAIGraphic";
import { ValuePropositionSection } from "../components/sections/ValuePropositionSection";
import { CallToActionSection } from "../components/sections/CallToActionSection";
import { Page } from "../components/layout/Page";

export function meta({}: Route.MetaArgs) {
  const title = "Modus Tel Labs | AI & Custom Software for Business";
  const description =
    "Transform your operations with custom AI, automation, and software solutions. Modernize your business processes with intelligent technology.";
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
      content: "Modus Tel Labs — AI-powered business transformation",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];
}

export default function Home() {
  return (
    <Page
      footer={
        <CallToActionSection
          heading="Ready to transform your operations?"
          body="Let's explore how AI and custom software can drive real, measurable growth for your business."
          primaryCta={{ href: "/contact", label: "Schedule a Consultation" }}
          secondaryCta={{ href: "/about", label: "Learn About Us" }}
        />
      }
    >
      {/* Hero Section */}
      <section>
        <div className="hero animate-fade-in">
          <div className="content">
            <h1 className="hero-headline">Transform your business with AI that actually works</h1>
            <p className="hero-subtitle">
              We build custom AI solutions, intelligent automation, and software that modernize your operations. From ideation to production—we deliver results that matter.
            </p>
            <div className="cta-group">
              <a href="/services" className="btn btn-accent btn-large">
                Start Your Transformation
              </a>
              <a href="/contact" className="btn btn-secondary btn-large">
                Let's Talk
              </a>
            </div>
          </div>
          <div className="illustration animate-float">
            <HeroAIGraphic />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <ValuePropositionSection />

      {/* Features Section */}
      <section>
        <h2 className="section-title">Why Choose Modus Tel Labs</h2>
        <div className="grid stagger-animation">
          <Card
            graphic={<AIPoweredGraphic />}
            title="AI-Powered Solutions"
            description="We leverage cutting-edge AI technology to automate workflows, reduce operational costs, and unlock new opportunities for your business."
            variant="gradient"
          />
          <Card
            graphic={<FastImplementationGraphic />}
            title="Fast Implementation"
            description="From concept to production in weeks, not months. We move fast without sacrificing quality or thoroughness."
            variant="gradient"
          />
          <Card
            graphic={<MeasurableResultsGraphic />}
            title="Measurable Results"
            description="Every solution is built to deliver ROI. We track metrics that matter and optimize for your bottom line."
            variant="gradient"
          />
        </div>
      </section>

      {/* What We Do Section */}
      <section>
        <h2 className="section-title">What We Do</h2>
        <div className="grid grid-2 stagger-animation">
          <Card
            graphic={<CustomDevelopmentGraphic />}
            title="Custom Development"
            description="Bespoke AI models, intelligent automation platforms, and software built for your exact workflows. No off-the-shelf compromises."
            variant="accent"
          />
          <Card
            graphic={<ScaleOptimizeGraphic />}
            title="Scale & Optimize"
            description="We don't just build—we deploy, monitor, and continuously improve your systems for maximum impact and efficiency."
            variant="accent"
          />
        </div>
      </section>
    </Page>
  );
}
