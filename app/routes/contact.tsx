import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact — ModusTel" },
    {
      name: "description",
      content:
        "Send a brief or book a discovery call to discuss automation, integrations, and M365-native apps.",
    },
  ];
}

export default function Contact() {
  return (
    <div className="prose">
      <h1>Contact</h1>

      <p>
        Tell us about the workflow, the bottlenecks, and the outcome you want. We
        reply within two business days with next steps and timing.
      </p>

      <div className="card">
        <h2>Send a brief</h2>
        <form
          action="mailto:hello@modustel.com"
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" />
          </label>

          <label>
            Company / Team
            <input name="company" type="text" placeholder="Company name" />
          </label>

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

          <label>
            Timeline
            <input name="timeline" type="text" placeholder="Ideal launch date" />
          </label>

          <label>
            Brief
            <textarea name="message" placeholder="Short description" />
          </label>

          <div>
            <button type="submit" className="btn">
              Send brief
            </button>
          </div>
        </form>

        <p className="muted">
          Prefer email? Reach us at{" "}
          <a href="mailto:hello@modustel.com">hello@modustel.com</a>.
        </p>
      </div>

      <section>
        <h2>Book a discovery call</h2>
        <p>
          If you already know what you need, email us and we’ll share a calendar
          link within one business day.
        </p>
        <p>
          <a className="btn" href="mailto:hello@modustel.com?subject=Discovery%20Call">
            Request a call
          </a>
        </p>
      </section>
    </div>
  );
}
