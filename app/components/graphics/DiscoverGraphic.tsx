export function DiscoverGraphic() {
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

      {/* Magnifying glass handle */}
      <line
        x1="130"
        y1="130"
        x2="155"
        y2="155"
        stroke="#d97706"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Magnifying glass circle */}
      <circle
        cx="100"
        cy="100"
        r="40"
        stroke="#d97706"
        strokeWidth="6"
        fill="white"
      />

      {/* Content inside magnifying glass - workflow diagram */}
      <circle cx="85" cy="90" r="6" fill="#d97706" className="animate-pulse" />
      <circle cx="115" cy="90" r="6" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="100" cy="110" r="6" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.6s' }} />

      {/* Connecting lines */}
      <line x1="88" y1="93" x2="97" y2="107" stroke="#d97706" strokeWidth="2" />
      <line x1="112" y1="93" x2="103" y2="107" stroke="#d97706" strokeWidth="2" />

      {/* Question marks floating around */}
      <text x="55" y="75" fill="#d97706" fontSize="20" fontWeight="bold" opacity="0.4" className="animate-pulse-slower">?</text>
      <text x="140" y="70" fill="#d97706" fontSize="20" fontWeight="bold" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.5s' }}>?</text>
      <text x="50" y="130" fill="#d97706" fontSize="20" fontWeight="bold" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '1s' }}>?</text>

      {/* Discovery rays */}
      <line x1="100" y1="45" x2="100" y2="35" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <line x1="140" y1="60" x2="148" y2="52" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <line x1="155" y1="100" x2="165" y2="100" stroke="#d97706" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}
