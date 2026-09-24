// Which services this deployment is wired to. The landing page renders without
// any of them (its demos run in the browser, and the early-list form says so
// when there's nowhere to save), so a fresh clone or a preview build never 500s.

export function hasSupabase() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export function hasDatabase() {
  return Boolean(process.env.DATABASE_URL);
}
