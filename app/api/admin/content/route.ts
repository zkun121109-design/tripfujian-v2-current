import { ensureSchema, getEnv } from "@/db/runtime";
import { isAdmin, unauthorized } from "../auth";

export async function GET(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  await ensureSchema();
  const row = await getEnv().DB.prepare("SELECT value FROM site_settings WHERE key = 'homepage_content'").first<{ value: string }>();
  let content = null;
  try { content = row?.value ? JSON.parse(row.value) : null; } catch { content = null; }
  return Response.json({ content });
}

export async function PUT(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  await ensureSchema();
  const body = await request.json() as { content?: unknown };
  const serialized = JSON.stringify(body.content ?? null);
  if (serialized.length > 100_000) return Response.json({ error: "页面内容过大" }, { status: 400 });
  await getEnv().DB.prepare("INSERT INTO site_settings (key, value, updated_at) VALUES ('homepage_content', ?, CURRENT_TIMESTAMP) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP").bind(serialized).run();
  return Response.json({ ok: true });
}
