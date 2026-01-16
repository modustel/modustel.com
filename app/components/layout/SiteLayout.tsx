import { Outlet } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "../mdx/mdx-components";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout() {
  return (
    <MDXProvider components={mdxComponents}>
      <SiteHeader />

      <main className="container main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Modus Tel Labs
        </div>
      </footer>
    </MDXProvider>
  );
}
