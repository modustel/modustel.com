const BASE_URL = "https://modustel.com";

const staticPages = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/work", priority: 0.8, changefreq: "monthly" },
  { path: "/insights", priority: 0.8, changefreq: "weekly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/contact", priority: 0.8, changefreq: "monthly" },
  { path: "/privacy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms", priority: 0.3, changefreq: "yearly" },
];

// Work case study pages - add entries here when individual case study routes are created
const workPages: string[] = [];

const insightPages = [
  "/insights/introducing-our-approach",
  "/insights/designing-for-edge-cases",
];

export async function loader() {
  const today = new Date().toISOString().split("T")[0];

  const urls = [
    ...staticPages.map(
      (page) => `
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    ),
    ...workPages.map(
      (path) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    ),
    ...insightPages.map(
      (path) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
