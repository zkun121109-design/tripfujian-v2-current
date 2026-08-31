"use client";

import { FormEvent, useEffect, useState } from "react";

export default function DetailedPlanForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const values: Record<string, string> = {
      destination: query.get("destination") || "",
      days: query.get("days") || "",
      adults: query.get("adults") || "",
      group: query.get("group") || "",
    };
    Object.entries(values).forEach(([id, value]) => {
      const field = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | null;
      if (field && value) field.value = value;
    });
  }, []);

  async function sendPlan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const data = new FormData(formElement);
    const selectedCities = data.getAll("cities").join("、");
    const destinations = [selectedCities, String(data.get("destination") || "")].filter(Boolean).join("、");
    const payload = {
      name: data.get("name"),
      contact: `邮箱 ${data.get("email") || ""} | 微信 ${data.get("wechat") || ""}`,
      wechat: data.get("wechat"), source: data.get("source"),
      arrivalCity: data.get("arrivalCity"), returnCity: data.get("returnCity"), destinations,
      travelDate: data.get("travelDate"), days: data.get("days"), adults: data.get("adults"), children: data.get("children"),
      groupType: data.get("group"), travelType: data.get("travelType"), hotelLevel: data.get("hotelLevel"), roomType: data.get("roomType"),
      rooms: data.get("rooms"), vehicle: data.get("vehicle"), budget: data.get("budget"), notes: data.get("notes"),
      website: data.get("website"), privacyConsent: data.get("privacyConsent") === "on",
    };
    setStatus("sending"); setMessage("正在提交，请稍候…");
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(result.error || "提交失败，请稍后再试");
      formElement.reset(); setStatus("success"); setMessage("已收到你的需求，我们会通过微信或邮箱联系你。");
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "提交失败，请稍后再试");
    }
  }

  return <form className="plan-form detailed-plan" onSubmit={sendPlan}>
    <p className="plan-form-note"><strong>先填写基本需求即可</strong><span>暂时不确定的内容可以留空，顾问联系后再一起确认。</span></p>
    <div className="form-section-title"><span>01</span><div><strong>快速咨询</strong><small>只需要大概方向和联系方式</small></div></div>
    <div className="field-row"><label>怎么称呼你<input name="name" placeholder="姓名" autoComplete="name" required /></label><label>邮箱<input name="email" type="email" placeholder="name@example.com" autoComplete="email" required /></label></div>
    <label>微信号（选填）<input name="wechat" placeholder="方便通过微信联系" /></label>
    <fieldset className="city-picker"><legend>想去哪些城市（可多选）</legend><div>{["福建", "北京", "上海", "西安", "成都", "重庆", "大理・丽江", "桂林・阳朔", "张家界", "新疆", "三亚"].map(city => <label key={city}><input type="checkbox" name="cities" value={city} /><span>{city}</span></label>)}</div><label className="destination-extra"><span className="sr-only">其他城市或具体景点</span><input id="destination" name="destination" placeholder="其他城市或具体景点，可在这里补充" /></label></fieldset>
    <div className="field-row"><label>大概出行时间<input name="travelDate" placeholder="例如：2026年10月 / 日期待定" /></label><label>游玩天数<input id="days" name="days" type="number" min="1" placeholder="例如：8" /></label></div>
    <div className="traveler-row"><label>成人<input id="adults" name="adults" type="number" min="1" defaultValue="2" /></label><label>儿童<input name="children" type="number" min="0" defaultValue="0" /></label><small>婴儿、长辈或行动不便等情况，可在选填信息中说明。</small></div>
    <details className="plan-optional"><summary><span><strong>补充旅行偏好</strong><small>酒店、用车、预算等均为选填</small></span><b>展开填写 ＋</b></summary><div className="plan-optional-body">
      <div className="field-row"><label>备用邮箱或其他联系方式<input name="alternateContact" placeholder="选填" /></label><label>从哪里看到我们<select name="source" defaultValue=""><option value="">请选择</option><option>TikTok</option><option>Facebook</option><option>Instagram</option><option>Google 搜索</option><option>朋友介绍</option><option>其他渠道</option></select></label></div>
      <div className="field-row"><label>抵达城市<input name="arrivalCity" placeholder="例如：厦门 / 上海" /></label><label>返程城市<input name="returnCity" placeholder="可以与抵达城市不同" /></label></div>
      <div className="field-row"><label>和谁出行<select id="group" name="group" defaultValue=""><option value="">请选择</option><option>带父母长辈</option><option>家庭亲子</option><option>朋友小团</option><option>情侣 / 两人</option><option>商务出行</option></select></label><label>旅行方式<select name="travelType" defaultValue=""><option value="">请选择</option><option>深度定制游</option><option>家庭舒适游</option><option>长辈慢节奏旅行</option><option>商务接待</option><option>只需要单项服务</option></select></label></div>
      <div className="field-row"><label>酒店等级<select name="hotelLevel" defaultValue=""><option value="">请选择</option><option>经济舒适型</option><option>四星级酒店</option><option>五星级酒店</option><option>高端奢华酒店</option><option>精品民宿</option><option>暂未确定</option></select></label><label>房型<select name="roomType" defaultValue=""><option value="">请选择</option><option>大床房</option><option>双床房</option><option>家庭房 / 套房</option><option>多种房型组合</option></select></label></div>
      <div className="field-row"><label>房间数量<input name="rooms" type="number" min="1" placeholder="例如：2间" /></label><label>用车需求<select name="vehicle" defaultValue=""><option value="">请选择</option><option>接送机</option><option>全程专属包车</option><option>部分城市包车</option><option>豪华商务车</option><option>中巴 / 团队用车</option><option>暂未确定</option></select></label></div>
      <label>预算范围（每人）<select name="budget" defaultValue=""><option value="">请选择</option><option>¥3,000以内</option><option>¥3,000–6,000</option><option>¥6,000–10,000</option><option>¥10,000–20,000</option><option>¥20,000以上</option><option>希望先听取建议</option></select></label>
      <label>其他需求或特别说明<textarea name="notes" placeholder="例如：节奏、饮食偏好、长辈或儿童需求。请勿填写证件、银行卡或详细病历等敏感资料。" /></label>
    </div></details>
    <label className="privacy-consent"><input type="checkbox" name="privacyConsent" required /><span>我已阅读并同意<a href="/privacy" target="_blank" rel="noreferrer">《隐私政策与客户数据说明》</a>。</span></label>
    <label className="form-honeypot" aria-hidden="true">网站<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <button className="submit-plan" type="submit" disabled={status === "sending"}>{status === "sending" ? "正在提交…" : "提交咨询需求"} <span>→</span></button>
    <p className={`form-status ${status}`} role="status" aria-live="polite">{message || "提交后我们将通过微信或邮箱联系你。"}</p>
  </form>;
}
