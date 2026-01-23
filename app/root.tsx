import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./styles/app.scss";
import { SiteLayout } from "./components/layout/SiteLayout";
import { Mars404Graphic } from "./components/graphics/Mars404Graphic";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  { rel: "icon", href: "/assets/logos/ModusTelLogo.svg", type: "image/svg+xml" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) {
    return <Outlet />;
  }

  return <SiteLayout />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  if (is404) {
    return (
      <div className="error-page error-page-404">
        <div className="error-graphic">
          <Mars404Graphic />
        </div>
        <div className="error-content">
          <h1>Lost in space</h1>
          <p>
            The page you're looking for has drifted off into the Martian dust.
            Let's get you back on course.
          </p>
          <Link to="/" className="btn btn-accent">
            Return to Earth
          </Link>
        </div>
      </div>
    );
  }

  // Non-404 errors
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = `Error ${error.status}`;
    details = error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>{message}</h1>
        <p>{details}</p>
        {stack && (
          <pre className="error-stack">
            <code>{stack}</code>
          </pre>
        )}
        <Link to="/" className="btn btn-accent">
          Go home
        </Link>
      </div>
    </div>
  );
}
