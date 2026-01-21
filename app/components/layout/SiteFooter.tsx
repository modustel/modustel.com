import { Link } from "react-router";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <span className="footer-copyright">
          © {new Date().getFullYear()} Modus Tel Labs
        </span>
        <nav className="footer-nav">
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
