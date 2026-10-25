#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/15e3d459e087a6b9c3caddd76b77a688c98494a3784866713897e9f281d36ad1/contract';
import startContract from '../../snapshots/15e3d459e087a6b9c3caddd76b77a688c98494a3784866713897e9f281d36ad1/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/67d6abd2d99d4056a6e8494124336166e2a5003eb30ba037aeda99ca03d6aa46/contract';
import endContract from '../../snapshots/67d6abd2d99d4056a6e8494124336166e2a5003eb30ba037aeda99ca03d6aa46/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'weeklySubscriber',
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
          col('lastWeekSent', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('token', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'weeklySubscriber',
        constraint: 'weeklySubscriber_email_key',
        columns: ['email'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'weeklySubscriber',
        constraint: 'weeklySubscriber_token_key',
        columns: ['token'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'weeklySubscriber',
        index: 'weeklySubscriber_confirmedAt_idx_7667e8e9',
        columns: ['confirmedAt'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'weeklySubscriber',
        index: 'weeklySubscriber_createdAt_idx_9575dbd7',
        columns: ['createdAt'],
      }),
      this.enableRowLevelSecurity({ schema: 'public', table: 'weeklySubscriber' }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
