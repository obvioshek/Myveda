// Which services this deployment is wired to. The page renders without any of
// them — it falls back to the demo content in lib/data.ts — so a fresh clone,
// a preview build, or a database outage never turns into a 500.

export function hasSupabase() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export function hasDatabase() {
  return Boolean(process.env.DATABASE_URL);
}
