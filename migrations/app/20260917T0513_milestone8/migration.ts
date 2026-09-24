#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/06c3ae25958e370a3f11c04274d6be5c87bb8ef16703309fd6f3e0bac9f4be1e/contract';
import startContract from '../../snapshots/06c3ae25958e370a3f11c04274d6be5c87bb8ef16703309fd6f3e0bac9f4be1e/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/414892478547b3a2a3c4c781b89664dab2a2dd23214ba7d0d08db3c748ee8d45/contract';
import endContract from '../../snapshots/414892478547b3a2a3c4c781b89664dab2a2dd23214ba7d0d08db3c748ee8d45/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, lit, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropColumn({ schema: 'public', table: 'reaction', column: 'text' }),
      this.createTable({
        schema: 'public',
        table: 'reply',
        columns: [
          col('body', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('kind', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('postId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addColumn({
        schema: 'public',
        table: 'reaction',
        column: col('replyId', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'save',
        column: col('folder', 'text', {
          notNull: true,
          default: lit('Read later'),
          codecRef: { codecId: 'pg/text@1' },
        }),
      }),
      this.dropNotNull({ schema: 'public', table: 'reaction', column: 'postId' }),
      this.addUnique({
        schema: 'public',
        table: 'reaction',
        constraint: 'reaction_postId_userId_kind_key',
        columns: ['postId', 'userId', 'kind'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'reaction',
        constraint: 'reaction_replyId_userId_kind_key',
        columns: ['replyId', 'userId', 'kind'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'reaction',
        index: 'reaction_replyId_idx_9b7816c5',
        columns: ['replyId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'reply',
        index: 'reply_postId_idx_a7a72715',
        columns: ['postId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'reply',
        index: 'reply_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'reply',
        foreignKey: {
          name: 'reply_postId_fkey',
          columns: ['postId'],
          references: { schema: 'public', table: 'post', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'reply',
        foreignKey: {
          name: 'reply_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'reaction',
        foreignKey: {
          name: 'reaction_replyId_fkey',
          columns: ['replyId'],
          references: { schema: 'public', table: 'reply', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
