import 'dotenv/config';
import postgres from 'postgres';

async function main() {
  const sql = postgres(process.env.DATABASE_URL);
  
  const publicTables = await sql`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public';
  `;
  for (const row of publicTables) {
    await sql.unsafe(`DROP TABLE IF EXISTS public."${row.table_name}" CASCADE;`);
  }
  await sql`DROP SCHEMA IF EXISTS prisma_contract CASCADE;`;
  console.log("Cleaned database.");
  process.exit(0);
}

main().catch(console.error);
