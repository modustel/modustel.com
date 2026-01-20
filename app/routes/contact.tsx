import { Form, useActionData, useNavigation } from "react-router";
import type { Route } from "./+types/contact";
import { Page } from "../components/layout/Page";
import { PageHeader } from "../components/layout/PageHeader";
import { ContactHeaderGraphic } from "../components/graphics/ContactHeaderGraphic";
import { FormField } from "../components/forms/FormField";
import { createContact } from "../services/contact.server";
import { CONTACT_LIMITS } from "../services/contact.shared";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  return createContact({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    budget: formData.get("budget") as string,
    timeline: formData.get("timeline") as string,
    message: formData.get("message") as string,
  });
}

export function meta({}: Route.MetaArgs) {
  const title = "Contact — Modus Tel Labs";
  const description =
    "Get in touch to discuss how we can transform your business with custom AI, automation, and software solutions.";
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
      content: "Modus Tel Labs — Start your transformation",
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

export default function Contact() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Page prose>
      <PageHeader
        title="Contact"
        description="Tell us about the workflow, the bottlenecks, and the outcome you want. We reply within two business days with next steps and timing."
        graphic={<ContactHeaderGraphic />}
        graphicPosition="left"
      />

      <div className="card stagger-animation">
        <h2>Get in touch</h2>

        {actionData?.success ? (
          <p className="success-message">
            Thanks for reaching out! We'll get back to you within two business days.
          </p>
        ) : (
          <Form method="post">
            {actionData?.error && (
              <p className="error-message">{actionData.error}</p>
            )}

            <FormField
              label="Name"
              name="name"
              placeholder="Your name"
              required
              maxLength={CONTACT_LIMITS.name}
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              maxLength={CONTACT_LIMITS.email}
            />

            <FormField
              label="Company / Team"
              name="company"
              placeholder="Company name"
              maxLength={CONTACT_LIMITS.company}
            />

            <label>
              Budget range (optional)
              <select name="budget">
                <option value="">Select a range</option>
                <option value="under-25k">Under $25k</option>
                <option value="25-50k">$25k–$50k</option>
                <option value="50-100k">$50k–$100k</option>
                <option value="100k-plus">$100k+</option>
              </select>
            </label>

            <FormField
              label="Timeline"
              name="timeline"
              placeholder="Ideal launch date"
              maxLength={CONTACT_LIMITS.timeline}
            />

            <FormField
              label="Project details"
              name="message"
              type="textarea"
              placeholder="What are you looking to build or improve?"
              required
              maxLength={CONTACT_LIMITS.message}
              showCounter
            />

            <button type="submit" className="btn btn-accent" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Get in touch"}
            </button>
          </Form>
        )}

        <p className="muted">
          Prefer email? Reach us at{" "}
          <a href="mailto:contact@modustel.com">contact@modustel.com</a>.
        </p>
      </div>
    </Page>
  );
}
