# Contributing — RAMS Website

This site is built so the **youth committee** can update content on GitHub without installing Node.js locally.

## How changes go live

1. Edit a file on [github.com/ramsnashvile/rams-website](https://github.com/ramsnashvile/rams-website) (pencil icon)
2. Commit to a branch → open a **Pull Request**
3. Vercel creates a **preview URL** on the PR — share it for committee review
4. Merge to `main` → site updates in about one minute

Ask a maintainer to enable **branch protection** on `main` (require 1 reviewer) to avoid accidental live changes.

## What to edit (and where)

### Event date, venue, emails, payment links

**File:** `src/data/event.ts`

- Event name, date, venue, tagline
- `stripe.gold`, `stripe.silver`, `stripe.bronze`, `stripe.donation` — paste Stripe Payment Link URLs
- `rsvpTallyUrl`, `foodTallyUrl`, `contactFormUrl` — Tally embed URLs
- `volunteerSignupUrl` — SignUpGenius embed URL
- `financeSheetEmbedUrl` — published Google Sheet embed URL
- `highlightVideoUrl` — YouTube embed URL (format: `https://www.youtube.com/embed/VIDEO_ID`)

### Program schedule

**File:** `src/data/schedule.ts`

Add or edit objects:

```ts
{ time: "9:00 AM", title: "Doors Open", description: "...", tags: ["All attendees"], period: "morning" }
```

Use `period: "morning"` or `"afternoon"` for timeline grouping.

### Sponsors on the homepage

**File:** `src/data/sponsors.ts`

1. Add logo image to `public/sponsors/your-sponsor.png`
2. Add entry: `{ name: "Family Name", tier: "gold", logoUrl: "/sponsors/your-sponsor.png" }`

Tiers: `gold`, `silver`, or `bronze`.

### Volunteer task cards (display only)

**File:** `src/data/volunteer-tasks.ts`

Update task names, schedules, and slot counts. **Live signup** is managed in SignUpGenius — keep `volunteerSignupUrl` in `event.ts` in sync.

### Food needs table (display)

**File:** `src/data/food-needs.ts`

Or use a public Google Sheet embed (add URL to `event.ts` when ready).

## Preview locally (optional)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Do not change (unless you know React)

- Files in `src/components/` — layout and styling
- `tailwind.config.ts`, `src/app/globals.css` — design system colors

## Getting help

- General: info@ramsnashville.org
- Technical maintainer: your developer contact
