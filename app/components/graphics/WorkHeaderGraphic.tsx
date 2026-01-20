export function WorkHeaderGraphic() {
  return (
    <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow */}
      <ellipse
        cx="140"
        cy="100"
        rx="110"
        ry="85"
        fill="rgba(217, 119, 6, 0.04)"
        className="animate-pulse-slow"
      />

      {/* Chart/Results visualization */}
      <g className="animate-fade-in">
        {/* Chart background */}
        <rect
          x="50"
          y="40"
          width="180"
          height="120"
          rx="12"
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="1.5"
        />

        {/* Chart grid lines */}
        <line x1="70" y1="70" x2="210" y2="70" stroke="#f3f4f6" strokeWidth="1" />
        <line x1="70" y1="95" x2="210" y2="95" stroke="#f3f4f6" strokeWidth="1" />
        <line x1="70" y1="120" x2="210" y2="120" stroke="#f3f4f6" strokeWidth="1" />

        {/* Rising bar chart */}
        <rect
          x="80"
          y="100"
          width="24"
          height="40"
          rx="4"
          fill="rgba(217, 119, 6, 0.2)"
          className="animate-grow-up"
          style={{ transformOrigin: "bottom", animationDelay: "0s" }}
        />
        <rect
          x="116"
          y="85"
          width="24"
          height="55"
          rx="4"
          fill="rgba(217, 119, 6, 0.4)"
          className="animate-grow-up"
          style={{ transformOrigin: "bottom", animationDelay: "0.15s" }}
        />
        <rect
          x="152"
          y="65"
          width="24"
          height="75"
          rx="4"
          fill="rgba(217, 119, 6, 0.6)"
          className="animate-grow-up"
          style={{ transformOrigin: "bottom", animationDelay: "0.3s" }}
        />
        <rect
          x="188"
          y="50"
          width="24"
          height="90"
          rx="4"
          fill="#d97706"
          className="animate-grow-up"
          style={{ transformOrigin: "bottom", animationDelay: "0.45s" }}
        />

        {/* Upward trend arrow */}
        <path
          d="M92 95 L128 80 L164 60 L200 45"
          stroke="#d97706"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="animate-draw"
          strokeDasharray="150"
          strokeDashoffset="150"
          style={{ animation: "draw 1.5s ease-out forwards 0.5s" }}
        />
        <circle cx="200" cy="45" r="4" fill="#d97706" className="animate-pulse" />
      </g>

      {/* Success badge */}
      <g className="animate-float" style={{ animationDelay: "0.8s" }}>
        <circle cx="220" cy="55" r="18" fill="white" stroke="#d97706" strokeWidth="2" />
        <path
          d="M212 55 L217 60 L228 49"
          stroke="#d97706"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Floating metrics */}
      <g className="animate-float" style={{ animationDelay: "0.2s" }}>
        <rect x="30" y="80" width="35" height="20" rx="4" fill="#d97706" />
        <text x="47" y="94" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          90%
        </text>
      </g>

      <g className="animate-float" style={{ animationDelay: "0.5s" }}>
        <rect x="215" y="130" width="35" height="20" rx="4" fill="rgba(217, 119, 6, 0.15)" stroke="#d97706" strokeWidth="1" />
        <text x="232" y="144" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="bold">
          3x
        </text>
      </g>

      {/* Accent dots */}
      <circle cx="45" cy="140" r="3" fill="#d97706" opacity="0.3" className="animate-pulse-slower" />
      <circle cx="250" cy="100" r="4" fill="#d97706" opacity="0.2" className="animate-pulse-slow" />
    </svg>
  );
}
