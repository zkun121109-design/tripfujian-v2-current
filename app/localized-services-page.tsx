import Image from "next/image";
import type { PublicLocale } from "./localized-home";
import styles from "./services/page.module.css";

type Region = readonly [name: string, detail: string];

const localized = {
  "zh-CN": {
    eyebrow: "酒店与用车",
    title: "住得合适，\n也走得从容。",
    intro: "根据路线、预算、同行人数与出行节奏，协调福建各地住宿、接送与包车，让每天的衔接更清楚。",
    primaryAction: "告诉我们出行需求",
    secondaryAction: "查看定制路线",
    hotelEyebrow: "福建住宿资源",
    hotelTitle: "合作酒店覆盖福建主要目的地。",
    hotelIntro: "福建各地区的四星与五星酒店均可根据实际需求协调。我们不会只给一张固定名单，而是结合当天路线、房型需求和预算筛选更合适的住宿。",
    levels: ["四星酒店", "五星酒店"],
    hotelPoints: [
      ["先看位置", "减少不必要的折返，把住宿放进整条路线一起考虑。"],
      ["再看房型", "根据家庭、朋友或小团人数，确认床型、早餐、加床与连通房需求。"],
      ["最后确认", "把酒店名称、房型、包含项目、取消规则与价格写进最终方案。"],
    ],
    coverageLabel: "合作覆盖",
    coverageTitle: "福建十个主要旅行区域",
    coverageIntro: "从沿海城市到武夷山、土楼与闽东海岸，住宿安排会跟着实际行程走。",
    regions: [
      ["厦门", "市区、鼓浪屿与机场衔接"],
      ["泉州", "古城、晋江、石狮与惠安"],
      ["漳州", "古城、南靖土楼与东山岛"],
      ["福州", "市区、三坊七巷与长乐机场"],
      ["莆田", "莆田市区与湄洲岛行程"],
      ["平潭", "海岛环线与福州联动"],
      ["宁德", "霞浦、福鼎与闽东海岸"],
      ["南平", "武夷山与闽北行程"],
      ["三明", "泰宁、尤溪与沙县"],
      ["龙岩", "永定土楼、长汀与古田"],
    ] as readonly Region[],
    hotelNote: "具体合作酒店、官方星级、房型、早餐、加床、连通房、价格与可订情况，以出行日期和最终确认方案为准。",
    vehicleEyebrow: "包车与接送",
    vehicleTitle: "从接站到跨城，把用车放进行程一起规划。",
    vehicleIntro: "不是临时拼凑一段车程，而是根据同行人数、行李数量、每天的路线与停留时间，提前协调合适的车辆和接送节点。",
    vehicleItems: [
      ["机场与车站接送", "提前确认航班或车次、抵达时间、接应地点与酒店地址。"],
      ["城市内包车", "适合家庭、小团及带长辈或孩子的行程，按当天动线安排停留。"],
      ["福建跨城用车", "衔接厦门、泉州、漳州、福州、武夷山、土楼等不同目的地。"],
    ],
    processEyebrow: "安排方式",
    processTitle: "先把需求说清楚，再确认每一项。",
    process: [
      ["01", "提供行程信息", "出行日期、同行人数、房间数量、行李和想去的地区。"],
      ["02", "匹配住宿与车辆", "结合路线和预算整理合适选项，不让酒店和交通彼此脱节。"],
      ["03", "确认方案与价格", "逐项确认酒店、房型、车辆、接送时间、包含内容与价格。"],
    ],
    ctaTitle: "把住宿和交通，一次放进行程里。",
    ctaText: "告诉我们日期、人数和想去的地方，我们会在定制路线中一起协调酒店与用车。",
    cta: "填写定制需求",
  },
  "zh-TW": {
    eyebrow: "飯店與用車",
    title: "住得合適，\n也走得從容。",
    intro: "依照路線、預算、同行人數與旅行節奏，協調福建各地住宿、接送與包車，讓每天的銜接更清楚。",
    primaryAction: "告訴我們旅行需求",
    secondaryAction: "查看訂製路線",
    hotelEyebrow: "福建住宿資源",
    hotelTitle: "合作飯店涵蓋福建主要目的地。",
    hotelIntro: "福建各地區的四星與五星飯店均可依實際需求協調。我們不只提供一張固定名單，而是結合當日路線、房型需求與預算，篩選更合適的住宿。",
    levels: ["四星飯店", "五星飯店"],
    hotelPoints: [
      ["先看位置", "減少不必要的折返，把住宿放進整條路線一併考量。"],
      ["再看房型", "依家庭、朋友或小團人數，確認床型、早餐、加床與連通房需求。"],
      ["最後確認", "將飯店名稱、房型、包含項目、取消規則與價格寫進最終方案。"],
    ],
    coverageLabel: "合作涵蓋",
    coverageTitle: "福建十個主要旅行區域",
    coverageIntro: "從沿海城市到武夷山、土樓與閩東海岸，住宿安排會跟著實際行程走。",
    regions: [
      ["廈門", "市區、鼓浪嶼與機場銜接"], ["泉州", "古城、晉江、石獅與惠安"],
      ["漳州", "古城、南靖土樓與東山島"], ["福州", "市區、三坊七巷與長樂機場"],
      ["莆田", "莆田市區與湄洲島行程"], ["平潭", "海島環線與福州聯動"],
      ["寧德", "霞浦、福鼎與閩東海岸"], ["南平", "武夷山與閩北行程"],
      ["三明", "泰寧、尤溪與沙縣"], ["龍巖", "永定土樓、長汀與古田"],
    ] as readonly Region[],
    hotelNote: "具體合作飯店、官方星級、房型、早餐、加床、連通房、價格與可訂情況，以旅行日期和最終確認方案為準。",
    vehicleEyebrow: "包車與接送",
    vehicleTitle: "從接站到跨城，把用車放進行程一起規劃。",
    vehicleIntro: "不是臨時拼湊一段車程，而是依同行人數、行李數量、每日路線與停留時間，提前協調合適車輛和接送節點。",
    vehicleItems: [
      ["機場與車站接送", "提前確認航班或車次、抵達時間、接應地點與飯店地址。"],
      ["城市內包車", "適合家庭、小團及有長輩或孩子的行程，依當日動線安排停留。"],
      ["福建跨城用車", "銜接廈門、泉州、漳州、福州、武夷山、土樓等不同目的地。"],
    ],
    processEyebrow: "安排方式",
    processTitle: "先把需求說清楚，再確認每一項。",
    process: [
      ["01", "提供行程資訊", "旅行日期、同行人數、房間數量、行李與想去的地區。"],
      ["02", "搭配住宿與車輛", "結合路線與預算整理合適選項，不讓飯店和交通彼此脫節。"],
      ["03", "確認方案與價格", "逐項確認飯店、房型、車輛、接送時間、包含內容與價格。"],
    ],
    ctaTitle: "把住宿和交通，一次放進行程裡。",
    ctaText: "告訴我們日期、人數和想去的地方，我們會在訂製路線中一併協調飯店與用車。",
    cta: "填寫訂製需求",
  },
  en: {
    eyebrow: "Hotels and private vehicles",
    title: "The right stay.\nA smoother journey.",
    intro: "We coordinate hotels, transfers and private vehicles across Fujian around your route, budget, group and pace.",
    primaryAction: "Share your travel needs",
    secondaryAction: "View custom trips",
    hotelEyebrow: "Stays across Fujian",
    hotelTitle: "Hotel support across Fujian’s key destinations.",
    hotelIntro: "Our partner network covers four- and five-star hotels across Fujian. Rather than offering one fixed list, we shortlist stays around the route, room needs and budget for each journey.",
    levels: ["Four-star hotels", "Five-star hotels"],
    hotelPoints: [
      ["Location first", "We consider the whole route and reduce unnecessary backtracking."],
      ["Rooms that fit", "We check bedding, breakfast, extra beds and connecting-room needs for the group."],
      ["Clear confirmation", "The final plan identifies the hotel, room, inclusions, cancellation terms and price."],
    ],
    coverageLabel: "Regional coverage",
    coverageTitle: "Ten key travel areas across Fujian",
    coverageIntro: "From coastal cities to Wuyishan, the tulou region and eastern Fujian, stays follow the actual journey.",
    regions: [
      ["Xiamen", "City stays, Gulangyu and airport access"], ["Quanzhou", "Old City, Jinjiang, Shishi and Hui’an"],
      ["Zhangzhou", "Old City, Nanjing tulou and Dongshan Island"], ["Fuzhou", "City centre, Three Lanes and Seven Alleys, and the airport"],
      ["Putian", "Putian city and Meizhou Island"], ["Pingtan", "Island routes connected with Fuzhou"],
      ["Ningde", "Xiapu, Fuding and the eastern Fujian coast"], ["Nanping", "Wuyishan and northern Fujian"],
      ["Sanming", "Taining, Youxi and Shaxian"], ["Longyan", "Yongding tulou, Changting and Gutian"],
    ] as readonly Region[],
    hotelNote: "Partner hotel, official rating, room type, breakfast, extra bed, connecting room, price and availability are subject to the travel date and final confirmation.",
    vehicleEyebrow: "Private vehicles and transfers",
    vehicleTitle: "From arrival to intercity travel, transport belongs in the same plan.",
    vehicleIntro: "We plan around the group, luggage, daily route and stop times, then coordinate a suitable vehicle and clear meeting points in advance.",
    vehicleItems: [
      ["Airport and station transfers", "Flight or train, arrival time, meeting point and hotel address are confirmed in advance."],
      ["Private vehicle by day", "A practical option for families, small groups, older travellers and children."],
      ["Intercity travel in Fujian", "Connect Xiamen, Quanzhou, Zhangzhou, Fuzhou, Wuyishan, the tulou region and more."],
    ],
    processEyebrow: "How it works",
    processTitle: "Start with the needs. Confirm every detail.",
    process: [
      ["01", "Share the journey", "Dates, group size, rooms, luggage and the places you want to visit."],
      ["02", "Match stays and vehicles", "We shortlist options around the route and budget, so transport and hotels work together."],
      ["03", "Confirm the plan and price", "Hotel, room, vehicle, transfer time, inclusions and price are confirmed item by item."],
    ],
    ctaTitle: "Plan the stays and transport together.",
    ctaText: "Share your dates, group and destinations. We will coordinate hotels and vehicles as part of your custom trip.",
    cta: "Start planning",
  },
} as const;

