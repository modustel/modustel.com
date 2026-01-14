import type { Route } from "./+types/work";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Work — Modus Tel Labs" },
    {
      name: "description",
      content:
        "Case studies: practical automation, integrations, and M365-native apps that delivered measurable results.",
    },
  ];
}

export default function WorkIndex() {
  return (
    <div className="prose">
      <h1>Work</h1>
      <p>
        Select case studies that show how we remove operational friction through
        pragmatic automation and tight integrations.
      </p>

      <ul>
        <li>
          <a href="/work/enterprise-automation">Enterprise automation case study</a>
        </li>
        <li>
          <a href="/work/m365-adoption">M365 adoption & internal apps</a>
        </li>
      </ul>

      <p>
        Interested in a similar outcome? <a href="/contact">Get in touch</a>.
      </p>
    </div>
  );
}
