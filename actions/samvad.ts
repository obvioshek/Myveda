'use server';

import { createClient } from '@/utils/supabase/server';
import { db } from '@/src/prisma/db';
import { revalidatePath } from 'next/cache';

// Helper to compute the next valid delivery window for a timezone
export function getNextDeliveryTime(now: Date, windows: readonly number[], timeZone: string): Date {
  const sorted = [...windows].sort((a, b) => a - b);
  const fallbackTz = timeZone || 'UTC';
  
  const formatter = new Intl.DateTimeFormat('en-US', { timeZone: fallbackTz, hour: 'numeric', minute: 'numeric', hourCycle: 'h23' });
  
  const candidate = new Date(now.getTime());
  candidate.setUTCSeconds(0, 0);
  candidate.setTime(candidate.getTime() + 60000);

  for (let i = 0; i < 72 * 60; i++) {
    const parts = formatter.formatToParts(candidate);
    const localHour = parseInt(parts.find(p => p.type === 'hour')!.value, 10);
    const localMinute = parseInt(parts.find(p => p.type === 'minute')!.value, 10);
    
    if (sorted.includes(localHour) && localMinute === 0) {
      return candidate;
    }
    candidate.setTime(candidate.getTime() + 60000);
  }
  
  return new Date(now.getTime() + 60 * 60 * 1000);
}

export async function sendMessage(recipientId: string, threadId: string, body: string, sentNow: boolean = false, attachedPostId?: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
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
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not logged in');

  // Updating future queued messages for this recipient
  await db.orm.public.Message.where({ recipientId: user.id, state: 'QUEUED' }).update({
    heldByQuiet
  });

  revalidatePath('/messages');
}
