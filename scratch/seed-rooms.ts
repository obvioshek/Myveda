import { db } from '../src/prisma/db.js';

async function main() {
  console.log('Seeding Community and Rooms...');
  
  // 1. Ensure a community exists
  let community = await db.orm.public.Community.where({ slug: 'my-veda-verse' }).first();
  if (!community) {
    community = await db.orm.public.Community.create({
      name: 'My Veda Verse',
      slug: 'my-veda-verse',
      blurb: 'The central hub for all seekers.',
    });
  }

  const rooms = [
    {
      key: 'prithvi',
      name: 'Reading Circle',
      iconSymbol: '#i-prithvi',
      accentToken: 'var(--terra-lit)',
      modeLabel: 'Shared record',
      ruleNote: 'Useful contributions stay easy to find and build on.',
      speech: 'Written, searchable',
      memory: 'Kept over time',
      pace: 'Thoughtful by design',
      whoSpeaks: 'Everyone in the community',
      invitation: 'What you add here stays easy to find for whoever reads the book next.',
      retentionHours: null,
    },
    {
      key: 'jal',
      name: 'Local Community',
      iconSymbol: '#i-jal',
      accentToken: 'var(--indigo)',
      modeLabel: 'Everyday conversation',
      ruleNote: 'Held for thirty days, and then it lets go.',
      speech: 'Casual, written',
      memory: 'Thirty days',
      pace: 'Easy',
      whoSpeaks: 'Everyone in the community',
      invitation: 'Ask the small, practical question. That is what this space is for.',
      retentionHours: 720,
    },
    {
      key: 'vayu',
      name: 'Young Founders',
      iconSymbol: '#i-vayu',
      accentToken: '#9FD6C8',
      modeLabel: 'Live, not kept',
      ruleNote: 'Watch these messages disappear while you read them.',
      speech: 'Spoken, unrecorded',
      memory: 'Twenty-four hours',
      pace: 'Fast',
      whoSpeaks: 'Everyone in the community',
      invitation: 'Nothing said here is saved. Ask the honest question.',
      retentionHours: 24,
    },
    {
      key: 'akash',
      name: 'Language & Culture',
      iconSymbol: '#i-akash',
      accentToken: '#C9B79B',
      modeLabel: 'Announcements',
      ruleNote: 'There is no reply box here. Conversations happen in the discussion threads.',
      speech: 'NONE_YOU_READ', // Matches logic for "no reply box"
      memory: 'Kept',
      pace: 'Rare',
      whoSpeaks: 'STEWARDS_ONLY', // Triggers steward enforcement
      invitation: null,
      retentionHours: null,
    },
    {
      key: 'agni',
      name: 'The Crucible',
      iconSymbol: '#i-agni',
      accentToken: '#FF5C5C',
      modeLabel: 'Structured debate',
      ruleNote: 'A focused space for resolving strong disagreements usefully.',
      speech: 'Formal, written',
      memory: 'Kept over time',
      pace: 'Moderated',
      whoSpeaks: 'Invited participants only',
      invitation: 'State your perspective clearly, with references if necessary.',
      retentionHours: null,
    }
  ];

  for (const r of rooms) {
    let existingRoom = await db.orm.public.Room.where({ communityId: community.id, key: r.key }).first();
    if (!existingRoom) {
      await db.orm.public.Room.create({
        ...r,
        communityId: community.id
      });
    }
  }

  console.log('Seed complete.');
  process.exit(0);
}

main().catch(console.error);
