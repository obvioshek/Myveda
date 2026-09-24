#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/06c3ae25958e370a3f11c04274d6be5c87bb8ef16703309fd6f3e0bac9f4be1e/contract';
import endContract from '../../snapshots/06c3ae25958e370a3f11c04274d6be5c87bb8ef16703309fd6f3e0bac9f4be1e/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/5e64a70263b8a893329a9d443f3edb845d5fd805544a4a53dc7b6a4d904acdda/contract';
import startContract from '../../snapshots/5e64a70263b8a893329a9d443f3edb845d5fd805544a4a53dc7b6a4d904acdda/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'feedItem',
        columns: [
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('isOrg', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
          col('position', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('postId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('reason', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('sessionId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'feedSession',
        columns: [
          col('highWaterMark', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('itemCount', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('openedAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'postSeen',
        columns: [
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('postId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('seenAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'topicFollow',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('topicId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'postSeen',
        constraint: 'postSeen_userId_postId_key',
        columns: ['userId', 'postId'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'topicFollow',
        constraint: 'topicFollow_userId_topicId_key',
        columns: ['userId', 'topicId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'feedItem',
        index: 'feedItem_postId_idx_a7a72715',
        columns: ['postId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'feedItem',
        index: 'feedItem_sessionId_idx_29f415d4',
        columns: ['sessionId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'feedSession',
        index: 'feedSession_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'postSeen',
        index: 'postSeen_postId_idx_a7a72715',
        columns: ['postId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'postSeen',
        index: 'postSeen_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'topicFollow',
        index: 'topicFollow_topicId_idx_6f05808f',
        columns: ['topicId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'topicFollow',
        index: 'topicFollow_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'feedItem',
        foreignKey: {
          name: 'feedItem_sessionId_fkey',
          columns: ['sessionId'],
          references: { schema: 'public', table: 'feedSession', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'feedItem',
        foreignKey: {
          name: 'feedItem_postId_fkey',
          columns: ['postId'],
          references: { schema: 'public', table: 'post', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'feedSession',
        foreignKey: {
          name: 'feedSession_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'postSeen',
        foreignKey: {
          name: 'postSeen_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'postSeen',
        foreignKey: {
          name: 'postSeen_postId_fkey',
          columns: ['postId'],
          references: { schema: 'public', table: 'post', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'topicFollow',
        foreignKey: {
          name: 'topicFollow_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'topicFollow',
        foreignKey: {
          name: 'topicFollow_topicId_fkey',
          columns: ['topicId'],
          references: { schema: 'public', table: 'topic', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
