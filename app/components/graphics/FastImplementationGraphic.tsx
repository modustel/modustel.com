export function FastImplementationGraphic() {
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

      {/* Stopwatch body */}
      <circle cx="100" cy="110" r="45" fill="white" stroke="#d97706" strokeWidth="3" />
      <circle cx="100" cy="110" r="38" fill="rgba(217, 119, 6, 0.1)" stroke="#d97706" strokeWidth="2" />

      {/* Stopwatch button on top */}
      <rect x="95" y="60" width="10" height="8" rx="2" fill="#d97706" />
      <line x1="100" y1="60" x2="100" y2="50" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />

      {/* Clock hands */}
      <line x1="100" y1="110" x2="100" y2="85" stroke="#d97706" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
      <line x1="100" y1="110" x2="118" y2="110" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.2s' }} />

      {/* Center dot */}
      <circle cx="100" cy="110" r="4" fill="#d97706" />

      {/* Tick marks */}
      <line x1="100" y1="72" x2="100" y2="78" stroke="#d97706" strokeWidth="2" />
      <line x1="138" y1="110" x2="132" y2="110" stroke="#d97706" strokeWidth="2" />
      <line x1="100" y1="148" x2="100" y2="142" stroke="#d97706" strokeWidth="2" />
      <line x1="62" y1="110" x2="68" y2="110" stroke="#d97706" strokeWidth="2" />

      {/* Speed lines around the stopwatch */}
      <line x1="40" y1="90" x2="55" y2="90" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" />
      <line x1="35" y1="110" x2="55" y2="110" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.3s' }} />
      <line x1="40" y1="130" x2="55" y2="130" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.6s' }} />

      <line x1="145" y1="90" x2="160" y2="90" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.2s' }} />
      <line x1="145" y1="110" x2="165" y2="110" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.5s' }} />
      <line x1="145" y1="130" x2="160" y2="130" stroke="#d97706" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="animate-pulse-slower" style={{ animationDelay: '0.8s' }} />

      {/* Lightning bolt accent */}
      <path
        d="M130 60 L120 75 L128 75 L120 90"
        fill="#f59e0b"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="animate-pulse"
        opacity="0.8"
      />

      {/* Progress arc at bottom */}
      <path
        d="M 70 155 Q 100 165 130 155"
        stroke="#d97706"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="70" cy="155" r="4" fill="#d97706" />
      <circle cx="130" cy="155" r="4" fill="#d97706" className="animate-pulse" />
    </svg>
  );
}
