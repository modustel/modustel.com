export function SprintBuildGraphic() {
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

      {/* Wrench */}
      <rect
        x="90"
        y="70"
        width="8"
        height="60"
        rx="2"
        fill="#d97706"
        transform="rotate(-30 94 100)"
      />
      <path
        d="M85 65 L85 55 C85 52 88 50 91 50 L94 50 C97 50 100 52 100 55 L100 65 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="3"
        transform="rotate(-30 92.5 57.5)"
      />

      {/* Hammer */}
      <rect
        x="102"
        y="70"
        width="8"
        height="55"
        rx="2"
        fill="#d97706"
        transform="rotate(25 106 97.5)"
      />
      <rect
        x="90"
        y="60"
        width="30"
        height="12"
        rx="2"
        fill="white"
        stroke="#d97706"
        strokeWidth="3"
        transform="rotate(25 105 66)"
      />

      {/* Gears in background */}
      <circle cx="70" cy="110" r="15" stroke="#d97706" strokeWidth="2" opacity="0.3" className="animate-pulse-slow" />
      <circle cx="70" cy="110" r="8" fill="rgba(217, 119, 6, 0.2)" />
      <line x1="70" y1="95" x2="70" y2="102" stroke="#d97706" strokeWidth="2" opacity="0.3" />
      <line x1="70" y1="118" x2="70" y2="125" stroke="#d97706" strokeWidth="2" opacity="0.3" />
      <line x1="55" y1="110" x2="62" y2="110" stroke="#d97706" strokeWidth="2" opacity="0.3" />
      <line x1="78" y1="110" x2="85" y2="110" stroke="#d97706" strokeWidth="2" opacity="0.3" />

      <circle cx="130" cy="120" r="12" stroke="#d97706" strokeWidth="2" opacity="0.3" className="animate-pulse-slower" />
      <circle cx="130" cy="120" r="6" fill="rgba(217, 119, 6, 0.2)" />
      <line x1="130" y1="108" x2="130" y2="114" stroke="#d97706" strokeWidth="2" opacity="0.3" />
      <line x1="130" y1="126" x2="130" y2="132" stroke="#d97706" strokeWidth="2" opacity="0.3" />
      <line x1="118" y1="120" x2="124" y2="120" stroke="#d97706" strokeWidth="2" opacity="0.3" />
      <line x1="136" y1="120" x2="142" y2="120" stroke="#d97706" strokeWidth="2" opacity="0.3" />

      {/* Sparks */}
      <circle cx="110" cy="80" r="3" fill="#f59e0b" className="animate-pulse" />
      <circle cx="120" cy="75" r="2" fill="#fbbf24" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <circle cx="115" cy="85" r="2" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
      <line x1="112" y1="78" x2="108" y2="74" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
      <line x1="118" y1="77" x2="122" y2="72" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.3s' }} />

      {/* Progress bar at bottom */}
      <rect x="60" y="155" width="80" height="8" rx="4" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="1" />
      <rect x="60" y="155" width="50" height="8" rx="4" fill="#d97706" />
    </svg>
  );
}
