# RAMS Nashville — Raayara Aaradhana Mahotsava 2026

Public website for [Raayara Aaradhana Mahotsava Samithi Nashville](https://github.com/ramsnashvile/rams-website) (~1,000 attendees). Built with Next.js 14, Tailwind CSS, and designed for easy handoff to a youth committee.

**Wireframe:** [nonprofit_event_website_wireframe.html](https://ramsnashvile.github.io/rams-wireframe/nonprofit_event_website_wireframe.html)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, CTAs, gallery, highlights |
| `/schedule` | Program timeline (`src/data/schedule.ts`) |
| `/rsvp` | Tally RSVP embed |
| `/volunteer` | Task list + SignUpGenius embed |
| `/food` | Food needs + Tally signup |
| `/sponsor` | Stripe Payment Link buttons |
| `/finance` | Transparent finance (sample + Google Sheet embed) |
| `/contact` | Emails + Tally contact form |

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch — connect external services

Edit **`src/data/event.ts`** and add real URLs:

1. **Tally.so** — `rsvpTallyUrl`, `foodTallyUrl`, `contactFormUrl`
2. **Stripe Payment Links** — `stripe.gold`, `silver`, `bronze`, `donation`
3. **SignUpGenius** — `volunteerSignupUrl` or `volunteerSignupDirectUrl`
4. **Google Sheets** — `financeSheetEmbedUrl`, `financeSheetPublicUrl`
5. **YouTube** — `highlightVideoUrl`, `youtubeChannelUrl`
6. **Optional** — `useHeroVideo: true` + add `public/videos/event-highlight.mp4`

## Deploy to Vercel (free)

1. Push this repo to [github.com/ramsnashvile/rams-website](https://github.com/ramsnashvile/rams-website)
2. Sign in at [vercel.com](https://vercel.com) → **Add Project** → import `rams-website`
3. Deploy — every push to `main` updates the live site
4. Optional: add custom domain in Vercel → point DNS from Cloudflare (~$10–12/year)

## Youth committee updates

See **[CONTRIBUTING.md](./CONTRIBUTING.md)** for how to edit schedule, sponsors, and payment links on GitHub without local setup.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Hosting: Vercel (hobby tier)
- Forms: Tally.so · Payments: Stripe Payment Links · Volunteer: SignUpGenius · Finance: Google Sheets

Bharathi RamaNa mukhya PraNaantargata Sri Krishnaarpanamastu 🙏
