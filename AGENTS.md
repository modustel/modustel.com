# AGENTS — Project Intent & Guidelines

A short, opinionated summary of the ideas behind this project: a content-first React site using React Router for routing, MDX for authorable pages and components, and Vercel for simple deployments.

## Purpose ✅
- Deliver a fast, SEO-friendly marketing site that is content-driven and easy to author.
- Keep UI logic small, reusable, and focused on readable MDX content.

## Key Principles 💡
- **Content-first**: Pages are authored as MDX whenever possible so content and presentation can be composed together.
- **Component-driven**: Shared UI lives in `app/components` and MDX components are centralized in `app/mdx/mdx-components.tsx`.
- **Explicit routing**: Use React Router file-based routes (`app/routes/*`) and nested layouts (`SiteLayout`) for predictable routing and structure.
- **Deployable by default**: Optimized for Vercel — push to the repo and automatic builds work out of the box.

## Tech stack 🔧
- React + Vite
- React Router for routing and nested layouts
- MDX for content pages with component composition
- Vercel for hosting and continuous deployment
- `pnpm` (or npm) + project scripts in `package.json`

## Project structure & conventions 📁
- `app/routes/*.tsx` and `*.mdx` map to site routes (dynamic pages use `$slug` convention).
- Layouts live in `app/components/layout/` (e.g., `SiteLayout.tsx`).
- Reusable MDX components are exported from `app/mdx/mdx-components.tsx`.
- Static assets belong in `public/`.

## Authoring & routing notes ✍️
- Create new content by adding an MDX file to `app/routes` (follow existing naming like `insights.$slug.mdx`).
- Use exports or frontmatter for metadata (title, description, date) and import shared components as needed.
- Keep MDX pages focused on content and delegate complex UI to components.

## Local dev & deploy ▶️
- Local: `pnpm install` then `pnpm dev` (or `npm run dev`)
- Build: `pnpm build` and `pnpm preview`
- Deploy: Connect repo to Vercel — it should detect and build automatically. Set env vars in Vercel dashboard if needed.

## Best practices & tips ⚠️
- Favor accessibility and semantic HTML in MDX and components.
- Keep pages small and focused to preserve build/dev performance.
- Add new UI to `app/components` and register MDX helpers in `app/mdx/mdx-components.tsx`.

## Contributing
- Add routes or MDX pages following the existing patterns, run the dev server, and open a PR with the content and any component changes.

---

If you'd like, I can shorten or expand any section, or add examples for common tasks (e.g., adding a new MDX post).
