import { NavLink, Outlet } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "../mdx/mdx-components";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `navLink ${isActive ? "navLinkActive" : ""}`
      }
    >
      {label}
    </NavLink>
  );
}

export function SiteLayout() {
  return (
    <MDXProvider components={mdxComponents}>
      <header className="header">
        <div className="container headerInner">
          <div className="brand">ModusTel</div>
          <nav className="nav">
            <NavItem to="/" label="Home" />
            <NavItem to="/services" label="Services" />
            <NavItem to="/work" label="Work" />
            <NavItem to="/insights" label="Insights" />
            <NavItem to="/about" label="About" />
            <NavItem to="/contact" label="Contact" />
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
