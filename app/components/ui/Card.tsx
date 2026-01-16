import type { ReactNode } from "react";

export interface CardProps {
  title?: string;
  description?: string;
  icon?: string;
  graphic?: ReactNode;
  variant?: "default" | "accent" | "gradient";
  children?: ReactNode;
  href?: string;
  className?: string;
}

export function Card({
  title,
  description,
  icon,
  graphic,
  variant = "default",
  children,
  href,
  className = "",
}: CardProps) {
  const variantClasses = {
    default: "card-default",
    accent: "card-accent",
    gradient: "card-gradient",
  };

  const cardContent = (
    <>
      {graphic && (
        <div className="card-graphic-wrapper">
          {graphic}
        </div>
      )}
      {!graphic && icon && (
        <div className="card-icon-wrapper">
          <span className="card-icon" role="img" aria-label={title || "icon"}>
            {icon}
          </span>
        </div>
      )}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </>
  );

  const cardClasses = `card ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={`${cardClasses} card-link`}>
        {cardContent}
      </a>
    );
  }

  return <div className={cardClasses}>{cardContent}</div>;
}
