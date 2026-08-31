"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Metric = { label: string; value: number };
type Daily = { day: string; pageviews: number; visitors: number };
type AnalyticsData = { days: number; summary: { pageviews: number; visitors: number }; daily: Daily[]; countries: Metric[]; devices: Metric[]; sources: Metric[]; pages: Metric[]; browsers: Metric[]; operatingSystems: Metric[]; campaigns: Metric[] };
const EMPTY: AnalyticsData = { days: 7, summary: { pageviews: 0, visitors: 0 }, daily: [], countries: [], devices: [], sources: [], pages: [], browsers: [], operatingSystems: [], campaigns: [] };
const COUNTRY_NAMES: Record<string, string> = { CN: "中国", HK: "中国香港", MO: "中国澳门", TW: "中国台湾", US: "美国", GB: "英国", CA: "加拿大", AU: "澳大利亚", SG: "新加坡", MY: "马来西亚", JP: "日本", KR: "韩国", 未知: "未知地区" };

function RankedList({ rows, country = false }: { rows: Metric[]; country?: boolean }) {
  const max = Math.max(1, ...rows.map((row) => Number(row.value)));
  if (!rows.length) return <p className="analytics-empty">产生访问后，这里会自动显示数据。</p>;
  return <div className="analytics-ranking">{rows.map((row) => <div key={row.label}><span>{country ? (COUNTRY_NAMES[row.label] || row.label) : row.label}</span><i><b style={{ width: `${Math.max(4, Number(row.value) / max * 100)}%` }} /></i><strong>{Number(row.value).toLocaleString("zh-CN")}</strong></div>)}</div>;
}

function CampaignBuilder() {
  const [source, setSource] = useState("wechat");
  const [medium, setMedium] = useState("social");
  const [campaign, setCampaign] = useState("");
  const [copied, setCopied] = useState(false);
  const link = useMemo(() => {
    const url = new URL("https://tripfujian.com/");
    url.searchParams.set("utm_source", source.trim() || "direct");
    url.searchParams.set("utm_medium", medium.trim() || "link");
    if (campaign.trim()) url.searchParams.set("utm_campaign", campaign.trim());
    return url.toString();
  }, [source, medium, campaign]);

  return <section className="admin-panel campaign-builder"><div className="analytics-heading"><div><h2>推广链接生成器</h2><p>发布到不同平台时使用对应链接，来源统计会更准确。</p></div></div><div className="campaign-fields"><label>投放平台<select value={source} onChange={(event) => setSource(event.target.value)}><option value="wechat">微信</option><option value="xiaohongshu">小红书</option><option value="facebook">Facebook</option><option value="instagram">Instagram</option><option value="tiktok">TikTok</option><option value="google">Google</option><option value="youtube">YouTube</option><option value="email">邮件</option></select></label><label>渠道类型<select value={medium} onChange={(event) => setMedium(event.target.value)}><option value="social">社交平台</option><option value="paid_social">付费社交广告</option><option value="cpc">搜索广告</option><option value="email">邮件</option><option value="qr">二维码</option></select></label><label>活动名称（选填）<input value={campaign} onChange={(event) => setCampaign(event.target.value)} placeholder="例如：2026暑期推广" /></label></div><div className="campaign-output"><code>{link}</code><button onClick={async () => { await navigator.clipboard.writeText(link); setCopied(true); setTimeout(() => setCopied(false), 1600); }}>{copied ? "已复制" : "复制链接"}</button></div></section>;
}

