import type { Route } from "./+types/about";
import { AboutVisualGraphic } from "../components/graphics/AboutVisualGraphic";
import { CallToActionSection } from "../components/sections/CallToActionSection";
import { Page } from "../components/layout/Page";

export function meta({}: Route.MetaArgs) {
  const title = "About — Modus Tel Labs";
  const description =
    "Modus Tel Labs builds custom AI, automation, and software solutions to modernize business operations and drive digital transformation.";
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
      content: "Modus Tel Labs — Business transformation through AI",
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

export default function About() {
  return (
    <Page
      footer={
        <CallToActionSection
          heading="Let's Build Something Durable"
          body="If you're tired of prototypes that go nowhere and vendors who vanish after delivery, let's talk. We'll respond quickly with a clear plan."
          primaryCta={{ href: "/contact", label: "Get in Touch" }}
          secondaryCta={{ href: "/services", label: "View Services" }}
        />
      }
    >
      <div className="container">
        {/* Hero Section */}
        <div className="about-hero animate-fade-in">
          <h1>About Modus Tel Labs</h1>
          <p className="lead">
            Modus Tel Labs exists to turn operational friction into dependable systems.
            We're engineers who care about outcomes, long-lived codebases, and
            thoughtful handoff to internal teams.
          </p>
        </div>

        {/* Mission Statement - Split Section */}
        <div className="split-section animate-fade-in">
          <div className="split-section-content">
            <h2>Why Modus Tel Labs</h2>
            <p>
              We saw too many prototypes stall before production. Teams excited about
              AI and automation but stuck with proofs-of-concept that never made it
              to real users.
            </p>
            <p>
              Modus Tel Labs bridges that gap. We ship working systems in weeks, not months.
              Clear sprints, hardening for production, and delivery artifacts that
              your teams can own and maintain.
            </p>
            <p>
              No black boxes. No vendor lock-in. Just clean, documented solutions
              that solve real problems.
            </p>
          </div>
          <div className="split-section-visual">
            <AboutVisualGraphic />
          </div>
        </div>

        {/* Values Section */}
        <section>
          <h2 className="section-title animate-fade-in">Our Values</h2>
          <div className="value-grid">
            <div className="value-item animate-fade-in-stagger" style={{ animationDelay: '0.1s' }}>
              <div className="value-icon">🎯</div>
              <h3>Outcomes Over Novelty</h3>
              <p>
                We choose boring, proven technology if it solves the problem faster.
                The goal is results, not resume-driven development.
              </p>
            </div>
            <div className="value-item animate-fade-in-stagger" style={{ animationDelay: '0.2s' }}>
              <div className="value-icon">⚡</div>
              <h3>Speed With Quality</h3>
              <p>
                Fast doesn't mean sloppy. We move quickly through focused sprints
                while maintaining code quality and thorough testing.
              </p>
            </div>
            <div className="value-item animate-fade-in-stagger" style={{ animationDelay: '0.3s' }}>
              <div className="value-icon">📚</div>
              <h3>Documentation That Enables</h3>
              <p>
                Every system comes with runbooks, architecture docs, and handoff
                materials so your team can own it confidently.
              </p>
            </div>
          </div>
        </section>

        {/* How We Work - Timeline */}
        <section>
          <h2 className="section-title animate-fade-in">How We Work</h2>
          <div className="timeline">
            <div className="timeline-item animate-fade-in-stagger" style={{ animationDelay: '0.1s' }}>
              <div className="timeline-content">
                <h3>01. Discover</h3>
                <p>
                  We start by understanding your constraints, workflows, and success metrics.
                  No assumptions—just deep listening and clear questions.
                </p>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-empty"></div>
            </div>

            <div className="timeline-item animate-fade-in-stagger" style={{ animationDelay: '0.2s' }}>
              <div className="timeline-empty"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>02. Ship a Prototype</h3>
                <p>
                  Focused sprint with weekly demos. You see progress constantly and can
                  course-correct early. No big reveals after months of silence.
                </p>
              </div>
            </div>

            <div className="timeline-item animate-fade-in-stagger" style={{ animationDelay: '0.3s' }}>
              <div className="timeline-content">
                <h3>03. Harden for Production</h3>
                <p>
                  Security reviews, comprehensive testing, logging, and monitoring.
                  We don't just build—we prepare your system for real-world use.
              </p>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-empty"></div>
            </div>

            <div className="timeline-item animate-fade-in-stagger" style={{ animationDelay: '0.4s' }}>
              <div className="timeline-empty"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>04. Handoff or Operate</h3>
                <p>
                  Complete documentation, runbooks, and training for your team.
                  Or we can operate and maintain it—your choice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Background Section - Split */}
        <div className="split-section reverse animate-fade-in">
          <div className="split-section-content">
            <h2>Background & Experience</h2>
            <p>
              Our team has deep experience across enterprise operations, automation
              platforms, and applied AI in production environments.
            </p>
            <p>
              We've built systems that process millions of transactions, automated
              workflows that save hundreds of hours per week, and AI models that
              drive real business decisions.
            </p>
            <p>
              That experience means we know what breaks at scale, what matters for
              maintainability, and how to build solutions that last.
            </p>
          </div>
          <div className="split-section-visual">
            <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
              <circle cx="150" cy="150" r="100" stroke="#d97706" strokeWidth="2" opacity="0.2" className="animate-pulse-slow" />
              <circle cx="150" cy="150" r="70" stroke="#d97706" strokeWidth="2" opacity="0.3" className="animate-pulse-slower" />
              <circle cx="150" cy="150" r="40" stroke="#d97706" strokeWidth="2" opacity="0.4" className="animate-pulse-slowest" />
              <circle cx="150" cy="150" r="20" fill="#d97706" className="animate-pulse" />
              <text x="150" y="158" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">50+</text>
              <text x="150" y="190" textAnchor="middle" fill="#d97706" fontSize="14" fontWeight="600">Projects</text>
            </svg>
          </div>
        </div>
      </div>
    </Page>
  );
}
