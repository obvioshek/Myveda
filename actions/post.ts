"use server";

import { db } from "@/src/prisma/db";
import { revalidatePath } from "next/cache";

export async function fetchFeed(topicName: string = "all") {
  const whereClause = topicName !== "all" ? { topic: { name: topicName } } : {};

  // Fetch regular posts
  let postsQuery = db.orm.public.Post
    .where((p) => p.orgId.isNull())
    .include('user')
    .include('topic')
    .include('reactions', (r) => r.include('user'))
    .include('pollOptions')
    .orderBy((p) => p.createdAt.desc());
    
  let orgPostsQuery = db.orm.public.Post
    .where((p) => p.userId.isNull())
    .include('org')
    .include('topic')
    .orderBy((p) => p.createdAt.desc());
    
  if (topicName !== "all") {
    const topic = await db.orm.public.Topic.where({ name: topicName }).first();
    if (topic) {
      postsQuery = postsQuery.where((p) => p.topicId.eq(topic.id));
      orgPostsQuery = orgPostsQuery.where((p) => p.topicId.eq(topic.id));
    } else {
      // If topic doesn't exist, return empty
      return { posts: [], orgPosts: [] };
    }
  }
  
  const posts = await postsQuery.all();
  const orgPosts = await orgPostsQuery.all();

  return { posts, orgPosts };
}

const KIND_MAP: Record<string, string> = {
  "q": "QUESTION",
  "fact": "FACT",
  "ctx": "CONTEXT",
  "exp": "EXPERIENCE",
  "int": "INTERPRETATION",
  "trad": "TRADITION",
  "bel": "BELIEF",
  "spec": "SPECULATION"
};

export async function createPost(data: {
  title: string;
  body?: string;
  type: string;
  kind: string;
  topicName: string;
  source?: string;
  linkUrl?: string;
  altText?: string;
  captions?: string;
}) {
  const contributionKind = KIND_MAP[data.kind];
  if (!contributionKind) {
    throw new Error("Invalid contribution kind.");
  }

  // Server-side validation
  if (contributionKind === "FACT" && (!data.source || data.source.trim() === "")) {
    throw new Error("A factual claim is unpublishable without a source.");
  }
  if (data.type === "LINK" && (!data.linkUrl || data.linkUrl.trim() === "")) {
    throw new Error("A link post needs a link.");
  }
  if (data.type === "IMAGE" && (!data.altText || data.altText.trim().length < 4)) {
    throw new Error("Images carry a description of at least 4 characters.");
  }
  if (data.type === "VIDEO" && (!data.captions || data.captions.trim() === "")) {
    throw new Error("Videos carry captions.");
  }

  // In a real app with Auth, we would get the userId from session
  // For this milestone, we'll find or create a "You" user
  const you = await db.orm.public.User
    .select('id', 'name')
    .upsert({
      create: { id: "user-you-id", name: "You", deliveryWindows: [9, 13, 18] },
      update: { name: "You" }
    });

  const topic = await db.orm.public.Topic
    .select('id', 'name')
    .upsert({
      create: { name: data.topicName },
      update: { name: data.topicName }
    });

  // Handle source/linkUrl
  let srcVal = null;
  if (data.source && data.source.trim() !== "") {
    srcVal = data.source.trim();
  } else if (data.linkUrl && data.linkUrl.trim() !== "") {
    srcVal = data.linkUrl.trim();
  }

  // Handle altText/captions
  let capVal = null;
  if (data.type === "IMAGE" && data.altText) {
    capVal = data.altText;
  } else if (data.type === "VIDEO" && data.captions) {
    capVal = data.captions;
  }

  const postData: any = {
    title: data.title,
    type: data.type.toLowerCase(), // In schema it's "question", "text", etc.
    kind: data.kind,               // In schema it's "q", "fact", etc.
    topicId: topic.id,
    userId: you.id,
  };

  if (data.body) postData.body = data.body;
  if (srcVal) postData.src = srcVal;
  if (capVal) postData.cap = capVal;

  const post = await db.orm.public.Post.create(postData);

  revalidatePath("/");
  return post;
}
