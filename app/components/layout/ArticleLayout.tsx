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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: author || "Modus Tel Labs",
    },
    publisher: {
      "@type": "Organization",
      name: "Modus Tel Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://modustel.com/assets/logos/ModusTelLogo.svg",
      },
    },
    datePublished: date,
  };

  return (
    <article className="article animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
