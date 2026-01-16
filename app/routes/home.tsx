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
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
              {/* Enhanced illustration with animation */}
              <circle cx="150" cy="150" r="140" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.1" className="animate-pulse-slow" />
              <circle cx="150" cy="150" r="100" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.2" className="animate-pulse-slower" />
              <circle cx="150" cy="150" r="60" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.3" className="animate-pulse-slowest" />
              <circle cx="150" cy="150" r="30" fill="#d97706" className="animate-pulse" />
              <text x="150" y="155" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" className="select-none">AI</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container trust-section">
        <div className="trust-grid">
          <div className="trust-stat animate-fade-in-stagger" style={{animationDelay: '0.1s'}}>
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="trust-stat animate-fade-in-stagger" style={{animationDelay: '0.2s'}}>
            <div className="stat-number">$10M+</div>
            <div className="stat-label">Value Generated</div>
          </div>
          <div className="trust-stat animate-fade-in-stagger" style={{animationDelay: '0.3s'}}>
            <div className="stat-number">99%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <h2 className="section-title">Why Choose Modus Tel Labs</h2>
        <div className="grid">
          <div className="card animate-fade-in-stagger" style={{animationDelay: '0.1s'}}>
            <div className="card-icon">🤖</div>
            <h3>AI-Powered Solutions</h3>
            <p>
              We leverage cutting-edge AI technology to automate workflows, reduce operational costs, and unlock new opportunities for your business.
            </p>
          </div>
          <div className="card animate-fade-in-stagger" style={{animationDelay: '0.2s'}}>
            <div className="card-icon">⚡</div>
            <h3>Fast Implementation</h3>
            <p>
              From concept to production in weeks, not months. We move fast without sacrificing quality or thoroughness.
            </p>
          </div>
          <div className="card animate-fade-in-stagger" style={{animationDelay: '0.3s'}}>
            <div className="card-icon">📈</div>
            <h3>Measurable Results</h3>
            <p>
              Every solution is built to deliver ROI. We track metrics that matter and optimize for your bottom line.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container">
        <h2 className="section-title">What We Do</h2>
        <div className="grid grid-2">
          <div className="card animate-fade-in-stagger" style={{animationDelay: '0.1s'}}>
            <h3>🛠️ Custom Development</h3>
            <p>
              Bespoke AI models, intelligent automation platforms, and software built for your exact workflows. No off-the-shelf compromises.
            </p>
          </div>
          <div className="card animate-fade-in-stagger" style={{animationDelay: '0.2s'}}>
            <h3>🚀 Scale & Optimize</h3>
            <p>
              We don't just build—we deploy, monitor, and continuously improve your systems for maximum impact and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container">
        <div className="cta-section-epic animate-fade-in">
          <h2>Ready to transform your operations?</h2>
          <p>Let's explore how AI and custom software can drive real, measurable growth for your business.</p>
          <div className="cta-group">
            <a href="/contact" className="btn btn-accent btn-large">
              Schedule a Consultation
            </a>
            <a href="/about" className="btn btn-secondary btn-large">
              Learn About Us
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
