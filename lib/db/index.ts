import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

export const createDb = (url?: string) => {
  const connectionString = url || process.env.neon_db || process.env.NEON_DB_URL;
  
  if (!connectionString) {
    if (typeof window === 'undefined') {
        console.warn('⚠️ No database connection string found in environment variables.');
    }
    return null;
  }

  const sql = neon(connectionString);
  return drizzle(sql, { schema });
};

export const getDb = () => {
    const db = createDb();
    if (!db) throw new Error('❌ Database connection failed: No connection string.');
    return db;
};

export const db = typeof window === 'undefined' ? createDb() : null;
