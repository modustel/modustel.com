import { NavLink, Outlet } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "../mdx/mdx-components";
import { useState } from "react";

function NavItem({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `navLink ${isActive ? "navLinkActive" : ""}`
      }
    >
      {label}
    </NavLink>
  );
}

export function SiteLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <MDXProvider components={mdxComponents}>
      <header className="header">
        <div className="container headerInner">
          <NavLink to="/" className="brand" onClick={closeMobileMenu}>
            ModusTel
          </NavLink>

          {/* Hamburger Menu Button */}
          <button
            className="mobileMenuButton"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger ${mobileMenuOpen ? "hamburgerOpen" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="nav navDesktop">
            <NavItem to="/" label="Home" />
            <NavItem to="/services" label="Services" />
            <NavItem to="/work" label="Work" />
            <NavItem to="/insights" label="Insights" />
            <NavItem to="/about" label="About" />
            <NavItem to="/contact" label="Contact" />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav className={`navMobile ${mobileMenuOpen ? "navMobileOpen" : ""}`}>
          <NavItem to="/" label="Home" onClick={closeMobileMenu} />
          <NavItem to="/services" label="Services" onClick={closeMobileMenu} />
          <NavItem to="/work" label="Work" onClick={closeMobileMenu} />
          <NavItem to="/insights" label="Insights" onClick={closeMobileMenu} />
          <NavItem to="/about" label="About" onClick={closeMobileMenu} />
          <NavItem to="/contact" label="Contact" onClick={closeMobileMenu} />
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobileMenuOverlay" onClick={closeMobileMenu}></div>
      )}

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
