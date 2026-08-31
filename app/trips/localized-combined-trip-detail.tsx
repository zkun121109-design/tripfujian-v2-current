import styles from "./xiamen-4-days/page.module.css";
import ReferenceDayNav from "./reference-day-nav";
import TripStructuredData from "./trip-structured-data";
import { flipDescription } from "./flip-descriptions";
import { stopDescription } from "./stop-descriptions";
import { applyRouteStructure, type TripRouteId } from "./route-structure";
import { getLocalizedRoute } from "./localized-route-content";
import TripFlipPhoto from "./trip-flip-photo";
import FujianClassicRoute from "./fujian-classic-route-compact";

export type LocalizedTripLocale = "zh-CN" | "en" | "zh-TW";

export type LocalizedTripDayCopy = {
  title: string;
  lead: string;
  description: string;
  stops: readonly { name: string; text: string }[];
  details: readonly { title: string; lines: readonly string[] }[];
  images: readonly (readonly [string, string])[];
};

export type CombinedTripDay = Omit<LocalizedTripDayCopy, "images"> & {
  number: string;
  images: readonly (readonly [string, string, string, string?])[];
};

export type LocalizedTripCopy = {
  routeId: TripRouteId;
  locale: LocalizedTripLocale;
  title: string;
  eyebrow: string;
  summaryTitle: string;
  intro: string;
  collage: readonly string[];
  days: readonly LocalizedTripDayCopy[];
  hotels: string;
  tickets: string;
  guide?: string;
  excluded?: readonly string[];
};

export type LocalizedTripProps = Omit<LocalizedTripCopy, "collage" | "days"> & {
  duration: string;
  price: string;
  hero: string;
  collage: readonly (readonly [string, string])[];
  days: readonly CombinedTripDay[];
};

