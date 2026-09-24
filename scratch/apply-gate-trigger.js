import 'dotenv/config';
import postgres from 'postgres';

async function main() {
  const sql = postgres(process.env.DATABASE_URL);
  
  try {
    // 1. Create the trigger function
    await sql`
      CREATE OR REPLACE FUNCTION public.assert_gate_satisfied() RETURNS trigger AS $$
      DECLARE gated boolean; st text; approver text; parent_author text;
      BEGIN
        IF NEW."state" <> 'PUBLISHED' THEN RETURN NEW; END IF;

        SELECT p."discussGateOn", p."userId" INTO gated, parent_author
          FROM public."post" p WHERE p.id = NEW."postId";
        IF NOT gated THEN RETURN NEW; END IF;

        IF NEW."restatementId" IS NULL THEN
          RAISE EXCEPTION 'This thread requires a restatement before a reply can be published';
        END IF;

        SELECT r."state", r."decidedById" INTO st, approver
          FROM public."restatement" r WHERE r.id = NEW."restatementId";
        IF st <> 'ACCEPTED' THEN
          RAISE EXCEPTION 'Restatement is % — the reply stays sealed', st;
        END IF;
        IF approver IS DISTINCT FROM parent_author THEN
          RAISE EXCEPTION 'Only the author of the parent may accept a restatement of it';
        END IF;
        RETURN NEW;
      END $$ LANGUAGE plpgsql;
    `;

    // 2. Drop existing trigger if any
    await sql`DROP TRIGGER IF EXISTS gate_check ON public."reply"`;

    // 3. Create the trigger
    await sql`
      CREATE TRIGGER gate_check BEFORE INSERT OR UPDATE ON public."reply"
        FOR EACH ROW EXECUTE FUNCTION public.assert_gate_satisfied();
    `;

    console.log('Discuss Gate trigger applied successfully.');
  } catch (error) {
    console.error('Error applying Discuss Gate trigger:', error);
  } finally {
    await sql.end();
  }
}

main();
