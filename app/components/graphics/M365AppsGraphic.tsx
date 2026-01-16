export function M365AppsGraphic() {
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

      {/* Three app windows overlapping */}
      {/* Back window - Outlook */}
      <rect
        x="90"
        y="80"
        width="70"
        height="80"
        rx="4"
        fill="white"
        stroke="#d97706"
        strokeWidth="2"
        opacity="0.5"
      />
      <rect x="90" y="80" width="70" height="12" fill="#d97706" opacity="0.3" rx="4" />

      {/* Middle window - Teams */}
      <rect
        x="60"
        y="65"
        width="70"
        height="80"
        rx="4"
        fill="white"
        stroke="#d97706"
        strokeWidth="2"
        opacity="0.7"
      />
      <rect x="60" y="65" width="70" height="12" fill="#d97706" opacity="0.5" rx="4" />
      <circle cx="68" cy="71" r="2" fill="white" />
      <circle cx="74" cy="71" r="2" fill="white" />
      <circle cx="80" cy="71" r="2" fill="white" />

      {/* Front window - SharePoint */}
      <rect
        x="40"
        y="50"
        width="70"
        height="80"
        rx="4"
        fill="white"
        stroke="#d97706"
        strokeWidth="2.5"
      />
      <rect x="40" y="50" width="70" height="12" fill="#d97706" rx="4" />
      <circle cx="48" cy="56" r="2" fill="white" />
      <circle cx="54" cy="56" r="2" fill="white" />
      <circle cx="60" cy="56" r="2" fill="white" />

      {/* Content in front window - folder icons */}
      <rect x="48" y="70" width="15" height="12" rx="1" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="1" />
      <path d="M48 70 L48 68 L54 68 L56 70 Z" fill="rgba(217, 119, 6, 0.4)" />

      <rect x="67" y="70" width="15" height="12" rx="1" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="1" />
      <path d="M67 70 L67 68 L73 68 L75 70 Z" fill="rgba(217, 119, 6, 0.4)" />

      <rect x="86" y="70" width="15" height="12" rx="1" fill="rgba(217, 119, 6, 0.2)" stroke="#d97706" strokeWidth="1" />
      <path d="M86 70 L86 68 L92 68 L94 70 Z" fill="rgba(217, 119, 6, 0.4)" />

      {/* Document icons */}
      <rect x="48" y="88" width="12" height="15" rx="1" fill="white" stroke="#d97706" strokeWidth="1" />
      <line x1="50" y1="92" x2="58" y2="92" stroke="#d97706" strokeWidth="0.5" />
      <line x1="50" y1="95" x2="58" y2="95" stroke="#d97706" strokeWidth="0.5" />
      <line x1="50" y1="98" x2="56" y2="98" stroke="#d97706" strokeWidth="0.5" />

      {/* Integration icon - connecting dots */}
      <circle cx="75" cy="110" r="4" fill="#d97706" className="animate-pulse" />
      <circle cx="90" cy="110" r="4" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="105" cy="110" r="4" fill="#d97706" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      <line x1="79" y1="110" x2="86" y2="110" stroke="#d97706" strokeWidth="2" strokeDasharray="2,2" />
      <line x1="94" y1="110" x2="101" y2="110" stroke="#d97706" strokeWidth="2" strokeDasharray="2,2" />
    </svg>
  );
}
