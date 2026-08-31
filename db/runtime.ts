import { env } from "cloudflare:workers";

export interface AppEnv {
  DB: D1Database;
  MEDIA: R2Bucket;
  ADMIN_USERNAME?: string;
  ADMIN_PASSWORD?: string;
  SESSION_SECRET?: string;
}

export function getEnv(): AppEnv {
  return env as unknown as AppEnv;
}

let schemaReady: Promise<void> | null = null;

export function ensureSchema() {
  if (schemaReady) return schemaReady;
  const db = getEnv().DB;
  if (!db) throw new Error("数据库尚未配置");
  schemaReady = (async () => {
    await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      contact TEXT NOT NULL,
      wechat TEXT NOT NULL DEFAULT '',
      source TEXT NOT NULL DEFAULT '',
      arrival_city TEXT NOT NULL DEFAULT '',
      return_city TEXT NOT NULL DEFAULT '',
      destinations TEXT NOT NULL DEFAULT '',
      travel_date TEXT NOT NULL DEFAULT '',
      days TEXT NOT NULL DEFAULT '',
      adults INTEGER NOT NULL DEFAULT 1,
      children INTEGER NOT NULL DEFAULT 0,
      group_type TEXT NOT NULL DEFAULT '',
      travel_type TEXT NOT NULL DEFAULT '',
      hotel_level TEXT NOT NULL DEFAULT '',
      room_type TEXT NOT NULL DEFAULT '',
      rooms TEXT NOT NULL DEFAULT '',
      vehicle TEXT NOT NULL DEFAULT '',
      budget TEXT NOT NULL DEFAULT '',
      notes TEXT NOT NULL DEFAULT '',
      attribution_source TEXT NOT NULL DEFAULT '',
      attribution_medium TEXT NOT NULL DEFAULT '',
      attribution_campaign TEXT NOT NULL DEFAULT '',
      landing_page TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'new',
      admin_note TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`),
    db.prepare("CREATE INDEX IF NOT EXISTS idx_inquiries_status_created ON inquiries(status, created_at DESC)"),
    db.prepare(`CREATE TABLE IF NOT EXISTS inquiry_rate_limits (
      key TEXT PRIMARY KEY,
      window_start INTEGER NOT NULL,
      request_count INTEGER NOT NULL DEFAULT 1
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS admin_login_rate_limits (
      key TEXT PRIMARY KEY,
      window_start INTEGER NOT NULL,
      failed_count INTEGER NOT NULL DEFAULT 1
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS site_settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL DEFAULT '',
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS analytics_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      visitor_hash TEXT NOT NULL,
      path TEXT NOT NULL,
      country TEXT NOT NULL DEFAULT '未知',
      device TEXT NOT NULL DEFAULT '其他',
      source TEXT NOT NULL DEFAULT '直接访问',
      medium TEXT NOT NULL DEFAULT '',
      campaign TEXT NOT NULL DEFAULT '',
      browser TEXT NOT NULL DEFAULT '其他',
      operating_system TEXT NOT NULL DEFAULT '其他',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`),
    db.prepare("CREATE INDEX IF NOT EXISTS idx_analytics_created ON analytics_events(created_at)"),
    db.prepare("CREATE INDEX IF NOT EXISTS idx_analytics_visitor_created ON analytics_events(visitor_hash, created_at)"),
    ]);
    const existing = await db.prepare("PRAGMA table_info(analytics_events)").all<{ name: string }>();
    const names = new Set(existing.results.map((column) => column.name));
    const additions = [
      ["medium", "ALTER TABLE analytics_events ADD COLUMN medium TEXT NOT NULL DEFAULT ''"],
      ["campaign", "ALTER TABLE analytics_events ADD COLUMN campaign TEXT NOT NULL DEFAULT ''"],
      ["browser", "ALTER TABLE analytics_events ADD COLUMN browser TEXT NOT NULL DEFAULT '其他'"],
      ["operating_system", "ALTER TABLE analytics_events ADD COLUMN operating_system TEXT NOT NULL DEFAULT '其他'"],
    ].filter(([name]) => !names.has(name)).map(([, statement]) => db.prepare(statement));
    if (additions.length) await db.batch(additions);
    const existingInquiryColumns = await db.prepare("PRAGMA table_info(inquiries)").all<{ name: string }>();
    const inquiryNames = new Set(existingInquiryColumns.results.map((column) => column.name));
    const inquiryAdditions = [
      ["attribution_source", "ALTER TABLE inquiries ADD COLUMN attribution_source TEXT NOT NULL DEFAULT ''"],
      ["attribution_medium", "ALTER TABLE inquiries ADD COLUMN attribution_medium TEXT NOT NULL DEFAULT ''"],
      ["attribution_campaign", "ALTER TABLE inquiries ADD COLUMN attribution_campaign TEXT NOT NULL DEFAULT ''"],
      ["landing_page", "ALTER TABLE inquiries ADD COLUMN landing_page TEXT NOT NULL DEFAULT ''"],
    ].filter(([name]) => !inquiryNames.has(name)).map(([, statement]) => db.prepare(statement));
    if (inquiryAdditions.length) await db.batch(inquiryAdditions);
  })();
  return schemaReady;
}
