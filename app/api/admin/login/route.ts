import { createSessionCookie } from "../auth";
import { ensureSchema, getEnv } from "@/db/runtime";

const LOGIN_WINDOW_SECONDS = 15 * 60;
const MAX_FAILED_LOGINS = 5;

async function loginKey(request: Request) {
  const raw = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("user-agent") || "unknown";
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`admin-login:${raw}`));
  return Array.from(new Uint8Array(digest)).map(byte => byte.toString(16).padStart(2, "0")).join("");
}

export async function POST(request: Request) {
  const { username = "", password = "" } = await request.json() as { username?: string; password?: string };
  const env = getEnv();
  await ensureSchema();
  const db = env.DB;
  const key = await loginKey(request);
  const now = Math.floor(Date.now() / 1000);
  const windowStart = now - LOGIN_WINDOW_SECONDS;
  const attempts = await db.prepare("SELECT window_start, failed_count FROM admin_login_rate_limits WHERE key = ?")
    .bind(key).first<{ window_start: number; failed_count: number }>();
  if (attempts && attempts.window_start >= windowStart && attempts.failed_count >= MAX_FAILED_LOGINS) {
    return Response.json({ error: "登录尝试次数过多，请15分钟后再试" }, { status: 429 });
  }
  const expectedUser = env.ADMIN_USERNAME || "admin";
  if (!env.ADMIN_PASSWORD || username !== expectedUser || password !== env.ADMIN_PASSWORD) {
    await db.prepare(`INSERT INTO admin_login_rate_limits (key, window_start, failed_count)
      VALUES (?, ?, 1)
      ON CONFLICT(key) DO UPDATE SET
        window_start = CASE WHEN admin_login_rate_limits.window_start < ? THEN excluded.window_start ELSE admin_login_rate_limits.window_start END,
        failed_count = CASE WHEN admin_login_rate_limits.window_start < ? THEN 1 ELSE admin_login_rate_limits.failed_count + 1 END`)
      .bind(key, now, windowStart, windowStart).run();
    return Response.json({ error: "账号或密码不正确" }, { status: 401 });
  }
  await db.prepare("DELETE FROM admin_login_rate_limits WHERE key = ?").bind(key).run();
  return Response.json({ ok: true }, { headers: { "Set-Cookie": await createSessionCookie(username, request) } });
}
