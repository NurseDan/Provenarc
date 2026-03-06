# Provenarc Group Website

## Overview
Premium multi-division trust-first luxury B2B marketing website for Provenarc Group LLC, showcasing two divisions: Aero Solutions (aircraft documentation) and Marine (vessel documentation). Styled after private wealth management firms (Patek Philippe, Goldman Sachs private wealth). Quiet luxury design — no pricing displayed, consultation-first CTAs, confidentiality as premium signal. Includes partner login portals, blog ("Insights") system with admin posting, role-based dashboards, division-specific partner pages, expanded add-on services, fleet programs, and bespoke ultra-premium tier.

## Architecture
- **Frontend**: React + Vite, Wouter routing, Framer Motion animations, Shadcn/ui components, TanStack Query, react-helmet-async for SEO
- **Backend**: Express.js API routes for form submissions, authentication, and blog CRUD
- **Database**: PostgreSQL via Drizzle ORM
- **Auth**: express-session + connect-pg-simple + bcrypt; session stored in PostgreSQL
- **Styling**: Tailwind CSS with custom gold-accented luxury aesthetic
- **SEO**: Per-page meta tags via `<SEO>` component (`client/src/components/SEO.tsx`), JSON-LD structured data, HelmetProvider in main.tsx

## Site Structure
- `/` — **GroupHome**: Provenarc Group landing page (private wealth style, two division showcase, trust pillars, heritage philosophy)
- `/aero` — **AeroHome**: Aero Solutions division page (aviation documentation, 5 tiers, drone tech, museum-grade archival, additional services, fleet programs, bespoke tier, partner CTA)
- `/marine` — **Marine**: Marine division page (vessel documentation, 5 tiers, hull scanning, VesselVault, additional services, fleet programs, bespoke tier, worldwide emphasis, partner CTA)
- `/marine/why-us` — **MarineWhyUs**: Why Provenarc Marine (underwater 3D scanning, zero shipping risk, comparison table, who trusts us)
- `/marine/process` — **MarineProcess**: Marine process (10-step workflow, service tiers, expedited service, underwater operations protocol)
- `/aero/services` (also `/services`) — Aero service tier details, technology section (underwater 3D, nondestructive scanning, document restoration), expanded add-ons (rapid deployment, insurance, pre-sale, regulatory), fleet services, bespoke services
- `/aero/how-it-works` (also `/how-it-works`) — The Provenarc Method (5 steps, "Precision Without Rush" philosophy, Advanced Drone Technology, 3D scanning, RecordVault)
- `/aero/why-provenarc` (also `/why-provenarc`) — Risk stats, The Provenarc Protocol, comparison table, independence, testimonials
- `/marine/services` — **MarineServices**: Marine service tier details (5 tiers, technology section (maritime underwater 3D, underwater 3D, nondestructive scanning, document restoration), expanded add-ons, fleet services, bespoke services)
- `/aero/partners` — **AeroPartners**: Aviation-specific partnership page (broker models, MRO facility, insurance carrier, fleet partner programs, ROI metrics, expedited service)
- `/marine/partners` — **MarinePartners**: Maritime-specific partnership page (yacht broker models, management company, marine insurance/P&I club, fleet programs, worldwide deployment, ROI metrics)
- `/about` — "Three Decades of Aviation Excellence" narrative, three pillars, corporate structure (two divisions Active), partnerships
- `/partners` — Generic partnership overview (referral, white-label, co-branded), expedited service, broker deliverables, ROI metrics
- `/faq` — 4 categories, 12 questions
- `/contact` — "Schedule a Discovery Session", context-aware forms with URL param support (?type=bespoke&division=aero), division selector, vessel/aircraft type options, expanded inquiry types
- `/insights` — Blog listing (6 published research articles)
- `/insights/:slug` — Individual blog post
- `/admin/blog` — Admin blog management
- `/privacy` — Privacy policy
- `/broker/login`, `/mro/login` — Partner login portals
- `/broker/dashboard`, `/mro/dashboard` — Protected dashboards

