export type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  landingPage: string;
};

export function sourceFrom(referrer: string, utmSource: string, clickSource: string, requestUrl: string) {
  if (clickSource === "google_ads") return "Google Ads";
  if (clickSource === "meta_ads") return "Meta 广告";
  if (clickSource === "tiktok_ads") return "TikTok 广告";
  if (clickSource === "bing_ads") return "Bing Ads";
  const campaign = utmSource.trim().toLowerCase();
  if (campaign) {
    if (campaign.includes("wechat") || campaign.includes("weixin")) return "微信";
    if (campaign.includes("google")) return "Google";
    if (campaign.includes("baidu")) return "百度";
    if (campaign.includes("facebook")) return "Facebook";
    if (campaign.includes("instagram")) return "Instagram";
    if (campaign.includes("tiktok")) return "TikTok";
    if (campaign.includes("xiaohongshu") || campaign.includes("rednote")) return "小红书";
    return utmSource.slice(0, 40);
  }
  if (!referrer) return "直接访问";
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    if (host === new URL(requestUrl).hostname.toLowerCase()) return "站内浏览";
    if (host.includes("google.")) return "Google";
    if (host.includes("baidu.")) return "百度";
    if (host.includes("bing.")) return "Bing";
    if (host.includes("facebook.") || host === "fb.com") return "Facebook";
    if (host.includes("instagram.")) return "Instagram";
    if (host.includes("tiktok.")) return "TikTok";
    if (host.includes("xiaohongshu.") || host.includes("xhslink.")) return "小红书";
    return host.replace(/^www\./, "").slice(0, 50);
  } catch {
    return "其他来源";
  }
}

export function readAttributionCookie(request: Request): Attribution {
  const cookie = request.headers.get("cookie") || "";
  const encoded = cookie.split(/;\s*/).find((item) => item.startsWith("yjy_attribution="))?.slice("yjy_attribution=".length);
  if (!encoded) return { source: "", medium: "", campaign: "", landingPage: "" };
  try {
    const value = JSON.parse(decodeURIComponent(encoded)) as Partial<Attribution>;
    return {
      source: String(value.source || "").slice(0, 80),
      medium: String(value.medium || "").slice(0, 80),
      campaign: String(value.campaign || "").slice(0, 120),
      landingPage: String(value.landingPage || "").split("?")[0].slice(0, 240),
    };
  } catch {
    return { source: "", medium: "", campaign: "", landingPage: "" };
  }
}
