export function InsightsHeaderGraphic() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow */}
      <ellipse
        cx="140"
        cy="100"
        rx="115"
        ry="80"
        fill="rgba(217, 119, 6, 0.04)"
        className="animate-pulse-slow"
      />

      {/* Lightbulb - main insight symbol */}
      <g className="animate-float" style={{ animationDelay: "0s" }}>
        {/* Bulb glass */}
        <path
          d="M140 35 C110 35 85 60 85 90 C85 110 100 125 110 135 L110 150 L170 150 L170 135 C180 125 195 110 195 90 C195 60 170 35 140 35"
          fill="white"
          stroke="#d97706"
          strokeWidth="2.5"
        />
        {/* Bulb base */}
        <rect x="115" y="150" width="50" height="8" rx="2" fill="#d97706" opacity="0.3" />
        <rect x="118" y="158" width="44" height="6" rx="2" fill="#d97706" opacity="0.2" />
        <rect x="122" y="164" width="36" height="5" rx="2.5" fill="#d97706" opacity="0.15" />

        {/* Filament glow */}
        <ellipse cx="140" cy="90" rx="25" ry="30" fill="rgba(217, 119, 6, 0.15)" className="animate-pulse" />
        <ellipse cx="140" cy="90" rx="15" ry="18" fill="rgba(217, 119, 6, 0.25)" className="animate-pulse-slow" />

        {/* Filament lines */}
        <path
          d="M130 75 Q125 90 130 105 M140 70 L140 110 M150 75 Q155 90 150 105"
          stroke="#d97706"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      {/* Light rays */}
      <g className="animate-pulse-slower">
        <line x1="140" y1="15" x2="140" y2="25" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="70" y1="50" x2="78" y2="56" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="210" y1="50" x2="202" y2="56" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="55" y1="90" x2="65" y2="90" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="225" y1="90" x2="215" y2="90" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* Floating idea particles */}
      <circle cx="60" cy="130" r="6" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="1" className="animate-float" style={{ animationDelay: "0.3s" }} />
      <circle cx="220" cy="140" r="5" fill="rgba(217, 119, 6, 0.15)" stroke="#d97706" strokeWidth="1" className="animate-float" style={{ animationDelay: "0.6s" }} />
      <circle cx="45" cy="70" r="4" fill="rgba(217, 119, 6, 0.2)" className="animate-float" style={{ animationDelay: "0.9s" }} />
      <circle cx="235" cy="70" r="4" fill="rgba(217, 119, 6, 0.2)" className="animate-float" style={{ animationDelay: "1.2s" }} />

      {/* Small sparkles */}
      <g className="animate-pulse">
        <path d="M80 35 L82 40 L87 40 L83 43 L85 48 L80 45 L75 48 L77 43 L73 40 L78 40 Z" fill="#d97706" opacity="0.4" />
        <path d="M200 30 L201.5 34 L205.5 34 L202.5 36.5 L204 40 L200 37.5 L196 40 L197.5 36.5 L194.5 34 L198.5 34 Z" fill="#d97706" opacity="0.3" />
      </g>

      {/* Document/article hints */}
      <g className="animate-float" style={{ animationDelay: "0.4s" }}>
        <rect x="30" y="150" width="40" height="30" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <rect x="36" y="157" width="20" height="2" rx="1" fill="#d97706" opacity="0.5" />
        <rect x="36" y="162" width="28" height="2" rx="1" fill="#e5e7eb" />
        <rect x="36" y="167" width="24" height="2" rx="1" fill="#e5e7eb" />
      </g>

      <g className="animate-float" style={{ animationDelay: "0.7s" }}>
        <rect x="210" y="155" width="40" height="30" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <rect x="216" y="162" width="18" height="2" rx="1" fill="#d97706" opacity="0.5" />
        <rect x="216" y="167" width="28" height="2" rx="1" fill="#e5e7eb" />
        <rect x="216" y="172" width="22" height="2" rx="1" fill="#e5e7eb" />
      </g>
    </svg>
  );
}
