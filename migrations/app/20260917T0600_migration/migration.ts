#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/1b4452f8bb8c5a4bf9382cfb68392d2e5839eb2d5cf197fa0dd9318e87fbcafa/contract';
import startContract from '../../snapshots/1b4452f8bb8c5a4bf9382cfb68392d2e5839eb2d5cf197fa0dd9318e87fbcafa/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/1e3979c6fd0d18875e57677ddc2a24fa0691155887a1d3b47415c3e26884b0a9/contract';
import endContract from '../../snapshots/1e3979c6fd0d18875e57677ddc2a24fa0691155887a1d3b47415c3e26884b0a9/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'pollVote',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('optionId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'pollVote',
        constraint: 'pollVote_optionId_userId_key',
        columns: ['optionId', 'userId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'pollVote',
        index: 'pollVote_optionId_idx_b1d5fce5',
        columns: ['optionId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'pollVote',
        index: 'pollVote_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'pollVote',
        foreignKey: {
          name: 'pollVote_optionId_fkey',
          columns: ['optionId'],
          references: { schema: 'public', table: 'pollOption', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'pollVote',
        foreignKey: {
          name: 'pollVote_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
