# Putting myvedaverse.in live

The code is already set up for the domain:

- `myvedaverse.in` is the one address. `www.myvedaverse.in` redirects to it (a permanent redirect, keeping the path).
- `robots.txt`, `sitemap.xml` and the share card are generated from `NEXT_PUBLIC_SITE_URL`. The share card is the image people see when the link is pasted into WhatsApp, X or LinkedIn.
- Security headers are set, and HSTS is on in production.

What's left is choosing a host, adding the DNS records and filling in the settings. This guide uses **Vercel** for the site and **Supabase** for the database and sign-in, because both have free tiers that cover a launch. Any host that runs Node 20+ works, since the app is a standard `next build` / `next start`.

## 1. Database and sign-in: Supabase

1. Create a project at [supabase.com](https://supabase.com). Pick **South Asia (Mumbai)** as the region, and save the database password.
2. **Connection string.** Go to **Connect** and copy the **Session pooler** string (not the direct connection, which is IPv6-only, and not the transaction pooler). Add `?sslmode=require` to the end:
   ```
   postgres://postgres.<project-ref>:<password>@aws-0-ap-south-1.pooler.supabase.com:5432/postgres?sslmode=require
   ```
   If the password contains `@`, `:`, `/`, `#` or `%`, percent-encode those characters (`@` becomes `%40`). Otherwise the address breaks at that character.
3. **Tables.** Nothing to do by hand: every Vercel deploy runs `npm run vercel-build`, which:
   - applies any pending migrations;
   - loads the topic list that onboarding asks members to pick from;
   - switches on row-level security for every table.

   Supabase exposes every table in the `public` schema through its Data API, using the anon key that ships to every browser. The site doesn't use that API; it connects to Postgres directly as the tables' owner. So row-level security with no policies closes the API without changing anything the site does.

   To do the same from your own computer, put the connection string in `.env` as `DATABASE_URL` and run `npm run db:migrate`, then `npm run db:seed:topics`. Don't run `npm run db:seed` against the live database: it loads the sample people and posts, and it refuses to run once real members have signed up.
4. **Keys.** Under **Project Settings → API**, copy the project URL and the anon (or publishable) key.
5. **Sign-in addresses.** Under **Authentication → URL Configuration**:
   - Site URL: `https://myvedaverse.in`
   - Redirect URLs: `https://myvedaverse.in/auth/callback` and `http://localhost:3000/auth/callback`
6. **Email.** Supabase's built-in email is for testing only: it sends only to your own team's addresses, a few per hour. Before real members can sign in, set up **Authentication → Emails → SMTP settings** with a mail service. [Resend](https://resend.com) has a free tier. That service will ask you to add a few DNS records (SPF/DKIM) on `myvedaverse.in` so the sign-in emails don't land in spam. Use a sender such as `hello@myvedaverse.in`.

## 2. The site: Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub, click **Add New → Project** and import `obvioshek/Myveda`. It detects Next.js; keep the default build settings.
2. Under **Environment Variables** (Production), add:

   | Name | Value |
   | --- | --- |
   | `DATABASE_URL` | the Session pooler string from step 1.2 |
   | `NEXT_PUBLIC_SUPABASE_URL` | the project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | the anon or publishable key |
   | `NEXT_PUBLIC_SITE_URL` | `https://myvedaverse.in` |

   Don't set `DEMO_LOGIN`. On a live site it would let anyone act as any member.
3. Deploy. Every push to `master` then deploys automatically, and each deploy brings the database up to date first (see step 1.3). If the database can't be reached, the deploy fails and the previous version stays live.
4. Under **Settings → Functions**, set the region to **Mumbai (bom1)** so pages are served close to the database.

The free Hobby plan is for non-commercial use. Move to Pro once the site earns money.

## 3. Connect the domain

1. In Vercel, open **Settings → Domains** and add `myvedaverse.in`. When it offers to redirect `www.myvedaverse.in`, accept (the app redirects www as well).
2. Vercel then shows the DNS records to create. Add them wherever `myvedaverse.in` is registered (GoDaddy, Hostinger, BigRock and so on), under DNS / Manage DNS:

   | Type | Name / Host | Value |
   | --- | --- | --- |
   | A | `@` | the IP Vercel shows (at the time of writing `216.198.79.1`; the older `76.76.21.21` still works) |
   | CNAME | `www` | the target Vercel shows (for example `cname.vercel-dns.com`) |

   Use the exact values on your Vercel Domains page, because Vercel changes them from time to time.
   - Delete any existing A record on `@`, and any record on `www`, left over from a parking page.
   - Leave **MX** and **TXT** records alone. Those carry email.
3. DNS usually updates within an hour; it can take up to 48. Vercel issues the HTTPS certificate on its own once the records resolve, and the Domains page turns green.

## 4. Email to admin@myvedaverse.in

The site lists `admin@myvedaverse.in` as its contact address. If no mailbox exists yet, messages to it bounce. Two options:

- Forward it to your Gmail, using your registrar's free email forwarding or [ImprovMX](https://improvmx.com).
- Get a real mailbox, for example on Zoho Mail's free plan.

Either way, you add the MX records they give you. These don't clash with the Vercel records.

## 5. Check it

- `https://myvedaverse.in` loads with a padlock, and `https://www.myvedaverse.in` lands on it.
- `https://myvedaverse.in/robots.txt` and `/sitemap.xml` load.
- Pasting the link into WhatsApp shows the share card.
- Signing in at `/signin` sends an email, and the link opens `/welcome`.
- Optionally, add the site to [Google Search Console](https://search.google.com/search-console) using a DNS TXT record, and submit `https://myvedaverse.in/sitemap.xml`.

## Using a different host

Anything that runs Node works, including Railway, Render, Fly.io or a VPS with `npm ci && npm run build && npm start` behind nginx. Set the same four variables, point the A/CNAME records at that host, and get HTTPS from the host or from Let's Encrypt. Static-only hosting, such as shared cPanel hosting without Node, can't run it, because sign-in and the product need a server.
