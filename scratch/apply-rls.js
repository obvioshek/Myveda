import 'dotenv/config';
import postgres from 'postgres';

async function main() {
  const sql = postgres(process.env.DATABASE_URL);
  
  try {
    // 1. Enable RLS on Reaction and Save tables
    await sql`ALTER TABLE public."reaction" ENABLE ROW LEVEL SECURITY`;
    await sql`ALTER TABLE public."save" ENABLE ROW LEVEL SECURITY`;
    
    // 2. Drop existing policies to be idempotent
    await sql`DROP POLICY IF EXISTS reaction_self ON public."reaction"`;
    await sql`DROP POLICY IF EXISTS save_self ON public."save"`;

    // 3. Create RLS policies
    await sql`
      CREATE POLICY reaction_self ON public."reaction"
      FOR ALL USING (auth.uid()::text = "userId") WITH CHECK (auth.uid()::text = "userId")
    `;
    
    await sql`
      CREATE POLICY save_self ON public."save"
      FOR ALL USING (auth.uid()::text = "userId") WITH CHECK (auth.uid()::text = "userId")
    `;

    // 4. Revoke access to Reaction aggregate queries
    await sql`REVOKE ALL ON public."reaction" FROM anon, authenticated`;
    await sql`GRANT SELECT, INSERT, DELETE ON public."reaction" TO authenticated`;

    // 5. Create the author-only stats function
    await sql`
      CREATE OR REPLACE FUNCTION public.own_post_stats(p_post text)
      RETURNS TABLE(helpful int, relatable int, saves int)
      LANGUAGE sql SECURITY DEFINER AS $$
        SELECT
          count(*) FILTER (WHERE r.kind = 'HELPFUL')::int,
          count(*) FILTER (WHERE r.kind = 'RELATABLE')::int,
          (SELECT count(*) FROM public."save" s WHERE s."postId" = p_post)::int
        FROM public."reaction" r
        WHERE r."postId" = p_post
          AND EXISTS (SELECT 1 FROM public."post" p WHERE p.id = p_post AND p."userId" = auth.uid()::text);
      $$;
    `;

    console.log('RLS and stats function applied successfully.');
  } catch (error) {
    console.error('Error applying RLS:', error);
  } finally {
    await sql.end();
  }
}

main();
