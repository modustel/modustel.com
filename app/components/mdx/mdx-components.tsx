import type { MDXComponents } from "mdx/types";
import { Link } from "react-router";

export const mdxComponents: MDXComponents = {
  a: (props) => {
    const href = typeof props.href === "string" ? props.href : "";
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    if (isInternal) {
      return <Link to={href} {...props} className="text-accent font-medium hover:underline" />;
    }
    return <a {...props} rel="noreferrer" target="_blank" className="text-accent font-medium hover:underline" />;
  },
  pre: (props) => (
    <pre
      {...props}
      style={{
        overflowX: "auto",
        padding: 14,
        borderRadius: 12,
        border: "1px solid var(--border)",
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      }}
    />
  ),
  code: (props) => (
    <code
      {...props}
      style={{
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        backgroundColor: "var(--bg-tertiary)",
        color: "var(--accent-dark)",
        padding: "2px 6px",
        borderRadius: 4,
        fontSize: "0.9em",
      }}
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      style={{
        borderLeft: "4px solid var(--accent)",
        paddingLeft: 16,
        marginLeft: 0,
        color: "var(--text-secondary)",
        fontStyle: "italic",
      }}
    />
  ),
  h1: (props) => (
    <h1
      {...props}
      style={{
        fontSize: "clamp(2rem, 4vw, 2.8rem)",
        fontWeight: 700,
        color: "var(--text-primary)",
        marginTop: "var(--spacing-xl)",
        marginBottom: "var(--spacing-md)",
      }}
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      style={{
        fontSize: "clamp(1.5rem, 3vw, 2rem)",
        fontWeight: 700,
        color: "var(--text-primary)",
        marginTop: "var(--spacing-lg)",
        marginBottom: "var(--spacing-md)",
      }}
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      style={{
        fontSize: "var(--font-size-xl)",
        fontWeight: 600,
        color: "var(--text-primary)",
        marginTop: "var(--spacing-md)",
        marginBottom: "var(--spacing-sm)",
      }}
    />
  ),
  p: (props) => (
    <p
      {...props}
      style={{
        color: "var(--text-secondary)",
        lineHeight: 1.75,
        marginBottom: "var(--spacing-md)",
      }}
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      style={{
        paddingLeft: "var(--spacing-xl)",
        color: "var(--text-secondary)",
        lineHeight: 1.75,
      }}
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      style={{
        paddingLeft: "var(--spacing-xl)",
        color: "var(--text-secondary)",
        lineHeight: 1.75,
      }}
    />
  ),
  li: (props) => (
    <li
      {...props}
      style={{
        marginBottom: "var(--spacing-sm)",
      }}
    />
  ),
};
