export function FixedSprintGraphic() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background circles */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="rgba(217, 119, 6, 0.05)"
        className="animate-pulse-slow"
      />

      {/* Lightning bolt */}
      <path
        d="M100 40 L75 95 L95 95 L85 140 L120 85 L100 85 L115 60 Z"
        fill="#d97706"
        stroke="#d97706"
        strokeWidth="2"
        strokeLinejoin="round"
        className="animate-pulse"
      />

      {/* Speed lines */}
      <line x1="50" y1="70" x2="65" y2="70" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" />
      <line x1="45" y1="85" x2="65" y2="85" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.3s' }} />
      <line x1="50" y1="100" x2="70" y2="100" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.6s' }} />

      <line x1="135" y1="80" x2="150" y2="80" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.2s' }} />
      <line x1="130" y1="95" x2="155" y2="95" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.5s' }} />
      <line x1="135" y1="110" x2="150" y2="110" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.8s' }} />

      {/* Timeline dots at bottom */}
      <circle cx="70" cy="160" r="5" fill="#d97706" />
      <circle cx="100" cy="160" r="5" fill="#d97706" opacity="0.6" />
      <circle cx="130" cy="160" r="5" fill="#d97706" opacity="0.3" />
      <line x1="75" y1="160" x2="95" y2="160" stroke="#d97706" strokeWidth="2" />
      <line x1="105" y1="160" x2="125" y2="160" stroke="#d97706" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}
