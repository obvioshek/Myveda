'use server';

import { getCurrentUser } from '@/utils/supabase/server';
import { db } from '@/src/prisma/db';
import { revalidatePath } from 'next/cache';

export async function voteInPoll(optionId: string, postId: string) {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('Not logged in');
  }

  // Get all options for this post
  const optionsForPost = await db.orm.public.PollOption
    .where({ postId })
    .all();
    
  const optionIds = optionsForPost.map((o: any) => o.id);
  
  if (!optionIds.includes(optionId)) {
    throw new Error('Invalid option');
  }

  // Check if user already voted for any option in this post
  const existingVotes = await db.orm.public.PollVote
    .where({ userId: user.id })
    .all();
    
  const hasVotedInPost = existingVotes.some((v: any) => optionIds.includes(v.optionId));
    
  if (hasVotedInPost) {
    throw new Error('You have already voted on this poll.');
  }

  // Create the vote
  await db.orm.public.PollVote.create({
    optionId,
    userId: user.id
  });
  
  // Increment the public aggregated count
  const option = await db.orm.public.PollOption.where({ id: optionId }).first();
  if (option) {
    await db.orm.public.PollOption.where({ id: optionId }).update({
      votes: option.votes + 1
    });
  }

  revalidatePath('/');
}