## Design System
- **Fonts**: IBM Plex Sans (body), Playfair Display (headers), IBM Plex Mono (labels/code)
- **Primary accent**: Gold (#c9a96e) mapped to `--primary` CSS variable (HSL 37 42% 61%)
- **Dark sections (Aero)**: `from-[#141210] via-[#1c1916] to-[#1f1b17]`
- **Dark sections (Marine)**: `from-[#0c1219] via-[#111a22] to-[#15202b]`
- **Light sections**: Shadcn semantic tokens (background, foreground, card, muted, etc.)
- **Dark section outline buttons**: `bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]`
- **Icon containers**: `rounded-full` on marketing/content pages; `rounded-md` acceptable on dashboard/admin pages
- **Section label tracking**: `tracking-[0.3em]` consistently across all pages
- **Layout**: Top navbar with Divisions dropdown, responsive mobile hamburger menu
- **Design philosophy**: Quiet luxury — generous whitespace, muted palette, restrained imagery, no aggressive animations
- **Hover interactions**: Use `hover-elevate` utility class (not `hover:shadow-md` with `transition-all`)

## Navigation
- **Navbar**: PROVENARC Group logo → Divisions dropdown (Aero Solutions, Marine) → Services dropdown (Aero Services, Marine Services) → How It Works dropdown (Aero Process, Marine Process) → Why Provenarc dropdown (Aero, Marine) → Insights → Company dropdown (About, Aero Partners, Marine Partners, FAQ) → Login dropdown → Schedule a Consultation button
- **Footer**: 5-column layout — Group description, Divisions, Services, Company (with Aero Partners & Marine Partners), Contact CTA
- **Mobile**: Grouped sections — Divisions, Services (Aero/Marine), How It Works (Aero/Marine), Why Provenarc (Aero/Marine), Insights, Company, login portals, consultation button

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

## Technology Sections
Both Aero and Marine services pages include detailed technology sections:
    - **Underwater 3D Scanning** (Marine only): Certified scuba diver-deployed structured-light scanners, eliminating haul-out requirements
    - **Superstructure Documentation** (Marine only): High-resolution exterior capture from waterline to masthead
    - **Nondestructive Document Scanning**: Zero-contact, UV-free LED, 600+ DPI, museum-grade
    - **Document Restoration**: Optional add-on — archival conservation, ink stabilization, mold remediation, binding repair

## Expanded Add-On Services
Both divisions offer:
- **Rapid Deployment Program**: 48-72 hour worldwide emergency mobilization
- **Insurance Baseline Documentation**: Pre-incident condition capture
- **Before/After/Restored Comparison Package**: Three-phase 3D documentation for claims
- **Pre-Sale & Transaction Support**: Expedited documentation for sales
- **Regulatory & Inspection Documentation**: DOT, FAA, USCG, IMO, classification society, flag state
- **Document Restoration**: Conservation of damaged/aged records

## Fleet Services
Both divisions offer fleet programs for multi-asset operators:
- Volume discount rates
- Scheduled annual documentation cycles
- Dedicated fleet account manager
- Consistent standards across fleets
- Worldwide deployment
- "Contact Us for Fleet Pricing" CTA (no prices displayed)

## Bespoke Services (Positioned FIRST on all pages)
Ultra-premium tier for both divisions — positioned before standard service tiers:
- "By Invitation or Inquiry" positioning
- Language implies serving royals, heads of state, sovereign fleets, and the global elite
- Personal project director, sovereign-grade confidentiality
- Unlimited scope & revisions
- Custom archival formats
- Worldwide availability, any timeline
- CTAs link to `/contact?type=bespoke&division=aero` (or marine)

## Insurance Coverage & Guarantees
Prominent sections on AeroHome and Marine pages:
- **Insurance**: General liability, E&O, equipment & technology, inland marine/bailee, workers comp, cyber liability
- **Guarantees**: Fixed-price, NDA/confidentiality, 3:1 quality verification, satisfaction, 100+ year archival material, on-time delivery
- Certificate of Insurance provided before every engagement
- Briefer trust badges on Services and MarineServices pages

## Contact Form Features
- URL param support: `?type=` (bespoke, fleet, insurance, rapid-deployment, partnership, restoration) and `?division=` (aero, marine)
- Context banner shows when type param is passed
- Division selector (Aero, Marine, Both)
- Dynamic asset type options (aircraft or vessel types based on division)
- Service interest dropdown includes bespoke, fleet, insurance, rapid deployment, restoration
- Emergency timeline option (48-72hr)
- All CTAs pass context params to /contact

## SEO & AI Optimization
- Per-page unique title, description, and OG tags via `<SEO>` component
- JSON-LD structured data: Organization (GroupHome), FAQPage (FAQ), Article (BlogPost)
- robots.txt in public directory
- react-helmet-async HelmetProvider wrapping app

## Blog Content (6 Published Posts)
1. "Why LiDAR 3D Scanning Is Transforming Asset Documentation" — Technology
2. "The Hidden Risk: Why Shipping Irreplaceable Documents Is a Liability" — Risk Management
3. "What to Look for in an Asset Risk Mitigation Company" — Industry Guide
4. "Before, During, and After: How 3D Documentation Protects Your Insurance Claim" — Insurance
5. "Nondestructive Document Scanning: Preserving Originals While Creating Digital Permanence" — Technology
6. "The ROI of Professional Asset Documentation for High-Value Vehicles" — Business Case

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
- `quote_requests`: name, email, phone, company, division, assetType, serviceTier, location, timeline, message
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
- Division sub-pages provide deeper content per division
- Navbar uses dropdown menus for Services, How It Works, Why Provenarc, and Company
- Partner marketing lives on dedicated partner pages (/aero/partners, /marine/partners) — individual division pages show brief "For Partners" CTA only
- Worldwide emphasis throughout — "six continents, seventeen flag jurisdictions" messaging
