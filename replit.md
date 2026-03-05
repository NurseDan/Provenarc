# Provenarc Aero Solutions Website

## Overview
Premium trust-first luxury B2B marketing website for Provenarc Aero Solutions (a division of Provenarc Group LLC) showcasing global aircraft documentation and 3D scanning services. Follows quiet luxury design principles — no specific pricing displayed, consultation-first CTAs, confidentiality as a premium signal. Includes partner login portals, blog ("Insights") system with admin posting, and role-based dashboards.

## Architecture
- **Frontend**: React + Vite, Wouter routing, Framer Motion animations, Shadcn/ui components, TanStack Query
- **Backend**: Express.js API routes for form submissions, authentication, and blog CRUD
- **Database**: PostgreSQL via Drizzle ORM
- **Auth**: express-session + connect-pg-simple + bcrypt; session stored in PostgreSQL
- **Styling**: Tailwind CSS with custom gold-accented aviation aesthetic

## Design System
- **Fonts**: IBM Plex Sans (body), Playfair Display (headers), IBM Plex Mono (labels/code)
- **Primary accent**: Gold (#c9a96e) mapped to `--primary` CSS variable (HSL 37 42% 61%)
- **Dark sections**: Hardcoded hex (#141210, #1c1916, #1f1b17) for hero/CTA areas
- **Light sections**: Shadcn semantic tokens (background, foreground, card, muted, etc.)
- **Dark section outline buttons**: `bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]`
- **Layout**: Top navbar only (no sidebar), responsive mobile hamburger menu
- **Design philosophy**: Quiet luxury — generous whitespace, muted palette, restrained imagery, no aggressive animations

## Trust Architecture
- **No specific pricing** on any public page — uses investment framework with cost drivers
- **CTA hierarchy**: Nav="Schedule a Consultation", Hero="Schedule a Discovery Session", Mid-page="Discuss Your Project", FAQ-end="Ready to protect your records?", Footer="Let's Discuss Your Aircraft"
- **Reassurance text** beside every CTA: "No commitment required. 30-minute confidential call."
- **Named methodology**: "The Provenarc Protocol" (NDA-First, On-Site Only, 3:1 Quality Standard, Fixed-Price Guarantee)
- **Confidentiality positioning**: Discretion framed as premium feature, not marketing gap

## Pages
- **Home** (`/`): Trust architecture sequence — Hero → Trust Bar → Services Overview → Process → Confidentiality → Fixed-Price Guarantee → CTA
- **Services** (`/services`): 5 tiers with scope/deliverable checklists (no prices), add-ons, investment framework section
- **How It Works** (`/how-it-works`): 5-step process (Confidential Consultation first), 3D scanning, RecordVault, fixed-price guarantee
- **Why Provenarc** (`/why-provenarc`): Risk stats (qualitative), The Provenarc Protocol methodology, comparison table, independence framing, testimonials
- **About** (`/about`): Etymology, founding story, Our Principles (Precision/Integrity/Discretion/Innovation), corporate structure
- **Partners** (`/partners`): Broker referral program, MRO revenue share, insurance integration (no dollar amounts)
- **FAQ** (`/faq`): 4 categories (Fit & Scope, Process & Timeline, Investment & Value, Security & Confidentiality), 12 questions
- **Contact** (`/contact`): "Schedule a Discovery Session" framing, consultation form (no pricing in dropdowns), confidentiality notice
- **Insights** (`/insights`): Blog listing page with premium card layout
- **Insights Post** (`/insights/:slug`): Individual blog post with markdown rendering
- **Blog Admin** (`/admin/blog`): Admin-protected blog management (create/edit/publish/delete)
- **Privacy** (`/privacy`): Standard privacy policy
- **Broker Login** (`/broker/login`): Login form for broker/agent partners
- **MRO Login** (`/mro/login`): Login form for MRO facility partners
- **Broker Dashboard** (`/broker/dashboard`): Protected dashboard with referral stats
- **MRO Dashboard** (`/mro/dashboard`): Protected dashboard with service stats

## Database Tables
- `users`: id, username, password, role (broker/mro/admin), companyName, contactName, email, phone
- `quote_requests`: name, email, phone, company, aircraftType, serviceTier, location, timeline, message
- `contact_inquiries`: name, email, phone, inquiryType, message
- `blog_posts`: id, title, slug (unique), excerpt, content (markdown), author, coverImageUrl, category, tags (text array), published, publishedAt, createdAt, updatedAt

## API Routes
- `POST /api/quote-requests` - Submit consultation request
- `POST /api/contact` - Submit general inquiry
- `POST /api/auth/login` - Login (returns user data)
- `POST /api/auth/logout` - Logout (destroys session)
- `GET /api/auth/me` - Current user info
- `GET /api/auth/dashboard` - Protected role-specific dashboard data
- `GET /api/blog` - Public published blog posts
- `GET /api/blog/:slug` - Public single blog post by slug
- `GET /api/admin/blog` - Admin: all posts including drafts
- `POST /api/blog` - Admin: create blog post
- `PATCH /api/blog/:id` - Admin: update blog post
- `DELETE /api/blog/:id` - Admin: delete blog post

## Auth System
- Session-based auth with express-session + connect-pg-simple
- Sessions stored in PostgreSQL `session` table
- Roles: broker, mro, admin
- `useAuth` hook in `client/src/hooks/useAuth.ts` for frontend auth state
- `requireRole` middleware enforces role-based access on API routes
- Blog admin requires "admin" role

## Service Tiers (No prices displayed)
1. Essential - Piston/single-engine aircraft, records digitization
2. Complete - Turboprop, records + exterior/interior 3D
3. Premium - Light jets, comprehensive documentation + 3D
4. Executive - Large cabin jets
5. Flagship - Ultra-premium/widebody aircraft

## Key Design Patterns
- `fadeUp` animation pattern used consistently across all pages
- Investment framework: "shaped by four factors" (aircraft type, scan locations, timeline, deliverable specs)
- Fixed-price guarantee: "Your engagement price is fixed at proposal. No scope creep."
- Office hours: Mon-Fri 8AM-6PM CST
- All data-testid attributes on interactive and display elements
