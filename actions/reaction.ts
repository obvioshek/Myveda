'use server';

import { createClient } from '@/utils/supabase/server';
import { db } from '@/src/prisma/db';
import { revalidatePath } from 'next/cache';

export async function toggleReaction(postId: string, kind: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id || "user-you-id";

  // Check if reaction exists
  const existing = await db.orm.public.Reaction.where({ postId, userId, kind }).first();

  if (existing) {
    await db.orm.public.Reaction.where({ id: existing.id }).delete();
  } else {
    await db.orm.public.Reaction.create({
      postId,
      userId,
      kind
    });
  }

  revalidatePath('/');
}

export async function toggleSave(postId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id || "user-you-id";

  const existing = await db.orm.public.Save.where({ postId, userId }).first();

  if (existing) {
    await db.orm.public.Save.where({ id: existing.id }).delete();
  } else {
    await db.orm.public.Save.create({
      postId,
      userId,
      folder: 'Read later'
    });
  }

  revalidatePath('/');
}
