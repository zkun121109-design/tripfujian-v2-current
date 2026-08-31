"use client";

import { ChangeEvent, useEffect, useState } from "react";
import "./content.css";

type Media = { key: string; url: string; size: number; uploaded: string };
type Service = { image: string; kicker: string; title: string; text: string; link: string };
type Route = { image: string; place: string; days: string; title: string; tags: string[] };
type Content = { hero: { label: string; title: string; text: string; image: string }; services: Service[]; routes: Route[] };

const defaults: Content = {
  hero: { label: "FUJIAN-BASED · CHINA-WIDE", title: "从福建出发，\n自在走进中国。", text: "厦门本地定制旅行团队，福建路线优先，也承接全国行程。\n路线、酒店、包车接送与当地服务，按你的需求重新组合。", image: "/hero-china-v2.webp" },
  services: [
    { image: "/service-custom-v2.webp", kicker: "CUSTOM TOUR", title: "1对一定制游", text: "根据时间、预算、兴趣和同行人员，从路线到每天的节奏重新设计。", link: "定制我的行程" },
    { image: "/service-vehicle-v2.webp", kicker: "PRIVATE VEHICLE", title: "包车与接送安排", text: "覆盖接送机、城市包车和跨城用车，根据家庭小团或多人团队的实际需求协调车型与司机。", link: "咨询专属用车" },
    { image: "/service-hotel-v2.webp", kicker: "HANDPICKED STAYS", title: "星级酒店与精品民宿", text: "根据预算、位置和出行习惯，安排更适合整段行程的住宿。", link: "咨询酒店安排" },
    { image: "/service-guide-v2.webp", kicker: "LOCAL GUIDES", title: "地陪与导游服务", text: "根据目的地和客群需求安排当地讲解、沟通协助与每天行程衔接。", link: "咨询导游服务" },
  ],
  routes: [
    { image: "/route-fujian.jpg", place: "厦门", days: "约4天", title: "厦门城市与海岛慢游", tags: ["鼓浪屿", "老城散步", "海岸风光"] },
    { image: "/kaiyuan-temple.webp", place: "泉州", days: "约4天", title: "泉州古城与海丝文化", tags: ["古城街巷", "传统建筑", "在地体验"] },
    { image: "/tulou.webp", place: "漳州・福建土楼", days: "约3天", title: "土楼村落与闽南生活", tags: ["云水谣", "土楼聚落", "乡村慢游"] },
    { image: "/hero.webp", place: "福州・平潭", days: "约4天", title: "古厝人文与海岛风景", tags: ["三坊七巷", "平潭海岸", "地方美食"] },
    { image: "/route-fujian.jpg", place: "厦门・土楼・东山岛", days: "约5天", title: "闽南经典小环线", tags: ["城市海岛", "土楼文化", "滨海度假"] },
    { image: "/kaiyuan-temple.webp", place: "厦门・泉州・莆田", days: "约6–7天", title: "闽南文化深度组合", tags: ["海丝文化", "古城寺庙", "节奏可调"] },
    { image: "/tulou.webp", place: "福州・泉州・土楼・厦门", days: "约8天", title: "福建南北深度旅行", tags: ["多城串联", "文化与山海", "私人包车"] },
    { image: "/fujian-food.webp", place: "福建全线", days: "天数自定", title: "家庭与长辈舒缓行程", tags: ["减少赶路", "住宿可选", "按体力调整"] },
  ],
};

