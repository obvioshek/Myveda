import { db } from '../src/prisma/db.js';

async function main() {
  console.log('Testing Room Triggers...');
  
  // 1. Get a random user
  const user = await db.orm.public.User.where({}).first();
  if (!user) {
    console.error('No user found to test with.');
    return;
  }
  
  // 2. Get the akash room and vayu room
  const akash = await db.orm.public.Room.where({ key: 'akash' }).first();
  const vayu = await db.orm.public.Room.where({ key: 'vayu' }).first();
  
  // 3. Ensure the user is NOT a steward of the community
  await db.orm.public.Membership.where({ userId: user.id, communityId: akash.communityId }).delete().catch(() => {});
  
  // 4. Try to post in Akash. Should FAIL because not steward.
  let passedStewardsCheck = false;
  try {
    await db.orm.public.RoomMessage.create({
      roomId: akash.id,
      authorId: user.id,
      body: 'Hello Akash'
    });
  } catch (e) {
    if (e.message.includes('Only stewards post here')) {
      console.log('SUCCESS: Steward enforcement trigger working.');
      passedStewardsCheck = true;
    } else {
      console.error('Unexpected error:', e);
    }
  }

  if (!passedStewardsCheck) {
    console.error('FAIL: User was able to post in Akash despite not being a steward.');
  }
  
  // 5. Post in Vayu to check retention
  const msg = await db.orm.public.RoomMessage.create({
    roomId: vayu.id,
    authorId: user.id,
    body: 'Hello Vayu'
  });
  
  if (msg.expiresAt) {
    console.log(`SUCCESS: Vayu message stamped with expiresAt: ${msg.expiresAt}`);
  } else {
    console.error('FAIL: Vayu message did not receive expiresAt stamp.');
  }
  process.exit(0);
}

main().catch(console.error);
