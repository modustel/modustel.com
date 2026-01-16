import { useState } from "react";
import { NavLink } from "react-router";

function NavItem({
  to,
  label,
  onSelect,
}: {
  to: string;
  label: string;
  onSelect?: () => void;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `navLink ${isActive ? "navLinkActive" : ""}`
      }
      onClick={onSelect}
    >
      {label}
    </NavLink>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelect = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container headerInner">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/assets/logos/ModusTelLogo.svg"
              alt="Modus Tel Labs"
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold">Modus Tel Labs</span>
          </a>
          <button
            className="menuToggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav id="site-nav" className={`nav ${isMenuOpen ? "navOpen" : ""}`}>
            <div className="navPanel">
              <NavItem to="/" label="Home" onSelect={handleSelect} />
              <NavItem to="/services" label="Services" onSelect={handleSelect} />
              <NavItem to="/work" label="Work" onSelect={handleSelect} />
              <NavItem to="/insights" label="Insights" onSelect={handleSelect} />
              <NavItem to="/about" label="About" onSelect={handleSelect} />
              <NavItem to="/contact" label="Contact" onSelect={handleSelect} />
            </div>
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobileMenuOverlay" onClick={handleSelect}></div>
      )}
    </>
  );
}
