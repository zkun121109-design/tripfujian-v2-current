import { ensureSchema, getEnv } from "@/db/runtime";
import { isAdmin, unauthorized } from "../auth";

export async function GET(request: Request) {
  if (!(await isAdmin(request))) return unauthorized();
  await ensureSchema();
  const requestedDays = Number(new URL(request.url).searchParams.get("days") || 7);
  const days = [7, 30, 90].includes(requestedDays) ? requestedDays : 7;
  const since = `-${days - 1} days`;
  const db = getEnv().DB;
  const [summary, daily, countries, devices, sources, pages, browsers, operatingSystems, campaigns] = await db.batch([
    db.prepare("SELECT COUNT(*) AS pageviews, COUNT(DISTINCT visitor_hash) AS visitors FROM analytics_events WHERE created_at >= datetime('now', ?)").bind(since),
    db.prepare("SELECT substr(created_at, 1, 10) AS day, COUNT(*) AS pageviews, COUNT(DISTINCT visitor_hash) AS visitors FROM analytics_events WHERE created_at >= datetime('now', ?) GROUP BY day ORDER BY day").bind(since),
    db.prepare("SELECT country AS label, COUNT(DISTINCT visitor_hash) AS value FROM analytics_events WHERE created_at >= datetime('now', ?) GROUP BY country ORDER BY value DESC LIMIT 12").bind(since),
    db.prepare("SELECT device AS label, COUNT(DISTINCT visitor_hash) AS value FROM analytics_events WHERE created_at >= datetime('now', ?) GROUP BY device ORDER BY value DESC").bind(since),
    db.prepare("SELECT source AS label, COUNT(DISTINCT visitor_hash) AS value FROM analytics_events WHERE created_at >= datetime('now', ?) GROUP BY source ORDER BY value DESC LIMIT 12").bind(since),
    db.prepare("SELECT path AS label, COUNT(*) AS value FROM analytics_events WHERE created_at >= datetime('now', ?) GROUP BY path ORDER BY value DESC LIMIT 12").bind(since),
    db.prepare("SELECT browser AS label, COUNT(DISTINCT visitor_hash) AS value FROM analytics_events WHERE created_at >= datetime('now', ?) GROUP BY browser ORDER BY value DESC LIMIT 12").bind(since),
    db.prepare("SELECT operating_system AS label, COUNT(DISTINCT visitor_hash) AS value FROM analytics_events WHERE created_at >= datetime('now', ?) GROUP BY operating_system ORDER BY value DESC LIMIT 12").bind(since),
    db.prepare("SELECT source || ' · ' || campaign AS label, COUNT(DISTINCT visitor_hash) AS value FROM analytics_events WHERE created_at >= datetime('now', ?) AND campaign != '' GROUP BY source, campaign ORDER BY value DESC LIMIT 12").bind(since),
  ]);
  return Response.json({ days, summary: summary.results[0] || { pageviews: 0, visitors: 0 }, daily: daily.results, countries: countries.results, devices: devices.results, sources: sources.results, pages: pages.results, browsers: browsers.results, operatingSystems: operatingSystems.results, campaigns: campaigns.results }, { headers: { "cache-control": "no-store" } });
}
