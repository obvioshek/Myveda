import 'dotenv/config';
import postgres from 'postgres';

async function main() {
  const sql = postgres(process.env.DATABASE_URL);
  
  try {
    // 1. Enable RLS on Message and MessageThread
    await sql`ALTER TABLE public."messageThread" ENABLE ROW LEVEL SECURITY`;
    await sql`ALTER TABLE public."message" ENABLE ROW LEVEL SECURITY`;
    await sql`ALTER TABLE "reaction" ENABLE ROW LEVEL SECURITY`;
    await sql`ALTER TABLE "save" ENABLE ROW LEVEL SECURITY`;
    await sql`ALTER TABLE "pollVote" ENABLE ROW LEVEL SECURITY`;

    // 2. Drop existing policies if any
    await sql`DROP POLICY IF EXISTS "reaction_self" ON "reaction"`;
    await sql`DROP POLICY IF EXISTS "save_self" ON "save"`;
    await sql`DROP POLICY IF EXISTS "pollVote_self" ON "pollVote"`;
    await sql`DROP POLICY IF EXISTS thread_participant ON public."messageThread"`;
    await sql`DROP POLICY IF EXISTS message_participant ON public."message"`;
    await sql`DROP POLICY IF EXISTS message_insert ON public."message"`;

    // Create Policy for self tables
    await sql`CREATE POLICY "reaction_self" ON "reaction" FOR ALL USING (auth.uid()::text = "userId")`;
    await sql`CREATE POLICY "save_self" ON "save" FOR ALL USING (auth.uid()::text = "userId")`;
    await sql`CREATE POLICY "pollVote_self" ON "pollVote" FOR ALL USING (auth.uid()::text = "userId")`;

    // 3. Create Policy for MessageThread: participants can see their threads
    await sql`
      CREATE POLICY thread_participant ON public."messageThread"
      FOR ALL USING (auth.uid()::text = ANY("participants")) 
      WITH CHECK (auth.uid()::text = ANY("participants"))
    `;

    // 4. Create Policy for Message:
    // Sender can always see it.
    // Recipient can only see it if state = 'DELIVERED' or 'READ'.
    await sql`
      CREATE POLICY message_participant ON public."message"
      FOR SELECT
      USING (
        "senderId" = auth.uid()::text OR 
        ("recipientId" = auth.uid()::text AND "state" IN ('DELIVERED', 'READ'))
      )
    `;
    
    // For inserting, users can insert if they are the sender
    await sql`
      CREATE POLICY message_insert ON public."message"
      FOR INSERT
      WITH CHECK ("senderId" = auth.uid()::text)
    `;

    // 5. Add Message to supabase_realtime publication
    // First, check if publication exists (Supabase typically pre-creates 'supabase_realtime')
    const [pub] = await sql`
      SELECT pubname FROM pg_publication WHERE pubname = 'supabase_realtime'
    `;
    
    if (pub) {
      try {
        await sql`ALTER PUBLICATION supabase_realtime ADD TABLE public."message"`;
        console.log('Added Message table to supabase_realtime publication');
      } catch (err) {
        // Might already be added
        if (err.code !== '42710') { // 42710: duplicate_object
          console.error('Error adding table to publication:', err);
        }
      }
    } else {
      console.log('Note: supabase_realtime publication not found (expected in local dev without full Supabase stack)');
    }

    console.log('Samvad RLS policies applied successfully.');
  } catch (error) {
    console.error('Error applying Samvad RLS policies:', error);
  } finally {
    await sql.end();
  }
}

main();
