#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/414892478547b3a2a3c4c781b89664dab2a2dd23214ba7d0d08db3c748ee8d45/contract';
import startContract from '../../snapshots/414892478547b3a2a3c4c781b89664dab2a2dd23214ba7d0d08db3c748ee8d45/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/761f07b64545f300891d581146605250cbd42be325e73a90890d465297b34996/contract';
import endContract from '../../snapshots/761f07b64545f300891d581146605250cbd42be325e73a90890d465297b34996/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, lit, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'restatement',
        columns: [
          col('decidedAt', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-temporal@1' } }),
          col('decidedById', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('expiresAt', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-temporal@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('parentPostId', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('parentReplyId', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('restaterId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('returnNote', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('state', 'text', {
            notNull: true,
            default: lit('DRAFT'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('submittedAt', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-temporal@1' } }),
          col('text', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('wordCount', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addColumn({
        schema: 'public',
        table: 'post',
        column: col('aiAssisted', 'bool', {
          notNull: true,
          default: lit(false),
          codecRef: { codecId: 'pg/bool@1' },
        }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'post',
        column: col('aiAssistedNote', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'post',
        column: col('discussGateOn', 'bool', {
          notNull: true,
          default: lit(false),
          codecRef: { codecId: 'pg/bool@1' },
        }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'post',
        column: col('gateReasonHint', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'reply',
        column: col('parentReplyId', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'reply',
        column: col('publishedAt', 'timestamptz', {
          codecRef: { codecId: 'pg/timestamptz-temporal@1' },
        }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'reply',
        column: col('restatementId', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'reply',
        column: col('sourceId', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'reply',
        column: col('state', 'text', {
          notNull: true,
          default: lit('SEALED'),
          codecRef: { codecId: 'pg/text@1' },
        }),
      }),
      this.addUnique({
        schema: 'public',
        table: 'reply',
        constraint: 'reply_restatementId_key',
        columns: ['restatementId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'restatement',
        index: 'restatement_parentPostId_idx_da6a5319',
        columns: ['parentPostId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'restatement',
        index: 'restatement_parentReplyId_idx_dd1373de',
        columns: ['parentReplyId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'restatement',
        index: 'restatement_restaterId_idx_edcf02ed',
        columns: ['restaterId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'restatement',
        foreignKey: {
          name: 'restatement_parentPostId_fkey',
          columns: ['parentPostId'],
          references: { schema: 'public', table: 'post', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'restatement',
        foreignKey: {
          name: 'restatement_parentReplyId_fkey',
          columns: ['parentReplyId'],
          references: { schema: 'public', table: 'reply', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'restatement',
        foreignKey: {
          name: 'restatement_restaterId_fkey',
          columns: ['restaterId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'reply',
        foreignKey: {
          name: 'reply_restatementId_fkey',
          columns: ['restatementId'],
          references: { schema: 'public', table: 'restatement', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
