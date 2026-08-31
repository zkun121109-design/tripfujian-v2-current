/* eslint-disable react/prop-types */
import type { LocalizedTripProps } from "./localized-combined-trip-detail";
import TripStructuredData from "./trip-structured-data";
import styles from "./xiamen-4-days/page.module.css";

export default function FujianClassicRouteCompact({ props }: { props: LocalizedTripProps }) {
  const plan = "/plan?route=福建经典5日&days=5&destinations=厦门,土楼,泉州";
  const dayImage = (index: number) => props.days[index]?.images?.[0]?.[0] ?? props.hero;
  const dayImageAlt = (index: number) => props.days[index]?.images?.[0]?.[1] ?? "福建旅行";
  const routeRows = [["01", "厦门", "抵达 · 海边 · 老城区"], ["02", "鼓浪屿", "海岛 · 老建筑 · 当地小吃"], ["03", "福建土楼", "山谷 · 村落 · 土楼"], ["04", "泉州", "古城 · 开元寺 · 西街"], ["05", "泉州", "市场 · 古城散步 · 返程"]];
  const faqs = [["五天会不会太赶？", "节奏可以调整，不必每天赶景点。"], ["可以增加或减少目的地吗？", "可以，天数和目的地都能沟通。"], ["带父母和孩子适合吗？", "可以按老人和孩子的节奏调整。"], ["这条路线大概多少钱？", "价格会根据人数、住宿标准、车辆、是否需要导游及具体体验变化。告诉我们人数、日期和住宿需求后，再提供报价。"]];

  return <main className={`trip-detail-page ${styles.themePage} ${styles.compactPage} ${styles.productPage}`} lang={props.locale === "zh-TW" ? "zh-Hant" : props.locale}>
    <TripStructuredData title="福建经典 · 5日" description={props.intro} days={props.days} locale={props.locale} />
    <section className={`${styles.compactHero} ${styles.productHero}`}><img src={props.hero} alt="" aria-hidden="true" /><div className="shell"><p className={styles.productHeroEyebrow}>FUJIAN PRIVATE JOURNEY</p><h1>福建经典 · 5日</h1><h2>第一次来福建，我推荐这样玩。</h2><p className={styles.productHeroRoute}>厦门 → 鼓浪屿 → 福建土楼 → 泉州</p><p className={styles.productHeroMeta}>5天4晚 · 建议2–8人 · 私人用车 · 行程可调整</p><a className={styles.classicPrimary} href={plan}>免费定制这条路线 →</a><p className={styles.productHeroTrust}>不默认安排购物</p></div></section>
    <section className={styles.productRouteTable}><div className="shell"><p className={styles.classicEyebrow}>FIVE DAYS · AT A GLANCE</p><h2>5天怎么玩，一眼看懂。</h2><div className={styles.productRouteRows}>{routeRows.map(([day, place, keywords]) => <div className={styles.productRouteRow} key={day}><span className={styles.productRouteNumber}>{day}</span><strong>{place}</strong><span>{keywords}</span></div>)}</div><p className={styles.productRouteNote}>私人旅行 · 不默认购物 · 每天节奏可以调整</p></div></section>
    <section className={`${styles.productDestination} ${styles.productDestinationFirst}`}><div className="shell"><img className={styles.productDestinationImage} src={dayImage(0)} alt={dayImageAlt(0)} loading="lazy" /><div className={styles.productDestinationCopy}><p className={styles.classicEyebrow}>DAY 01–02</p><p className={styles.productDestinationPlace}>厦门 / 鼓浪屿</p><h2>先从海边开始。</h2><p>海边、老街、鼓浪屿。前两天不用赶，让旅行慢慢开始。</p><p className={styles.productTags}>接机 · 鼓浪屿 · 老城区 · 住厦门</p></div></div></section>
    <section className={`${styles.productDestination} ${styles.productDestinationTulou}`}><div className="shell"><div className={styles.productDestinationCopy}><p className={styles.classicEyebrow}>DAY 03</p><p className={styles.productDestinationPlace}>福建土楼</p><h2>从海边，走进福建的山里。</h2><p>这一天离开城市，进入山谷、村落和土楼。也是整条路线变化最大的一天。</p><p className={styles.productTags}>私人用车 · 土楼 · 村落 · 当地生活</p></div><img className={styles.productDestinationImage} src={dayImage(2)} alt={dayImageAlt(2)} loading="lazy" /></div></section>
    <section className={styles.productMidCta}><div className="shell"><p>想在土楼多住一晚？</p><span>这条路线可以按你的时间调整。</span><a href={plan}>调整这条路线 →</a></div></section>
    <section className={`${styles.productDestination} ${styles.productDestinationQuanzhou}`}><div className="shell"><div className={styles.productDestinationCopy}><p className={styles.classicEyebrow}>DAY 04–05</p><p className={styles.productDestinationPlace}>泉州</p><h2>最后两天，留给泉州。</h2><p>古城、寺庙、红砖厝和当地餐桌。不用赶着打卡，慢慢认识闽南。</p><p className={styles.productTags}>古城 · 开元寺 · 西街 · 闽南美食</p></div><img className={styles.productDestinationImage} src={dayImage(3)} alt={dayImageAlt(3)} loading="lazy" /></div></section>
    <section className={styles.productAdjust}><div className="shell"><p className={styles.classicEyebrow}>MAKE IT YOURS</p><h2>不想完全照这条路线走？</h2><p>当然可以。</p><ul className={styles.productAdjustList}><li>＋ 多住一晚土楼</li><li>＋ 加入平潭看海</li><li>＋ 带父母，节奏慢一点</li><li>＋ 带孩子，减少步行</li><li>＋ 加入更多福建美食</li><li>＋ 回祖籍地看看</li></ul><a className={styles.productTextCta} href={plan}>按我的想法调整 →</a></div></section>
    <section className={styles.productArrange}><div className="shell"><p className={styles.classicEyebrow}>YOUR JOURNEY</p><h2>旅行怎么安排？</h2><div className={styles.productArrangeGrid}><article><span>01</span><h3>私人用车</h3><p>根据人数和路线安排车辆。</p></article><article><span>02</span><h3>住宿</h3><p>根据预算、位置和家庭需求提供建议。</p></article><article><span>03</span><h3>行程</h3><p>天数、目的地和每天节奏都可以调整。</p></article></div></div></section>
    <section className={styles.compactFaq}><div className="shell"><p className={styles.classicEyebrow}>FAQ</p><h2>出发前，先看看这些问题。</h2>{faqs.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}</summary><p>{answer}</p></details>)}</div></section>
    <section className={styles.compactFinal}><div className="shell"><p className={styles.classicEyebrow}>MAKE IT YOUR JOURNEY</p><h2>喜欢这条路线？<br />把它变成你的福建旅行。</h2><p>告诉我们什么时候来、几个人，我们会在这条路线基础上帮你调整。</p><a className={styles.classicPrimary} href={plan}>免费定制这条5日路线 →</a><small>咨询不代表下单，确认路线和安排后再决定。</small></div></section>
    <a className={styles.classicMobileCta} href={plan}>定制这条路线 →</a>
  </main>;
}
