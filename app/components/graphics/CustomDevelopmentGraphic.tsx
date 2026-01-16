export function CustomDevelopmentGraphic() {
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

      {/* Code editor window */}
      <rect x="40" y="50" width="120" height="100" rx="6" fill="white" stroke="#d97706" strokeWidth="3" />

      {/* Window header */}
      <rect x="40" y="50" width="120" height="18" fill="#d97706" rx="6" />
      <circle cx="50" cy="59" r="3" fill="white" />
      <circle cx="60" cy="59" r="3" fill="white" />
      <circle cx="70" cy="59" r="3" fill="white" />

      {/* Code lines with syntax highlighting effect */}
      <line x1="50" y1="80" x2="90" y2="80" stroke="#d97706" strokeWidth="2.5" opacity="0.8" />
      <line x1="95" y1="80" x2="110" y2="80" stroke="#f59e0b" strokeWidth="2.5" opacity="0.6" />

      <line x1="55" y1="92" x2="75" y2="92" stroke="#10b981" strokeWidth="2.5" opacity="0.7" />
      <line x1="80" y1="92" x2="120" y2="92" stroke="#d97706" strokeWidth="2.5" opacity="0.8" />

      <line x1="55" y1="104" x2="95" y2="104" stroke="#d97706" strokeWidth="2.5" opacity="0.8" />
      <line x1="100" y1="104" x2="130" y2="104" stroke="#3b82f6" strokeWidth="2.5" opacity="0.6" />

      <line x1="50" y1="116" x2="105" y2="116" stroke="#f59e0b" strokeWidth="2.5" opacity="0.7" />

      <line x1="55" y1="128" x2="80" y2="128" stroke="#10b981" strokeWidth="2.5" opacity="0.7" />
      <line x1="85" y1="128" x2="115" y2="128" stroke="#d97706" strokeWidth="2.5" opacity="0.8" />

      {/* Cursor blinking */}
      <rect x="120" y="126" width="3" height="6" fill="#d97706" className="animate-pulse" />

      {/* Building blocks around the code */}
      <rect x="50" y="155" width="22" height="22" rx="3" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" />
      <rect x="78" y="155" width="22" height="22" rx="3" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '0.3s' }} />
      <rect x="106" y="155" width="22" height="22" rx="3" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '0.6s' }} />
      <rect x="134" y="155" width="22" height="22" rx="3" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '0.9s' }} />

      {/* Connecting lines between blocks */}
      <line x1="72" y1="166" x2="78" y2="166" stroke="#d97706" strokeWidth="2" />
      <line x1="100" y1="166" x2="106" y2="166" stroke="#d97706" strokeWidth="2" />
      <line x1="128" y1="166" x2="134" y2="166" stroke="#d97706" strokeWidth="2" />

      {/* Wrench and gear tools */}
      <path
        d="M165 70 L165 85 M165 70 L170 75 M165 70 L160 75"
        stroke="#d97706"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      <circle cx="165" cy="90" r="5" stroke="#d97706" strokeWidth="2" fill="none" opacity="0.6" />

      {/* Small gear */}
      <circle cx="30" cy="100" r="8" stroke="#d97706" strokeWidth="2" fill="rgba(217, 119, 6, 0.1)" className="animate-pulse-slowest" />
      <circle cx="30" cy="100" r="4" fill="#d97706" opacity="0.4" />
    </svg>
  );
}
