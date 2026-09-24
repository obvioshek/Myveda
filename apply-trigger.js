import 'dotenv/config';
import postgres from 'postgres';

async function main() {
  const sql = postgres(process.env.DATABASE_URL);
  
  await sql`
    CREATE OR REPLACE FUNCTION public.handle_new_user()
    RETURNS trigger AS $$
    DECLARE
      base_handle text;
      new_handle text;
      suffix int := 1;
    BEGIN
      base_handle := split_part(NEW.email, '@', 1);
      new_handle := base_handle;
      
      -- Ensure unique handle
      WHILE EXISTS (SELECT 1 FROM public."user" WHERE name = new_handle) LOOP
        new_handle := base_handle || suffix;
        suffix := suffix + 1;
      END LOOP;

      INSERT INTO public."user" (id, name, avatar, "createdAt", "deliveryWindows", timezone)
      VALUES (
        NEW.id,
        new_handle,
        new.raw_user_meta_data->>'avatar_url',
        NOW(),
        ARRAY[9, 13, 18],
        'Asia/Kolkata'
      );
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;
  `;

  await sql`
    DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
  `;
  
  await sql`
    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
  `;

  console.log('Trigger created successfully.');
  process.exit(0);
}

main().catch(console.error);
