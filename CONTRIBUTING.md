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

### Quizzes

**File:** `src/data/quiz.ts`

- Add or edit objects in the `quizzes` array
- Set `published: false` to hide a quiz
- Optional question image: add a file to `public/quiz/` and set `imageUrl: "/quiz/your-file.jpg"`
- `correctOptionId` must match one of the option `id` values
- Paste the Apps Script web app URL into `quizLeaderboard.scriptUrl` when the leaderboard Sheet is ready (leave empty until then)

Example question:

```ts
{
  id: "brindavana-town",
  prompt: "Sri Raghavendra Swamy entered Brindavana in which town?",
  imageUrl: "/quiz/mantralayam.jpg",
  options: [
    { id: "a", text: "Udupi" },
    { id: "b", text: "Mantralayam" },
  ],
  correctOptionId: "b",
  explanation: "His Brindavana is at Mantralayam.",
}
```

### Quiz leaderboard (Google Sheet)

Scores are stored in a Google Sheet. One-time setup:

1. Create a Google Sheet
2. **Extensions → Apps Script** — paste the contents of `scripts/quiz-leaderboard.gs`
3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the web app URL into `quizLeaderboard.scriptUrl` in `src/data/quiz.ts`
5. Commit and merge — the quiz pages will then show Post score and the top 10

Moderation: delete or edit a row in the Sheet. The next page load updates the board. Display names are public; scores are honor-system (submitted from the browser).

### Photo and video albums (Google Drive + YouTube)

**Files:** `src/data/albums.ts` and `scripts/drive-album.gs`

- Add one album per event in the `albums` array (`slug`, `title`, `year`, `description`)
- Paste each Drive folder ID into `driveFolderId`
- Optional: add `coverFileId` and `featuredFileIds` for homepage/gallery previews
- Add highlight videos with YouTube IDs (`videos[].youtubeId`); use **Unlisted** uploads

Drive photos are loaded through Apps Script (one-time setup):

1. Open any Google Sheet (used only to host script)
2. **Extensions → Apps Script** — paste `scripts/drive-album.gs`
3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the web app URL into `driveAlbums.scriptUrl` in `src/data/albums.ts`
5. Make sure each Drive album folder is shared as **Anyone with the link → Viewer**

Routes:

- `/gallery` lists all published albums
- `/gallery/[slug]` shows YouTube highlights and Drive photos

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
