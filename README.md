# My Veda Verse

The site for [myvedaverse.in](https://myvedaverse.in): a social platform built for better conversations. It's a single long page that explains the product and lets visitors try each idea: a feed that ends, labelled posts, a pause before heated replies, restating the other view before disagreeing, and messages that arrive in delivery windows.

Built with Next.js 16 (App Router), React 19, Prisma 8 (`@prisma/orm-postgres`) and Supabase Auth.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No configuration is needed: without a database or Supabase project, the page runs on the demo content in `lib/data.ts`. All the demos work, and nothing is saved.

## Configuration

Copy `.env.example` to `.env` and fill in whatever you have. Use `.env` rather than `.env.local`, because the Prisma CLI and the seed script read it too. Every variable is optional.

| Variable | Enables |
| --- | --- |
| `DATABASE_URL` | The live feed: a finite feed session per visit, plus reactions, saves, poll votes and the post composer. |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Email magic-link sign-in, and the delivery-window settings in the menu. |
| `NEXT_PUBLIC_SITE_URL` | The origin used in the sign-in email link (defaults to `http://localhost:3000`). |

If the database is set but can't be reached, the page logs the error and shows the demo content instead of failing.

### Database

The data contract lives in `src/prisma/contract.prisma`, and its migrations are in `migrations/`. (`prisma/schema.prisma` is an older copy and is not used.)

```bash
npm run db:migrate   # apply the migrations
npm run db:seed      # load the demo people, posts and reels
```

After changing the contract, run `npm run contract:emit` to regenerate `contract.json` and `contract.d.ts`.

## How the page is put together

- `app/page.tsx` loads the signed-in user and the feed (`lib/content.ts`), then renders the sections in `components/`.
- `app/styles/mvv.css` is the design system, copied verbatim from `reference/index-improved.html`. **It is frozen**: `npm run gate` fails if it changes. Put new rules in `app/styles/app-additions.css`, using only the existing custom properties.
- `public/engine.js` holds the page-wide behaviour from the reference: the night sky, scroll reveals, wayfinding, sound, the stillness toggle, the join form, the menu sheet, the reply pause and the community rooms. Anything with its own state (the feed, composer, reels, Discuss gate, Share, the inbox) is a React component, mostly in `components/HowDemos.tsx`.
- `actions/` holds the server actions. They use `getCurrentUser()` from `utils/supabase/server.ts`, which returns `null` when Supabase isn't configured.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build and server |
| `npm run lint` | ESLint |
| `npm run gate` | Checks that the frozen stylesheet is unchanged |
| `npm run db:migrate` / `npm run db:seed` | Apply migrations / load demo data |
