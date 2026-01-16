export function IntegrationLayerGraphic() {
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

      {/* Central hub */}
      <circle cx="100" cy="100" r="20" fill="white" stroke="#d97706" strokeWidth="3" />
      <circle cx="100" cy="100" r="12" fill="#d97706" className="animate-pulse" />

      {/* Connection nodes around the hub */}
      {/* Top node - CRM */}
      <circle cx="100" cy="50" r="12" fill="white" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" />
      <rect x="94" y="46" width="12" height="8" rx="1" fill="#d97706" opacity="0.6" />
      <line x1="100" y1="62" x2="100" y2="80" stroke="#d97706" strokeWidth="2.5" strokeDasharray="4,4" />

      {/* Right node - Database */}
      <circle cx="150" cy="100" r="12" fill="white" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '0.5s' }} />
      <path d="M144 96 Q150 94 156 96 Q150 94 144 96 M144 100 Q150 102 156 100 M144 104 Q150 106 156 104" stroke="#d97706" strokeWidth="1.5" fill="none" />
      <line x1="138" y1="100" x2="120" y2="100" stroke="#d97706" strokeWidth="2.5" strokeDasharray="4,4" />

      {/* Bottom node - API */}
      <circle cx="100" cy="150" r="12" fill="white" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '1s' }} />
      <path d="M94 145 L94 155 M100 145 L100 155 M106 145 L106 155 M97 148 L103 148 M97 152 L103 152" stroke="#d97706" strokeWidth="1.5" />
      <line x1="100" y1="138" x2="100" y2="120" stroke="#d97706" strokeWidth="2.5" strokeDasharray="4,4" />

      {/* Left node - Microsoft Graph */}
      <circle cx="50" cy="100" r="12" fill="white" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '1.5s' }} />
      <rect x="45" y="96" width="10" height="8" rx="1" fill="rgba(217, 119, 6, 0.3)" stroke="#d97706" strokeWidth="1" />
      <path d="M48 99 L48 101 M51 99 L51 101" stroke="#d97706" strokeWidth="1" />
      <line x1="62" y1="100" x2="80" y2="100" stroke="#d97706" strokeWidth="2.5" strokeDasharray="4,4" />

      {/* Top-right node - Accounting */}
      <circle cx="135" cy="65" r="12" fill="white" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '2s' }} />
      <text x="135" y="70" textAnchor="middle" fill="#d97706" fontSize="14" fontWeight="bold">$</text>
      <line x1="125" y1="75" x2="110" y2="90" stroke="#d97706" strokeWidth="2.5" strokeDasharray="4,4" />

      {/* Top-left node - Custom */}
      <circle cx="65" cy="65" r="12" fill="white" stroke="#d97706" strokeWidth="2" className="animate-pulse-slower" style={{ animationDelay: '2.5s' }} />
      <rect x="61" y="61" width="8" height="8" rx="1" fill="rgba(217, 119, 6, 0.4)" stroke="#d97706" strokeWidth="1" />
      <line x1="75" y1="75" x2="90" y2="90" stroke="#d97706" strokeWidth="2.5" strokeDasharray="4,4" />

      {/* Data flow particles */}
      <circle cx="100" cy="65" r="2" fill="#d97706" className="animate-pulse" />
      <circle cx="115" cy="100" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <circle cx="100" cy="125" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
    </svg>
  );
}
