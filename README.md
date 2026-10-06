# My Veda Verse

Two things live in this repository:

- **The landing page** at `/`, for [myvedaverse.in](https://myvedaverse.in): *Management is new. Its questions are not.* It presents Veda Verse as a place to learn management, with each idea read alongside India's classical texts, in the flat, ruled "Modernist" design (Archivo, a red accent, square corners). It has a sample concept to try (a "before you read" question, then a full Selection page with an Ancient Lens and a note kept on the device), a search over ten areas and ten texts. Signing in is optional, and invited members can still sign in from the header.
- **Veda Verse, the product**, at `/home` and the pages around it. Members ask questions and share what they know, and every post says what it rests on: *Asking*, *Documented*, *Lived*, *Told* or *My view*. There are no public counts, and the daily Edition ends.

Built with Next.js 16 (App Router), React 19, Prisma 8 (`@prisma/orm-postgres`) on PostgreSQL, and Supabase Auth.

## Getting started

```bash
npm install
cp .env.example .env          # then set DATABASE_URL
npm run db:migrate            # create the tables
npm run db:seed               # sample members, circles, questions and house pieces
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) for the landing page.
- Open [http://localhost:3000/signin](http://localhost:3000/signin) for the product. In development you can sign in as any seeded member; Ananya Krishnan's account has the most going on.

The landing page works with no configuration at all: everything on it runs in the browser, and the only things it remembers (the concept to "Continue" with, and the reader's note) stay in that browser's local storage. The product needs the database.

To put the site live on [myvedaverse.in](https://myvedaverse.in), follow [DEPLOY.md](DEPLOY.md). It covers hosting, database, sign-in email and DNS records.

## Configuration

Copy `.env.example` to `.env`. Use `.env` rather than `.env.local`, because the Prisma CLI and the seed script read it too.

| Variable | What it does |
| --- | --- |
| `DATABASE_URL` | PostgreSQL 15 or newer. Required for the product; optional for the landing page. |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Email magic-link sign-in. A member's profile is created the first time they sign in, and they start with onboarding. |
| `NEXT_PUBLIC_SITE_URL` | The site's public address, used in the sign-in email link, canonical and share tags, `robots.txt` and the sitemap. Defaults to `https://myvedaverse.in` in production and `http://localhost:3000` in development. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` | Sends the early list's confirmation emails. Without them, addresses are saved but no confirmation goes out. With GoDaddy email, use `smtpout.secureserver.net`, port `465`, and the mailbox's address and password. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional. The `content` value of Google Search Console's or Bing Webmaster Tools' HTML-tag verification, if you verify the site that way instead of with a DNS record. See DEPLOY.md, "Getting found on Google". |
| `DEMO_LOGIN` | `1` allows signing in as a seeded member without email; `0` turns it off. It is on by default in development and off in production. **Never enable it on a real deployment**, because it lets anyone act as any member. |

## The product

| Screen | Path | What it does |
| --- | --- | --- |
| Sign in | `/signin` | Email magic link (Supabase), or a demo member when demo sign-in is on. |
| Onboarding | `/welcome` | Pick at least 3 topics, what brings you here, up to 3 "Ask me about" topics, people and a circle to follow, then a Documented-or-Told check. |
| Home | `/home` | *Today's Edition*: a short daily selection from people, circles and topics you follow, plus the house. Each post gives the reason it is there, and open questions you could answer appear in a box. *Following* is newest first since your last visit. |
| Reader | `/read/[slug]`, `/note/[id]` | House pieces, with their sources, what's Documented kept apart from what's Told, and corrections. Tap a paragraph to ask about it or add context. Replies are grouped by how they relate (adds context, builds on, disagrees, asks). |
| Question | `/q/[id]` | Answers are grouped: the one that helped, answers, builds-on, and "several views" when people disagree. Only the asker marks the answer that helped. |
| Communities | `/c`, `/c/[slug]` | Circles, boards, cohorts and practice groups, each with its own memory rules. Threads, spoiler-gated chapters, archive and charter. Cohorts take applications. |
| Profile | `/u/[handle]` | Ask-me-about and curious-about topics; posts, answers and questions. Follow, mute, block or report. Your own profile has a dashboard only you can see. |
| Discover | `/discover`, `/t/[topic]` | Search across questions, posts, people, topics and circles, with an "Only Documented" filter. Topic pages list what's best documented, open questions, circles and people. |
| Library | `/library` | Saved items with private notes and a label filter, collections (private or shared with a circle), drafts and reading history. |
| Inbox | `/inbox` | Answers, builds-on, mentions and thanks arrive right away, but are held until 8 am during quiet hours (10 pm to 8 am in your time zone). Circle activity waits for a daily or weekly digest. Counts and "trending" notifications are never sent. You can reply straight from the Inbox. |

### Rules the backend enforces

These live in the server actions in `actions/app/`, not just in the UI:

- A **Documented** post needs a source that points at a specific page or entry (a URL with a path, an ISBN or a DOI), plus a source type.
- **Disagreeing** needs a reason. Replies and answers always say how they relate.
- **Helpful** marks are private: the author is thanked in their Inbox, and no totals are stored where anyone can see them.
- Only the asker can mark the answer that helped. You can't answer your own question or mark your own post helpful.
- **Members-only cohorts** stay closed to non-members, including their questions. **Boards** forget notes after their fade window. **Spoiler threads** stay hidden until you say you've read that far.
- **Mute** is silent. **Block** works both ways and ends any follows between you. **Not interested** hides a single item.
- Posting in a community requires membership. Only hosts can accept applications.
- Anything someone else has already answered or replied to can't be deleted.

### Code layout

- `app/(landing)/` is the landing site: the page itself, the unit chapters at `/learn` and `/learn/[slug]`, `/early-list` (where confirmation emails land) and `/privacy`, with its own root layout and stylesheet (`landing.css`).
  - The words are in `content/landing.ts`, and the components are in `components/landing/`. The design follows the Veda Verse Modernist site design (v2) home page, with its copy review: every verse shown is cited, and a slot with no verified content stays empty rather than showing a placeholder. Only the interactive parts (header, continue band, hero pair, "look inside" box, full sample concept, area search, toast) are client components. The fonts (Archivo and Tiro Devanagari Sanskrit) are served from `public/fonts`.
  - The home page leads into the chapters: its question cards, the hero example and the featured verse each link to the lesson where that passage is read. The header links to the chapters, glossary, revision sheets and community. The page lists every unit and chapter with live counts, explains the Documented and My view labels beside the featured verse, and describes the community as the app actually works (`COMMUNITY_POINTS` in `content/landing.ts`; keep it in step with the app). "Community" (in the header, the footer and the community section) opens the app at `/home`, which sends anyone not signed in to `/signin` first. It is the only way in from the landing site: there is no separate sign-in link, so the static pages make no request to find out who is signed in.
  - The learning content is organised by unit under `content/learn/units/` (Unit 1, management and managerial economics, is `units/unit-1/`; Unit 2, organisational behaviour and HRM, is `units/unit-2/`; Unit 6, strategic management, is `units/unit-6/`; Unit 7, marketing management, is `units/unit-7/`; units keep their syllabus numbers, so Units 3 to 5 are simply not written yet; each has `chapters.json`, `glossary.json` and `lessons/`, one file per chapter). `content/learn/index.ts` joins the units for the pages, and `content/learn/lesson-kit.ts` defines a guided lesson and the rules for writing one. Each chapter is a static page at `/learn/<slug>`; every concept opens in place into a question to answer first, the core idea, a quick check, the Ancient lens, a reflection prompt and a one-page summary. Quotes are HTML: `<i>` for transliterated Sanskrit, `<span lang="ta" class="ta">` for Tamil and `<span class="ref">` for the reference. Passages are marked `documented` (it exists in a named text and the concept is a fair reading) or `view` (an interpretive parallel); keep that mark when adding them. `/learn` lists every unit, `/learn/glossary` the glossary and `/learn/revision` every lesson's summary, ready to print. The header search reads `/search-index.json`, built by `content/learn/search.ts`.
  - **Adding a unit:** copy `units/unit-2` to the new unit's folder (say `units/unit-3`), replace its data, give it its own `id`, `n`, title and groups in its `index.ts`, and list it in `units/index.ts`. The index, menus, search, glossary, revision sheets and sitemap pick it up. The build fails, with a list of what's wrong, if two chapters share a slug or two glossary terms an id, if a term points at a missing chapter, or if a lesson doesn't match its chapter (a block without a lesson, a passage used twice or not at all, an answer that isn't one of its options).
  - Readers' progress (concepts marked done, either by answering every check correctly or with "Mark as done"), notes and the Continue link are kept in the browser's local storage only.
  - The landing page no longer has an early-list form, but `/early-list` still serves the links in confirmation emails already sent, and the early list is stored in the `earlyListEntry` table by `actions/earlyList.ts`. An address counts once it's confirmed from the inbox, unconfirmed ones are deleted after 30 days, and confirming or removing takes a button press, so mail scanners can't do either.
