import type { ReactNode } from "react";

interface ArticleLayoutProps {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  children: ReactNode;
}

export function ArticleLayout({
  title,
  description,
  date,
  author,
  children,
}: ArticleLayoutProps) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="article animate-fade-in">
      <header className="article-header">
        <div className="article-meta">
          {formattedDate && (
            <span className="article-date">{formattedDate}</span>
          )}
          {formattedDate && author && <span className="article-divider" />}
          {author && <span className="article-author">{author}</span>}
        </div>
        <h1 className="article-title">{title}</h1>
        {description && <p className="article-description">{description}</p>}
      </header>

      <div className="article-content">{children}</div>
    </article>
  );
}
