import { Fragment, type ReactNode } from "react";

type PageProps = {
  children: ReactNode;
  /** Content rendered outside the prose wrapper (e.g., CTAs) */
  footer?: ReactNode;
  /** Use prose wrapper for text-heavy content pages */
  prose?: boolean;
};

/**
 * Uniform page wrapper component for consistent page structure.
 *
 * - Wraps main content in optional prose container for text-heavy pages
 * - Renders footer content (like CTAs) outside the prose wrapper
 * - Ensures consistent styling across all pages
 */
export function Page({ children, footer, prose = false }: PageProps) {
  return (
    <Fragment>
      {prose ? (
        <div className="prose">{children}</div>
      ) : (
        children
      )}
      {footer}
    </Fragment>
  );
}