- `app/(app)/` is the product, with its own root layout and stylesheet (`product.css`, the "Organic" design system). Signed-in screens share `app/(app)/(shell)/layout.tsx`.
- `lib/app/` holds the server-side building blocks: the session (`session.ts`), what the viewer follows and mutes (`viewer.ts`), the Edition and Following feeds (`feed.ts`), a loader per screen, notification delivery (`notify.ts`) and the label rules (`labels.ts`).
- `actions/app/` holds the server actions. Each returns `{ ok, error }`, so refusals reach the member instead of being swallowed in production.
- `components/app/` holds the product's client components.
- The data model is in `src/prisma/contract.prisma`, with migrations in `migrations/`. The product's tables sit alongside the tables of an earlier landing-page demo (`post`, `feedItem`, `reel` and so on), which nothing uses any more. (`prisma/schema.prisma` is an older copy and is not used.)

## Database

```bash
npm run db:migrate          # apply migrations (reads DATABASE_URL from .env)
npm run db:seed             # product sample data; safe to re-run, refuses once real members exist
npm run db:seed:topics      # only the topic list; use this on the live database
```

After changing the contract, run `npm run contract:emit`, then `npx prisma migration plan --name <name> --from <current storage hash>`, then `npm run db:migrate`. Give every new model `@@rls`: row-level security with no policies keeps Supabase's public Data API closed. The app connects as the tables' owner, so RLS doesn't restrict the app. Note that in Prisma 8, `.update()` and `.delete()` only change the first matching row. Use `updateAndCount()` or `deleteAndCount()` when you mean all of them.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build and server |
| `npm run lint` | ESLint |
| `npm run db:migrate` / `npm run db:seed` | Apply migrations / load the product's sample data |
| `npm run db:seed:topics` | Load only the topic list (for a real deployment) |
| `npm run vercel-build` | What Vercel runs on each deploy. On production deploys it first migrates and loads topics (`scripts/prepare-db.ts`); previews only build |