export default function AnalyticsPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [days, setDays] = useState(7);
  const [data, setData] = useState<AnalyticsData>(EMPTY);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetch("/api/admin/session").then((response) => setAuthenticated(response.ok)); }, []);
  useEffect(() => {
    if (!authenticated) return;
    fetch(`/api/admin/analytics?days=${days}`).then(async (response) => {
      if (response.status === 401) { setAuthenticated(false); return; }
      if (response.ok) setData(await response.json());
    }).finally(() => setLoading(false));
  }, [authenticated, days]);
  const maxDaily = useMemo(() => Math.max(1, ...data.daily.map((row) => Number(row.pageviews))), [data.daily]);

  if (authenticated === null) return <main className="admin-loading">正在打开访问统计…</main>;
  if (!authenticated) return <main className="admin-login"><div className="analytics-login"><h1>请先登录后台</h1><p>访问统计仅管理员可见。</p><Link href="/admin">前往登录</Link></div></main>;

  return <main className="admin-shell">
    <aside className="admin-sidebar"><Link href="/" className="admin-logo"><b>君</b><span>与君游<small>管理后台</small></span></Link><nav><a href="/admin">客户咨询</a><a className="active" href="/admin/analytics">访问统计</a><a href="/admin/content">网站内容</a><a href="/" target="_blank">查看前台</a></nav><button className="logout" onClick={async () => { await fetch("/api/admin/logout", { method: "POST" }); location.href = "/admin"; }}>退出登录</button></aside>
    <div className="admin-main analytics-main"><header><div><small>WEBSITE ANALYTICS</small><h1>访问统计</h1></div><div className="analytics-period">{[7, 30, 90].map((value) => <button className={days === value ? "active" : ""} key={value} onClick={() => { if (days !== value) { setLoading(true); setDays(value); } }}>近 {value} 天</button>)}</div></header>
      <p className="analytics-note">匿名统计，不保存访客真实 IP。访客数按每日匿名访客计算。</p>
      <section className="admin-stats analytics-summary"><article><span>访客数</span><strong>{Number(data.summary.visitors).toLocaleString("zh-CN")}</strong><small>独立访客人次</small></article><article><span>访问次数</span><strong>{Number(data.summary.pageviews).toLocaleString("zh-CN")}</strong><small>页面浏览量</small></article><article><span>人均浏览</span><strong>{data.summary.visitors ? (Number(data.summary.pageviews) / Number(data.summary.visitors)).toFixed(1) : "0"}</strong><small>页 / 访客</small></article><article><span>统计区间</span><strong>{data.days}</strong><small>天</small></article></section>
      <CampaignBuilder />
      <section className="admin-panel analytics-chart-panel"><div className="analytics-heading"><div><h2>每日访问趋势</h2><p>访客数与页面浏览量</p></div>{loading && <span>正在更新…</span>}</div>{data.daily.length ? <div className="analytics-chart">{data.daily.map((row) => <div key={row.day} className="analytics-day"><div className="analytics-bars"><i style={{ height: `${Math.max(5, Number(row.pageviews) / maxDaily * 100)}%` }} title={`${row.pageviews} 次浏览`} /><b style={{ height: `${Math.max(5, Number(row.visitors) / maxDaily * 100)}%` }} title={`${row.visitors} 位访客`} /></div><strong>{Number(row.pageviews)}</strong><span>{row.day.slice(5)}</span></div>)}</div> : <p className="analytics-empty analytics-empty-large">目前还没有访问记录。上线后有访客进入网站，这里会自动出现趋势。</p>}</section>
      <div className="analytics-grid"><section className="admin-panel analytics-card"><div className="analytics-heading"><div><h2>国家与地区</h2><p>按访客统计</p></div></div><RankedList rows={data.countries} country /></section><section className="admin-panel analytics-card"><div className="analytics-heading"><div><h2>设备类型</h2><p>手机、电脑和平板</p></div></div><RankedList rows={data.devices} /></section><section className="admin-panel analytics-card"><div className="analytics-heading"><div><h2>访问来源</h2><p>按访客统计的平台来源</p></div></div><RankedList rows={data.sources} /></section><section className="admin-panel analytics-card"><div className="analytics-heading"><div><h2>推广活动</h2><p>带活动标记的访客</p></div></div><RankedList rows={data.campaigns} /></section><section className="admin-panel analytics-card"><div className="analytics-heading"><div><h2>浏览器</h2><p>客户使用的浏览器</p></div></div><RankedList rows={data.browsers} /></section><section className="admin-panel analytics-card"><div className="analytics-heading"><div><h2>操作系统</h2><p>iOS、Android、Windows 等</p></div></div><RankedList rows={data.operatingSystems} /></section><section className="admin-panel analytics-card"><div className="analytics-heading"><div><h2>热门页面</h2><p>访问次数最多的页面</p></div></div><RankedList rows={data.pages} /></section></div>
    </div>
  </main>;
}
