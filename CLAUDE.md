# CLAUDE.md — Provenarc Codebase Guide

This file provides essential context for AI assistants working in this repository.

---

## Project Overview

**Provenarc** is a premium B2B luxury marketing website for aircraft and marine documentation services. It is a full-stack TypeScript monorepo with a React frontend, Express.js backend, and PostgreSQL database, deployed on Replit.

The brand aesthetic is "quiet luxury" — gold accents (#c9a96e), generous whitespace, muted palette, and premium typography.

---

## Repository Structure

```
Provenarc/
├── client/             # React frontend (Vite)
│   └── src/
│       ├── App.tsx         # Router and layout root
│       ├── main.tsx        # React entry point
│       ├── index.css       # Tailwind directives + CSS variables
│       ├── pages/          # One file per route (25 pages)
│       ├── components/     # Navbar, Footer, SEO, Shadcn UI
│       ├── hooks/          # useAuth, use-mobile, use-toast
│       └── lib/            # utils.ts, queryClient.ts
├── server/             # Express.js backend
│   ├── index.ts            # Server init, middleware, session setup
│   ├── routes.ts           # All API route handlers
│   ├── db.ts               # Drizzle ORM connection
│   ├── storage.ts          # DatabaseStorage (IStorage interface)
│   ├── vite.ts             # Vite dev server integration
│   └── static.ts           # Static file serving (production)
├── shared/             # Shared between client and server
│   └── schema.ts           # Drizzle schema + Zod validators
├── migrations/         # Drizzle-generated SQL migrations
├── scripts/            # Build utilities
├── script/
│   └── build.ts            # Production build (Vite + esbuild)
├── .agents/            # Claude Code agent skills
├── package.json
├── tsconfig.json
├── vite.config.ts
├── drizzle.config.ts
├── tailwind.config.ts
└── components.json     # Shadcn/ui configuration
```

---

## Technology Stack

### Frontend
| Library | Version | Purpose |
|---|---|---|
| React | ^18.3.1 | UI framework |
| Wouter | ^3.3.5 | Client-side routing (lightweight, not Next.js) |
| TanStack React Query | ^5.60.5 | Server state / data fetching |
| Framer Motion | ^11.13.1 | Animations |
| React Hook Form | ^7.55.0 | Form management |
| Zod | ^3.24.2 | Schema validation (shared with server) |
| Shadcn/ui + Radix UI | — | Accessible UI primitives |
| Tailwind CSS | ^3.4.17 | Utility-first styling |
| Recharts | ^2.15.2 | Dashboard charts |
| React Helmet Async | ^3.0.0 | SEO meta tag management |
| Lucide React | ^0.453.0 | Icon set |

### Backend
| Library | Version | Purpose |
|---|---|---|
| Express | ^5.0.1 | HTTP server |
| Express Session | ^1.19.0 | Session management |
| connect-pg-simple | ^10.0.0 | PostgreSQL session store |
| bcrypt | ^6.0.0 | Password hashing |
| Drizzle ORM | ^0.39.3 | Type-safe PostgreSQL queries |
| Drizzle Zod | ^0.7.0 | Zod schemas from Drizzle tables |
| pg | ^8.16.3 | PostgreSQL driver |
| Passport / Passport Local | ^0.7.0 | Auth middleware (configured, partially used) |

### Build & Tooling
| Tool | Purpose |
|---|---|
| Vite | Client bundler + dev server |
| esbuild | Server bundler for production |
| tsx | TypeScript executor for dev |
| TypeScript 5.6.3 | Static typing (strict mode) |
| PostCSS + Autoprefixer | CSS processing |

---

## Development Commands

```bash
# Start development server (hot reload, both client and server)
npm run dev

# Type-check the entire project
npm run check

# Push schema changes to the database (no migration file generated)
npm run db:push

# Build for production
npm run build

# Run production build
npm start
```

> **Note:** There are no automated tests. `npm run check` (tsc) is the primary validation tool.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `SESSION_SECRET` | Yes | Secret for signing session cookies |
| `PORT` | No | HTTP port (defaults apply) |
| `NODE_ENV` | No | `development` or `production` |

---

## Database

- **Engine**: PostgreSQL (v16 on Replit)
- **ORM**: Drizzle ORM with schema defined in `shared/schema.ts`
- **Schema management**: `npm run db:push` (pushes schema directly, no migration files)

### Tables

| Table | Purpose |
|---|---|
| `users` | Authenticated accounts with roles (`broker`, `mro`, `admin`) |
| `quoteRequests` | Service quote submissions from prospective clients |
| `contactInquiries` | General contact form submissions |
| `blogPosts` | Blog content with draft/published states and slugs |
| `sessions` | Auto-created by connect-pg-simple for session persistence |

### Key Drizzle Patterns

```typescript
// Import from shared schema
import { users, blogPosts, insertBlogPostSchema } from "@shared/schema";

// Use DatabaseStorage methods via the storage singleton
import { storage } from "./storage";
const post = await storage.getBlogPostBySlug("my-slug");
```

All database access on the server goes through the `storage` object (`server/storage.ts`), which implements the `IStorage` interface.

---

## API Routes

All routes are defined in `server/routes.ts` and mounted under `/api`.

### Authentication
| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/login` | — | Login with `username` + `password` |
| POST | `/api/auth/logout` | Required | Destroy session |
| GET | `/api/auth/me` | Required | Return current user profile |
| GET | `/api/auth/dashboard` | Required | Generic dashboard data |

### Role-Based Dashboards
| Method | Path | Role | Description |
|---|---|---|---|
| GET | `/api/broker/dashboard` | `broker` | Broker-specific stats |
| GET | `/api/mro/dashboard` | `mro` | MRO-specific stats |

### Public Forms
| Method | Path | Description |
|---|---|---|
| POST | `/api/quote-requests` | Submit a service quote request |
| POST | `/api/contact` | Submit a contact inquiry |

### Blog (Public)
| Method | Path | Description |
|---|---|---|
| GET | `/api/blog` | List all published posts |
| GET | `/api/blog/:slug` | Get a single post by slug |

### Blog (Admin only)
| Method | Path | Description |
|---|---|---|
| GET | `/api/admin/blog` | List all posts including drafts |
| POST | `/api/blog` | Create a new post |
| PATCH | `/api/blog/:id` | Update an existing post |
| DELETE | `/api/blog/:id` | Delete a post |

### Auth Middleware

```typescript
// Require any logged-in user
requireAuth()

// Require a specific role
requireRole("admin")
requireRole("broker")
requireRole("mro")
```

---

## Frontend Routing

Uses **Wouter** (not React Router or Next.js). Routes are defined in `client/src/App.tsx`.

### Key Pages

| Route | Component | Notes |
|---|---|---|
| `/` | `GroupHome` | Landing page for the Provenarc group |
| `/aero` | `AeroHome` | Aviation division |
| `/marine` | `Marine` | Marine division |
| `/blog` | `Blog` | Blog listing |
| `/blog/:slug` | `BlogPost` | Individual blog post |
| `/blog/admin` | `BlogAdmin` | Admin post management |
| `/broker/login` | `BrokerLogin` | Broker portal login |
| `/mro/login` | `MROLogin` | MRO portal login |
| `/broker/dashboard` | `BrokerDashboard` | Broker dashboard |
| `/mro/dashboard` | `MRODashboard` | MRO dashboard |

### Data Fetching Pattern

```typescript
// Queries (GET)
const { data } = useQuery({
  queryKey: ["/api/blog"],
  queryFn: () => fetch("/api/blog").then(r => r.json()),
});

// Mutations (POST/PATCH/DELETE)
const mutation = useMutation({
  mutationFn: (data) => fetch("/api/blog", { method: "POST", body: JSON.stringify(data) }),
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/blog"] }),
});
```

The `queryClient` is configured in `client/src/lib/queryClient.ts`.

### Authentication Hook

```typescript
import { useAuth } from "@/hooks/useAuth";
const { user, isLoading, isAuthenticated } = useAuth();
```

---

## Styling Conventions

### Tailwind & Design System

- Gold accent: `#c9a96e` → CSS variable `--primary`
- Dark mode via `class` strategy (`dark:` prefix)
- Custom utility: `.hover-elevate` for lift-on-hover effect

### CSS Variables (in `client/src/index.css`)

```css
--background, --foreground, --primary, --secondary, --muted,
--accent, --card, --border, --ring, --sidebar-*, --chart-1..5
```

### Fonts

- **Body**: IBM Plex Sans
- **Display/Headings**: Playfair Display
- **Monospace**: IBM Plex Mono

### Animation (Framer Motion)

Shared animation variants used across pages:

```typescript
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

### Component Library

- Shadcn/ui components live in `client/src/components/ui/`
- Add new Shadcn components using the CLI, not by hand
- Style: `new-york` (configured in `components.json`)

---

## TypeScript Conventions

- **Strict mode enabled** — no implicit `any`
- **Path aliases**:
  - `@/` → `client/src/`
  - `@shared/` → `shared/`
- Types for DB rows are inferred from Drizzle: `typeof users.$inferSelect`
- Zod schemas for insert validation: `insertUserSchema`, `insertBlogPostSchema`, etc.
- Avoid type casting with `as` unless necessary

---

## Code Patterns & Conventions

### Naming
- **React components**: PascalCase (`BlogPost.tsx`)
- **Hooks**: camelCase with `use` prefix (`useAuth.ts`)
- **API routes**: kebab-case paths (`/api/quote-requests`)
- **Database columns**: camelCase in schema (Drizzle maps to snake_case in Postgres)
- **Environment variables**: SCREAMING_SNAKE_CASE

### File Organization
- One page component per route file in `client/src/pages/`
- Shared UI primitives in `client/src/components/ui/` (Shadcn)
- Custom app-level components directly in `client/src/components/`
- All server DB access goes through `storage.ts` — never import `db` in `routes.ts` directly

### Error Handling
- Route handlers use try/catch and return `{ error: "..." }` with appropriate HTTP status
- Zod validation errors propagate to the client
- Express global error handler in `server/index.ts`

### Forms
- Use `react-hook-form` + `zodResolver` for all forms
- Validate with the shared Zod schemas from `@shared/schema`

---

## Build & Deployment

### Production Build

```bash
npm run build
```

This runs `script/build.ts` which:
1. Bundles the React client with Vite → `dist/public/`
2. Bundles the Express server with esbuild → `dist/index.cjs`

The server bundle uses an **allowlist approach** — only specific `node_modules` are bundled; the rest are treated as external to reduce cold-start time.

### Deployment

- Platform: **Replit** (autoscale)
- Runtime: Node.js 20, PostgreSQL 16
- Start command: `node ./dist/index.cjs`
- Port: 5000
- The Express server serves the Vite-built static files in production

---

## Testing

There are currently **no automated tests** in this project. When adding tests:

- Use **Vitest** (already aligned with Vite ecosystem) for unit/integration tests
- Place test files adjacent to the code or in a `__tests__/` directory
- Add a `test` script to `package.json`

---

## Important Gotchas

1. **Session secret**: Must set `SESSION_SECRET` in production. Missing it will cause insecure sessions.
2. **`db:push` vs migrations**: The project uses `drizzle-kit push` (no migration history). Destructive schema changes (dropping columns/tables) must be handled carefully.
3. **Wouter vs React Router**: This project uses Wouter. Do not import from `react-router-dom`.
4. **Express v5**: The project uses Express 5 (not 4). Some middleware and error-handling patterns differ slightly.
5. **ESM project**: `package.json` sets `"type": "module"`. Server files use ESM imports but the production bundle is CJS (`dist/index.cjs`).
6. **Replit-specific plugins**: `vite.config.ts` includes Replit dev plugins — do not remove them or they will break the Replit dev environment.
7. **No test suite**: `npm run check` (tsc) is the only validation step available.
