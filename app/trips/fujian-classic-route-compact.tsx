/* eslint-disable react/prop-types */
import type { LocalizedTripProps } from "./localized-combined-trip-detail";
import TripStructuredData from "./trip-structured-data";
import styles from "./xiamen-4-days/page.module.css";

export default function FujianClassicRouteCompact({ props }: { props: LocalizedTripProps }) {
  const plan = "/plan?route=福建经典5日&days=5&destinations=厦门,土楼,泉州";
  const img = (i: number) => props.days[i]?.images?.[0]?.[0] ?? props.hero;
  const alt = (i: number) => props.days[i]?.images?.[0]?.[1] ?? "福建旅行";
  const laterDays = [
    ["04", "泉州", "开始认识真正的闽南。", "泉州古城 · 开元寺 · 西街 · 闽南美食", "前往泉州，从古城、寺庙、街巷和当地餐桌认识这座城市。", "泉州"],
    ["05", "泉州", "把最后一天留给古城。", "早餐 · 市场 · 古城散步 · 送站", "根据返程时间继续逛泉州，随后安排机场或高铁站送站。", "泉州"],
  ];
  const faqs = [["五天会不会太赶？", "节奏可以调整，不必每天赶景点。"], ["可以增加或减少目的地吗？", "可以，天数和目的地都能沟通。"], ["带父母和孩子适合吗？", "可以按老人和孩子的节奏调整。"], ["这条路线大概多少钱？", "价格会根据人数、住宿标准、车辆、是否需要导游及具体体验变化。告诉我们人数、日期和住宿需求后，再提供报价。"]];
  return <main className={`trip-detail-page ${styles.themePage} ${styles.compactPage} ${styles.expV3Page}`} lang={props.locale === "zh-TW" ? "zh-Hant" : props.locale}>
    <TripStructuredData title="福建经典 · 5日" description={props.intro} days={props.days} locale={props.locale} />
    <section className={`${styles.compactHero} ${styles.expV3Hero}`}><img src={props.hero} alt="" aria-hidden="true" /><div className="shell"><p>FUJIAN PRIVATE JOURNEY</p><h1>福建经典 · 5日</h1><p className={styles.expV3Route}>厦门 → 鼓浪屿 → 福建土楼 → 泉州</p><ul><li>5天4晚</li><li>2–8人</li><li>私人用车</li><li>可调整</li><li>不默认安排购物</li></ul><a className={styles.classicPrimary} href={plan}>开始定制这条路线 →</a></div></section>
    <section className={styles.expV3Overview}><div className="shell"><div><p className={styles.classicEyebrow}>THE ROUTE</p><h2>第一次来福建，这五天刚刚好。</h2><p>五天时间，从厦门和鼓浪屿开始，走进福建土楼的山谷，再到泉州认识真正的闽南。这是一条适合第一次来福建的路线，不追求一天打卡很多景点，而是在有限的时间里，看见几个真正不同的福建。</p></div><dl><dt>JOURNEY AT A GLANCE</dt>{[["旅行天数","5天4晚"],["路线","厦门 · 鼓浪屿 · 福建土楼 · 泉州"],["人数","建议 2–8 人"],["旅行方式","私人用车 · 私人定制"],["主题","海岛 · 土楼 · 闽南文化"],["节奏","不赶路 · 行程可调整"]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div></section>
    <section className={styles.expV3Itinerary}><div className="shell"><p className={styles.classicEyebrow}>YOUR JOURNEY</p><h2>每一天，都留一点时间给福建。</h2>
      <article className={styles.expV3Day01}><div><span>DAY 01 · 厦门</span><h3>抵达厦门，先慢下来。</h3><p className={styles.expV3Keywords}>机场/高铁接送 · 入住酒店 · 海边散步</p><p>第一天不安排太满。抵达后由车辆接站，先入住酒店、休息，再根据时间去海边或老城区走走。如果是晚班机，也可以直接入住，把体力留给第二天。</p><p><b>住宿：</b>厦门</p></div><img src={img(0)} alt={alt(0)} loading="lazy" /></article>
      <article className={styles.expV3Day02}><div><span>DAY 02 · 鼓浪屿</span><h3>把一天留给海岛和老街。</h3><p className={styles.expV3Keywords}>轮渡 · 鼓浪屿 · 老建筑 · 当地小吃</p><p>坐船前往鼓浪屿。不急着把岛上的景点全部走完，可以在老建筑、街巷、海边和小店之间慢慢逛。下午或傍晚返回厦门。</p><p><b>住宿：</b>厦门</p></div><img src={img(1)} alt={alt(1)} loading="lazy" /></article>
      <article className={styles.expV3Day03}><span>DAY 03 · 福建土楼</span><h3>从海边，走进福建的山里。</h3><p className={styles.expV3Keywords}>私人用车 · 土楼 · 村落 · 当地生活</p><p>离开厦门，乘车进入福建山区。这一天不只是“看一个土楼”，而是进入村落，看看土楼为什么会出现在这里，以及当地人的生活与建筑之间有什么关系。</p><p><b>住宿：</b>根据路线选择土楼周边或返回厦门。</p><img src={img(2)} alt={alt(2)} loading="lazy" /></article>
    </div></section>
    <section className={styles.denseItinerary}><div className="shell"><div className={styles.denseDayList}>{laterDays.map(([num, place, title, keywords, copy, stay], i) => <div className={styles.denseDay} id={`dense-day-${num}`} key={num}><div className={styles.denseDayLabel}>DAY {num} · {place}</div><div className={styles.denseDayBody}><h3>{title}</h3><p className={styles.denseKeywords}>{keywords}</p><p>{copy}</p><p className={styles.denseStay}><b>住宿：</b>{stay}</p></div>{i === 1 && <img className={styles.denseInlineImage} src={img(3)} alt={alt(3)} loading="lazy" />}</div>)}</div></div></section>
    <section className={styles.denseSpecs}><div className="shell"><p className={styles.classicEyebrow}>ITINERARY NOTES</p><h3>行程说明</h3><dl><div><dt>住宿</dt><dd>根据预算、位置和家庭需求安排；已经订好酒店也可以。</dd></div><div><dt>交通</dt><dd>根据人数和路线安排私人用车，可包含机场 / 高铁接送与城市之间移动。</dd></div><div><dt>行程调整</dt><dd>天数、节奏、目的地和当地体验都可以修改。</dd></div><div><dt>其他费用</dt><dd>门票、餐食、导游和特殊体验，根据最终行程写入报价。</dd></div></dl></div></section>
    <section className={styles.compactFaq}><div className="shell"><p className={styles.classicEyebrow}>FAQ</p><h3>常见问题</h3>{faqs.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}</summary><p>{a}</p></details>)}</div></section><section className={styles.compactFinal}><div className="shell"><p className={styles.classicEyebrow}>MAKE IT YOUR JOURNEY</p><h2>把这条路线改成你的福建旅行</h2><p>告诉我们什么时候来、几个人，我们会在这条路线基础上帮你调整。</p><a className={styles.classicPrimary} href={plan}>免费定制这条5日路线 →</a><small>咨询不代表下单，确认路线和安排后再决定。</small></div></section><a className={styles.classicMobileCta} href={plan}>定制这条路线 →</a>
  </main>;
}
