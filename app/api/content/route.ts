import { ensureSchema, getEnv } from "@/db/runtime";

const CONTENT_KEYS = ["homepage_content"];

export async function GET() {
  await ensureSchema();
  const placeholders = CONTENT_KEYS.map(() => "?").join(",");
  const result = await getEnv().DB.prepare(`SELECT key, value FROM site_settings WHERE key IN (${placeholders})`).bind(...CONTENT_KEYS).all();
  const output: Record<string, unknown> = {};
  for (const row of result.results) {
    try { output[String(row.key)] = JSON.parse(String(row.value)); } catch { output[String(row.key)] = null; }
  }
  return Response.json(output, { headers: { "Cache-Control": "public, max-age=30" } });
}
