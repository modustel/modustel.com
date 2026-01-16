export function RetainerGraphic() {
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
        className="animate-pulse-slower"
      />

      {/* Two hands shaking */}
      {/* Left hand */}
      <path
        d="M60 110 L60 95 L70 90 L75 95 L75 100"
        stroke="#d97706"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(217, 119, 6, 0.2)"
      />
      <rect x="55" y="110" width="20" height="35" rx="2" fill="white" stroke="#d97706" strokeWidth="3" />

      {/* Right hand */}
      <path
        d="M140 110 L140 95 L130 90 L125 95 L125 100"
        stroke="#d97706"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(217, 119, 6, 0.2)"
      />
      <rect x="125" y="110" width="20" height="35" rx="2" fill="white" stroke="#d97706" strokeWidth="3" />

      {/* Handshake overlap */}
      <path
        d="M75 120 L90 115 L110 115 L125 120"
        stroke="#d97706"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M75 130 L90 125 L110 125 L125 130"
        stroke="#d97706"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Partnership circle around handshake */}
      <circle cx="100" cy="100" r="55" stroke="#d97706" strokeWidth="2" strokeDasharray="8,8" opacity="0.3" className="animate-pulse-slowest" />

      {/* Stars indicating ongoing relationship */}
      <path d="M100 50 L103 59 L112 59 L105 65 L108 74 L100 68 L92 74 L95 65 L88 59 L97 59 Z" fill="#d97706" className="animate-pulse" />
      <circle cx="60" cy="75" r="3" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="140" cy="75" r="3" fill="#d97706" className="animate-pulse" style={{ animationDelay: '1s' }} />
      <circle cx="70" cy="150" r="3" fill="#d97706" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      <circle cx="130" cy="150" r="3" fill="#d97706" className="animate-pulse" style={{ animationDelay: '2s' }} />
    </svg>
  );
}