export default function LocalizedServicesPage({ locale }: { locale: PublicLocale }) {
  const t = localized[locale];
  const root = locale === "zh-TW" ? "/zh-tw" : locale === "en" ? "/en" : "";
  const lang = locale === "zh-TW" ? "zh-Hant" : locale === "en" ? "en" : "zh-Hans";

  return (
    <main lang={lang} className={`standalone-info-page services-page ${styles.page}`}>
      <section className={`shell ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <p className="overline">{t.eyebrow}</p>
          <h1>{t.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p>{t.intro}</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href={`${root}/plan`}>{t.primaryAction}</a>
            <a className={styles.textAction} href={`${root}/trips`}>{t.secondaryAction} <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <Image src="/service-hotel-v2.webp" alt="" fill priority sizes="(max-width: 760px) 100vw, 52vw" />
          <div className={styles.heroInset}><Image src="/service-vehicle-v2.webp" alt="" fill sizes="(max-width: 760px) 42vw, 19vw" /></div>
        </div>
      </section>

      <section className={styles.hotelSection}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <div><p className="overline">{t.hotelEyebrow}</p><h2>{t.hotelTitle}</h2></div>
            <div><p>{t.hotelIntro}</p><div className={styles.levels}>{t.levels.map(level => <span key={level}>{level}</span>)}</div></div>
          </div>
          <div className={styles.hotelPoints}>
            {t.hotelPoints.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
          <div className={styles.coverageHead}><div><p className="overline">{t.coverageLabel}</p><h2>{t.coverageTitle}</h2></div><p>{t.coverageIntro}</p></div>
          <div className={styles.regions}>{t.regions.map(([name, detail]) => <article key={name}><h3>{name}</h3><p>{detail}</p></article>)}</div>
          <p className={styles.note}>{t.hotelNote}</p>
        </div>
      </section>

      <section className={`shell ${styles.vehicleSection}`}>
        <div className={styles.vehicleMedia}><Image src="/service-vehicle-v2.webp" alt="" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
        <div className={styles.vehicleCopy}>
          <p className="overline">{t.vehicleEyebrow}</p>
          <h2>{t.vehicleTitle}</h2>
          <p>{t.vehicleIntro}</p>
          <div className={styles.vehicleItems}>{t.vehicleItems.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="shell">
          <div className={styles.processHead}><p className="overline">{t.processEyebrow}</p><h2>{t.processTitle}</h2></div>
          <div className={styles.process}>{t.process.map(([number, title, detail]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.cta}><div className="shell"><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><a href={`${root}/plan`}>{t.cta} <span aria-hidden="true">→</span></a></div></section>
    </main>
  );
}
