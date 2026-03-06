# Provenarc Group Website

## Overview
Premium multi-division trust-first luxury B2B marketing website for Provenarc Group LLC, showcasing two divisions: Aero Solutions (aircraft documentation) and Marine (vessel documentation). Styled after private wealth management firms (Patek Philippe, Goldman Sachs private wealth). Quiet luxury design — no pricing displayed, consultation-first CTAs, confidentiality as premium signal. Includes partner login portals, blog ("Insights") system with admin posting, and role-based dashboards.

## Architecture
- **Frontend**: React + Vite, Wouter routing, Framer Motion animations, Shadcn/ui components, TanStack Query
- **Backend**: Express.js API routes for form submissions, authentication, and blog CRUD
- **Database**: PostgreSQL via Drizzle ORM
- **Auth**: express-session + connect-pg-simple + bcrypt; session stored in PostgreSQL
- **Styling**: Tailwind CSS with custom gold-accented luxury aesthetic

## Site Structure
- `/` — **GroupHome**: Provenarc Group landing page (private wealth style, two division showcase, trust pillars, heritage philosophy)
- `/aero` — **AeroHome**: Aero Solutions division page (aviation documentation, 5 tiers, drone tech, museum-grade archival)
- `/marine` — **Marine**: Marine division page (vessel documentation, 5 tiers, hull scanning, VesselVault)
- `/marine/why-us` — **MarineWhyUs**: Why Provenarc Marine (underwater 3D scanning, zero shipping risk, comparison table, who trusts us)
- `/marine/process` — **MarineProcess**: Marine process (10-step workflow, service tiers, expedited service, underwater operations protocol)
- `/services` — Aero-focused service tier details with full luxury descriptions, museum-grade archival volumes section
- `/how-it-works` — The Provenarc Method (5 steps, "Precision Without Rush" philosophy, Advanced Drone Technology, 3D scanning, RecordVault)
- `/why-provenarc` — Risk stats, The Provenarc Protocol, comparison table, independence, testimonials
- `/about` — "Three Decades of Aviation Excellence" narrative, three pillars, corporate structure (two divisions Active), partnerships
- `/partners` — Three partnership models (Referral, White-Label, Co-Branded), expedited service (50%/67%), broker deliverables, ROI metrics
- `/faq` — 4 categories, 12 questions
- `/contact` — "Schedule a Discovery Session", consultation form with updated tier dropdown
- `/insights` — Blog listing
- `/insights/:slug` — Individual blog post
- `/admin/blog` — Admin blog management
- `/privacy` — Privacy policy
- `/broker/login`, `/mro/login` — Partner login portals
- `/broker/dashboard`, `/mro/dashboard` — Protected dashboards

## Design System
- **Fonts**: IBM Plex Sans (body), Playfair Display (headers), IBM Plex Mono (labels/code)
- **Primary accent**: Gold (#c9a96e) mapped to `--primary` CSS variable (HSL 37 42% 61%)
- **Dark sections**: Hardcoded hex (#141210, #1c1916, #1f1b17) for hero/CTA areas
- **Light sections**: Shadcn semantic tokens (background, foreground, card, muted, etc.)
- **Dark section outline buttons**: `bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]`
- **Layout**: Top navbar with Divisions dropdown, responsive mobile hamburger menu
- **Design philosophy**: Quiet luxury — generous whitespace, muted palette, restrained imagery, no aggressive animations

## Navigation
- **Navbar**: PROVENARC Group logo → Divisions dropdown (Aero Solutions, Marine) → Services, How It Works, Why Provenarc, Insights → Company dropdown (About, Partners, FAQ) → Login dropdown → Schedule a Consultation button
- **Footer**: 5-column layout — Group description, Divisions, Services, Company, Contact CTA
- **Mobile**: Divisions section at top of mobile menu, then main links, login, consultation button

## Service Tiers (No prices displayed on any page)

### Aero Solutions (RecordVault platform)
1. Heritage Foundation — Piston aircraft, records digitization, 15 days
2. Complete Documentation — Turboprop, records + 3D baseline, 20 days
3. Premium Comprehensive — Light jets, mechanical systems, 25 days
4. Executive Documentation — Large cabin jets, white-glove, 25-30 days
5. Flagship Comprehensive — Ultra-premium jets, heritage archive, 30-40 days

### Marine (VesselVault platform)
1. Essential Vessel Documentation — 25-30 days
2. Complete Vessel Documentation — 30-35 days
3. Premium Comprehensive — 35-40 days
4. Superyacht Executive Documentation — 40-50 days
5. Flagship Heritage Preservation — Custom timeline

## Premium Language Guidelines
- **Never use**: fast, cheap, easy, simple, affordable, beginner-friendly, rush service
- **Always use**: thorough, comprehensive, meticulous, exacting, three decades, museum-grade, insurance-grade, forensic accuracy, heirloom quality, heritage preservation, white-glove service
- **No dollar amounts** on any public-facing page
- **CTA consistency**: "Schedule a Discovery Session" / "Schedule a Consultation" / "Discuss Your Project"
- **Reassurance text** beside every CTA: "No commitment required. 30-minute confidential call."

## Trust Architecture
- **No specific pricing** on any public page — uses investment framework with cost drivers
- **Named methodology**: "The Provenarc Protocol" (NDA-First, On-Site Only, 3:1 Quality Standard, Fixed-Price Guarantee)
- **Confidentiality positioning**: Discretion framed as premium feature, not marketing gap
- **Trust pillars**: 30+ Years Combined Experience, Museum-Grade Archival Standards, Global White-Glove Service, Proprietary Technology

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

## Key Design Patterns
- `fadeUp` animation pattern used consistently across all pages
- Investment framework: "shaped by four factors" (aircraft type, scan locations, timeline, deliverable specs)
- Fixed-price guarantee: "Your engagement price is fixed at proposal. No scope creep."
- Office hours: Mon-Fri 8AM-6PM CST
- All data-testid attributes on interactive and display elements
- Division sub-pages: `/marine/why-us` and `/marine/process` provide deeper content for the Marine division
