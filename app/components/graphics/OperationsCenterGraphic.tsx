export function OperationsCenterGraphic() {
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

      {/* Dashboard screen */}
      <rect
        x="40"
        y="60"
        width="120"
        height="80"
        rx="6"
        fill="white"
        stroke="#d97706"
        strokeWidth="2.5"
      />

      {/* Dashboard grid - 4 panels */}
      <rect x="48" y="68" width="48" height="30" rx="3" fill="rgba(217, 119, 6, 0.1)" stroke="#d97706" strokeWidth="1.5" />
      <rect x="104" y="68" width="48" height="30" rx="3" fill="rgba(217, 119, 6, 0.1)" stroke="#d97706" strokeWidth="1.5" />
      <rect x="48" y="104" width="48" height="30" rx="3" fill="rgba(217, 119, 6, 0.1)" stroke="#d97706" strokeWidth="1.5" />
      <rect x="104" y="104" width="48" height="30" rx="3" fill="rgba(217, 119, 6, 0.1)" stroke="#d97706" strokeWidth="1.5" />

      {/* Chart lines in first panel */}
      <polyline
        points="52,92 58,85 64,88 70,80 76,82 82,78 88,75"
        stroke="#d97706"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bar chart in second panel */}
      <rect x="110" y="88" width="6" height="8" fill="#d97706" opacity="0.6" />
      <rect x="118" y="82" width="6" height="14" fill="#d97706" opacity="0.8" />
      <rect x="126" y="78" width="6" height="18" fill="#d97706" />
      <rect x="134" y="85" width="6" height="11" fill="#d97706" opacity="0.7" />
      <rect x="142" y="80" width="6" height="16" fill="#d97706" opacity="0.9" />

      {/* Status indicators in third panel */}
      <circle cx="58" cy="119" r="4" fill="#10b981" className="animate-pulse" />
      <circle cx="70" cy="119" r="4" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <circle cx="82" cy="119" r="4" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: '0.4s' }} />

      {/* Gauge in fourth panel */}
      <circle cx="128" cy="119" r="12" stroke="#d97706" strokeWidth="3" fill="none" opacity="0.3" />
      <path
        d="M 128 107 A 12 12 0 0 1 140 119"
        stroke="#d97706"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Alert badge */}
      <circle cx="150" cy="70" r="10" fill="#ef4444" className="animate-pulse" />
      <text x="150" y="74" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">3</text>
    </svg>
  );
}
