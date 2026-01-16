export function AboutVisualGraphic() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background circles */}
      <circle
        cx="150"
        cy="150"
        r="120"
        fill="rgba(217, 119, 6, 0.05)"
        className="animate-pulse-slow"
      />
      <circle
        cx="150"
        cy="150"
        r="90"
        fill="rgba(217, 119, 6, 0.08)"
        className="animate-pulse-slower"
      />

      {/* Central hexagon representing the company */}
      <path
        d="M150 80 L190 110 L190 170 L150 200 L110 170 L110 110 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Inner hexagon detail */}
      <path
        d="M150 100 L175 120 L175 160 L150 180 L125 160 L125 120 Z"
        fill="rgba(217, 119, 6, 0.1)"
        stroke="#d97706"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Center core */}
      <circle cx="150" cy="140" r="20" fill="#d97706" className="animate-pulse" />
      <circle cx="150" cy="140" r="12" fill="white" opacity="0.8" />

      {/* Connection nodes at each hexagon corner */}
      <circle cx="150" cy="80" r="8" fill="white" stroke="#d97706" strokeWidth="2.5" className="animate-pulse-slower" />
      <circle cx="190" cy="110" r="8" fill="white" stroke="#d97706" strokeWidth="2.5" className="animate-pulse-slower" style={{ animationDelay: '0.5s' }} />
      <circle cx="190" cy="170" r="8" fill="white" stroke="#d97706" strokeWidth="2.5" className="animate-pulse-slower" style={{ animationDelay: '1s' }} />
      <circle cx="150" cy="200" r="8" fill="white" stroke="#d97706" strokeWidth="2.5" className="animate-pulse-slower" style={{ animationDelay: '1.5s' }} />
      <circle cx="110" cy="170" r="8" fill="white" stroke="#d97706" strokeWidth="2.5" className="animate-pulse-slower" style={{ animationDelay: '2s' }} />
      <circle cx="110" cy="110" r="8" fill="white" stroke="#d97706" strokeWidth="2.5" className="animate-pulse-slower" style={{ animationDelay: '2.5s' }} />

      {/* Inner core dots */}
      <circle cx="150" cy="80" r="4" fill="#d97706" />
      <circle cx="190" cy="110" r="4" fill="#d97706" />
      <circle cx="190" cy="170" r="4" fill="#d97706" />
      <circle cx="150" cy="200" r="4" fill="#d97706" />
      <circle cx="110" cy="170" r="4" fill="#d97706" />
      <circle cx="110" cy="110" r="4" fill="#d97706" />

      {/* Orbiting elements representing values */}
      <circle cx="220" cy="140" r="12" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="2" className="animate-float" />
      <circle cx="80" cy="140" r="12" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="2" className="animate-float" style={{ animationDelay: '1s' }} />
      <circle cx="150" cy="50" r="12" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="2" className="animate-float" style={{ animationDelay: '2s' }} />

      {/* Connecting dashed lines to orbiting elements */}
      <line x1="195" y1="140" x2="208" y2="140" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" />
      <line x1="105" y1="140" x2="92" y2="140" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" />
      <line x1="150" y1="85" x2="150" y2="62" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" />
    </svg>
  );
}
