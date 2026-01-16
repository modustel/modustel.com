export function ProposalAutomationGraphic() {
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
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="rgba(217, 119, 6, 0.08)"
        className="animate-pulse-slower"
      />

      {/* Document stack */}
      <rect
        x="50"
        y="70"
        width="80"
        height="100"
        rx="4"
        fill="white"
        stroke="#d97706"
        strokeWidth="2"
      />
      <rect
        x="55"
        y="65"
        width="80"
        height="100"
        rx="4"
        fill="white"
        stroke="#d97706"
        strokeWidth="2"
        opacity="0.6"
      />
      <rect
        x="60"
        y="60"
        width="80"
        height="100"
        rx="4"
        fill="white"
        stroke="#d97706"
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Main document content lines */}
      <line x1="70" y1="85" x2="120" y2="85" stroke="#d97706" strokeWidth="2" />
      <line x1="70" y1="95" x2="130" y2="95" stroke="#d97706" strokeWidth="2" opacity="0.6" />
      <line x1="70" y1="105" x2="115" y2="105" stroke="#d97706" strokeWidth="2" opacity="0.6" />

      {/* Checkmark */}
      <circle cx="95" cy="130" r="15" fill="#d97706" className="animate-pulse" />
      <path
        d="M88 130 L93 135 L102 125"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Arrow pointing right */}
      <path
        d="M140 100 L165 100 M155 90 L165 100 L155 110"
        stroke="#d97706"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse-slow"
      />
    </svg>
  );
}
