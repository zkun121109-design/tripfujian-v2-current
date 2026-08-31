"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { sourceFrom } from "./analytics-attribution";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin") || pathname.startsWith("/api")) return;
    const now = Date.now();
    const dedupeKey = `yujunyou-view:${pathname}`;
    if (now - Number(sessionStorage.getItem(dedupeKey) || 0) < 10_000) return;
    sessionStorage.setItem(dedupeKey, String(now));

    const firstSourceKey = "yujunyou-first-source";
    const firstMediumKey = "yujunyou-first-medium";
    const firstCampaignKey = "yujunyou-first-campaign";
    const firstClickKey = "yujunyou-first-click";
    const firstReferrerKey = "yujunyou-first-referrer";
    const utmSource = searchParams.get("utm_source")?.slice(0, 80) || sessionStorage.getItem(firstSourceKey) || "";
    const utmMedium = searchParams.get("utm_medium")?.slice(0, 80) || sessionStorage.getItem(firstMediumKey) || "";
    const utmCampaign = searchParams.get("utm_campaign")?.slice(0, 120) || sessionStorage.getItem(firstCampaignKey) || "";
    const clickSource = searchParams.has("gclid") ? "google_ads" : searchParams.has("fbclid") ? "meta_ads" : searchParams.has("ttclid") ? "tiktok_ads" : searchParams.has("msclkid") ? "bing_ads" : sessionStorage.getItem(firstClickKey) || "";
    const referrer = document.referrer.slice(0, 500) || sessionStorage.getItem(firstReferrerKey) || "";
    if (utmSource) sessionStorage.setItem(firstSourceKey, utmSource);
    if (utmMedium) sessionStorage.setItem(firstMediumKey, utmMedium);
    if (utmCampaign) sessionStorage.setItem(firstCampaignKey, utmCampaign);
    if (clickSource) sessionStorage.setItem(firstClickKey, clickSource);
    if (referrer) sessionStorage.setItem(firstReferrerKey, referrer);

    const normalizedSource = sourceFrom(referrer, utmSource, clickSource, location.href);
    const hasExplicitCampaign = Boolean(searchParams.get("utm_source") || searchParams.get("utm_medium") || searchParams.get("utm_campaign") || searchParams.has("gclid") || searchParams.has("fbclid") || searchParams.has("ttclid") || searchParams.has("msclkid"));
    const hasExternalSource = normalizedSource !== "直接访问" && normalizedSource !== "站内浏览";
    if (!document.cookie.includes("yjy_attribution=") || hasExplicitCampaign || hasExternalSource) {
      const attribution = encodeURIComponent(JSON.stringify({
        source: normalizedSource,
        medium: utmMedium,
        campaign: utmCampaign,
        landingPage: pathname,
      }));
      const secure = location.protocol === "https:" ? "; Secure" : "";
      document.cookie = `yjy_attribution=${attribution}; Max-Age=2592000; Path=/; SameSite=Lax${secure}`;
    }

    const body = JSON.stringify({ path: pathname, referrer, utmSource, utmMedium, utmCampaign, clickSource });
    if (navigator.sendBeacon) navigator.sendBeacon("/api/analytics/visit", new Blob([body], { type: "application/json" }));
    else fetch("/api/analytics/visit", { method: "POST", headers: { "content-type": "application/json" }, body, keepalive: true }).catch(() => undefined);
  }, [pathname, searchParams]);

  return null;
}
