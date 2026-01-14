import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("work", "routes/work._index.tsx"),
  route("work/:slug", "routes/work.$slug.mdx"),
  route("insights", "routes/insights._index.tsx"),
  route("insights/:slug", "routes/insights.$slug.mdx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;