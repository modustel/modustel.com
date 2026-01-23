# SEO Strategy Guide — Modus Tel Labs

> Last Updated: January 2026
> Status: Active Development

---

## Table of Contents

1. [Current SEO Status](#current-seo-status)
2. [Immediate Fixes Required](#immediate-fixes-required)
3. [Structured Data Implementation](#structured-data-implementation)
4. [Content Strategy](#content-strategy)
5. [Technical SEO Checklist](#technical-seo-checklist)
6. [Performance Optimization](#performance-optimization)
7. [Monitoring & Analytics](#monitoring--analytics)
8. [Future Roadmap](#future-roadmap)

---

## Current SEO Status

### Strengths
| Feature | Status | Notes |
|---------|--------|-------|
| Server-Side Rendering | ✅ | React Router with SSR enabled |
| Page Titles | ✅ | Unique, descriptive titles on all pages |
| Meta Descriptions | ✅ | 120-160 characters, compelling copy |
| Open Graph Tags | ✅ | Full implementation with images |
| Twitter Cards | ✅ | summary_large_image on all pages |
| XML Sitemap | ✅ | Dynamic generation at `/sitemap.xml` |
| robots.txt | ✅ | Admin routes blocked |
| Mobile Responsive | ✅ | TailwindCSS responsive design |
| HTTPS | ✅ | Vercel enforces HTTPS |

### Gaps to Address (COMPLETED January 2026)
| Issue | Priority | Status |
|-------|----------|--------|
| ~~No JSON-LD structured data~~ | 🔴 Critical | ✅ DONE - Organization, BlogPosting, Service schemas added |
| ~~No canonical URLs~~ | 🟠 High | ✅ DONE - All pages have canonical URLs |
| ~~Article meta tags missing~~ | 🔴 Critical | ✅ DONE - MDX articles have full meta + structured data |
| ~~No image optimization~~ | 🟠 High | ✅ DONE - OptimizedImage component + logo dimensions |
| ~~Empty work case studies~~ | 🟡 Medium | ✅ DONE - Removed from sitemap until content created |

---

## Immediate Fixes Required

### 1. Add Canonical URLs to All Pages

Add to each page's meta function:

```tsx
// In each route's meta function
export const meta: MetaFunction = () => [
  { title: "Page Title — Modus Tel Labs" },
  { name: "description", content: "..." },
  { tagName: "link", rel: "canonical", href: "https://modustel.com/page-path" },
  // ... other meta tags
];
```

**Files to update:**
- `app/routes/_index.tsx` → `https://modustel.com/`
- `app/routes/about.tsx` → `https://modustel.com/about`
- `app/routes/services.tsx` → `https://modustel.com/services`
- `app/routes/work.tsx` → `https://modustel.com/work`
- `app/routes/insights.tsx` → `https://modustel.com/insights`
- `app/routes/contact.tsx` → `https://modustel.com/contact`
- `app/routes/privacy.tsx` → `https://modustel.com/privacy`
- `app/routes/terms.tsx` → `https://modustel.com/terms`

### 2. Fix Article Page Meta Tags

Update `app/routes/insights.$slug.tsx` to use frontmatter for meta:

```tsx
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: "Article Not Found" }];

  const { frontmatter } = data;
  const url = `https://modustel.com/insights/${data.slug}`;

  return [
    { title: `${frontmatter.title} — Modus Tel Labs` },
    { name: "description", content: frontmatter.description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:title", content: frontmatter.title },
    { property: "og:description", content: frontmatter.description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { property: "article:published_time", content: frontmatter.date },
    { property: "article:author", content: frontmatter.author },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: frontmatter.title },
    { name: "twitter:description", content: frontmatter.description },
  ];
};
```

### 3. Fix Twitter Card Alt Text

Several pages have incorrect alt text. Search for:
```
"Research and products at the frontier of safety"
```
Replace with appropriate alt text matching each page's content.

---

## Structured Data Implementation

### Organization Schema (Add to root.tsx)

```tsx
// Add to app/root.tsx in the <head>
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Modus Tel Labs",
  "url": "https://modustel.com",
  "logo": "https://modustel.com/assets/logos/ModusTelLogo.svg",
  "description": "Custom AI, automation, and software solutions for business transformation",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://modustel.com/contact"
  },
  "sameAs": [
    // Add social media URLs when available
  ],
  "areaServed": "Worldwide",
  "serviceType": [
    "AI Development",
    "Business Automation",
    "Custom Software Development",
    "Digital Transformation Consulting"
  ]
})}
</script>
```

### BlogPosting Schema (For Article Pages)

```tsx
// Add to each article page
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": frontmatter.title,
  "description": frontmatter.description,
  "author": {
    "@type": "Person",
    "name": frontmatter.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Modus Tel Labs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://modustel.com/assets/logos/ModusTelLogo.svg"
    }
  },
  "datePublished": frontmatter.date,
  "dateModified": frontmatter.date,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://modustel.com/insights/${slug}`
  }
})}
</script>
```

### Service Schema (For Services Page)

```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI & Automation Solutions",
  "provider": {
    "@type": "Organization",
    "name": "Modus Tel Labs"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI & Software Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Proposal Automation Systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Operations Command Center"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "M365-Native Internal Apps"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Integration Layer Development"
        }
      }
    ]
  }
})}
</script>
```

### BreadcrumbList Schema

```tsx
// Example for insights article
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://modustel.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Insights",
      "item": "https://modustel.com/insights"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Article Title",
      "item": "https://modustel.com/insights/article-slug"
    }
  ]
})}
</script>
```

---

## Content Strategy

### Target Keywords by Page

| Page | Primary Keyword | Secondary Keywords |
|------|-----------------|-------------------|
| Home | custom AI solutions | business automation, AI consulting, digital transformation |
| Services | AI development services | automation consulting, custom software, M365 integration |
| Work | AI case studies | automation success stories, digital transformation examples |
| Insights | AI automation blog | business technology insights, AI implementation guides |
| About | AI consulting company | automation experts, software development team |
| Contact | hire AI developers | AI consulting inquiry, automation project |

### Content Recommendations

#### Blog Topics to Prioritize (High Search Volume)
1. "How to automate business proposals with AI"
2. "M365 automation best practices for enterprises"
3. "Custom AI vs off-the-shelf solutions: decision guide"
4. "AI implementation roadmap for operations teams"
5. "Measuring ROI on automation investments"
6. "Edge cases in AI: what to plan for"

#### Content Calendar Guidelines
- **Frequency:** 2-4 articles per month
- **Length:** 1,500-2,500 words for pillar content
- **Format:** Mix of how-to guides, case studies, and thought leadership
- **Internal Linking:** Every article should link to Services and Contact pages

### On-Page SEO Checklist for Articles

```markdown
□ Title includes primary keyword (60 chars max)
□ Meta description includes CTA (155 chars max)
□ H1 matches title, contains keyword
□ H2s break content into scannable sections
□ Images have descriptive alt text
□ Internal links to 2-3 relevant pages
□ External links to authoritative sources
□ Schema markup implemented
□ Reading time estimated (engagement signal)
□ Author byline with schema
```

---

## Technical SEO Checklist

### Core Web Vitals Targets

| Metric | Target | Current Priority |
|--------|--------|------------------|
| LCP (Largest Contentful Paint) | < 2.5s | Monitor |
| INP (Interaction to Next Paint) | < 200ms | Monitor |
| CLS (Cumulative Layout Shift) | < 0.1 | Monitor |

### Image Optimization Requirements

1. **Convert to WebP format** for all non-SVG images
2. **Add lazy loading** to below-fold images:
   ```html
   <img loading="lazy" src="..." alt="..." />
   ```
3. **Implement srcset** for responsive images:
   ```html
   <img
     srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
     sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
     src="image-800.webp"
     alt="..."
   />
   ```
4. **Specify dimensions** to prevent layout shift:
   ```html
   <img width="800" height="450" ... />
   ```

### Code Splitting Implementation

```tsx
// In route files, use React.lazy for heavy components
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('~/components/HeavyComponent'));

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Sitemap Maintenance

