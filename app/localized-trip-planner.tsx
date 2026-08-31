"use client";

import { useState } from "react";

type TripLocale = "zh-CN" | "en" | "zh-TW";

type Plan = {
  tab: string;
  key: string;
  title: string;
  detailHref: string | null;
  image: string;
  alt: string;
  days: string[];
};

const content: Record<TripLocale, { tabsLabel: string; detailLabel: string; plans: Plan[]; otherPlans: Plan[] }> = {
  "zh-CN": {
    tabsLabel: "按目的地查看参考行程",
    detailLabel: "查看详细行程",
    plans: [
      { tab: "厦门", key: "xiamen", title: "厦门4日游", detailHref: "/trips/xiamen-4-days", image: "/trip-xiamen-reference-gulangyu.webp", alt: "厦门海岸与闽南建筑", days: ["抵达厦门・入住酒店", "鼓浪屿・中山路", "植物园・南普陀寺・环岛路・鹭江夜游", "集美学村・十里长堤・送站返程"] },
      { tab: "泉州", key: "quanzhou", title: "泉州古城4日游", detailHref: "/trips/quanzhou-4-days", image: "/route-quanzhou-detail-v1.webp", alt: "泉州古城街巷与传统建筑", days: ["抵达泉州・入住酒店", "关帝庙・清净寺・蟳埔簪花・开元寺・西街", "非遗馆・洛阳桥・崇武古城", "洛伽寺・红塔湾・梧林传统村落・送机返程"] },
      { tab: "漳州", key: "zhangzhou", title: "漳州世遗土楼3日游", detailHref: "/trips/zhangzhou-3-days", image: "/route-tulou-context-v1.webp", alt: "福建土楼与周边山村", days: ["抵达漳州・入住酒店・夜游古城", "云水谣古镇・永定土楼・入住东山岛", "金銮湾・南门湾・顶街・苏峰山・风动石・送站返程"] },
      { tab: "福州", key: "fuzhou", title: "福州平潭4日游", detailHref: "/trips/fuzhou-pingtan-4-days", image: "/trip-fuzhou-beibuwan.webp", alt: "平潭北部湾海岸与风车", days: ["抵达福州・入住酒店", "长江澳风车田・北部湾廊道・和平村・仙人井", "68海里・坛南湾・龙凤头海滨浴场・大福湾・海坛古城", "福建省博物馆・烟台山・三坊七巷"] },
      { tab: "其他", key: "other", title: "北京・西安双古都文化之旅", detailHref: null, image: "/route-beijing-xian.jpg", alt: "北京与西安历史文化之旅", days: ["抵达北京", "北京中轴线与历史街区", "按体力选择合适的长城段", "皇家园林与城市生活", "乘高铁由北京前往西安", "西安古城与博物馆", "兵马俑与临潼地区", "返程或衔接其他城市"] },
    ],
    otherPlans: [
      { tab: "", key: "sanming", title: "三明文化5日定制游", detailHref: "/trips/sanming-5-days", image: "/trip-other-sanming-danxia-v2.webp", alt: "三明山水、朱子文化与闽中古城", days: ["抵达尤溪・朱子家宴・入住尤溪", "泰宁古城・大金湖・入住泰宁", "朱子文化园・尤溪书京土堡", "桂峰古民居・百家宴・传统服饰体验", "沙县东门古街・小吃文化城・送站返程"] },
      { tab: "", key: "xiamen-tulou", title: "厦门・土楼・东山岛5日定制游", detailHref: "/trips/xiamen-tulou-dongshan-5-days", image: "/trip-other-xiamen-tulou.webp", alt: "厦门、福建土楼与东山岛海岸", days: ["抵达厦门・入住酒店", "云水谣古镇・永定土楼・入住东山岛", "东山岛主要景点・返回厦门", "鼓浪屿・中山路", "南普陀寺・环岛路・送机返程"] },
      { tab: "", key: "minnan", title: "闽南・湄洲岛・土楼7日定制游", detailHref: "/trips/minnan-meizhou-tulou-7-days", image: "/trip-other-minnan-7.webp", alt: "泉州古城、湄洲岛、福建土楼与闽南海岸", days: ["抵达厦门或泉州・入住酒店", "梧林古村落・洛伽寺・开元寺・西街", "湄洲岛・前往厦门", "云水谣古镇・永定土楼・入住东山岛", "东山岛主要景点・返回厦门", "鼓浪屿・中山路", "南普陀寺・环岛路・送站返程"] },
      { tab: "", key: "fujian-grand", title: "福建全景8日定制游", detailHref: "/trips/fujian-grand-tour-8-days", image: "/trip-other-fujian-8.webp", alt: "福州、湄洲岛、泉州、福建土楼、东山岛与厦门", days: ["抵达福州・入住酒店", "福建省博物馆・烟台山・三坊七巷", "湄洲岛・前往泉州", "梧林古村落・洛伽寺・开元寺・西街", "云水谣・永定土楼・入住东山岛", "东山岛・前往厦门", "鼓浪屿・中山路", "南普陀寺・环岛路・送站返程"] },
    ],
  },
  en: {
    tabsLabel: "Browse sample itineraries by destination",
    detailLabel: "View itinerary",
    plans: [
      {
        tab: "Xiamen", key: "xiamen", title: "Xiamen · 4 days", detailHref: "/en/trips/xiamen-4-days",
        image: "/trip-xiamen-reference-gulangyu.webp", alt: "Xiamen coast and southern Fujian architecture",
        days: ["Arrive in Xiamen · Hotel check-in", "Gulangyu Island · Zhongshan Road", "Botanical Garden · Nanputuo Temple · Huandao Road · Lujiang night cruise", "Jimei School Village · Shili Causeway · Departure transfer"],
      },
      {
        tab: "Quanzhou", key: "quanzhou", title: "Quanzhou Old City · 4 days", detailHref: "/trips/quanzhou-4-days",
        image: "/route-quanzhou-detail-v1.webp", alt: "Historic lanes and traditional architecture in Quanzhou",
        days: ["Arrive in Quanzhou · Hotel check-in", "Guandi Temple · Qingjing Mosque · Xunpu · Kaiyuan Temple · West Street", "Intangible Heritage Museum · Luoyang Bridge · Chongwu Ancient City", "Luojia Temple · Hongta Bay · Wulin Village · Departure transfer"],
      },
      {
        tab: "Zhangzhou", key: "zhangzhou", title: "Zhangzhou Tulou · 3 days", detailHref: "/trips/zhangzhou-3-days",
        image: "/route-tulou-context-v1.webp", alt: "Fujian tulou and mountain villages",
        days: ["Arrive in Zhangzhou · Hotel check-in · Old City walk", "Yunshuiyao · Yongding Tulou · Stay on Dongshan Island", "Jinluan Bay · Nanmen Bay · Sufeng Mountain · Fengdong Rock · Departure transfer"],
      },
      {
        tab: "Fuzhou", key: "fuzhou", title: "Fuzhou & Pingtan · 4 days", detailHref: "/trips/fuzhou-pingtan-4-days",
        image: "/trip-fuzhou-beibuwan.webp", alt: "Pingtan coast and wind turbines",
        days: ["Arrive in Fuzhou · Hotel check-in", "Changjiang'ao · Beibu Gulf Route · Heping Village · Xianren Well", "68 Nautical Miles · Tannan Bay · Longfengtou Beach · Dafu Bay · Haitan Ancient City", "Fujian Museum · Yantai Hill · Three Lanes and Seven Alleys"],
      },
      {
        tab: "More", key: "other", title: "Beijing & Xi'an · 8 days", detailHref: null,
        image: "/route-beijing-xian.jpg", alt: "Cultural journey through Beijing and Xi'an",
        days: ["Arrive in Beijing", "Historic Beijing and the Central Axis", "A suitable section of the Great Wall", "Imperial gardens and city life", "High-speed train from Beijing to Xi'an", "Xi'an Old City and museums", "Terracotta Warriors and Lintong", "Departure or onward travel"],
      },
    ],
    otherPlans: [
      { tab: "", key: "sanming", title: "Custom Sanming Cultural Tour · 5 days", detailHref: "/trips/sanming-5-days", image: "/trip-other-sanming-danxia-v2.webp", alt: "Sanming landscapes, Zhu Xi heritage, and historic towns", days: ["Arrive in Youxi · Zhu Xi family banquet", "Taining Ancient City · Dajin Lake", "Zhu Xi Cultural Park · Shujing Tulou", "Guifeng Village · Local banquet · Traditional dress experience", "Shaxian Old Street · Shaxian Food Culture City · Departure"] },
      { tab: "", key: "xiamen-tulou", title: "Custom Xiamen, Tulou & Dongshan Tour · 5 days", detailHref: "/trips/xiamen-tulou-dongshan-5-days", image: "/trip-other-xiamen-tulou.webp", alt: "Xiamen, Fujian tulou, and the Dongshan coast", days: ["Arrive in Xiamen · Hotel check-in", "Yunshuiyao · Yongding Tulou · Stay on Dongshan Island", "Dongshan Island highlights · Return to Xiamen", "Gulangyu Island · Zhongshan Road", "Nanputuo Temple · Huandao Road · Departure transfer"] },
      { tab: "", key: "minnan", title: "Custom Southern Fujian, Meizhou & Tulou Tour · 7 days", detailHref: "/trips/minnan-meizhou-tulou-7-days", image: "/trip-other-minnan-7.webp", alt: "Quanzhou, Meizhou Island, Fujian tulou, and the southern Fujian coast", days: ["Arrive in Xiamen or Quanzhou", "Wulin Village · Luojia Temple · Kaiyuan Temple · West Street", "Meizhou Island · Continue to Xiamen", "Yunshuiyao · Yongding Tulou · Stay on Dongshan Island", "Dongshan Island highlights · Continue to Xiamen", "Gulangyu Island · Zhongshan Road", "Nanputuo Temple · Huandao Road · Departure transfer"] },
      { tab: "", key: "fujian-grand", title: "Custom Fujian Grand Tour · 8 days", detailHref: "/trips/fujian-grand-tour-8-days", image: "/trip-other-fujian-8.webp", alt: "Fuzhou, Meizhou Island, Quanzhou, Fujian tulou, Dongshan Island, and Xiamen", days: ["Arrive in Fuzhou · Hotel check-in", "Fujian Museum · Yantai Hill · Three Lanes and Seven Alleys", "Meizhou Island · Continue to Quanzhou", "Wulin Village · Luojia Temple · Kaiyuan Temple · West Street", "Yunshuiyao · Yongding Tulou · Stay on Dongshan Island", "Dongshan Island · Continue to Xiamen", "Gulangyu Island · Zhongshan Road", "Nanputuo Temple · Huandao Road · Departure transfer"] },
    ],
  },
  "zh-TW": {
    tabsLabel: "按目的地查看參考行程",
    detailLabel: "查看行程",
    plans: [
      { tab: "廈門", key: "xiamen", title: "廈門4日遊", detailHref: "/zh-tw/trips/xiamen-4-days", image: "/trip-xiamen-reference-gulangyu.webp", alt: "廈門海岸與閩南建築", days: ["抵達廈門・入住酒店", "鼓浪嶼・中山路", "植物園・南普陀寺・環島路・鷺江夜遊", "集美學村・十里長堤・送站返程"] },
      { tab: "泉州", key: "quanzhou", title: "泉州古城4日遊", detailHref: "/trips/quanzhou-4-days", image: "/route-quanzhou-detail-v1.webp", alt: "泉州古城街巷與傳統建築", days: ["抵達泉州・入住酒店", "關帝廟・清淨寺・蟳埔簪花・開元寺・西街", "非遺館・洛陽橋・崇武古城", "洛伽寺・紅塔灣・梧林傳統村落・送機返程"] },
      { tab: "漳州", key: "zhangzhou", title: "漳州世遺土樓3日遊", detailHref: "/trips/zhangzhou-3-days", image: "/route-tulou-context-v1.webp", alt: "福建土樓與周邊山村", days: ["抵達漳州・入住酒店・夜遊古城", "雲水謠古鎮・永定土樓・入住東山島", "金鑾灣・南門灣・頂街・蘇峰山・風動石・送站返程"] },
      { tab: "福州", key: "fuzhou", title: "福州平潭4日遊", detailHref: "/trips/fuzhou-pingtan-4-days", image: "/trip-fuzhou-beibuwan.webp", alt: "平潭北部灣海岸與風車", days: ["抵達福州・入住酒店", "長江澳風車田・北部灣廊道・和平村・仙人井", "68海里・壇南灣・龍鳳頭海濱浴場・大福灣・海壇古城", "福建省博物館・煙台山・三坊七巷"] },
      { tab: "其他", key: "other", title: "北京・西安雙古都文化之旅", detailHref: null, image: "/route-beijing-xian.jpg", alt: "北京與西安歷史文化之旅", days: ["抵達北京", "北京中軸線與歷史街區", "按體力選擇合適的長城段", "皇家園林與城市生活", "乘高鐵由北京前往西安", "西安古城與博物館", "兵馬俑與臨潼地區", "返程或銜接其他城市"] },
    ],
    otherPlans: [
      { tab: "", key: "sanming", title: "三明文化5日訂製遊", detailHref: "/trips/sanming-5-days", image: "/trip-other-sanming-danxia-v2.webp", alt: "三明山水、朱子文化與閩中古城", days: ["抵達尤溪・朱子家宴・入住尤溪", "泰寧古城・大金湖・入住泰寧", "朱子文化園・尤溪書京土堡", "桂峰古民居・百家宴・傳統服飾體驗", "沙縣東門古街・小吃文化城・送站返程"] },
      { tab: "", key: "xiamen-tulou", title: "廈門・土樓・東山島5日訂製遊", detailHref: "/trips/xiamen-tulou-dongshan-5-days", image: "/trip-other-xiamen-tulou.webp", alt: "廈門、福建土樓與東山島海岸", days: ["抵達廈門・入住酒店", "雲水謠古鎮・永定土樓・入住東山島", "東山島主要景點・返回廈門", "鼓浪嶼・中山路", "南普陀寺・環島路・送機返程"] },
      { tab: "", key: "minnan", title: "閩南・湄洲島・土樓7日訂製遊", detailHref: "/trips/minnan-meizhou-tulou-7-days", image: "/trip-other-minnan-7.webp", alt: "泉州古城、湄洲島、福建土樓與閩南海岸", days: ["抵達廈門或泉州・入住酒店", "梧林古村落・洛伽寺・開元寺・西街", "湄洲島・前往廈門", "雲水謠古鎮・永定土樓・入住東山島", "東山島主要景點・返回廈門", "鼓浪嶼・中山路", "南普陀寺・環島路・送站返程"] },
      { tab: "", key: "fujian-grand", title: "福建全景8日訂製遊", detailHref: "/trips/fujian-grand-tour-8-days", image: "/trip-other-fujian-8.webp", alt: "福州、湄洲島、泉州、福建土樓、東山島與廈門", days: ["抵達福州・入住酒店", "福建省博物館・煙台山・三坊七巷", "湄洲島・前往泉州", "梧林古村落・洛伽寺・開元寺・西街", "雲水謠・永定土樓・入住東山島", "東山島・前往廈門", "鼓浪嶼・中山路", "南普陀寺・環島路・送站返程"] },
    ],
  },
};

