'use server';

import { getCurrentUser } from '@/utils/supabase/server';
import { db } from '@/src/prisma/db';
import { revalidatePath } from 'next/cache';
import { getNextDeliveryTime } from '@/lib/delivery';

export async function sendMessage(recipientId: string, threadId: string, body: string, sentNow: boolean = false, attachedPostId?: string) {
  const user = await getCurrentUser();
  const senderId = user?.id || "user-you-id";

  const recipient = await db.orm.public.User.where({ id: recipientId }).first();
  if (!recipient) {
    throw new Error('Recipient not found');
  }

  const now = new Date();
  
  let scheduledFor = now;
  if (!sentNow) {
    scheduledFor = getNextDeliveryTime(now, recipient.deliveryWindows || [9, 13, 18], recipient.timezone || 'UTC');
  }

  await db.orm.public.Message.create({
    threadId,
    senderId,
    recipientId,
    body,
    attachedPostId: attachedPostId || null,
    state: 'QUEUED',
    scheduledFor,
    sentNow,
    createdAt: now
  });

  // Update thread last activity
  await db.orm.public.MessageThread.where({ id: threadId }).update({
    lastActivity: now
  });

  revalidatePath('/messages');
}

export async function toggleQuietMode(heldByQuiet: boolean) {
  const user = await getCurrentUser();
  if (!user) throw new Error('Not logged in');

  // Updating future queued messages for this recipient
  await db.orm.public.Message.where({ recipientId: user.id, state: 'QUEUED' }).updateAndCount({
    heldByQuiet
  });

  revalidatePath('/messages');
}