export default function ContentAdmin() {
  const [content, setContent] = useState<Content>(defaults);
  const [media, setMedia] = useState<Media[]>([]);
  const [message, setMessage] = useState("");
  const [picker, setPicker] = useState<{ type: "hero" | "service" | "route"; index?: number } | null>(null);

  async function loadContent() { const response = await fetch("/api/admin/content"); if (response.status === 401) location.href = "/admin"; else { const data = await response.json() as { content?: Content }; if (data.content) setContent(data.content); } }
  async function loadMedia() { const response = await fetch("/api/admin/media"); if (response.ok) { const data = await response.json() as { media?: Media[] }; setMedia(data.media || []); } }
  // The initial values are synchronized from the authenticated admin APIs.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { void loadContent(); void loadMedia(); }, []);

  function chooseImage(url: string) {
    if (!picker) return;
    if (picker.type === "hero") setContent({ ...content, hero: { ...content.hero, image: url } });
    if (picker.type === "service" && picker.index !== undefined) { const services = [...content.services]; services[picker.index] = { ...services[picker.index], image: url }; setContent({ ...content, services }); }
    if (picker.type === "route" && picker.index !== undefined) { const routes = [...content.routes]; routes[picker.index] = { ...routes[picker.index], image: url }; setContent({ ...content, routes }); }
    setPicker(null);
  }

  async function upload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]; if (!file) return;
    setMessage("图片上传中…"); const form = new FormData(); form.set("file", file);
    const response = await fetch("/api/admin/media", { method: "POST", body: form }); const data = await response.json() as { error?: string; media?: Media };
    if (!response.ok) { setMessage(data.error || "上传失败"); return; }
    if (!data.media) { setMessage("上传结果缺少图片信息"); return; }
    await loadMedia(); setMessage("图片上传成功"); chooseImage(data.media.url);
  }

  async function save() { const response = await fetch("/api/admin/content", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ content }) }); setMessage(response.ok ? "网站内容已发布，刷新前台即可查看" : "保存失败"); }
  const setService = (index: number, key: keyof Service, value: string) => { const list = [...content.services]; list[index] = { ...list[index], [key]: value }; setContent({ ...content, services: list }); };
  const setRoute = (index: number, key: "place" | "days" | "title" | "tags", value: string) => { const list = [...content.routes]; list[index] = { ...list[index], [key]: key === "tags" ? value.split(/[,，、]/).map((item) => item.trim()).filter(Boolean) : value }; setContent({ ...content, routes: list }); };

  return <main className="content-admin"><header><a className="admin-logo" href="/admin"><b>君</b><span>与君游<small>网站内容管理</small></span></a><nav><a href="/admin">客户咨询</a><a className="active" href="/admin/content">网站内容</a><a href="/" target="_blank">查看前台</a></nav><button onClick={save}>保存并发布</button></header>
    <div className="content-wrap"><div className="content-title"><div><small>WEBSITE CONTENT</small><h1>首页内容管理</h1><p>修改文字、替换图片或调整热门路线，保存后前台自动更新。</p></div><span>{message}</span></div>
      <section className="editor-section"><div className="section-intro"><span>01</span><div><h2>首页首屏</h2><p>访客打开网站后首先看到的内容。</p></div></div><div className="hero-editor"><button className="editable-image hero-preview" onClick={() => setPicker({ type: "hero" })}><img src={content.hero.image} alt="首页首图" /><span>更换首图</span></button><div className="editor-fields"><label>英文小标题<input value={content.hero.label} onChange={(e) => setContent({ ...content, hero: { ...content.hero, label: e.target.value } })} /></label><label>主标题<textarea value={content.hero.title} onChange={(e) => setContent({ ...content, hero: { ...content.hero, title: e.target.value } })} /></label><label>介绍文字<textarea value={content.hero.text} onChange={(e) => setContent({ ...content, hero: { ...content.hero, text: e.target.value } })} /></label></div></div></section>
      <section className="editor-section"><div className="section-intro"><span>02</span><div><h2>服务项目</h2><p>首页展示的定制、用车、酒店和导游服务。</p></div></div><div className="content-card-grid">{content.services.map((item, index) => <article className="content-card" key={`${item.title}-${index}`}><button className="editable-image" onClick={() => setPicker({ type: "service", index })}><img src={item.image} alt={item.title} /><span>更换图片</span></button><label>服务名称<input value={item.title} onChange={(e) => setService(index, "title", e.target.value)} /></label><label>英文标签<input value={item.kicker} onChange={(e) => setService(index, "kicker", e.target.value)} /></label><label>服务介绍<textarea value={item.text} onChange={(e) => setService(index, "text", e.target.value)} /></label></article>)}</div></section>
      <section className="editor-section"><div className="section-intro"><span>03</span><div><h2>热门路线</h2><p>可以增加、删除、修改或调整展示顺序。</p></div><button className="add-card" onClick={() => setContent({ ...content, routes: [...content.routes, { image: "/tulou.webp", place: "新路线", days: "5–7天", title: "填写路线名称", tags: [] }] })}>＋ 新增路线</button></div><div className="content-card-grid routes-edit">{content.routes.map((item, index) => <article className="content-card" key={`${item.title}-${index}`}><button className="editable-image" onClick={() => setPicker({ type: "route", index })}><img src={item.image} alt={item.title} /><span>更换图片</span></button><label>城市组合<input value={item.place} onChange={(e) => setRoute(index, "place", e.target.value)} /></label><div className="mini-fields"><label>旅行天数<input value={item.days} onChange={(e) => setRoute(index, "days", e.target.value)} /></label><label>显示顺序<input value={index + 1} readOnly /></label></div><label>路线名称<input value={item.title} onChange={(e) => setRoute(index, "title", e.target.value)} /></label><label>特色标签<input value={item.tags.join("、")} onChange={(e) => setRoute(index, "tags", e.target.value)} /></label><div className="card-actions"><button disabled={index === 0} onClick={() => { const list = [...content.routes]; [list[index - 1], list[index]] = [list[index], list[index - 1]]; setContent({ ...content, routes: list }); }}>上移</button><button disabled={index === content.routes.length - 1} onClick={() => { const list = [...content.routes]; [list[index + 1], list[index]] = [list[index], list[index + 1]]; setContent({ ...content, routes: list }); }}>下移</button><button className="danger" onClick={() => setContent({ ...content, routes: content.routes.filter((_, i) => i !== index) })}>删除</button></div></article>)}</div></section>
      <div className="publish-bar"><span>{message || "修改完成后点击发布"}</span><button onClick={save}>保存并发布到前台</button></div>
    </div>
    {picker && <div className="media-modal"><div><header><div><h2>选择图片</h2><p>从图片库选择，或者上传一张新图片。</p></div><button onClick={() => setPicker(null)}>×</button></header><label className="upload-box">＋ 上传新图片<input type="file" accept="image/jpeg,image/png,image/webp" onChange={upload} /></label><div className="media-grid">{media.map((item) => <button key={item.key} onClick={() => chooseImage(item.url)}><img src={item.url} alt="图片库内容" /><small>{Math.round(item.size / 1024)} KB</small></button>)}</div>{!media.length && <p className="empty-media">图片库暂时为空，请先上传图片。</p>}</div></div>}
  </main>;
}
