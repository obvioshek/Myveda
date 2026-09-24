"use server";

import { db } from "@/src/prisma/db";
import { Temporal } from "temporal-polyfill";

export async function buildFeedSession() {
  const you = await db.orm.public.User
    .select('id', 'name')
    .upsert({
      create: { id: "user-you-id", name: "You", deliveryWindows: [9, 13, 18] },
      update: { name: "You" }
    });
    
  const userId = you.id;

  const seenPosts = await db.orm.public.PostSeen.where({ userId }).all();
  const seenPostIds = new Set(seenPosts.map(sp => sp.postId));

  const follows = await db.orm.public.TopicFollow.include('topic').where({ userId }).all();
  const followedTopicIds = new Set(follows.map(f => f.topicId));

  const allPosts = await db.orm.public.Post
    .include('topic')
    .orderBy(p => p.createdAt.desc())
    .all();
    
  const unseenPosts = allPosts.filter(p => !seenPostIds.has(p.id));
  
  const personalPosts = unseenPosts.filter(p => p.orgId === null);
  const orgPosts = unseenPosts.filter(p => p.orgId !== null);
  
  const session = await db.orm.public.FeedSession.create({
    userId,
    highWaterMark: Temporal.Now.instant(),
    itemCount: 0
  });
  
  let feedItems = [];
  let position = 0;
  
  for (const post of personalPosts) {
    let reason = "Because it's recent";
    if (followedTopicIds.has(post.topicId)) {
      reason = `Because you follow ${post.topic?.name}`;
    }
    
    feedItems.push({
      sessionId: session.id,
      postId: post.id,
      position: position++,
      isOrg: false,
      reason
    });
    if (position >= 20) break; // Limit personal feed to 20 per session for testing finite feeds
  }
  
  let orgPosition = 0;
  for (const post of orgPosts) {
    feedItems.push({
      sessionId: session.id,
      postId: post.id,
      position: orgPosition++,
      isOrg: true,
      reason: post.why || "To support the organization"
    });
    // Org posts capped at ~20% of the session's items
    if (orgPosition >= Math.max(1, Math.floor(position * 0.2))) break; 
  }
  
  for (const item of feedItems) {
    await db.orm.public.FeedItem.create(item);
    
    try {
      await db.orm.public.PostSeen.create({
        userId,
        postId: item.postId,
        seenAt: Temporal.Now.instant()
      });
    } catch (e) {
      // Ignore unique constraint violations if it somehow happens
    }
  }
  
  await db.orm.public.FeedSession.where({ id: session.id }).update({ itemCount: feedItems.length });
  
  return session.id;
}

export async function fetchFeed(sessionId: string) {
  // Using a fixed user ID for now to match buildFeedSession
  const userId = "user-you-id";

  const items = await db.orm.public.FeedItem
    .where({ sessionId })
    .include('post', (p) => 
      p.include('user')
       .include('org')
       .include('topic')
       .include('pollOptions', (po) => po.include('pollVotes', (pv) => pv.where({ userId })))
       .include('replies', (r) => r.include('user'))
       .include('reactions', (r) => r.where({ userId }))
       .include('saves', (s) => s.where({ userId }))
    )
    .orderBy(i => i.position.asc())
    .all();

  // Explicitly strip any engagement signals per rules
  const cleanItems = items.map(item => {
    const post: any = { ...item.post };
    const viewerReactions = post.reactions ? post.reactions.map((r: any) => r.kind) : [];
    const viewerSaved = post.saves ? post.saves.length > 0 : false;
    
    // Check if user voted in any option of this poll
    let viewerVotedOptionId = null;
    if (post.pollOptions) {
      for (const option of post.pollOptions) {
        if (option.pollVotes && option.pollVotes.length > 0) {
          viewerVotedOptionId = option.id;
        }
        delete option.pollVotes; // Explicitly remove
      }
    }
    
    delete post.likesCount;
    delete post.reactions; // Explicitly remove after extracting viewer's own
    delete post.saves; // Explicitly remove after extracting viewer's own
    
    return {
      ...item,
      post,
      viewerReactions,
      viewerSaved,
      viewerVotedOptionId
    };
  });
  
  const personalItems = cleanItems.filter(i => !i.isOrg);
  const orgItems = cleanItems.filter(i => i.isOrg);

  return { personalItems, orgItems };
}
