'use server';

import { getCurrentUser } from '@/utils/supabase/server';
import { db } from '@/src/prisma/db';
import { revalidatePath } from 'next/cache';

export async function submitRestatement(restatementId: string) {
  const user = await getCurrentUser();
  const userId = user?.id || "user-you-id";

  const restatement = await db.orm.public.Restatement.where({ id: restatementId }).first();
  if (!restatement || restatement.restaterId !== userId) {
    throw new Error('Unauthorized or Restatement not found');
  }

  // Set to PENDING, set submittedAt, and expiresAt (72h from now)
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 72 * 60 * 60 * 1000);

  await db.orm.public.Restatement.where({ id: restatementId }).update({
    state: 'PENDING',
    submittedAt: now,
    expiresAt
  });

  revalidatePath('/');
}

export async function decideRestatement(restatementId: string, decision: 'ACCEPTED' | 'RETURNED', returnNote?: string) {
  const user = await getCurrentUser();
  const userId = user?.id || "user-you-id";

  const restatement = await db.orm.public.Restatement.where({ id: restatementId }).include('parentPost').first();
  if (!restatement) {
    throw new Error('Restatement not found');
  }
  
  if (restatement.parentPost?.userId !== userId) {
    throw new Error('Only the author of the parent post may decide on a restatement');
  }

  const now = new Date();
  
  await db.orm.public.Restatement.where({ id: restatementId }).update({
    state: decision,
    decidedAt: now,
    decidedById: userId,
    returnNote: returnNote || null
  });

  if (decision === 'ACCEPTED') {
    // If accepted, find the linked reply and mark it PUBLISHED
    const reply = await db.orm.public.Reply.where({ restatementId }).first();
    if (reply) {
      await db.orm.public.Reply.where({ id: reply.id }).update({
        state: 'PUBLISHED',
        publishedAt: now
      });
    }
  }

  revalidatePath('/');
}
