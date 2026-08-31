"use client";

import { FormEvent, useEffect, useState } from "react";

export type PlanLocale = "zh-CN" | "en" | "zh-TW";
type Option = readonly [string, string];

const copy = {
  "zh-CN": {
    lang: "zh-Hans", formTitle: "旅客与行程信息", formIntro: "标有 * 的项目为必填，其余可以之后再确认。",
    name: "怎么称呼你", namePlaceholder: "姓名", email: "电子邮箱（选填）", wechat: "联系方式", wechatPlaceholder: "WhatsApp / WeChat / TikTok / Facebook",
    citiesLabel: "游玩城市（可多选）", cityPriority: "福建各地、汕头与潮州优先", otherDestination: "选择“其他”后，可填写具体城市或景点",
    date: "大概出行时间", datePlaceholder: "例如：2026年10月／日期待定", days: "游玩天数", daysPlaceholder: "例如：8",
    adults: "成人", children: "儿童", travelerNote: "婴儿、长辈或行动不便等情况，可在选填信息中说明。",
    optional: "补充旅行偏好", optionalNote: "酒店、用车、预算等均为选填", expand: "展开填写 ＋", collapse: "收起选填内容 －",
    source: "从哪里看到我们", select: "请选择",
    arrival: "抵达城市", arrivalPlaceholder: "例如：厦门／上海", returnCity: "返程城市", returnPlaceholder: "可以与抵达城市不同",
    group: "和谁出行", style: "旅行方式", hotel: "酒店等级", roomType: "房型",
    rooms: "房间数量", roomsPlaceholder: "例如：2间", vehicle: "用车需求", budget: "预算范围（每人）",
    notes: "其他需求或特别说明", notesPlaceholder: "例如：节奏、饮食偏好、长辈或儿童需求。请勿填写证件、银行卡或详细病历等敏感资料。",
    consentBefore: "我已阅读并同意", privacy: "《隐私政策与客户数据说明》", consentAfter: "。",
    submit: "提交咨询需求", sending: "正在提交…", idle: "提交后，我们会在24小时以内通过你填写的联系方式与你取得联系。",
    success: "已收到你的需求，我们会在24小时以内与你取得联系。", error: "提交失败，请稍后再试。",
    cities: ["厦门","泉州","漳州","福州","莆田","龙岩","三明","南平","福建其他","汕头","潮州","中国其他城市"],
    sources: ["TikTok","Facebook","Instagram","Google 搜索","朋友介绍","其他渠道"],
    groups: ["带父母长辈","家庭亲子","朋友小团","情侣／两人","商务出行"],
    styles: ["深度定制游","家庭舒适游","长辈慢节奏旅行","商务接待","只需要单项服务"],
    hotels: ["经济舒适型","四星级酒店","五星级酒店","高端酒店","精品民宿","暂未确定"],
    roomTypes: ["大床房","双床房","家庭房／套房","多种房型组合"],
    vehicles: ["接送机","全程专属包车","部分城市包车","豪华商务车","中巴／团队用车","暂未确定"],
    budgets: ["人民币3,000元以内","人民币3,000–6,000元","人民币6,000–10,000元","人民币10,000–20,000元","人民币20,000元以上","希望先听取建议"],
  },
  en: {
    lang: "en", formTitle: "Traveller and trip details", formIntro: "Fields marked * are required. Everything else can be confirmed later.",
    name: "Name", namePlaceholder: "Your name", email: "Email address (optional)", wechat: "Preferred contact", wechatPlaceholder: "WhatsApp / WeChat / TikTok / Facebook",
    citiesLabel: "Cities to visit (select any)", cityPriority: "Fujian, Shantou, and Chaozhou first", otherDestination: "If you select Other, add the city or specific place here",
    date: "Approximate travel date", datePlaceholder: "For example: October 2026 / undecided", days: "Trip length", daysPlaceholder: "For example: 8",
    adults: "Adults", children: "Children", travelerNote: "Mention infants, seniors, or mobility needs in the optional section.",
    optional: "Add travel preferences", optionalNote: "Hotels, transport, and budget are optional", expand: "Open optional fields ＋", collapse: "Close optional fields －",
    source: "How did you find us?", select: "Select",
    arrival: "Arrival city", arrivalPlaceholder: "For example: Xiamen / Shanghai", returnCity: "Departure city", returnPlaceholder: "It can differ from the arrival city",
    group: "Who are you travelling with?", style: "Travel style", hotel: "Hotel preference", roomType: "Room type",
    rooms: "Number of rooms", roomsPlaceholder: "For example: 2", vehicle: "Transport needs", budget: "Budget per person",
    notes: "Other requests", notesPlaceholder: "Tell us about pace, food preferences, seniors, or children. Do not enter passport, bank-card, or detailed medical information.",
    consentBefore: "I have read and agree to the ", privacy: "Privacy Policy and Customer Data Notice", consentAfter: ".",
    submit: "Send inquiry", sending: "Sending…", idle: "We will contact you within 24 hours using the details provided.",
    success: "Thanks. We will contact you within 24 hours.", error: "We could not submit your request. Please try again.",
    cities: ["Xiamen","Quanzhou","Zhangzhou","Fuzhou","Putian","Longyan","Sanming","Nanping","Other places in Fujian","Shantou","Chaozhou","Other cities in China"],
    sources: ["TikTok","Facebook","Instagram","Google Search","Friend referral","Other"],
    groups: ["Parents or seniors","Family with children","Small group of friends","Couple / two travellers","Business travel"],
    styles: ["In-depth custom trip","Comfortable family trip","Slower-paced senior trip","Business reception","One service only"],
    hotels: ["Comfortable economy hotel","Four-star hotel","Five-star hotel","High-end hotel","Boutique guesthouse","Not decided"],
    roomTypes: ["King room","Twin room","Family room / suite","Mix of room types"],
    vehicles: ["Airport transfer","Private vehicle throughout","Private vehicle in selected cities","Premium business van","Minibus / group vehicle","Not decided"],
    budgets: ["Under CNY 3,000","CNY 3,000–6,000","CNY 6,000–10,000","CNY 10,000–20,000","Over CNY 20,000","Please recommend"],
  },
  "zh-TW": {
    lang: "zh-Hant", formTitle: "旅客與行程資料", formIntro: "標有 * 的項目為必填，其餘可以之後再確認。",
    name: "怎麼稱呼你", namePlaceholder: "姓名", email: "電子郵件（選填）", wechat: "聯絡方式", wechatPlaceholder: "WhatsApp / WeChat / TikTok / Facebook",
    citiesLabel: "遊玩城市（可多選）", cityPriority: "福建各地、汕頭與潮州優先", otherDestination: "選擇「其他」後，可填寫具體城市或景點",
    date: "大概出行時間", datePlaceholder: "例如：2026年10月／日期待定", days: "遊玩天數", daysPlaceholder: "例如：8",
    adults: "成人", children: "兒童", travelerNote: "嬰兒、長輩或行動不便等情況，可在選填資料中說明。",
    optional: "補充旅行偏好", optionalNote: "飯店、用車、預算等均為選填", expand: "展開填寫 ＋", collapse: "收起選填內容 －",
    source: "從哪裡看到我們", select: "請選擇",
    arrival: "抵達城市", arrivalPlaceholder: "例如：廈門／上海", returnCity: "返程城市", returnPlaceholder: "可以與抵達城市不同",
    group: "和誰出行", style: "旅行方式", hotel: "飯店等級", roomType: "房型",
    rooms: "房間數量", roomsPlaceholder: "例如：2間", vehicle: "用車需求", budget: "預算範圍（每人）",
    notes: "其他需求或特別說明", notesPlaceholder: "例如：節奏、飲食偏好、長輩或兒童需求。請勿填寫證件、銀行卡或詳細病歷等敏感資料。",
    consentBefore: "我已閱讀並同意", privacy: "《隱私政策與客戶資料說明》", consentAfter: "。",
    submit: "提交諮詢需求", sending: "正在提交…", idle: "提交後，我們會在24小時內透過你填寫的聯絡方式與你取得聯絡。",
    success: "已收到你的需求，我們會在24小時內與你取得聯絡。", error: "提交失敗，請稍後再試。",
    cities: ["廈門","泉州","漳州","福州","莆田","龍岩","三明","南平","福建其他","汕頭","潮州","中國其他城市"],
    sources: ["TikTok","Facebook","Instagram","Google 搜尋","朋友介紹","其他渠道"],
    groups: ["帶父母長輩","家庭親子","朋友小團","情侶／兩人","商務出行"],
    styles: ["深度訂製遊","家庭舒適遊","長輩慢節奏旅行","商務接待","只需要單項服務"],
    hotels: ["經濟舒適型","四星級飯店","五星級飯店","高端飯店","精品民宿","暫未確定"],
    roomTypes: ["大床房","雙床房","家庭房／套房","多種房型組合"],
    vehicles: ["接送機","全程專屬包車","部分城市包車","豪華商務車","中巴／團隊用車","暫未確定"],
    budgets: ["人民幣3,000元以內","人民幣3,000–6,000元","人民幣6,000–10,000元","人民幣10,000–20,000元","人民幣20,000元以上","希望先聽取建議"],
  },
} as const;

