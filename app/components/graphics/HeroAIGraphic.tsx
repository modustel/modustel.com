export function HeroAIGraphic() {
  return (
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
      {/* Enhanced illustration with animation */}
      <circle
        cx="150"
        cy="150"
        r="140"
        fill="none"
        stroke="#d97706"
        strokeWidth="2"
        opacity="0.1"
        className="animate-pulse-slow"
      />
      <circle
        cx="150"
        cy="150"
        r="100"
        fill="none"
        stroke="#d97706"
        strokeWidth="2"
        opacity="0.2"
        className="animate-pulse-slower"
      />
      <circle
        cx="150"
        cy="150"
        r="60"
        fill="none"
        stroke="#d97706"
        strokeWidth="2"
        opacity="0.3"
        className="animate-pulse-slowest"
      />
      <circle cx="150" cy="150" r="30" fill="#d97706" className="animate-pulse" />
      <text
        x="150"
        y="155"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="bold"
        className="select-none"
      >
        AI
      </text>
    </svg>
  );
}