export default function LocalizedTripPlanner({ locale }: { locale: TripLocale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = content[locale];
  const active = t.plans[activeIndex];
  const dayLabel = (index: number) => locale === "en" ? `Day ${index + 1}` : `Day${index + 1}`;
  const title = (value: string) => locale === "en" ? value : `【${value}】`;

  const card = (plan: Plan, index: number, first = false) => {
    const localeRoot = locale === "zh-CN" ? "" : locale === "en" ? "/en" : "/zh-tw";
    const detailHref = plan.detailHref && (plan.detailHref.startsWith("/en/") || plan.detailHref.startsWith("/zh-tw/") ? plan.detailHref : `${localeRoot}${plan.detailHref}`);
    return <article className="other-trip-card" key={plan.key}>
    <div className="other-trip-photo"><img src={plan.image} alt={plan.alt}/></div>
    <div className="other-trip-copy">
      <h2 id={first ? "trip-library-title" : undefined}>{title(plan.title)}</h2>
      <ol>{plan.days.map((day, dayIndex) => <li key={`${plan.key}-${dayIndex}`}><span>{dayLabel(dayIndex)}:</span><strong>{day}</strong></li>)}</ol>
      {detailHref && <a className="trip-card-detail" href={detailHref} hrefLang={locale === "en" ? "en" : locale === "zh-TW" ? "zh-Hant" : "zh-CN"}>{locale === "en" ? "View itinerary" : locale === "zh-TW" ? "查看行程" : "详细行程"} <span>→</span></a>}
    </div>
  </article>;
  };

  return <section className={`trip-library${active.key === "other" ? " other-active" : ""}`} aria-labelledby="trip-library-title">
    <div className="trip-tabs" role="tablist" aria-label={t.tabsLabel}>
      {t.plans.map((plan, index) => <button key={plan.key} type="button" role="tab" id={`trip-tab-${index}`} aria-controls={`trip-panel-${index}`} aria-selected={activeIndex === index} className={activeIndex === index ? "active" : ""} onClick={() => setActiveIndex(index)}>{plan.tab}</button>)}
    </div>
    {active.key === "other"
      ? <div className="other-trip-list" role="tabpanel" id={`trip-panel-${activeIndex}`} aria-labelledby={`trip-tab-${activeIndex}`}>{t.otherPlans.map((plan, index) => card(plan, index, index === 0))}</div>
      : <div role="tabpanel" id={`trip-panel-${activeIndex}`} aria-labelledby={`trip-tab-${activeIndex}`}>{card(active, 0, true)}</div>}
  </section>;
}