function choices(items: readonly string[]): Option[] { return items.map(item => [item, item]); }

export default function LocalizedDetailedPlanForm({ locale }: { locale: PlanLocale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    for (const [id, key] of [["destination","destination"],["days","days"],["adults","adults"],["group","group"]] as const) {
      const field = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | null;
      const value = query.get(key); if (field && value) field.value = value;
    }
  }, []);

  async function sendPlan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const data = new FormData(formElement);
    const destinations = [data.getAll("cities").join(" · "), String(data.get("destination") || "")].filter(Boolean).join(" · ");
    const payload = {
      name: data.get("name"), contact: `Email ${data.get("email") || ""} | Contact ${data.get("contactMethod") || ""}`, wechat: data.get("contactMethod"), source: `${locale} · ${data.get("source") || ""}`,
      arrivalCity: data.get("arrivalCity"), returnCity: data.get("returnCity"), destinations, travelDate: data.get("travelDate"), days: data.get("days"),
      adults: data.get("adults"), children: data.get("children"), groupType: data.get("group"), travelType: data.get("travelType"),
      hotelLevel: data.get("hotelLevel"), roomType: data.get("roomType"), rooms: data.get("rooms"), vehicle: data.get("vehicle"),
      budget: data.get("budget"), notes: data.get("notes"), website: data.get("website"), privacyConsent: data.get("privacyConsent") === "on",
    };
    setStatus("sending"); setMessage(t.sending);
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(locale === "zh-CN" ? (result.error || t.error) : t.error);
      formElement.reset(); setStatus("success"); setMessage(t.success);
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : t.error); }
  }

  const select = (name: string, items: readonly string[], id?: string) => <select id={id} name={name} defaultValue=""><option value="">{t.select}</option>{choices(items).map(([value,label])=><option value={value} key={value}>{label}</option>)}</select>;
  return <form id="consultationForm" className="plan-form detailed-plan" lang={t.lang} onSubmit={sendPlan} aria-busy={status === "sending"}>
    <header className="plan-form-heading"><h2>{t.formTitle}</h2><p>{t.formIntro}</p></header>
    <div className="field-row"><label>{t.name} <span className="required-mark" aria-hidden="true">*</span><input name="name" placeholder={t.namePlaceholder} autoComplete="name" required /></label><label>{t.wechat} <span className="required-mark" aria-hidden="true">*</span><input name="contactMethod" placeholder={t.wechatPlaceholder} required /></label></div>
    <label>{t.email}<input name="email" type="email" placeholder="name@example.com" autoComplete="email" /></label>
    <fieldset className="city-picker"><legend>{t.citiesLabel}</legend><small className="city-priority-note">{t.cityPriority}</small><div>{t.cities.map((city,index)=><label key={city}><input type="checkbox" name="cities" value={city}/><span className={index < t.cities.length - 1 ? "is-priority" : undefined}>{city}</span></label>)}</div><label className="destination-extra"><span className="sr-only">{t.otherDestination}</span><input id="destination" name="destination" placeholder={t.otherDestination}/></label></fieldset>
    <div className="field-row"><label>{t.date}<input name="travelDate" placeholder={t.datePlaceholder}/></label><label>{t.days} <span className="required-mark" aria-hidden="true">*</span><input id="days" name="days" type="number" min="1" inputMode="numeric" placeholder={t.daysPlaceholder} required/></label></div>
    <div className="traveler-row"><label>{t.adults}<input id="adults" name="adults" type="number" min="1" inputMode="numeric" defaultValue="2"/></label><label>{t.children}<input name="children" type="number" min="0" inputMode="numeric" defaultValue="0"/></label><small>{t.travelerNote}</small></div>
    <details className="plan-optional"><summary><span><strong>{t.optional}</strong><small>{t.optionalNote}</small></span><b><span className="plan-expand-label">{t.expand}</span><span className="plan-collapse-label">{t.collapse}</span></b></summary><div className="plan-optional-body">
      <label>{t.source}{select("source",t.sources)}</label>
      <div className="field-row"><label>{t.arrival}<input name="arrivalCity" placeholder={t.arrivalPlaceholder}/></label><label>{t.returnCity}<input name="returnCity" placeholder={t.returnPlaceholder}/></label></div>
      <div className="field-row"><label>{t.group}{select("group",t.groups,"group")}</label><label>{t.style}{select("travelType",t.styles)}</label></div>
      <div className="field-row"><label>{t.hotel}{select("hotelLevel",t.hotels)}</label><label>{t.roomType}{select("roomType",t.roomTypes)}</label></div>
      <div className="field-row"><label>{t.rooms}<input name="rooms" type="number" min="1" placeholder={t.roomsPlaceholder}/></label><label>{t.vehicle}{select("vehicle",t.vehicles)}</label></div>
      <label>{t.budget}{select("budget",t.budgets)}</label><label>{t.notes}<textarea name="notes" placeholder={t.notesPlaceholder}/></label>
    </div></details>
    <label className="privacy-consent"><input type="checkbox" name="privacyConsent" required/><span><span className="required-mark" aria-hidden="true">*</span> {t.consentBefore}<a href={locale === "en" ? "/en/privacy" : locale === "zh-TW" ? "/zh-tw/privacy" : "/privacy"} target="_blank" rel="noreferrer">{t.privacy}</a>{t.consentAfter}</span></label>
    <label className="form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
    <button className="submit-plan" type="submit" disabled={status==="sending"}>{status==="sending"?t.sending:t.submit} <span>→</span></button>
    <p className={`form-status ${status}`} role="status" aria-live="polite">{message||t.idle}</p>
  </form>;
}
