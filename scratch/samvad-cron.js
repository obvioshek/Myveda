import 'dotenv/config';
import postgres from 'postgres';

async function main() {
  const sql = postgres(process.env.DATABASE_URL);
  
  try {
    const result = await sql`
      UPDATE public."message"
      SET state = 'DELIVERED', "deliveredAt" = NOW()
      WHERE state = 'QUEUED' 
        AND "scheduledFor" <= NOW() 
        AND "heldByQuiet" = false
      RETURNING id;
    `;
    
    console.log(`Samvad cron executed successfully. Delivered ${result.length} messages.`);
  } catch (error) {
    console.error('Error executing Samvad cron:', error);
  } finally {
    await sql.end();
  }
}

main();