const labels = {
  "zh-CN": {
    kicker: "福建定制游参考行程", flip: "翻转图片", day: (n: number) => `Day${n}`,
    dayOverview: "行程概览", dayPlan: "今日行程", dayFacts: "当天安排",
    booking: "预定须知", standards: "【服务标准】", notIncluded: "【费用不含】", notes: "【温馨提示 · 出行前请阅读】",
    transport: "交通：", stay: "住宿：", meals: "用餐：", admission: "门票：", guide: "讲解：", insurance: "保险：",
    validity: "适用日期、成团人数与最终服务内容以确认方案及合同为准。",
    transportText: "当地空调旅游用车，按实际人数安排车型并保证每人一座；自由活动期间及行程外通常不含用车。",
    stayTail: "具体酒店、房型、单房差及加床费用以实际可订情况和最终合同为准。",
    mealsText: "酒店双人早餐；未在确认方案中明确列出的午餐和晚餐由旅客自理。",
    ticketTail: "景点开放、预约与实际票价以出行日期及最终方案为准。",
    insuranceText: "包含旅行社责任险及个人旅游意外险，具体承保范围以保险条款和合同为准。",
    excluded: ["常居地往返福建的航班、高铁或其他大交通费用。", "酒店押金、洗衣、电话、饮品、行李搬运、延迟退房等个人消费，以及自由活动期间产生的费用。", "因不可抗力或旅客个人原因调整行程产生的额外费用、单房差和加床费用。", "合同和最终行程中未约定由旅行社承担的其他费用。"],
    tips: ["旅行期间请留意人身与财产安全，照顾好同行的老人和儿童，并妥善保管随身物品。", "请妥善保管旅行社提供的票据、预订凭证及个人证件；如有遗失，请及时联系顾问协助处理。", "天气、自然灾害、政策调整、交通管制、道路状况或车辆临时故障等不可预见情况可能影响行程。顾问将及时沟通可行方案，并可在不减少已确认游览内容的前提下合理调整游览顺序和时间；相关费用按实际情况、保险条款及双方确认的方案和合同处理。", "自由活动期间不默认安排车辆、导游或返回酒店休息；如有相关需要，请在确认方案时提前提出。", "出发、乘车及入住酒店时，请携带与预订信息一致的有效身份证件；国际旅客请携带有效护照及入境所需文件。", "因航班、高铁或其他公共交通延误、取消等原因产生的行程变化及额外费用，将依承运方规则、保险条款及双方确认的方案和合同处理。", "未满18岁的旅客须由成年人或法定监护人陪同出行，并由陪同人负责旅途中的照护与安全。", "自由活动期间请选择自身能够控制风险的活动，结合年龄、健康及天气状况量力参与，并遵守现场安全规定。", "请勿进入未开放水域游泳或戏水；参加正规场所的亲水或水上活动前，请评估个人身体状况并遵守运营方要求。", "本行程不默认安排指定购物店或另行收费的旅游项目；如旅客因个人需要自行购物或参加其他活动，请了解价格、退换及安全规则后谨慎选择。"],
    cta: "以此行程为基础定制", home: "/plan",
  },
  en: {
    kicker: "FUJIAN CUSTOM TOUR · SAMPLE ITINERARY", flip: "Flip image", day: (n: number) => `Day ${n}`,
    dayOverview: "Day overview", dayPlan: "Today's itinerary", dayFacts: "Day details",
    booking: "Booking information", standards: "Service standards", notIncluded: "Not included", notes: "Before you travel",
    transport: "Transport:", stay: "Accommodation:", meals: "Meals:", admission: "Admission:", guide: "Guide:", insurance: "Insurance:",
    validity: "Travel dates, group size, and final services are subject to the confirmed proposal and signed agreement.",
    transportText: "Local air-conditioned vehicle, sized for the confirmed group with one seat per traveller. Transport is normally not included during free time or outside the itinerary.",
    stayTail: "Final hotels, room types, single-room supplements, and extra beds depend on availability and the signed agreement.",
    mealsText: "Hotel breakfast for two. Lunch and dinner are not included unless stated in the confirmed proposal.",
    ticketTail: "Opening hours, reservations, and actual prices depend on the travel date and confirmed proposal.",
    insuranceText: "Travel agency liability insurance and personal travel accident insurance are included. Coverage follows the policy terms and signed agreement.",
    excluded: ["Flights, high-speed rail, or other transport between your home city and Fujian.", "Hotel deposits and personal expenses, including laundry, calls, drinks, luggage handling, late check-out, and costs during free time.", "Additional costs caused by force majeure, personal itinerary changes, single-room supplements, or extra beds.", "Any item not assigned to the travel agency in the signed agreement and final itinerary."],
    tips: ["Take care of your personal safety and belongings, and supervise children and older travellers in your group.", "Keep all tickets, booking documents, and identification secure. Contact your advisor promptly if anything is lost.", "Weather, natural events, policy changes, traffic controls, road conditions, or vehicle issues may affect the itinerary. We will discuss practical alternatives and may reorder confirmed visits without reducing them. Any related costs follow the actual circumstances, insurance terms, and signed agreement.", "Transport, guiding, and hotel returns are not automatically provided during free time. Please request them when confirming your plan if needed.", "Carry valid identification matching the booking. International travellers need a valid passport and required entry documents.", "Changes and extra costs caused by delayed or cancelled flights, trains, or other public transport follow the carrier's rules, insurance terms, and signed agreement.", "Travellers under 18 must be accompanied by an adult or legal guardian responsible for their care and safety.", "During free time, choose activities within your abilities and consider your age, health, and the weather. Follow all on-site safety rules.", "Do not swim or play in closed waters. Use authorised facilities for water activities and follow the operator's safety requirements.", "No designated shopping stops or separately charged sightseeing activities are included by default. For personal purchases or optional activities, check prices, refund terms, and safety information before deciding."],
    cta: "Customize this itinerary", home: "/en/plan",
  },
  "zh-TW": {
    kicker: "福建訂製遊參考行程", flip: "翻轉圖片", day: (n: number) => `Day${n}`,
    dayOverview: "行程概覽", dayPlan: "今日行程", dayFacts: "當天安排",
    booking: "預訂須知", standards: "【服務標準】", notIncluded: "【費用不含】", notes: "【溫馨提示 · 出行前請閱讀】",
    transport: "交通：", stay: "住宿：", meals: "用餐：", admission: "門票：", guide: "講解：", insurance: "保險：",
    validity: "適用日期、成團人數與最終服務內容，以確認方案及合約為準。",
    transportText: "當地空調旅遊用車，按實際人數安排車型並確保每人一座；自由活動期間及行程外通常不含用車。",
    stayTail: "具體酒店、房型、單房差與加床費用，以實際可訂情況及最終合約為準。",
    mealsText: "酒店雙人早餐；未在確認方案中列明的午餐及晚餐由旅客自理。",
    ticketTail: "景點開放、預約與實際票價，以出行日期及最終方案為準。",
    insuranceText: "包含旅行社責任險及個人旅遊意外險，承保範圍以保險條款及合約為準。",
    excluded: ["常居地往返福建的航班、高鐵或其他大交通費用。", "酒店押金、洗衣、電話、飲品、行李搬運、延遲退房等個人消費，以及自由活動期間的費用。", "因不可抗力或旅客個人原因調整行程所產生的額外費用、單房差與加床費用。", "合約及最終行程中未約定由旅行社承擔的其他費用。"],
    tips: ["旅遊期間請留意人身與財產安全，照顧好同行的長者與兒童，並妥善保管隨身物品。", "請妥善保管旅行社提供的票據、預訂憑證及個人證件；如有遺失，請及時聯絡顧問協助處理。", "天氣、自然災害、政策調整、交通管制、道路狀況或車輛臨時故障等不可預見情況可能影響行程。顧問將及時溝通可行方案，並可在不減少已確認遊覽內容的前提下合理調整遊覽次序與時間；相關費用按實際情況、保險條款及雙方確認的方案和合約處理。", "自由活動期間不預設安排車輛、導遊或返回酒店休息；如有需要，請在確認方案時提前提出。", "出發、乘車及入住酒店時，請攜帶與預訂資料一致的有效身分證件；國際旅客請攜帶有效護照及入境所需文件。", "因航班、高鐵或其他公共交通延誤、取消等原因產生的行程變更及額外費用，將依承運方規則、保險條款及雙方確認的方案和合約處理。", "未滿18歲的旅客須由成年人或法定監護人陪同出行，並由陪同人負責旅途中的照護與安全。", "自由活動期間請選擇自身能夠控制風險的活動，並按年齡、健康及天氣狀況量力參與，遵守現場安全規定。", "請勿進入未開放水域游泳或戲水；參加正規場所的親水或水上活動前，請評估個人身體狀況並遵守營運方要求。", "本行程不預設安排指定購物店或另行收費的旅遊項目；如旅客因個人需要自行購物或參加其他活動，請了解價格、退換及安全規則後審慎選擇。"],
    cta: "以此行程為基礎訂製", home: "/zh-tw/plan",
  },
} as const;