Current sitemap includes work pages that don't exist. Either:
1. **Create the content** for `/work/fintech-platform`, `/work/healthcare-portal`, `/work/logistics-system`
2. **Remove from sitemap** in `app/routes/sitemap[.]xml.tsx`

---

## Performance Optimization

### Preloading Critical Resources

Add to `root.tsx`:
```tsx
<link rel="preload" href="/assets/logos/ModusTelLogo.svg" as="image" />
<link rel="preload" href="/critical-styles.css" as="style" />
```

### DNS Prefetching

```tsx
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="dns-prefetch" href="//challenges.cloudflare.com" />
```

### Route Prefetching

```tsx
// On navigation links for likely next pages
<Link to="/services" prefetch="intent">Services</Link>
```

---

## Monitoring & Analytics

### Recommended Tools

1. **Google Search Console** (Required)
   - Monitor indexing status
   - Track keyword rankings
   - Identify crawl errors
   - Submit sitemap

2. **Google Analytics 4** (Required)
   - Traffic analysis
   - User behavior
   - Conversion tracking

3. **Core Web Vitals Monitoring**
   - Vercel Analytics (built-in)
   - PageSpeed Insights
   - Chrome UX Report

### Key Metrics to Track

| Metric | Target | Frequency |
|--------|--------|-----------|
| Organic traffic | +10% MoM | Weekly |
| Keyword rankings (top 10) | 20+ keywords | Monthly |
| Click-through rate | > 3% | Monthly |
| Bounce rate | < 60% | Weekly |
| Pages indexed | 100% of sitemap | Weekly |
| Core Web Vitals | All "Good" | Monthly |

