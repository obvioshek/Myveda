import 'dotenv/config';
import 'temporal-polyfill/full/global';
import pg from 'pg';
import postgres from '@prisma/orm-postgres/runtime';
import type { Contract } from './contract.d';
import contractJson from './contract.json' with { type: 'json' };

const url = process.env['DATABASE_URL'];

// Each serverless instance keeps its own pool, and Supabase's session pooler
// allows only a handful of connections in total (15 on the free plan), so
// every instance takes a few and lets idle ones go quickly.
function pool(connectionString: string) {
  const p = new pg.Pool({
    connectionString,
    max: Number(process.env['DATABASE_POOL_MAX'] ?? 3),
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 20_000,
  });
  // the server may close an idle connection; that must not crash the process
  p.on('error', err => console.error('[db] idle connection closed:', err.message));
  return p;
}

export const db = postgres<Contract>({
  contractJson,
  ...(url ? { pg: pool(url) } : {}),
});