export default function LocalizedCombinedTripDetail({ routeId, locale: pageLocale }: Pick<LocalizedTripCopy, "routeId" | "locale">) {
  const localizedProps = applyRouteStructure(routeId, pageLocale, { routeId, locale: pageLocale, ...getLocalizedRoute(pageLocale, routeId) });
  if (routeId === "xiamen-4-days") return <FujianClassicRoute props={localizedProps} />;
  const { locale, title, eyebrow, summaryTitle, duration, price, intro, hero, collage, days, hotels, tickets, guide, excluded } = localizedProps;
  const t = labels[locale];
  const responsiveHero = hero === "/trip-quanzhou-cityscape-v2.webp"
    ? { mobile: "/trip-quanzhou-cityscape-mobile-v2.webp", tablet: "/trip-quanzhou-cityscape-tablet-v2.webp" }
    : hero === "/trip-zhangzhou-tulou-hero-v2.webp"
      ? { mobile: "/trip-zhangzhou-tulou-hero-mobile-v2.webp", tablet: "/trip-zhangzhou-tulou-hero-tablet-v2.webp" }
      : hero === "/trip-fuzhou-pingtan-hero-v3.webp"
        ? { mobile: "/trip-fuzhou-pingtan-hero-mobile-v2.webp", tablet: "/trip-fuzhou-pingtan-hero-tablet-v2.webp" }
        : hero === "/trip-sanming-danxia-hero-v2.webp"
          ? { mobile: "/trip-sanming-danxia-hero-mobile-v2.webp", tablet: "/trip-sanming-danxia-hero-tablet-v2.webp" }
      : null;
  const displayTitle = title;
  return <main lang={locale === "en" ? "en" : locale === "zh-TW" ? "zh-Hant" : "zh-Hans"} className={`trip-detail-page ${styles.themePage}`}>
    <TripStructuredData title={displayTitle} description={intro} days={days} locale={locale} />
    <section className="reference-trip-title"><picture>{responsiveHero && <><source media="(max-width: 700px)" srcSet={responsiveHero.mobile}/><source media="(max-width: 1100px)" srcSet={responsiveHero.tablet}/></>}<img className={styles.titlePhoto} src={hero} alt="" aria-hidden="true"/></picture><div className="shell"><p>{t.kicker}</p><h1>{displayTitle}</h1></div></section>
    <section className="reference-trip-overview shell">
      <p className="reference-trip-intro">{intro}</p>
      <div className="reference-trip-collage">{collage.map(image=><figure key={image[0]}><img src={image[0]} alt={image[1]}/><figcaption>{image[1]}</figcaption></figure>)}</div>
      <div className="reference-trip-brief"><div><h2>{summaryTitle} <span>{duration}</span></h2><ol>{days.map(day=><li key={day.number}>{t.day(Number(day.number))}: {day.title}</li>)}</ol></div><a href="#booking-notice">{price}</a></div>
    </section>
    <ReferenceDayNav dayNumbers={days.map(day => day.number)} locale={locale} />
    <section className="reference-trip-days">{days.map((day,index)=><article className={`reference-trip-day ${index%2 ? "reverse" : ""}`} id={`day-${day.number}`} key={day.number}>
      <header className={styles.dayHeader}><span>{t.day(Number(day.number))}</span><div><h2>{day.title}</h2></div></header>
      <div className="reference-day-images">{day.images.map(image=><TripFlipPhoto key={`${day.number}-${image[0]}`} src={image[0]} alt={image[1]} description={flipDescription(image[0], image[2], locale)} flipLabel={t.flip} objectPosition={image[3]}/>)}</div>
      <div className="reference-day-copy"><p className={styles.dayNarrativeLabel}>{t.dayOverview}</p><p className={styles.dayNarrative}>{day.description}</p><h3 className={`${styles.daySectionLabel} ${styles.dayPlanLabel}`}>{t.dayPlan}</h3><ol className={styles.dayStops}>{day.stops.map((stop,stopIndex)=><li key={stop.name}><span>{String(stopIndex+1).padStart(2,"0")}</span><div><b>{stop.name}</b><p>{stopDescription(stop.name, stop.text, locale)}</p></div></li>)}</ol>{day.details.length > 0 && <><h3 className={`${styles.daySectionLabel} ${styles.dayFactsLabel}`}>{t.dayFacts}</h3><div className={styles.dayDetails}>{[...day.details].sort((left,right)=>left.lines.length-right.lines.length).map(detail=><section className={detail.lines.length > 2 ? styles.dayDetailWide : undefined} key={detail.title}><h3>{detail.title}</h3><ul>{detail.lines.map(line=><li key={line}>{line}</li>)}</ul></section>)}</div></>}</div>
    </article>)}</section>
    <section className="reference-booking" id="booking-notice"><div className="shell">
      <div className="reference-price-card"><p>{eyebrow}</p><h2>{summaryTitle} <span>{duration}</span></h2><strong>{price}</strong><small>{t.validity}</small></div>
      <div className="reference-notice-title"><span>▤</span><h2>{t.booking}</h2></div>
      <div className="reference-notice-section"><h3>{t.standards}</h3><ol><li><b>{t.transport}</b>{t.transportText}</li><li><b>{t.stay}</b>{hotels}; {t.stayTail}</li><li><b>{t.meals}</b>{t.mealsText}</li><li><b>{t.admission}</b>{tickets}; {t.ticketTail}</li>{guide && <li><b>{t.guide}</b>{guide}</li>}<li><b>{t.insurance}</b>{t.insuranceText}</li></ol></div>
      <div className="reference-notice-section"><h3>{t.notIncluded}</h3><ol>{(excluded ?? t.excluded).map(item=><li key={item}>{item}</li>)}</ol></div>
      <div className="reference-notice-section"><h3>{t.notes}</h3><ol>{t.tips.map(item=><li key={item}>{item}</li>)}</ol></div>
      <a className="reference-booking-cta" href={t.home}>{t.cta} <span>→</span></a>
    </div></section>
  </main>;
}
