# My Veda Verse

Two things live in this repository:

- **The landing page** at `/`, for [myvedaverse.in](https://myvedaverse.in). It explains the idea and lets visitors try each part of it.
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

The landing page also works with no configuration at all: without a database it shows its built-in demo content. The product needs the database.

## Configuration

Copy `.env.example` to `.env`. Use `.env` rather than `.env.local`, because the Prisma CLI and the seed script read it too.

| Variable | What it does |
| --- | --- |
| `DATABASE_URL` | PostgreSQL 15 or newer. Required for the product; optional for the landing page. |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Email magic-link sign-in. A member's profile is created the first time they sign in, and they start with onboarding. |
| `NEXT_PUBLIC_SITE_URL` | The origin used in the sign-in email link (defaults to `http://localhost:3000`). |
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

- `app/(landing)/` is the landing page. Its stylesheet, `app/styles/mvv.css`, is **frozen**: `npm run gate` fails if it changes.
- `app/(app)/` is the product, with its own root layout and stylesheet (`product.css`, the "Organic" design system). Signed-in screens share `app/(app)/(shell)/layout.tsx`.
- `lib/app/` holds the server-side building blocks: the session (`session.ts`), what the viewer follows and mutes (`viewer.ts`), the Edition and Following feeds (`feed.ts`), a loader per screen, notification delivery (`notify.ts`) and the label rules (`labels.ts`).
- `actions/app/` holds the server actions. Each returns `{ ok, error }`, so refusals reach the member instead of being swallowed in production.
- `components/app/` holds the product's client components.
- The data model is in `src/prisma/contract.prisma`, with migrations in `migrations/`. The product's tables sit alongside the landing page's demo tables and don't touch them. (`prisma/schema.prisma` is an older copy and is not used.)

## Database

```bash
npm run db:migrate          # apply migrations (reads DATABASE_URL from .env)
npm run db:seed             # product sample data; safe to re-run
npm run db:seed:landing     # the landing page's demo feed tables
```

After changing the contract, run `npm run contract:emit`, then `npx prisma migration plan --name <name>`, then `npm run db:migrate`. Note that in Prisma 8, `.update()` and `.delete()` only change the first matching row. Use `updateAndCount()` or `deleteAndCount()` when you mean all of them.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build and server |
| `npm run lint` | ESLint |
| `npm run gate` | Checks that the frozen landing stylesheet is unchanged |
| `npm run db:migrate` / `npm run db:seed` | Apply migrations / load the product's sample data |
