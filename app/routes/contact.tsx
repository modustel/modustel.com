import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact — Modus Tel Labs" },
    {
      name: "description",
      content: "Get in touch to discuss automation, integrations, and M365-native apps.",
    },
  ];
}

export default function Contact() {
  return (
    <div className="prose">
      <h1>Contact</h1>

      <p>
        We'd love to hear about your workflow and where automation could help.
        Use the form below or email us directly.
      </p>

      <div className="card">
        <h2>Quick message</h2>
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
            Message
            <textarea name="message" placeholder="Short description" />
          </label>

          <div>
            <button type="submit" className="btn">
              Send
            </button>
          </div>
        </form>

        <p className="muted">
          For a quicker response, email us at <a href="mailto:hello@modustel.com">hello@modustel.com</a>
        </p>
      </div>

      <p>
        Or <a href="/services">learn about our services</a> and then <a href="/contact">book a discovery</a>.
      </p>
    </div>
  );
}
