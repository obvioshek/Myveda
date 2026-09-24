import 'dotenv/config';
import postgres from 'postgres';

async function main() {
  const sql = postgres(process.env.DATABASE_URL);
  
  try {
    console.log('1. Setting up test data...');
    // Create a user
    const [user] = await sql`
      INSERT INTO public."user" (id, name, "deliveryWindows", "createdAt")
      VALUES (gen_random_uuid(), 'Test Author', ARRAY[9,13,18], NOW())
      RETURNING id;
    `;

    // Create a topic
    const [topic] = await sql`
      INSERT INTO public."topic" (id, name)
      VALUES (gen_random_uuid(), 'Test Topic ' || gen_random_uuid())
      RETURNING id;
    `;

    // Create a gated post
    const [post] = await sql`
      INSERT INTO public."post" (id, "userId", "topicId", type, "discussGateOn")
      VALUES (gen_random_uuid(), ${user.id}, ${topic.id}, 'Text', true)
      RETURNING id;
    `;

    console.log('2. Attempting to insert a PUBLISHED reply into the gated post directly...');
    
    let caughtError = false;
    try {
      await sql`
        INSERT INTO public."reply" (id, "postId", "userId", kind, body, state)
        VALUES (gen_random_uuid(), ${post.id}, ${user.id}, 'q', 'This is a test reply', 'PUBLISHED')
      `;
    } catch (err) {
      console.log('Success: Database rejected the direct insert. Error:');
      console.log('  ', err.message);
      caughtError = true;
    }

    if (!caughtError) {
      console.error('FAIL: The direct insert was allowed, but it should have been rejected!');
      process.exit(1);
    }
    
    console.log('3. Attempting to insert a SEALED reply, then UPDATE to PUBLISHED...');
    const [reply] = await sql`
      INSERT INTO public."reply" (id, "postId", "userId", kind, body, state)
      VALUES (gen_random_uuid(), ${post.id}, ${user.id}, 'q', 'This is a sealed reply', 'SEALED')
      RETURNING id;
    `;
    
    caughtError = false;
    try {
      await sql`
        UPDATE public."reply" SET state = 'PUBLISHED' WHERE id = ${reply.id}
      `;
    } catch (err) {
      console.log('Success: Database rejected the UPDATE. Error:');
      console.log('  ', err.message);
      caughtError = true;
    }

    if (!caughtError) {
      console.error('FAIL: The UPDATE to PUBLISHED was allowed without a restatement!');
      process.exit(1);
    }

    console.log('All gate tests passed!');
  } catch (error) {
    console.error('Unexpected error:', error);
  } finally {
    await sql.end();
  }
}

main();
