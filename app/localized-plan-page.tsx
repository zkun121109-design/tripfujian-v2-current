import LocalizedDetailedPlanForm, { type PlanLocale } from "./localized-detailed-plan-form";

const copy = {
  "zh-CN": { lang: "zh-Hans", label: "旅行咨询", title: "填写表单，我们会在24小时以内与您取得联系", intro: "先填写姓名、联系方式和大概计划即可。酒店、用车与预算可以选填，提交咨询不等于下单。" },
  "zh-TW": { lang: "zh-Hant", label: "旅遊諮詢", title: "填寫表單，我們會在24小時內與您取得聯絡", intro: "先填寫姓名、聯絡方式和大概計畫即可。飯店、用車與預算可以選填，提交諮詢不等於下單。" },
  en: { lang: "en", label: "CUSTOM TRIP INQUIRY", title: "Complete the form and we will contact you within 24 hours", intro: "Start with your name, preferred contact method, and a rough plan. Hotels, transport, and budget are optional. Sending an inquiry is not a booking." },
} as const;

export default function LocalizedPlanPage({ locale }: { locale: PlanLocale }) {
  const t = copy[locale];
  return <main lang={t.lang} className="standalone-info-page"><section className="plan-section standalone-plan"><div className="shell plan-layout"><div className="plan-intro"><p className="overline dark">{t.label}</p><h1>{t.title}</h1><p>{t.intro}</p></div><LocalizedDetailedPlanForm locale={locale}/></div></section></main>;
}
