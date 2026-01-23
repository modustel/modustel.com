import type { Route } from "./+types/privacy";
import { Page } from "../components/layout/Page";

export function meta({}: Route.MetaArgs) {
  const title = "Privacy Policy — Modus Tel Labs";
  const description =
    "Learn how Modus Tel Labs collects, uses, and protects your personal information.";
  const canonicalUrl = "https://modustel.com/privacy";
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export default function Privacy() {
  return (
    <Page>
      <div className="container">
        <div className="legal-page animate-fade-in">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: January 2026</p>

          <section className="legal-section">
            <h2>Overview</h2>
            <p>
              Modus Tel Labs ("we," "our," or "us") respects your privacy and is
              committed to protecting your personal information. This Privacy Policy
              explains how we collect, use, and safeguard information when you visit
              our website or use our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>Information We Collect</h2>
            <h3>Contact Form Submissions</h3>
            <p>When you submit our contact form, we collect:</p>
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Company name (optional)</li>
              <li>Your message</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              We use Cloudflare Turnstile for spam protection, which may collect
              limited technical data to verify you are human. This data is processed
              by Cloudflare in accordance with their privacy policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and requests</li>
              <li>Communicate with you about our services</li>
              <li>Prevent spam and fraudulent submissions</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Storage and Security</h2>
            <p>
              Contact form submissions are stored securely in a database hosted by
              Neon (PostgreSQL) with encryption at rest and in transit. Our website
              is hosted on Vercel. We implement appropriate technical and
              organizational measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="legal-section">
            <h2>Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li>
                <strong>Cloudflare Turnstile:</strong> For spam protection and bot
                detection on our contact form
              </li>
              <li>
                <strong>Vercel:</strong> For website hosting and deployment
              </li>
              <li>
                <strong>Neon:</strong> For secure database storage
              </li>
            </ul>
            <p>
              Each of these services has their own privacy policies governing their
              use of data.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Retention</h2>
            <p>
              We retain contact form submissions for as long as necessary to respond
              to your inquiry and maintain records for business purposes. You may
              request deletion of your data at any time.
            </p>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              information below.
            </p>
          </section>

          <section className="legal-section">
            <h2>Cookies</h2>
            <p>
              Our website does not use tracking cookies for analytics or advertising.
              Cloudflare Turnstile may use essential cookies to function properly.
              These are necessary for security and spam prevention.
            </p>
          </section>

          <section className="legal-section">
            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do
              not knowingly collect personal information from children.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you
              of any changes by posting the new Privacy Policy on this page and
              updating the "Last updated" date.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise
              your rights, please contact us at:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@modustel.com">contact@modustel.com</a>
            </p>
          </section>
        </div>
      </div>
    </Page>
  );
}
