import 'dotenv/config';
import postgres from 'postgres';

async function main() {
  const sql = postgres(process.env.DATABASE_URL);
  
  try {
    const result = await sql`
      DELETE FROM public."roomMessage" 
      WHERE "expiresAt" IS NOT NULL AND "expiresAt" < now()
      RETURNING id;
    `;
    
    console.log(`Room retention cron executed successfully. Hard-deleted ${result.length} expired messages.`);
  } catch (error) {
    console.error('Error executing Room retention cron:', error);
  } finally {
    await sql.end();
  }
}

main();
