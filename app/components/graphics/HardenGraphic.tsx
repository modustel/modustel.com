export function HardenGraphic() {
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

      {/* Shield body */}
      <path
        d="M100 50 L140 70 L140 100 Q140 130 100 150 Q60 130 60 100 L60 70 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Shield inner gradient */}
      <path
        d="M100 60 L130 75 L130 100 Q130 122 100 138 Q70 122 70 100 L70 75 Z"
        fill="rgba(217, 119, 6, 0.1)"
        stroke="none"
      />

      {/* Checkmark in shield */}
      <path
        d="M85 100 L95 110 L115 85"
        stroke="#d97706"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="animate-pulse"
      />

      {/* Lock icon overlay */}
      <rect x="92" y="95" width="16" height="20" rx="2" fill="#d97706" />
      <path
        d="M96 95 L96 90 Q96 85 100 85 Q104 85 104 90 L104 95"
        stroke="#d97706"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="100" cy="105" r="2" fill="white" />

      {/* Security scan lines */}
      <line x1="50" y1="80" x2="90" y2="80" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.4" className="animate-pulse-slower" />
      <line x1="50" y1="100" x2="85" y2="100" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.5s' }} />
      <line x1="50" y1="120" x2="90" y2="120" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '1s' }} />

      <line x1="110" y1="80" x2="150" y2="80" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.3s' }} />
      <line x1="115" y1="100" x2="150" y2="100" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.8s' }} />
      <line x1="110" y1="120" x2="150" y2="120" stroke="#d97706" strokeWidth="2" strokeDasharray="4,4" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '1.3s' }} />

      {/* Security badge indicators */}
      <circle cx="50" cy="60" r="6" fill="#10b981" className="animate-pulse" />
      <path d="M48 60 L50 62 L53 58" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <circle cx="150" cy="60" r="6" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <path d="M148 60 L150 62 L153 58" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <circle cx="50" cy="140" r="6" fill="#10b981" className="animate-pulse" style={{ animationDelay: '1s' }} />
      <path d="M48 140 L50 142 L53 138" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <circle cx="150" cy="140" r="6" fill="#10b981" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      <path d="M148 140 L150 142 L153 138" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
