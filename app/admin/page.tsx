"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Inquiry = Record<string, string | number | null> & { id: number; name: string; contact: string; status: string; admin_note: string; created_at: string };
const STATUS: Record<string, string> = { new: "新咨询", contacted: "已联系", planning: "方案中", won: "已成交", closed: "已结束" };

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [rows, setRows] = useState<Inquiry[]>([]);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [status, setStatus] = useState("all");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [settings, setSettings] = useState<Record<string, string>>({});

  const loadRows = useCallback(async () => {
    const response = await fetch(`/api/admin/inquiries?status=${encodeURIComponent(status)}&q=${encodeURIComponent(query)}`);
    if (response.status === 401) { setAuthenticated(false); return; }
    const data = await response.json() as { inquiries?: Inquiry[] };
    const inquiries = data.inquiries || [];
    setRows(inquiries);
    setSelected((current) => current ? inquiries.find((row) => row.id === current.id) || null : null);
  }, [query, status]);

  useEffect(() => {
    fetch("/api/admin/session").then(async (response) => {
      setAuthenticated(response.ok);
      if (response.ok) {
        loadRows();
        const settingResponse = await fetch("/api/admin/settings");
        if (settingResponse.ok) { const data = await settingResponse.json() as { settings?: Record<string, string> }; setSettings(data.settings || {}); }
      }
    });
  }, [loadRows]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ username: form.get("username"), password: form.get("password") }) });
    const data = await response.json() as { error?: string };
    if (!response.ok) { setMessage(data.error || "登录失败"); return; }
    setAuthenticated(true); setMessage(""); await loadRows();
  }

  async function saveInquiry() {
    if (!selected) return;
    const response = await fetch("/api/admin/inquiries", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ id: selected.id, status: selected.status, adminNote: selected.admin_note }) });
    setMessage(response.ok ? "客户记录已保存" : "保存失败");
    if (response.ok) await loadRows();
  }

  async function saveSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/admin/settings", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(settings) });
    setMessage(response.ok ? "联系方式已保存" : "保存失败");
  }

  const counts = useMemo(() => Object.keys(STATUS).reduce((all, key) => ({ ...all, [key]: rows.filter((row) => row.status === key).length }), {} as Record<string, number>), [rows]);

  if (authenticated === null) return <main className="admin-loading">正在打开后台…</main>;
  if (!authenticated) return <main className="admin-login"><form onSubmit={login}><Link href="/" className="admin-logo"><b>君</b><span>与君游<small>内容与客户管理后台</small></span></Link><h1>管理员登录</h1><p>登录后查看客户咨询和管理网站联系方式。</p><label>账号<input name="username" defaultValue="admin" autoComplete="username" /></label><label>密码<input name="password" type="password" autoComplete="current-password" /></label><button>进入后台</button>{message && <small className="admin-error">{message}</small>}</form></main>;

  return <main className="admin-shell">
    <aside className="admin-sidebar"><Link href="/" className="admin-logo"><b>君</b><span>与君游<small>管理后台</small></span></Link><nav><a className="active" href="#leads">客户咨询</a><a href="/admin/analytics">访问统计</a><a href="/admin/content">网站内容</a><a href="#settings">联系方式</a><a href="/" target="_blank">查看前台</a></nav><button className="logout" onClick={async () => { await fetch("/api/admin/logout", { method: "POST" }); setAuthenticated(false); }}>退出登录</button></aside>
    <div className="admin-main"><header><div><small>YUEJIE TRAVEL CRM</small><h1>客户咨询</h1></div><span>{message}</span></header>
      <section className="admin-stats">{Object.entries(STATUS).slice(0, 4).map(([key, label]) => <article key={key}><span>{label}</span><strong>{counts[key] || 0}</strong></article>)}</section>
      <section className="admin-panel" id="leads"><div className="admin-toolbar"><div>{["all", ...Object.keys(STATUS)].map((key) => <button className={status === key ? "active" : ""} onClick={() => setStatus(key)} key={key}>{key === "all" ? "全部" : STATUS[key]}</button>)}</div><form onSubmit={(event) => { event.preventDefault(); loadRows(); }}><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索姓名、电话或目的地" /><button>搜索</button></form></div>
        <div className="lead-table"><div className="lead-head"><span>客户</span><span>行程需求</span><span>来源</span><span>状态</span><span>提交时间</span></div>{rows.length ? rows.map((row) => <button className="lead-row" key={row.id} onClick={() => setSelected(row)}><span><strong>{row.name}</strong><small>{row.contact}</small></span><span><strong>{String(row.destinations || row.arrival_city || "待沟通")}</strong><small>{row.days ? `${row.days}天` : "天数待定"} · {String(row.adults || 0)}成人 {String(row.children || 0)}儿童</small></span><span>{String(row.attribution_source || row.source || "直接访问")}</span><span><i className={`status-${row.status}`}>{STATUS[row.status] || row.status}</i></span><span>{String(row.created_at).slice(0, 16)}</span></button>) : <div className="empty-state">目前还没有符合条件的咨询记录</div>}</div>
      </section>
      <section className="admin-panel settings-panel" id="settings"><div><small>WEBSITE SETTINGS</small><h2>联系渠道</h2><p>保存正式账号后，可用于替换前台对应入口。</p></div><form onSubmit={saveSettings}>{[["wechat", "微信号"], ["tiktok", "TikTok 链接"], ["facebook", "Facebook 链接"], ["instagram", "Instagram 链接"], ["servicePhone", "客服电话"]].map(([key, label]) => <label key={key}>{label}<input value={settings[key] || ""} onChange={(event) => setSettings({ ...settings, [key]: event.target.value })} /></label>)}<button>保存联系方式</button></form></section>
    </div>
    {selected && <div className="lead-drawer"><div className="drawer-head"><div><small>客户 #{selected.id}</small><h2>{selected.name}</h2><p>{selected.contact}</p></div><button onClick={() => setSelected(null)}>×</button></div><div className="drawer-grid">{[["想去的地方", selected.destinations], ["日期", selected.travel_date], ["天数", selected.days], ["同行", `${selected.adults}成人 ${selected.children}儿童`], ["旅行方式", selected.travel_type], ["酒店", selected.hotel_level], ["房型/数量", `${selected.room_type || ""} ${selected.rooms || ""}`], ["用车", selected.vehicle], ["预算", selected.budget], ["自动识别来源", selected.attribution_source], ["推广媒介", selected.attribution_medium], ["活动名称", selected.attribution_campaign], ["首次进入页面", selected.landing_page], ["客户填写来源", selected.source]].map(([label, value]) => <div key={String(label)}><small>{label}</small><strong>{String(value || "未记录")}</strong></div>)}</div><label>客户补充需求<textarea value={String(selected.notes || "")} readOnly /></label><label>跟进状态<select value={selected.status} onChange={(event) => setSelected({ ...selected, status: event.target.value })}>{Object.entries(STATUS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label><label>内部跟进备注<textarea value={String(selected.admin_note || "")} onChange={(event) => setSelected({ ...selected, admin_note: event.target.value })} placeholder="记录联系时间、客户偏好、报价进度…" /></label><button className="save-lead" onClick={saveInquiry}>保存客户记录</button></div>}
  </main>;
}
