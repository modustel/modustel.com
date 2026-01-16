import { Fragment } from "react";
import type { Route } from "./+types/home";

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
    <Fragment>
      {/* Hero Section */}
      <section className="container">
        <div className="hero">
          <div className="content">
            <h1>Transform your operations with AI-powered solutions</h1>
            <p>
              Custom AI, automation, and software to modernize your business. We help companies streamline workflows, reduce costs, and stay competitive with intelligent technology.
            </p>
            <div className="cta-group">
              <a href="/services" className="btn btn-accent">
                Explore Our Work
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="illustration">
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
              {/* Placeholder illustration - replace with actual SVG */}
              <circle cx="150" cy="150" r="140" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.1" />
              <circle cx="150" cy="150" r="100" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.2" />
              <circle cx="150" cy="150" r="60" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.3" />
              <circle cx="150" cy="150" r="30" fill="#d97706" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <div className="grid">
          <div className="card">
            <h3>AI-Powered Solutions</h3>
            <p>
              We leverage cutting-edge AI technology to automate workflows, reduce operational costs, and unlock new opportunities for your business.
            </p>
          </div>
          <div className="card">
            <h3>Advanced Research</h3>
            <p>
              Our team conducts cutting-edge research to advance the field while maintaining the highest ethical standards.
            </p>
          </div>
          <div className="card">
            <h3>Real Impact</h3>
            <p>
              We build products and solutions that create meaningful, measurable change in critical systems and operations.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container">
        <h2 className="prose">What We Do</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Custom Development</h3>
            <p>
              Building tailored software solutions and automation systems designed specifically for your business needs and workflows.
            </p>
          </div>
          <div className="card">
            <h3>Product Innovation</h3>
            <p>
              Building practical solutions that bring research insights into production systems.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container">
        <div className="cta-section">
          <h2>Ready to modernize your operations?</h2>
          <p>Discover how AI and custom software can transform your business and drive measurable results.</p>
          <div className="cta-group">
            <a href="/services" className="btn btn-accent">
              View Our Services
            </a>
            <a href="/about" className="btn btn-secondary">
              About Our Team
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
