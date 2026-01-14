import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Modus Tel Labs | Outcomes Studio + Invisible Hand" },
    {
      name: "description",
      content: "AI-first internal tools that quietly eliminate operational friction.",
    },
  ];
}

export default function Home() {
  return (
    <div className="prose">
      <h1>Outcomes Studio. Invisible-hand software.</h1>
      <p>
        Modus Tel Labs builds AI-first internal tools that remove friction from
        operations: workflow automation, integrations, and M365-native apps.
      </p>

      <div className="grid">
        <section className="card">
          <h2>What you get</h2>
          <ul>
            <li>Automation that survives real-world edge cases</li>
            <li>Enterprise-grade observability and handoff</li>
            <li>Systems that feel seamless, not fragile</li>
          </ul>
        </section>

        <section className="card">
          <h2>How we work</h2>
          <ol>
            <li>Discover the workflow and constraints</li>
            <li>Ship a sprint with demos</li>
            <li>Harden: tests, logging, docs</li>
            <li>Operate: runbooks and support</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
