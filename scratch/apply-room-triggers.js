import 'dotenv/config';
import postgres from 'postgres';

async function main() {
  const sql = postgres(process.env.DATABASE_URL);
  
  try {
    // 1. Enforce whoSpeaks
    await sql`
      CREATE OR REPLACE FUNCTION assert_may_speak() RETURNS trigger AS $$
      DECLARE w text; cid text; steward boolean;
      BEGIN
        SELECT r."whoSpeaks", r."communityId" INTO w, cid FROM "room" r WHERE r.id = NEW."roomId";
        IF w = 'NONE_YOU_READ' THEN RAISE EXCEPTION 'This room has no reply box'; END IF;
        IF w = 'STEWARDS_ONLY' THEN
          SELECT m."isSteward" INTO steward FROM "membership" m
            WHERE m."userId" = NEW."authorId" AND m."communityId" = cid;
          IF NOT coalesce(steward,false) THEN RAISE EXCEPTION 'Only stewards post here'; END IF;
        END IF;
        RETURN NEW;
      END $$ LANGUAGE plpgsql;
    `;
    
    await sql`DROP TRIGGER IF EXISTS room_may_speak ON "roomMessage"`;
    await sql`
      CREATE TRIGGER room_may_speak BEFORE INSERT ON "roomMessage"
      FOR EACH ROW EXECUTE FUNCTION assert_may_speak();
    `;

    // 2. Enforce Retention
    await sql`
      CREATE OR REPLACE FUNCTION set_room_expiry() RETURNS trigger AS $$
      DECLARE h int;
      BEGIN
        SELECT r."retentionHours" INTO h FROM "room" r WHERE r.id = NEW."roomId";
        IF h IS NOT NULL THEN NEW."expiresAt" := now() + make_interval(hours => h); END IF;
        RETURN NEW;
      END $$ LANGUAGE plpgsql;
    `;

    await sql`DROP TRIGGER IF EXISTS room_expiry ON "roomMessage"`;
    await sql`
      CREATE TRIGGER room_expiry BEFORE INSERT ON "roomMessage"
      FOR EACH ROW EXECUTE FUNCTION set_room_expiry();
    `;

    console.log('Room triggers applied successfully.');
  } catch (error) {
    console.error('Error applying room triggers:', error);
  } finally {
    await sql.end();
  }
}

main();
