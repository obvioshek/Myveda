#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/15e3d459e087a6b9c3caddd76b77a688c98494a3784866713897e9f281d36ad1/contract';
import endContract from '../../snapshots/15e3d459e087a6b9c3caddd76b77a688c98494a3784866713897e9f281d36ad1/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/e733cd3e8a9371b11df3e36297a0c3aae5f3f315b6783588eec8dbb8e970d805/contract';
import startContract from '../../snapshots/e733cd3e8a9371b11df3e36297a0c3aae5f3f315b6783588eec8dbb8e970d805/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'earlyListEntry',
        columns: [
          col('confirmSentAt', 'timestamptz', {
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('confirmedAt', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-temporal@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('token', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'earlyListEntry',
        constraint: 'earlyListEntry_email_key',
        columns: ['email'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'earlyListEntry',
        constraint: 'earlyListEntry_token_key',
        columns: ['token'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'earlyListEntry',
        index: 'earlyListEntry_createdAt_idx_9575dbd7',
        columns: ['createdAt'],
      }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'answer' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'article' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'articleCorrection' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'articleParagraph' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'articleSource' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'block' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'bookmark' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'collection' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'collectionItem' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'community' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'communityThread' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'communityTopic' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'correctionSuggestion' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'draft' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'earlyListEntry' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'expertise' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'feedItem' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'feedSession' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'follow' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'helpful' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'hide' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'membership' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'message' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'messageThread' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'mute' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'note' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'notification' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'organization' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'pollOption' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'pollVote' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'post' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'postSeen' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'question' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'questionFollow' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'reaction' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'readEvent' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'reel' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'reply' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'report' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'response' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'restatement' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'room' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'roomMessage' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'save' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'sourceCheck' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'spoilerUnlock' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'topic' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'topicFollow' }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'user' }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
