import { getNextDeliveryTime } from '../lib/delivery.js';

function assertEqual(actual: Date, expected: Date, message: string) {
  if (actual.getTime() !== expected.getTime()) {
    console.error(`FAIL: ${message}`);
    console.error(`  Expected: ${expected.toISOString()}`);
    console.error(`  Actual:   ${actual.toISOString()}`);
    process.exit(1);
  }
}

function runTests() {
  console.log('Running timezone calculation tests...');
  
  // Test 1: UTC recipient. Current time 08:30 UTC. Windows: [9, 13, 18]
  // Expected: 09:00 UTC today
  let now = new Date('2026-09-17T08:30:00Z');
  let expected = new Date('2026-09-17T09:00:00Z');
  let actual = getNextDeliveryTime(now, [9, 13, 18], 'UTC');
  assertEqual(actual, expected, 'Test 1 (UTC, before first window) failed');

  // Test 2: UTC recipient. Current time 09:30 UTC. Windows: [9, 13, 18]
  // Expected: 13:00 UTC today
  now = new Date('2026-09-17T09:30:00Z');
  expected = new Date('2026-09-17T13:00:00Z');
  actual = getNextDeliveryTime(now, [9, 13, 18], 'UTC');
  assertEqual(actual, expected, 'Test 2 (UTC, between windows) failed');

  // Test 3: UTC recipient. Current time 19:30 UTC. Windows: [9, 13, 18]
  // Expected: 09:00 UTC TOMORROW
  now = new Date('2026-09-17T19:30:00Z');
  expected = new Date('2026-09-18T09:00:00Z');
  actual = getNextDeliveryTime(now, [9, 13, 18], 'UTC');
  assertEqual(actual, expected, 'Test 3 (UTC, after last window) failed');

  // Test 4: Asia/Kolkata recipient (UTC+5:30). Current time 02:00 UTC (07:30 IST). Windows: [9, 13, 18]
  // Expected IST delivery at 09:00 IST -> 03:30 UTC today
  now = new Date('2026-09-17T02:00:00Z');
  expected = new Date('2026-09-17T03:30:00Z'); // Note: 3:30 UTC is 9:00 IST.
  actual = getNextDeliveryTime(now, [9, 13, 18], 'Asia/Kolkata');
  assertEqual(actual, expected, 'Test 4 (IST, before first window) failed');

  // Test 5: America/New_York recipient (UTC-4 in summer). Current time 12:00 UTC (08:00 EDT). Windows: [9]
  // Expected EDT delivery at 09:00 EDT -> 13:00 UTC today
  now = new Date('2026-07-17T12:00:00Z');
  expected = new Date('2026-07-17T13:00:00Z');
  actual = getNextDeliveryTime(now, [9], 'America/New_York');
  assertEqual(actual, expected, 'Test 5 (EDT, before window) failed');

  console.log('All tests passed successfully!');
}

runTests();
