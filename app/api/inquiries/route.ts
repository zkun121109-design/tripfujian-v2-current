import { ensureSchema, getEnv } from "@/db/runtime";
import { readAttributionCookie } from "@/app/analytics-attribution";

function text(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function emailFromContact(contact: string) {
  return contact.match(/(?:^|\|)\s*(?:Email|邮箱)\s*([^|]*)/i)?.[1]?.trim() || "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function requestKey(request: Request) {
  const raw = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("user-agent") || "unknown";
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(raw));
  return Array.from(new Uint8Array(digest)).map(byte => byte.toString(16).padStart(2, "0")).join("");
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 20_000) return Response.json({ error: "提交内容过长" }, { status: 413 });
    const body = await request.json() as Record<string, unknown>;
    const attribution = readAttributionCookie(request);
    if (text(body.website, 200)) return Response.json({ ok: true }, { status: 201 });
    const name = text(body.name, 80);
    const contact = text(body.contact, 120);
    if (!name || !contact) return Response.json({ error: "请填写姓名和联系方式" }, { status: 400 });
    const email = emailFromContact(contact);
    if (email && !isValidEmail(email)) return Response.json({ error: "邮箱格式不正确" }, { status: 400 });
    if (body.privacyConsent !== true) return Response.json({ error: "请先阅读并同意隐私政策" }, { status: 400 });
    await ensureSchema();
    const db = getEnv().DB;
    const key = await requestKey(request);
    const now = Math.floor(Date.now() / 1000);
    const windowStart = now - 600;
    await db.prepare(`INSERT INTO inquiry_rate_limits (key, window_start, request_count)
      VALUES (?, ?, 1)
      ON CONFLICT(key) DO UPDATE SET
        window_start = CASE WHEN inquiry_rate_limits.window_start < ? THEN excluded.window_start ELSE inquiry_rate_limits.window_start END,
        request_count = CASE WHEN inquiry_rate_limits.window_start < ? THEN 1 ELSE inquiry_rate_limits.request_count + 1 END`)
      .bind(key, now, windowStart, windowStart).run();
    const rate = await db.prepare("SELECT request_count FROM inquiry_rate_limits WHERE key = ?").bind(key).first<{ request_count: number }>();
    if ((rate?.request_count || 0) > 5) return Response.json({ error: "提交次数过多，请稍后再试或通过邮箱联系我们" }, { status: 429 });
    const result = await db.prepare(`INSERT INTO inquiries (
      name, contact, wechat, source, arrival_city, return_city, destinations,
      travel_date, days, adults, children, group_type, travel_type, hotel_level,
      room_type, rooms, vehicle, budget, notes, attribution_source,
      attribution_medium, attribution_campaign, landing_page
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
      .bind(
        name, contact, text(body.wechat, 120), text(body.source, 80), text(body.arrivalCity, 80),
        text(body.returnCity, 80), text(body.destinations, 500), text(body.travelDate, 40),
        text(body.days, 20), Math.max(0, Number(body.adults) || 0), Math.max(0, Number(body.children) || 0),
        text(body.groupType, 80), text(body.travelType, 80), text(body.hotelLevel, 80),
        text(body.roomType, 80), text(body.rooms, 20), text(body.vehicle, 80), text(body.budget, 80), text(body.notes, 2000),
        attribution.source, attribution.medium, attribution.campaign, attribution.landingPage,
      ).run();
    return Response.json({ ok: true, id: result.meta.last_row_id }, { status: 201 });
  } catch (error) {
    console.error("Inquiry submission failed", error);
    return Response.json({ error: "暂时无法提交，请稍后重试或通过邮箱联系我们" }, { status: 500 });
  }
}