### Search Console Setup Checklist

```markdown
□ Verify domain ownership
□ Submit sitemap.xml
□ Set preferred domain (www vs non-www)
□ Monitor "Coverage" for errors
□ Check "Enhancements" for structured data
□ Set up email alerts for critical issues
```

---

## Future Roadmap

### Phase 1: Foundation (Weeks 1-2)
- [ ] Add canonical URLs to all pages
- [ ] Implement Organization JSON-LD schema
- [ ] Fix article page meta tags
- [ ] Fix Twitter card alt text inconsistencies
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics 4

### Phase 2: Structured Data (Weeks 3-4)
- [ ] Add BlogPosting schema to articles
- [ ] Add Service schema to services page
- [ ] Add BreadcrumbList schema site-wide
- [ ] Validate all schema with Google Rich Results Test
- [ ] Create/remove work case study pages from sitemap

### Phase 3: Performance (Weeks 5-6)
- [ ] Implement image optimization pipeline
- [ ] Add lazy loading to images
- [ ] Implement code splitting for heavy components
- [ ] Add resource hints (preload, prefetch, dns-prefetch)
- [ ] Achieve all "Good" Core Web Vitals scores

### Phase 4: Content Expansion (Ongoing)
- [ ] Publish 2-4 blog articles per month
- [ ] Create detailed case studies for work section
- [ ] Build topical authority clusters around:
  - AI for business operations
  - M365 automation
  - Custom software development
  - Digital transformation

### Phase 5: Advanced SEO (Quarter 2+)
- [ ] Implement FAQ schema where appropriate
- [ ] Create video content with VideoObject schema
- [ ] Build backlink strategy
- [ ] Consider international SEO if expanding markets
- [ ] Implement site search with structured data

---

## Quick Reference: Meta Tag Template

```tsx
export const meta: MetaFunction = () => [
  // Required
  { title: "Page Title — Modus Tel Labs" },
  { name: "description", content: "Compelling 120-155 character description with CTA" },
  { tagName: "link", rel: "canonical", href: "https://modustel.com/page-path" },

  // Open Graph
  { property: "og:title", content: "Page Title" },
  { property: "og:description", content: "Description for social sharing" },
  { property: "og:image", content: "https://modustel.com/assets/og-image.png" },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:alt", content: "Descriptive alt text for image" },
  { property: "og:url", content: "https://modustel.com/page-path" },
  { property: "og:type", content: "website" }, // or "article" for blog posts

  // Twitter
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Page Title" },
  { name: "twitter:description", content: "Description for Twitter" },
  { name: "twitter:image", content: "https://modustel.com/assets/og-image.png" },
  { name: "twitter:image:alt", content: "Descriptive alt text" },
];
```

---

## Resources

- [Google Search Central Documentation](https://developers.google.com/search/docs)
- [Schema.org Full Reference](https://schema.org)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Web.dev SEO Guide](https://web.dev/learn/seo)

---

*This guide should be reviewed and updated quarterly to reflect algorithm changes and new SEO best practices.*
