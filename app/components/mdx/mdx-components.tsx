import type { MDXComponents } from "mdx/types";
import { Link } from "react-router";

export const mdxComponents: MDXComponents = {
  a: (props) => {
    const href = typeof props.href === "string" ? props.href : "";
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    if (isInternal) {
      return <Link to={href} {...props} />;
    }
    return <a {...props} rel="noreferrer" target="_blank" />;
  },
  pre: (props) => (
    <pre
      {...props}
      style={{
        overflowX: "auto",
        padding: 14,
        borderRadius: 12,
        border: "1px solid rgba(0,0,0,0.10)",
      }}
    />
  ),
  code: (props) => (
    <code
      {...props}
      style={{
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      }}
    />
  ),
};
