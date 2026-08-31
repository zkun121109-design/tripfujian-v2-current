import { ensureSchema, getEnv } from "@/db/runtime";
import { isAdmin, unauthorized } from "../auth";

const ALLOWED_KEYS = new Set(["wechat", "tiktok", "facebook", "instagram", "companyName", "servicePhone"]);

export async function GET(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  await ensureSchema();
  const result = await getEnv().DB.prepare("SELECT key, value FROM site_settings ORDER BY key").all();
  return Response.json({ settings: Object.fromEntries(result.results.map((row) => [String(row.key), String(row.value)])) });
}

export async function PUT(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  await ensureSchema();
  const body = await request.json() as Record<string, unknown>;
  const statements = Object.entries(body).filter(([key]) => ALLOWED_KEYS.has(key)).map(([key, value]) =>
    getEnv().DB.prepare("INSERT INTO site_settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP")
      .bind(key, String(value || "").slice(0, 500))
  );
  if (statements.length) await getEnv().DB.batch(statements);
  return Response.json({ ok: true });
}
