export function ServicesHeaderGraphic() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow */}
      <ellipse
        cx="140"
        cy="100"
        rx="120"
        ry="80"
        fill="rgba(217, 119, 6, 0.04)"
        className="animate-pulse-slow"
      />

      {/* Stacked service blocks */}
      <g className="animate-float" style={{ animationDelay: "0s" }}>
        <rect
          x="40"
          y="30"
          width="80"
          height="50"
          rx="8"
          fill="white"
          stroke="#d97706"
          strokeWidth="2"
        />
        <rect x="50" y="42" width="40" height="4" rx="2" fill="#d97706" opacity="0.6" />
        <rect x="50" y="52" width="60" height="3" rx="1.5" fill="#e5e7eb" />
        <rect x="50" y="60" width="50" height="3" rx="1.5" fill="#e5e7eb" />
        <circle cx="105" cy="50" r="8" fill="rgba(217, 119, 6, 0.15)" />
        <path d="M102 50 L104 52 L108 48" stroke="#d97706" strokeWidth="1.5" fill="none" />
      </g>

      <g className="animate-float" style={{ animationDelay: "0.3s" }}>
        <rect
          x="100"
          y="70"
          width="80"
          height="50"
          rx="8"
          fill="white"
          stroke="#d97706"
          strokeWidth="2"
        />
        <rect x="110" y="82" width="45" height="4" rx="2" fill="#d97706" opacity="0.6" />
        <rect x="110" y="92" width="60" height="3" rx="1.5" fill="#e5e7eb" />
        <rect x="110" y="100" width="40" height="3" rx="1.5" fill="#e5e7eb" />
        <circle cx="165" cy="90" r="8" fill="rgba(217, 119, 6, 0.15)" />
        <path d="M162 90 L164 92 L168 88" stroke="#d97706" strokeWidth="1.5" fill="none" />
      </g>

      <g className="animate-float" style={{ animationDelay: "0.6s" }}>
        <rect
          x="160"
          y="110"
          width="80"
          height="50"
          rx="8"
          fill="white"
          stroke="#d97706"
          strokeWidth="2"
        />
        <rect x="170" y="122" width="35" height="4" rx="2" fill="#d97706" opacity="0.6" />
        <rect x="170" y="132" width="55" height="3" rx="1.5" fill="#e5e7eb" />
        <rect x="170" y="140" width="45" height="3" rx="1.5" fill="#e5e7eb" />
        <circle cx="225" cy="130" r="8" fill="rgba(217, 119, 6, 0.15)" />
        <path d="M222 130 L224 132 L228 128" stroke="#d97706" strokeWidth="1.5" fill="none" />
      </g>

      {/* Connecting flow lines */}
      <path
        d="M120 80 Q130 85 140 85"
        stroke="#d97706"
        strokeWidth="1.5"
        strokeDasharray="4,4"
        opacity="0.4"
        className="animate-dash"
      />
      <path
        d="M180 120 Q190 125 200 125"
        stroke="#d97706"
        strokeWidth="1.5"
        strokeDasharray="4,4"
        opacity="0.4"
        className="animate-dash"
      />

      {/* Floating accent dots */}
      <circle cx="30" cy="100" r="4" fill="#d97706" opacity="0.3" className="animate-pulse-slower" />
      <circle cx="250" cy="60" r="3" fill="#d97706" opacity="0.3" className="animate-pulse-slow" />
      <circle cx="70" cy="160" r="3" fill="#d97706" opacity="0.2" className="animate-pulse" />
    </svg>
  );
}
