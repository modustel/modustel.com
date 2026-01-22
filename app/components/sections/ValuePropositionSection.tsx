export function ValuePropositionSection() {
  return (
    <section className="trust-section">
      <div className="value-proposition-grid">
        <div
          className="value-proposition-item animate-fade-in-stagger"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="value-proposition-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="value-proposition-content">
            <div className="value-proposition-title">Outcomes, Not Hours</div>
            <div className="value-proposition-description">
              Fixed-scope sprints with clear deliverables
            </div>
          </div>
        </div>
        <div
          className="value-proposition-item animate-fade-in-stagger"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="value-proposition-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="value-proposition-content">
            <div className="value-proposition-title">Weeks, Not Months</div>
            <div className="value-proposition-description">
              From kickoff to production quickly
            </div>
          </div>
        </div>
        <div
          className="value-proposition-item animate-fade-in-stagger"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="value-proposition-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div className="value-proposition-content">
            <div className="value-proposition-title">Your Code, Your Control</div>
            <div className="value-proposition-description">
              Full documentation and handoff included
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
