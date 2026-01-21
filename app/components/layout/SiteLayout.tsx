import { Outlet } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "../mdx/mdx-components";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout() {
  return (
    <MDXProvider components={mdxComponents}>
      <SiteHeader />

      <main className="container main">
        <Outlet />
      </main>

      <SiteFooter />
    </MDXProvider>
  );
}
