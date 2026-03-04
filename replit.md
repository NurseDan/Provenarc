# Provenarc Aero Solutions Website

## Overview
Premium marketing website for Provenarc Aero Solutions (a division of Provenarc Group LLC) showcasing global aircraft documentation and 3D scanning services. Includes partner login portals for Brokers/Agents and MRO facilities.

## Architecture
- **Frontend**: React + Vite, Wouter routing, Framer Motion animations, Shadcn/ui components, TanStack Query
- **Backend**: Express.js API routes for form submissions and authentication
- **Database**: PostgreSQL via Drizzle ORM
- **Auth**: express-session + connect-pg-simple + bcrypt; session stored in PostgreSQL
- **Styling**: Tailwind CSS with custom gold-accented aviation aesthetic

## Design System
- **Fonts**: IBM Plex Sans (body), Playfair Display (headers), IBM Plex Mono (pricing/code)
- **Primary accent**: Gold (#c9a96e) mapped to `--primary` CSS variable (HSL 37 42% 61%)
- **Dark sections**: Hardcoded hex (#141210, #1c1916, #1f1b17) for hero/CTA areas
- **Light sections**: Shadcn semantic tokens (background, foreground, card, muted, etc.)
- **Dark section outline buttons**: `bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]`
- **Layout**: Top navbar only (no sidebar), responsive mobile hamburger menu

## Pages
- **Home** (`/`): Hero, features bar, stats, 5 service tier previews, process timeline, trust/social proof, CTA
- **Services** (`/services`): All 5 tiers with full scope breakdowns, add-ons section
- **How It Works** (`/how-it-works`): 5-step on-site process, 3D scanning technology, RecordVault platform
- **Pricing** (`/pricing`): Rate table, interactive travel cost estimator, comparison table, payment terms
- **Why Provenarc** (`/why-provenarc`): Risk stats, competitor comparison table, testimonials
- **About** (`/about`): Company story, "Provenance + Archive" etymology, differentiators, corporate structure
- **Partners** (`/partners`): Broker referral program (10-15% commission), MRO revenue share, insurance integration
- **FAQ** (`/faq`): 4 categories with accordion (General, Process, Pricing, Security)
- **Contact** (`/contact`): Quote request form (aircraft type dropdown, timeline/urgency), office hours, confidentiality notice
- **Privacy** (`/privacy`): Standard privacy policy
- **Broker Login** (`/broker/login`): Login form for broker/agent partners
- **MRO Login** (`/mro/login`): Login form for MRO facility partners
- **Broker Dashboard** (`/broker/dashboard`): Protected dashboard with referral stats and commissions
- **MRO Dashboard** (`/mro/dashboard`): Protected dashboard with scheduled services and revenue

## Database Tables
- `quote_requests`: name, email, phone, company, aircraftType, serviceTier, location, timeline, message
- `contact_inquiries`: name, email, phone, inquiryType, message
- `users`: id, username, password, role (broker/mro), companyName, contactName, email, phone

## API Routes
- `POST /api/quote-requests` - Submit quote request
- `POST /api/contact` - Submit general inquiry
- `POST /api/auth/login` - Login (returns user data)
- `POST /api/auth/logout` - Logout (destroys session)
- `GET /api/auth/me` - Current user info
- `GET /api/auth/dashboard` - Protected role-specific dashboard data

## Auth System
- Session-based auth with express-session + connect-pg-simple
- Sessions stored in PostgreSQL `session` table
- `useAuth` hook in `client/src/hooks/useAuth.ts` for frontend auth state
- Broker login → /broker/dashboard; MRO login → /mro/dashboard
- Dashboards redirect to login if unauthenticated

## Service Tiers
1. Essential ($17,700) - Piston aircraft, records digitization only
2. Complete ($35,400) - Turboprop, records + exterior/interior 3D
3. Premium ($53,100) - Light jets, complete + mechanical 3D
4. Executive ($150,000) - Large cabin jets ($10M-$30M)
5. Flagship ($210,000) - Ultra-premium jets ($30M+)

## Key Design Patterns
- `fadeUp` animation pattern used consistently across all pages
- Travel estimator: $2,400/day travel time + regional expenses at cost
- Payment terms: 50% deposit / 50% on delivery
- Office hours: Mon-Fri 8AM-6PM CST
