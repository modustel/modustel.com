# AGENTS — Project Guidelines

## Package Manager

Use `pnpm` for all package operations.

## Architecture Principles

### SOLID Principles
- **Single Responsibility**: Each module/component should have one reason to change
- **Open/Closed**: Open for extension, closed for modification
- **Liskov Substitution**: Subtypes must be substitutable for their base types
- **Interface Segregation**: Prefer small, specific interfaces over large general ones
- **Dependency Inversion**: Depend on abstractions, not concretions

### Separation of Concerns
- Keep UI components focused on presentation
- Extract business logic into services
- Don't mix data fetching with rendering

### Component Design
- Create reusable components
- Break large components into smaller, focused pieces
- Props should be minimal and well-typed

## Tech Stack

- React + Vite
- React Router for routing and nested layouts
- MDX for content pages
- Vercel for hosting

## Project Structure

### Service Layer
Business logic lives in `app/services/`. Services handle:
- Database operations
- External API calls
- Business rules and validation

Service files use the `.server.ts` suffix to ensure server-only execution.

### UI Layer
React components in `app/components/` and `app/routes/` should:
- Focus on rendering and user interaction
- Delegate logic to services
- Use React Router actions/loaders for data operations

### Routes
- `app/routes/*.tsx` and `*.mdx` map to site routes
- Dynamic pages use `$slug` convention
- Layouts live in `app/components/layout/`

### Components
- Shared UI lives in `app/components/`
- MDX components are centralized in `app/mdx/mdx-components.tsx`
- Static assets belong in `public/`

## Database

- **Provider**: Neon Postgres (serverless)
- **ORM**: Prisma
- **Schema**: `prisma/schema.prisma`
- **Migrations**: `pnpm prisma migrate dev --name <name>`
- **Client generation**: `pnpm prisma generate`

Connection is configured via `DATABASE_URL` in `.env.local`.

## Local Development

```bash
pnpm install
pnpm dev
```

## Build & Deploy

```bash
pnpm build
```

Deploy via Vercel — push to repo for automatic builds.
