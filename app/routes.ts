import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("work", "routes/work._index.tsx"),
  route("work/:slug", "routes/work.$slug.mdx"),
  route("insights", "routes/insights._index.tsx"),
  route("insights/introducing-our-approach", "routes/insights.introducing-our-approach.mdx"),
  route("insights/designing-for-edge-cases", "routes/insights.designing-for-edge-cases.mdx"),
  route("insights/:slug", "routes/insights.$slug.mdx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("privacy", "routes/privacy.tsx"),
] satisfies RouteConfig;