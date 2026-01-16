export function ScaleOptimizeGraphic() {
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

      {/* Rocket ship */}
      <ellipse cx="100" cy="90" rx="20" ry="45" fill="white" stroke="#d97706" strokeWidth="3" />

      {/* Rocket nose */}
      <path d="M100 45 L80 65 L120 65 Z" fill="#d97706" stroke="#d97706" strokeWidth="2" />

      {/* Rocket window */}
      <circle cx="100" cy="75" r="10" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="2" />
      <circle cx="100" cy="75" r="6" fill="#d97706" className="animate-pulse" />

      {/* Rocket fins */}
      <path d="M80 110 L65 135 L80 125 Z" fill="white" stroke="#d97706" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M120 110 L135 135 L120 125 Z" fill="white" stroke="#d97706" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Flames */}
      <ellipse cx="100" cy="140" rx="15" ry="10" fill="rgba(239, 68, 68, 0.6)" className="animate-pulse" />
      <ellipse cx="100" cy="148" rx="12" ry="8" fill="rgba(249, 115, 22, 0.7)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <ellipse cx="100" cy="155" rx="8" ry="6" fill="rgba(217, 119, 6, 0.8)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />

      {/* Growth bars on the left */}
      <rect x="30" y="115" width="12" height="25" rx="2" fill="rgba(217, 119, 6, 0.3)" stroke="#d97706" strokeWidth="1.5" />
      <rect x="30" y="100" width="12" height="40" rx="2" fill="rgba(217, 119, 6, 0.5)" stroke="#d97706" strokeWidth="1.5" />
      <rect x="30" y="80" width="12" height="60" rx="2" fill="rgba(217, 119, 6, 0.7)" stroke="#d97706" strokeWidth="1.5" className="animate-pulse-slow" />

      {/* Upward arrow */}
      <path
        d="M36 75 L36 55 M30 61 L36 55 L42 61"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse-slower"
      />

      {/* Optimization indicators - circular progress */}
      <circle cx="160" cy="80" r="15" stroke="rgba(217, 119, 6, 0.2)" strokeWidth="3" fill="none" />
      <path
        d="M 160 65 A 15 15 0 1 1 159.99 65"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        className="animate-pulse-slow"
      />
      <text x="160" y="85" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">99%</text>

      {/* Performance metrics */}
      <circle cx="155" cy="115" r="5" fill="#10b981" className="animate-pulse" />
      <line x1="160" y1="115" x2="175" y2="115" stroke="#10b981" strokeWidth="2" />
      <text x="165" y="119" fill="#10b981" fontSize="10" fontWeight="600">Fast</text>

      <circle cx="155" cy="130" r="5" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <line x1="160" y1="130" x2="175" y2="130" stroke="#10b981" strokeWidth="2" />
      <text x="165" y="134" fill="#10b981" fontSize="10" fontWeight="600">Stable</text>

      <circle cx="155" cy="145" r="5" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      <line x1="160" y1="145" x2="175" y2="145" stroke="#10b981" strokeWidth="2" />
      <text x="165" y="149" fill="#10b981" fontSize="10" fontWeight="600">Secure</text>

      {/* Stars in the background */}
      <circle cx="60" cy="50" r="2" fill="#d97706" className="animate-pulse" opacity="0.6" />
      <circle cx="140" cy="45" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.5s' }} opacity="0.6" />
      <circle cx="50" cy="70" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '1s' }} opacity="0.6" />
      <circle cx="150" cy="65" r="2" fill="#d97706" className="animate-pulse" style={{ animationDelay: '1.5s' }} opacity="0.6" />
    </svg>
  );
}
