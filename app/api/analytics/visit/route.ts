import { ensureSchema, getEnv } from "@/db/runtime";
import { sourceFrom } from "@/app/analytics-attribution";
import { isAdmin } from "@/app/api/admin/auth";

type CloudflareRequest = Request & { cf?: { country?: string } };
const BOT_PATTERN = /bot|crawler|spider|headless|lighthouse|preview|facebookexternalhit|whatsapp|telegrambot|curl|wget|python-requests|postmanruntime|httpclient|uptimerobot|pingdom|statuscake/i;
const MAX_VIEWS_PER_MINUTE = 20;

function deviceFrom(userAgent: string) {
  if (/ipad|tablet|playbook|silk/i.test(userAgent) || (/android/i.test(userAgent) && !/mobile/i.test(userAgent))) return "平板";
  if (/mobile|iphone|ipod|android/i.test(userAgent)) return "手机";
  return "电脑";
}

function browserFrom(userAgent: string) {
  if (/MicroMessenger/i.test(userAgent)) return "微信浏览器";
  if (/Edg\//i.test(userAgent)) return "Edge";
  if (/OPR\//i.test(userAgent)) return "Opera";
  if (/SamsungBrowser/i.test(userAgent)) return "Samsung Internet";
  if (/Chrome\//i.test(userAgent) || /CriOS\//i.test(userAgent)) return "Chrome";
  if (/Firefox\//i.test(userAgent) || /FxiOS\//i.test(userAgent)) return "Firefox";
  if (/Safari\//i.test(userAgent)) return "Safari";
  return "其他浏览器";
}

function operatingSystemFrom(userAgent: string) {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS / iPadOS";
  if (/Android/i.test(userAgent)) return "Android";
  if (/Windows/i.test(userAgent)) return "Windows";
  if (/Mac OS X|Macintosh/i.test(userAgent)) return "macOS";
  if (/CrOS/i.test(userAgent)) return "ChromeOS";
  if (/Linux/i.test(userAgent)) return "Linux";
  return "其他系统";
}

async function dailyVisitorHash(request: Request, userAgent: string) {
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const day = new Date().toISOString().slice(0, 10);
  const secret = getEnv().SESSION_SECRET || "yujunyou-anonymous-analytics";
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${day}|${ip}|${userAgent}|${secret}`));
  return Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, "0")).join("").slice(0, 32);
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") || 0) > 2048) return new Response(null, { status: 413 });
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) return new Response(null, { status: 403 });
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin") return new Response(null, { status: 403 });
  if (!origin && fetchSite !== "same-origin") return new Response(null, { status: 403 });
  if (request.headers.get("cookie")?.includes("yuejie_admin=")) {
    try { if (await isAdmin(request)) return new Response(null, { status: 204 }); } catch { /* Ignore an invalid or expired admin cookie. */ }
  }

  const userAgent = request.headers.get("user-agent") || "";
  if (!userAgent || BOT_PATTERN.test(userAgent)) return new Response(null, { status: 204 });
  let payload: { path?: string; referrer?: string; utmSource?: string; utmMedium?: string; utmCampaign?: string; clickSource?: string };
  try { payload = await request.json(); } catch { return new Response(null, { status: 400 }); }
  const path = String(payload.path || "").split("?")[0].slice(0, 240);
  if (!path.startsWith("/") || path.startsWith("/admin") || path.startsWith("/api") || path.startsWith("/_next")) return new Response(null, { status: 204 });

  await ensureSchema();
  const db = getEnv().DB;
  const visitorHash = await dailyVisitorHash(request, userAgent);
  const recent = await db.prepare(`SELECT COUNT(*) AS views,
    MAX(CASE WHEN path = ? AND created_at >= datetime('now', '-30 seconds') THEN 1 ELSE 0 END) AS duplicate
    FROM analytics_events
    WHERE visitor_hash = ? AND created_at >= datetime('now', '-1 minute')`)
    .bind(path, visitorHash).first<{ views: number; duplicate: number }>();
  if ((recent?.duplicate || 0) > 0 || (recent?.views || 0) >= MAX_VIEWS_PER_MINUTE) return new Response(null, { status: 204 });
  const country = (request as CloudflareRequest).cf?.country || request.headers.get("cf-ipcountry") || "未知";
  await db.batch([
    db.prepare("DELETE FROM analytics_events WHERE created_at < datetime('now', '-12 months')"),
    db.prepare("INSERT INTO analytics_events (visitor_hash, path, country, device, source, medium, campaign, browser, operating_system) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)").bind(
      visitorHash,
      path,
      country.slice(0, 8),
      deviceFrom(userAgent),
      sourceFrom(String(payload.referrer || "").slice(0, 500), String(payload.utmSource || "").slice(0, 80), String(payload.clickSource || "").slice(0, 40), request.url),
      String(payload.utmMedium || "").slice(0, 80),
      String(payload.utmCampaign || "").slice(0, 120),
      browserFrom(userAgent),
      operatingSystemFrom(userAgent),
    ),
  ]);

  return new Response(null, { status: 204, headers: { "cache-control": "no-store" } });
}
