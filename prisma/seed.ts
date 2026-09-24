import { db } from '../src/prisma/db'
import { POSTS, ORGS, REELS } from '../lib/data'

async function main() {
  console.log('Seeding database...')

  // Create Users and Orgs
  const users = new Map<string, string>()
  const orgs = new Map<string, string>()
  const topics = new Map<string, string>()

  // Helper to get or create topic
  const getTopic = async (name: string) => {
    if (!topics.has(name)) {
      const topic = await db.orm.public.Topic
        .select('id', 'name')
        .upsert({
          create: { name },
          update: { name }
        });
      topics.set(name, topic.id)
    }
    return topics.get(name)!
  }

  // Insert Users from POSTS
  for (const p of POSTS) {
    if (p.who && !users.has(p.who)) {
      const u = await db.orm.public.User.create({ name: p.who, deliveryWindows: [9, 13, 18] })
      users.set(p.who, u.id)
    }
    
    // Also add people who replied/reacted
    if (p.rp) {
      for (const r of p.rp) {
        if (!users.has(r[0])) {
          const u = await db.orm.public.User.create({ name: r[0], deliveryWindows: [9, 13, 18] })
          users.set(r[0], u.id)
        }
      }
    }
    if (p.said) {
      for (const name of p.said) {
        if (!users.has(name)) {
          const u = await db.orm.public.User.create({ name, deliveryWindows: [9, 13, 18] })
          users.set(name, u.id)
        }
      }
    }
  }

  // Insert Orgs from ORGS
  for (const o of ORGS) {
    if (o.name && !orgs.has(o.name)) {
      const org = await db.orm.public.Organization.create({
        name: o.name,
        mark: o.mark as string || '?',
        kind: o.kind || 'Organization'
      })
      orgs.set(o.name, org.id)
    }
  }

  // Insert POSTS
  for (const p of POSTS) {
    const topicId = await getTopic(p.topic)
    const userId = p.who ? users.get(p.who) : undefined

    let likesCount = 0
    if (p.n) {
      if (p.n.endsWith('K')) {
        likesCount = parseFloat(p.n) * 1000
      } else {
        likesCount = parseInt(p.n) || 0
      }
    }

    const post = await db.orm.public.Post.create({
      title: p.title,
      body: Array.isArray(p.body) ? JSON.stringify(p.body) : p.body,
      type: p.type,
      kind: p.k,
      art: p.art,
      cap: p.cap,
      sgi: p.sgi || false,
      likesCount,
      topicId,
      userId,
    })

    if (p.rp) {
      for (const r of p.rp) {
        await db.orm.public.Reply.create({
          postId: post.id,
          userId: users.get(r[0])!,
          kind: r[1],
          body: r[2]
        })
      }
    }

    if (p.poll) {
      for (const opt of p.poll) {
        await db.orm.public.PollOption.create({
          postId: post.id,
          text: opt[0],
          votes: opt[1] // Assuming it's percentage for now
        })
      }
    }
  }

  // Insert ORGS posts
  for (const o of ORGS) {
    const topicId = await getTopic(o.topic)
    const orgId = o.name ? orgs.get(o.name) : undefined

    let likesCount = 0
    if (o.n) {
      if (o.n.endsWith('K')) {
        likesCount = parseFloat(o.n) * 1000
      } else {
        likesCount = parseInt(o.n) || 0
      }
    }

    await db.orm.public.Post.create({
      title: o.title,
      body: Array.isArray(o.body) ? JSON.stringify(o.body) : o.body,
      type: o.type,
      kind: o.k,
      src: o.src,
      why: o.why,
      likesCount,
      topicId,
      orgId,
    })
  }

  // Insert REELS
  for (const r of REELS) {
    const [title, meta] = r
    const [subtitle, duration] = meta.split(' · ')
    await db.orm.public.Reel.create({
      title,
      subtitle,
      duration: duration || ''
    })
  }

  console.log('Seeding finished.')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.close()
  })
