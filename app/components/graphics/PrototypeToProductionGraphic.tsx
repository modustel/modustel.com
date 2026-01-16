export function PrototypeToProductionGraphic() {
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

      {/* Rocket body */}
      <ellipse cx="100" cy="110" rx="18" ry="40" fill="white" stroke="#d97706" strokeWidth="3" />

      {/* Rocket nose cone */}
      <path d="M100 70 L82 90 L118 90 Z" fill="#d97706" stroke="#d97706" strokeWidth="2" />

      {/* Rocket window */}
      <circle cx="100" cy="100" r="8" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="2" />
      <circle cx="100" cy="100" r="5" fill="#d97706" className="animate-pulse" />

      {/* Rocket fins */}
      <path d="M82 130 L70 150 L82 145 Z" fill="white" stroke="#d97706" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M118 130 L130 150 L118 145 Z" fill="white" stroke="#d97706" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Rocket flames */}
      <ellipse cx="100" cy="155" rx="12" ry="8" fill="rgba(239, 68, 68, 0.6)" className="animate-pulse" />
      <ellipse cx="100" cy="160" rx="8" ry="6" fill="rgba(249, 115, 22, 0.7)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <ellipse cx="100" cy="165" rx="5" ry="4" fill="rgba(217, 119, 6, 0.8)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />

      {/* Launch path - curved trajectory */}
      <path
        d="M100 155 Q85 130 80 100 Q75 70 70 50"
        stroke="#d97706"
        strokeWidth="2"
        strokeDasharray="6,6"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* Stars */}
      <circle cx="140" cy="60" r="2" fill="#d97706" className="animate-pulse" />
      <circle cx="155" cy="80" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="145" cy="100" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '1s' }} />
      <circle cx="60" cy="70" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      <circle cx="50" cy="90" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Launch stages indicator at bottom */}
      <text x="100" y="180" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="600" opacity="0.6">POC → PILOT → PROD</text>
    </svg>
  );
}
