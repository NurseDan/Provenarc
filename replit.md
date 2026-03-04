# Provenarc Aero Solutions Website

## Overview
Premium marketing website for Provenarc Aero Solutions (a division of Provenarc Group LLC) showcasing global aircraft documentation and 3D scanning services.

## Architecture
- **Frontend**: React + Vite, Wouter routing, Framer Motion animations, Shadcn/ui components, TanStack Query
- **Backend**: Express.js API routes for form submissions
- **Database**: PostgreSQL via Drizzle ORM
- **Styling**: Tailwind CSS with custom gold-accented aviation aesthetic

## Design System
- **Fonts**: IBM Plex Sans (body), Playfair Display (headers), IBM Plex Mono (pricing/code)
- **Primary accent**: Gold (#c9a96e) mapped to `--primary` CSS variable
- **Dark sections**: Hardcoded hex (#141210, #1c1916, #1f1b17) for hero/CTA areas
- **Light sections**: Shadcn semantic tokens (background, foreground, card, muted, etc.)
- **Layout**: Top navbar only (no sidebar), responsive mobile hamburger menu

## Pages
- **Home** (`/`): Hero, features bar, stats, 5 service tier previews, process timeline, CTA
- **Services** (`/services`): All 5 tiers with full scope breakdowns, add-ons section
- **Pricing** (`/pricing`): Rate table, interactive travel cost estimator, comparison table, payment terms
- **About** (`/about`): Company story, team, differentiators, corporate structure, partnerships
- **Contact** (`/contact`): Quote request form + general inquiry form, both with PostgreSQL persistence

## Database Tables
- `quote_requests`: name, email, phone, company, aircraftType, serviceTier, location, message
- `contact_inquiries`: name, email, phone, inquiryType, message
- `users`: Standard auth table (unused currently)

## API Routes
- `POST /api/quote-requests` - Submit quote request
- `POST /api/contact` - Submit general inquiry

## Service Tiers
1. Essential ($17,700) - Piston aircraft, records digitization only
2. Complete ($35,400) - Turboprop, records + exterior/interior 3D
3. Premium ($53,100) - Light jets, complete + mechanical 3D
4. Executive ($150,000) - Large cabin jets ($10M-$30M)
5. Flagship ($210,000) - Ultra-premium jets ($30M+)

## Key Design Patterns
- `fadeUp` animation pattern used consistently across all pages
- Dark section buttons: `bg-[#faf6f1]/5 border-[#faf6f1]/15 text-[#faf6f1]`
- Travel estimator: $2,400/day travel time + regional expenses at cost
- Payment terms: 50% deposit / 50% on delivery
