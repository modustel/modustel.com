import type { Route } from "./+types/terms";
import { Page } from "../components/layout/Page";

export function meta({}: Route.MetaArgs) {
  const title = "Terms of Service — Modus Tel Labs";
  const description =
    "Terms and conditions for using Modus Tel Labs website and services.";
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export default function Terms() {
  return (
    <Page>
      <div className="container">
        <div className="legal-page animate-fade-in">
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: January 2026</p>

          <section className="legal-section">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Modus Tel Labs website and services, you
              agree to be bound by these Terms of Service ("Terms"). If you do
              not agree to these Terms, please do not use our website or
              services.
            </p>
            <p>
              These Terms apply solely to your use of the Modus Tel Labs
              website. Any professional services provided by Modus Tel Labs are
              governed exclusively by a separate written agreement.
            </p>
          </section>

          <section className="legal-section">
            <h2>Description of Services</h2>
            <p>
              Modus Tel Labs provides software development, consulting, and
              related technology services. Our website provides information
              about our services and allows you to contact us for inquiries.
            </p>
            <p>
              All information provided on this website is for general
              informational purposes only and does not constitute professional
              advice, consulting services, or a binding offer. No client,
              advisory, or professional relationship is formed by your use of
              this website or by submitting an inquiry unless and until a
              separate written agreement is executed.
            </p>
          </section>

          <section className="legal-section">
            <h2>Use of Website</h2>
            <p>
              You agree to use our website only for lawful purposes and in a way
              that does not:
            </p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Transmit malicious code, spam, or harmful content</li>
              <li>
                Use automated tools to scrape, harvest, or collect data from the
                website
              </li>
              <li>
                Use the website for competitive analysis or benchmarking without
                our prior written consent
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of Modus Tel Labs or its
              content suppliers and is protected by intellectual property laws.
              You may not reproduce, distribute, modify, or create derivative
              works without our prior written consent.
            </p>
            <p>
              Nothing in these Terms transfers any intellectual property rights
              to you. Ownership and licensing of any deliverables, software, or
              work product created by Modus Tel Labs are governed exclusively by
              a separate written agreement, if applicable.
            </p>
          </section>

          <section className="legal-section">
            <h2>User Submissions</h2>
            <p>
              When you submit information through our contact form or other
              means, you grant us the right to use that information to respond
              to your inquiry and provide our services. We handle your personal
              information in accordance with our{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
            <p>
              You represent and warrant that you have the right to submit such
              information and that your submission does not violate any
              third-party rights.
            </p>
            <p>
              Any information submitted is provided on a non-confidential basis
              unless otherwise agreed in writing, and submission of information
              does not create any obligation on the part of Modus Tel Labs to
              provide services or compensation.
            </p>
          </section>

          <section className="legal-section">
            <h2>Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided "as is" without warranties
              of any kind, either express or implied. We do not warrant that the
              website will be uninterrupted, error-free, or free of viruses or
              other harmful components.
            </p>
            <p>
              To the fullest extent permitted by law, Modus Tel Labs disclaims
              all warranties, including implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement. Modus Tel
              Labs does not guarantee any specific results from the use of its
              website or any information provided therein.
            </p>
          </section>

          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Modus Tel Labs shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of our website or services.
              Our total liability for any claim shall not exceed the amount you
              paid us, if any, for the services giving rise to the claim.
            </p>
            <p>
              In jurisdictions that do not allow the exclusion or limitation of
              certain damages, liability shall be limited to the maximum extent
              permitted by law.
            </p>
          </section>

          <section className="legal-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Modus Tel Labs and its
              officers, directors, employees, and agents from any claims,
              damages, losses, or expenses arising from your use of our website
              or violation of these Terms.
            </p>
            <p>
              This includes, without limitation, claims arising from information
              or materials you submit through the website.
            </p>
          </section>

          <section className="legal-section">
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content or practices of these external sites
              and encourage you to review their terms and privacy policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to this page.
              Your continued use of our website after changes constitutes
              acceptance of the modified Terms.
            </p>
            <p>
              Changes to these Terms will not apply retroactively to services
              governed by a separate written agreement.
            </p>
          </section>

          <section className="legal-section">
            <h2>Governing Law and Venue</h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the Commonwealth of Pennsylvania,
              without regard to its conflict of law principles. Any legal action
              or proceeding arising under these Terms shall be brought
              exclusively in the state or federal courts located within
              Pennsylvania, and you consent to the personal jurisdiction and
              venue of such courts.
            </p>
          </section>

          <section className="legal-section">
            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the
              remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="legal-section">
            <h2>Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and Modus
              Tel Labs regarding your use of the website and supersede all prior
              or contemporaneous understandings related to such use.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
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
