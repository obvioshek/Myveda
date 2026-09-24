#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/1b4452f8bb8c5a4bf9382cfb68392d2e5839eb2d5cf197fa0dd9318e87fbcafa/contract';
import endContract from '../../snapshots/1b4452f8bb8c5a4bf9382cfb68392d2e5839eb2d5cf197fa0dd9318e87fbcafa/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/2f4e677b1f011ef3c298a22a47071879a5f2a3c84dd9575ae424e26035092af4/contract';
import startContract from '../../snapshots/2f4e677b1f011ef3c298a22a47071879a5f2a3c84dd9575ae424e26035092af4/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, lit, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'community',
        columns: [
          col('blurb', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('slug', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'membership',
        columns: [
          col('communityId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('isSteward', 'bool', {
            notNull: true,
            default: lit(false),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('joinedAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['userId', 'communityId'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'room',
        columns: [
          col('accentToken', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('communityId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('iconSymbol', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('invitation', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('key', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('memory', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('modeLabel', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('pace', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('retentionHours', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('ruleNote', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('speech', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('whoSpeaks', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'roomMessage',
        columns: [
          col('authorId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('body', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('expiresAt', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-temporal@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('refLabel', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('roomId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'community',
        constraint: 'community_slug_key',
        columns: ['slug'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'room',
        constraint: 'room_communityId_key_key',
        columns: ['communityId', 'key'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'membership',
        index: 'membership_communityId_idx_e2c72225',
        columns: ['communityId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'membership',
        index: 'membership_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'room',
        index: 'room_communityId_idx_e2c72225',
        columns: ['communityId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'roomMessage',
        index: 'roomMessage_authorId_idx_e47547ed',
        columns: ['authorId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'roomMessage',
        index: 'roomMessage_expiresAt_idx_6b6b8c10',
        columns: ['expiresAt'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'roomMessage',
        index: 'roomMessage_roomId_createdAt_idx_71ac5cd0',
        columns: ['roomId', 'createdAt'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'roomMessage',
        index: 'roomMessage_roomId_idx_fe51d647',
        columns: ['roomId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'membership',
        foreignKey: {
          name: 'membership_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'membership',
        foreignKey: {
          name: 'membership_communityId_fkey',
          columns: ['communityId'],
          references: { schema: 'public', table: 'community', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'room',
        foreignKey: {
          name: 'room_communityId_fkey',
          columns: ['communityId'],
          references: { schema: 'public', table: 'community', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'roomMessage',
        foreignKey: {
          name: 'roomMessage_roomId_fkey',
          columns: ['roomId'],
          references: { schema: 'public', table: 'room', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'roomMessage',
        foreignKey: {
          name: 'roomMessage_authorId_fkey',
          columns: ['authorId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
          onDelete: 'cascade',
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
