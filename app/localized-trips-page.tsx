import LocalizedTripPlanner from "./localized-trip-planner";
import styles from "./trips/page.module.css";

const copy = {
  "zh-CN": {
    label: "参考行程",
    title: ["先看看怎么走，", "再一起改成你的旅程。"],
    intro: "从福建本地路线到全国城市组合，先了解旅行节奏，再按日期、人数与兴趣调整。",
    finalLabel: "没有找到合适的路线？",
    finalTitle: ["告诉我们想去哪里、玩几天，", "从空白开始也可以。"],
    cta: "开始定制行程",
    plan: "/plan",
  },
  en: {
    label: "SAMPLE ITINERARIES",
    title: ["Start with an idea.", "Make it your own."],
    intro: "Browse relaxed routes in Fujian and beyond. We can adjust every trip around your dates, group, and interests.",
    finalLabel: "LOOKING FOR SOMETHING DIFFERENT?",
    finalTitle: ["Tell us where and how long.", "We can start from scratch."],
    cta: "Plan my trip",
    plan: "/en/plan",
  },
  "zh-TW": {
    label: "參考行程",
    title: ["先看看怎麼走，", "再改成你的旅程。"],
    intro: "從福建本地路線到全國城市組合，先了解旅行節奏，再按日期、人數與興趣調整。",
    finalLabel: "沒有找到合適的路線？",
    finalTitle: ["告訴我們想去哪裡、玩幾天，", "從空白開始也可以。"],
    cta: "開始訂製行程",
    plan: "/zh-tw/plan",
  },
} as const;

export default function LocalizedTripsPage({ locale }: { locale: "zh-CN" | "en" | "zh-TW" }) {
  const t = copy[locale];
  return <main lang={locale === "en" ? "en" : locale === "zh-TW" ? "zh-Hant" : "zh-Hans"} className={`trips-page ${styles.themePage}`}>
    <section className="trips-hero shell">
      <p className="overline dark">{t.label}</p>
      <h1>{t.title[0]}<br/>{t.title[1]}</h1>
      <p>{t.intro}</p>
    </section>
    <LocalizedTripPlanner locale={locale}/>
    <section className="trips-final"><div className="shell">
      <p className="overline">{t.finalLabel}</p>
      <h2>{t.finalTitle[0]}<br/>{t.finalTitle[1]}</h2>
      <a href={t.plan}>{t.cta} <span>→</span></a>
    </div></section>
  </main>;
}
