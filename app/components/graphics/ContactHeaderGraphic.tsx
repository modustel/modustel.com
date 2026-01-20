export function ContactHeaderGraphic() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow */}
      <ellipse
        cx="140"
        cy="100"
        rx="110"
        ry="80"
        fill="rgba(217, 119, 6, 0.04)"
        className="animate-pulse-slow"
      />

      {/* Main envelope */}
      <g className="animate-float" style={{ animationDelay: "0s" }}>
        {/* Envelope body */}
        <rect
          x="60"
          y="60"
          width="160"
          height="100"
          rx="8"
          fill="white"
          stroke="#d97706"
          strokeWidth="2.5"
        />

        {/* Envelope flap */}
        <path
          d="M60 68 L140 115 L220 68"
          stroke="#d97706"
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Inner fold lines */}
        <path
          d="M60 160 L110 120 M220 160 L170 120"
          stroke="#d97706"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </g>

      {/* Message/letter coming out */}
      <g className="animate-float" style={{ animationDelay: "0.2s" }}>
        <rect
          x="85"
          y="35"
          width="110"
          height="70"
          rx="6"
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="1.5"
        />
        {/* Text lines on letter */}
        <rect x="100" y="48" width="50" height="4" rx="2" fill="#d97706" opacity="0.5" />
        <rect x="100" y="58" width="80" height="3" rx="1.5" fill="#e5e7eb" />
        <rect x="100" y="66" width="70" height="3" rx="1.5" fill="#e5e7eb" />
        <rect x="100" y="74" width="60" height="3" rx="1.5" fill="#e5e7eb" />
        <rect x="100" y="82" width="75" height="3" rx="1.5" fill="#e5e7eb" />
      </g>

      {/* Connection dots - representing communication */}
      <circle cx="45" cy="80" r="8" fill="rgba(217, 119, 6, 0.15)" stroke="#d97706" strokeWidth="1.5" className="animate-pulse-slower" />
      <circle cx="235" cy="80" r="8" fill="rgba(217, 119, 6, 0.15)" stroke="#d97706" strokeWidth="1.5" className="animate-pulse-slower" style={{ animationDelay: "0.5s" }} />

      {/* Connecting dashed lines */}
      <path
        d="M53 80 Q30 100 45 130"
        stroke="#d97706"
        strokeWidth="1.5"
        strokeDasharray="4,4"
        opacity="0.3"
        fill="none"
      />
      <path
        d="M227 80 Q250 100 235 130"
        stroke="#d97706"
        strokeWidth="1.5"
        strokeDasharray="4,4"
        opacity="0.3"
        fill="none"
      />

      {/* Send indicator - paper plane hint */}
      <g className="animate-float" style={{ animationDelay: "0.6s" }}>
        <path
          d="M220 30 L250 45 L235 50 L240 65 L230 55 L220 60 Z"
          fill="white"
          stroke="#d97706"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line x1="225" y1="45" x2="240" y2="50" stroke="#d97706" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Notification badge */}
      <g className="animate-pulse">
        <circle cx="205" cy="55" r="12" fill="#d97706" />
        <text x="205" y="59" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">1</text>
      </g>

      {/* Floating accent elements */}
      <circle cx="30" cy="140" r="4" fill="#d97706" opacity="0.3" className="animate-float" style={{ animationDelay: "0.8s" }} />
      <circle cx="250" cy="150" r="3" fill="#d97706" opacity="0.2" className="animate-float" style={{ animationDelay: "1s" }} />
      <circle cx="55" cy="50" r="3" fill="#d97706" opacity="0.25" className="animate-pulse-slow" />

      {/* Small sparkle indicating new message */}
      <g className="animate-pulse-slower">
        <path d="M35 110 L37 115 L42 115 L38 118 L40 123 L35 120 L30 123 L32 118 L28 115 L33 115 Z" fill="#d97706" opacity="0.4" />
      </g>
    </svg>
  );
}
