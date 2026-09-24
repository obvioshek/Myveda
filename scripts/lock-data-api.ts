// Supabase publishes every table in the public schema through its Data API,
// reachable with the anon key that ships to every browser. The app never uses
// that API — it talks to Postgres directly as the tables' owner, which row
// level security does not apply to — so switching RLS on with no policies
// closes the API without changing anything the site does.
//
// Runs on every deploy (see "vercel-build"). Does nothing outside Supabase.
import "dotenv/config";
import postgres from "postgres";

const url = process.env.DATABASE_URL;
if (!url) {
  console.log("[lock-data-api] no DATABASE_URL; skipped");
  process.exit(0);
}

const sql = postgres(url, { max: 1 });
try {
  const [{ supabase }] = await sql`select exists (select 1 from pg_roles where rolname = 'anon') as supabase`;
  if (!supabase) {
    console.log("[lock-data-api] not a Supabase database; skipped");
  } else {
    const open = await sql`
      select c.relname as name from pg_class c join pg_namespace n on n.oid = c.relnamespace
      where n.nspname = 'public' and c.relkind in ('r', 'p') and not c.relrowsecurity`;
    for (const { name } of open) await sql`alter table ${sql("public." + name)} enable row level security`;
    console.log(`[lock-data-api] row level security on for ${open.length} more table(s); the Data API is closed`);
  }
} finally {
  await sql.end();
}
