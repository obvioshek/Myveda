import 'dotenv/config';
import postgres from 'postgres';

async function main() {
  const sql = postgres(process.env.DATABASE_URL);
  try {
    await sql`ALTER TABLE public."reaction" DISABLE ROW LEVEL SECURITY`;
    await sql`DROP POLICY IF EXISTS reaction_self ON public."reaction"`;
    await sql`ALTER TABLE public."save" DISABLE ROW LEVEL SECURITY`;
    await sql`DROP POLICY IF EXISTS save_self ON public."save"`;

    await sql`ALTER TABLE public."messageThread" DISABLE ROW LEVEL SECURITY`;
    await sql`DROP POLICY IF EXISTS thread_participant ON public."messageThread"`;
    await sql`ALTER TABLE public."message" DISABLE ROW LEVEL SECURITY`;
    await sql`DROP POLICY IF EXISTS message_participant ON public."message"`;
    await sql`DROP POLICY IF EXISTS message_insert ON public."message"`;
    console.log('dropped rls');
  } catch (e) {
    console.error(e);
  } finally {
    await sql.end();
  }
}

main();
