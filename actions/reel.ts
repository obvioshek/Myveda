"use server";

import { db } from "@/src/prisma/db";

export async function fetchReels() {
  return await db.orm.public.Reel
    .orderBy((r) => r.createdAt.asc())
    .all();
}
