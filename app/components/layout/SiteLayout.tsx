import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "../mdx/mdx-components";

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

export function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelect = () => {
    setIsMenuOpen(false);
  };

  return (
    <MDXProvider components={mdxComponents}>
      <header className="header">
        <div className="container headerInner">
          <div className="brand">ModusTel</div>
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
            <NavItem to="/" label="Home" onSelect={handleSelect} />
            <NavItem to="/services" label="Services" onSelect={handleSelect} />
            <NavItem to="/work" label="Work" onSelect={handleSelect} />
            <NavItem to="/insights" label="Insights" onSelect={handleSelect} />
            <NavItem to="/about" label="About" onSelect={handleSelect} />
            <NavItem to="/contact" label="Contact" onSelect={handleSelect} />
          </nav>
        </div>
      </header>

      <main className="container main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} ModusTel LLC
        </div>
      </footer>
    </MDXProvider>
  );
}
