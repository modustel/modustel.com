export function AIPoweredGraphic() {
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

      {/* Central brain/AI node */}
      <circle cx="100" cy="100" r="30" fill="white" stroke="#d97706" strokeWidth="3" />
      <circle cx="100" cy="100" r="20" fill="rgba(217, 119, 6, 0.2)" className="animate-pulse" />

      {/* AI chip pattern inside */}
      <rect x="92" y="92" width="16" height="16" fill="none" stroke="#d97706" strokeWidth="2" rx="2" />
      <line x1="96" y1="100" x2="104" y2="100" stroke="#d97706" strokeWidth="2" />
      <line x1="100" y1="96" x2="100" y2="104" stroke="#d97706" strokeWidth="2" />

      {/* Neural network nodes around center */}
      <circle cx="60" cy="70" r="8" fill="white" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" />
      <circle cx="60" cy="70" r="4" fill="#d97706" />

      <circle cx="140" cy="70" r="8" fill="white" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '0.5s' }} />
      <circle cx="140" cy="70" r="4" fill="#d97706" />

      <circle cx="60" cy="130" r="8" fill="white" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '1s' }} />
      <circle cx="60" cy="130" r="4" fill="#d97706" />

      <circle cx="140" cy="130" r="8" fill="white" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '1.5s' }} />
      <circle cx="140" cy="130" r="4" fill="#d97706" />

      {/* Connection lines */}
      <line x1="68" y1="74" x2="78" y2="88" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
      <line x1="132" y1="74" x2="122" y2="88" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
      <line x1="68" y1="126" x2="78" y2="112" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
      <line x1="132" y1="126" x2="122" y2="112" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />

      {/* Data particles flowing */}
      <circle cx="74" cy="81" r="2" fill="#d97706" className="animate-pulse" />
      <circle cx="126" cy="81" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="74" cy="119" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="126" cy="119" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.9s' }} />

      {/* Outer orbital ring */}
      <circle cx="100" cy="100" r="55" stroke="#d97706" strokeWidth="2" strokeDasharray="8,8" opacity="0.2" className="animate-pulse-slowest" />
    </svg>
  );
}
