import { cache } from "react";
import { cookies } from "next/headers";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { db } from "@/src/prisma/db";
import { hasDatabase, hasSupabase } from "@/lib/backend";
import { getCurrentUser } from "@/utils/supabase/server";

export const DEMO_COOKIE = "vv_demo_member";

// Demo sign-in lets anyone pick a seeded member without an email. It is on in
// development, and in production only when DEMO_LOGIN=1 is set explicitly —
// never leave that on for a real deployment.
export function demoLoginEnabled() {
  if (process.env.DEMO_LOGIN === "1") return true;
  if (process.env.DEMO_LOGIN === "0") return false;
  return process.env.NODE_ENV !== "production";
}

async function memberId(): Promise<string | null> {
  if (hasSupabase()) {
    const user = await getCurrentUser();
    if (user) return user.id;
  }
  if (demoLoginEnabled()) {
    return (await cookies()).get(DEMO_COOKIE)?.value ?? null;
  }
  return null;
}

// The signed-in member's row, once per request.
export const currentMember = cache(async () => {
  // who is asking is only known at request time: never prerender a member page
  await connection();
  if (!hasDatabase()) return null;
  const id = await memberId();
  if (!id) return null;
  try {
    return await db.orm.public.User.where({ id }).first();
  } catch (err) {
    console.error("[session] could not load member:", err);
    return null;
  }
});

export type Member = NonNullable<Awaited<ReturnType<typeof currentMember>>>;

export async function requireMember(): Promise<Member> {
  const me = await currentMember();
  if (!me) redirect("/signin");
  return me;
}

// For server actions: throws instead of redirecting, so the client can show it.
export async function actingMember(): Promise<Member> {
  const me = await currentMember();
  if (!me) throw new Error("Sign in to do that.");
  return me;
}
