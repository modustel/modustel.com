import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description: string;
  graphic?: ReactNode;
  graphicPosition?: "left" | "right";
};

export function PageHeader({
  title,
  description,
  graphic,
  graphicPosition = "right",
}: PageHeaderProps) {
  if (!graphic) {
    return (
      <header className="page-header animate-fade-in">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
    );
  }

  return (
    <header className={`page-header page-header-with-graphic graphic-${graphicPosition} animate-fade-in`}>
      <div className="page-header-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="page-header-graphic">
        {graphic}
      </div>
    </header>
  );
}
