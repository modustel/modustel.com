export function HandoffGraphic() {
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

      {/* Package box */}
      <rect
        x="70"
        y="85"
        width="60"
        height="50"
        rx="3"
        fill="white"
        stroke="#d97706"
        strokeWidth="3"
      />

      {/* Box top flaps */}
      <path d="M70 85 L100 70 L130 85" stroke="#d97706" strokeWidth="3" fill="rgba(217, 119, 6, 0.1)" />
      <line x1="100" y1="70" x2="100" y2="85" stroke="#d97706" strokeWidth="2" />

      {/* Cross tape on box */}
      <line x1="70" y1="85" x2="130" y2="135" stroke="#d97706" strokeWidth="2.5" opacity="0.6" />
      <line x1="130" y1="85" x2="70" y2="135" stroke="#d97706" strokeWidth="2.5" opacity="0.6" />

      {/* Documentation icon on box */}
      <rect x="85" y="100" width="30" height="25" rx="2" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="1.5" />
      <line x1="90" y1="107" x2="110" y2="107" stroke="#d97706" strokeWidth="1.5" />
      <line x1="90" y1="112" x2="110" y2="112" stroke="#d97706" strokeWidth="1.5" />
      <line x1="90" y1="117" x2="105" y2="117" stroke="#d97706" strokeWidth="1.5" />

      {/* Checkmark badge */}
      <circle cx="125" cy="95" r="10" fill="#10b981" className="animate-pulse" />
      <path
        d="M121 95 L124 98 L130 92"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Ribbon/bow on top */}
      <circle cx="100" cy="70" r="6" fill="#d97706" />
      <ellipse cx="88" cy="70" rx="8" ry="5" fill="#d97706" opacity="0.7" />
      <ellipse cx="112" cy="70" rx="8" ry="5" fill="#d97706" opacity="0.7" />

      {/* Support/Training icons around the box */}
      {/* Book icon - training */}
      <rect x="140" y="105" width="20" height="15" rx="1" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="1.5" />
      <line x1="150" y1="105" x2="150" y2="120" stroke="#d97706" strokeWidth="1.5" />

      {/* Life preserver - support */}
      <circle cx="50" cy="110" r="10" stroke="#d97706" strokeWidth="2.5" fill="white" />
      <circle cx="50" cy="110" r="6" stroke="#d97706" strokeWidth="1.5" fill="rgba(217, 119, 6, 0.2)" />
      <line x1="45" y1="105" x2="45" y2="115" stroke="white" strokeWidth="2" />
      <line x1="55" y1="105" x2="55" y2="115" stroke="white" strokeWidth="2" />

      {/* Arrows indicating transfer */}
      <path
        d="M100 145 L100 165 M95 160 L100 165 L105 160"
        stroke="#d97706"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse-slow"
      />

      {/* Dotted circle indicating completion */}
      <circle cx="100" cy="100" r="65" stroke="#d97706" strokeWidth="2" strokeDasharray="8,8" opacity="0.2" />
    </svg>
  );
}
