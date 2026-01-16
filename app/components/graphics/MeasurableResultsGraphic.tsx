export function MeasurableResultsGraphic() {
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

      {/* Chart background */}
      <rect x="50" y="60" width="100" height="80" rx="4" fill="white" stroke="#d97706" strokeWidth="2.5" />

      {/* Y-axis */}
      <line x1="60" y1="130" x2="60" y2="70" stroke="#d97706" strokeWidth="2" />
      {/* X-axis */}
      <line x1="60" y1="130" x2="140" y2="130" stroke="#d97706" strokeWidth="2" />

      {/* Grid lines */}
      <line x1="60" y1="110" x2="140" y2="110" stroke="#d97706" strokeWidth="1" opacity="0.2" strokeDasharray="2,2" />
      <line x1="60" y1="90" x2="140" y2="90" stroke="#d97706" strokeWidth="1" opacity="0.2" strokeDasharray="2,2" />

      {/* Bar chart - growth over time */}
      <rect x="70" y="115" width="12" height="15" rx="2" fill="rgba(217, 119, 6, 0.4)" stroke="#d97706" strokeWidth="1.5" />
      <rect x="87" y="105" width="12" height="25" rx="2" fill="rgba(217, 119, 6, 0.5)" stroke="#d97706" strokeWidth="1.5" />
      <rect x="104" y="90" width="12" height="40" rx="2" fill="rgba(217, 119, 6, 0.6)" stroke="#d97706" strokeWidth="1.5" />
      <rect x="121" y="75" width="12" height="55" rx="2" fill="rgba(217, 119, 6, 0.8)" stroke="#d97706" strokeWidth="1.5" className="animate-pulse-slow" />

      {/* Upward trending arrow */}
      <path
        d="M65 120 L80 110 L95 105 L110 90 L125 75"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="animate-pulse-slower"
      />

      {/* Arrow head */}
      <path
        d="M125 75 L120 80 L125 82 L130 77 Z"
        fill="#10b981"
        className="animate-pulse-slower"
      />

      {/* Data points on line */}
      <circle cx="65" cy="120" r="3" fill="#10b981" className="animate-pulse" />
      <circle cx="80" cy="110" r="3" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <circle cx="95" cy="105" r="3" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
      <circle cx="110" cy="90" r="3" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="125" cy="75" r="3" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.8s' }} />

      {/* ROI badge */}
      <circle cx="145" cy="65" r="18" fill="#10b981" className="animate-pulse-slow" />
      <text x="145" y="67" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ROI</text>
      <text x="145" y="76" textAnchor="middle" fill="white" fontSize="8">+250%</text>

      {/* Percentage increase indicator */}
      <path d="M155 95 L155 85 L165 85" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M159 89 L165 85 L161 91" fill="#10b981" />

      {/* Dashboard metrics indicators */}
      <circle cx="40" cy="80" r="6" fill="#10b981" opacity="0.8" className="animate-pulse-slower" />
      <circle cx="40" cy="100" r="6" fill="#10b981" opacity="0.8" className="animate-pulse-slower" style={{ animationDelay: '0.5s' }} />
      <circle cx="40" cy="120" r="6" fill="#10b981" opacity="0.8" className="animate-pulse-slower" style={{ animationDelay: '1s' }} />
    </svg>
  );
}
