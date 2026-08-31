import type { LocalizedTripLocale } from "./localized-combined-trip-detail";

type ConciseCopy = Record<LocalizedTripLocale, string>;

const sharedGuides: readonly { names: readonly string[]; copy: ConciseCopy }[] = [
  {
    names: ["中山路", "百年骑楼 · 中山路", "百年騎樓・中山路", "Zhongshan Road", "Zhongshan Road arcades"],
    copy: {
      "zh-CN": "看百年骑楼、逛中华城与周边老街巷，可按口味尝沙茶面、花生汤、土笋冻和烧肉粽。",
      "zh-TW": "看百年騎樓、逛中華城與周邊老街巷，可按口味品嘗沙茶麵、花生湯、土筍凍和燒肉粽。",
      en: "See the century-old arcades, explore nearby lanes, and try satay noodles, peanut soup, tusundong, or rice dumplings.",
    },
  },
  {
    names: ["西街与钟楼", "西街與鐘樓", "开元寺与西街钟楼", "開元寺與西街鐘樓", "West Street and the Bell Tower", "Kaiyuan Temple, West Street, and the Bell Tower"],
    copy: {
      "zh-CN": "看开元寺东西塔和钟楼，沿西街逛传统店铺，可尝面线糊、姜母鸭、肉粽与四果汤。",
      "zh-TW": "看開元寺東西塔和鐘樓，沿西街逛傳統店舖，可品嘗麵線糊、薑母鴨、肉粽與四果湯。",
      en: "See Kaiyuan Temple's pagodas and the Bell Tower, then explore West Street for noodles, ginger duck, rice dumplings, and fruit soup.",
    },
  },
  {
    names: ["三坊七巷", "Three Lanes and Seven Alleys"],
    copy: {
      "zh-CN": "穿行白墙灰瓦的传统坊巷，看马鞍墙与历史宅院，途中可尝福州鱼丸、肉燕等小吃。",
      "zh-TW": "穿行白牆灰瓦的傳統坊巷，看馬鞍牆與歷史宅院，途中可品嘗福州魚丸、肉燕等小吃。",
      en: "Walk through white-walled lanes and historic homes, then try local favourites such as Fuzhou fish balls and rouyan wontons.",
    },
  },
  {
    names: ["福建博物院", "Fujian Museum"],
    copy: {
      "zh-CN": "通过福建历史、海洋文化与民俗相关展览认识地方脉络，开放展厅以当天安排为准。",
      "zh-TW": "透過福建歷史、海洋文化與民俗相關展覽認識地方脈絡，開放展廳以當天安排為準。",
      en: "Explore Fujian's history, maritime culture, and folk traditions; gallery access follows the museum's schedule.",
    },
  },
  {
    names: ["妈祖祖庙与天妃故里", "媽祖祖廟與天妃故里", "Mazu Ancestral Temple and Tianfei birthplace"],
    copy: {
      "zh-CN": "参观妈祖祖庙建筑群与天妃故里，了解妈祖信俗从湄洲岛向海内外传播的文化脉络。",
      "zh-TW": "參觀媽祖祖廟建築群與天妃故里，了解媽祖信俗從湄洲島向海內外傳播的文化脈絡。",
      en: "Visit the Mazu temple complex and Tianfei birthplace to trace how the tradition spread from Meizhou Island overseas.",
    },
  },
  {
    names: ["风动石景区", "風動石景區", "Fengdong Rock Scenic Area"],
    copy: {
      "zh-CN": "看临海巨石悬立岩台的风动石，并顺路游览铜陵古城一带的海岸与人文景观。",
      "zh-TW": "看臨海巨石懸立巖臺的風動石，並順路遊覽銅陵古城一帶的海岸與人文景觀。",
      en: "See the sea-facing boulder balanced on its rock base, then explore the coast and heritage around Tongling Old Town.",
    },
  },
  {
    names: ["南普陀寺", "南普陀寺", "Nanputuo Temple"],
    copy: {
      "zh-CN": "参观五老峰下的寺院殿堂、闽南屋脊与庭院，在开放区域感受佛教文化空间。",
      "zh-TW": "參觀五老峰下的寺院殿堂、閩南屋脊與庭院，在開放區域感受佛教文化空間。",
      en: "Visit the halls, Minnan rooflines, and courtyards below Wulao Peak within the temple's open areas.",
    },
  },
  {
    names: ["环岛路", "環島路", "Huandao Road"],
    copy: {
      "zh-CN": "沿滨海公路看沙滩、木栈道与海岸公园，并按天气和返程时间选择合适路段停留。",
      "zh-TW": "沿濱海公路看沙灘、木棧道與海岸公園，並按天氣和返程時間選擇合適路段停留。",
      en: "Follow the coast past beaches, boardwalks, and seaside parks, choosing stops to suit the weather and departure time.",
    },
  },
];

function firstSentence(value: string, locale: LocalizedTripLocale) {
  const trimmed = value.trim();
  const pattern = locale === "en" ? /^.*?[.!?](?=\s|$)/ : /^.*?[。！？]/;
  return trimmed.match(pattern)?.[0] ?? trimmed;
}

export function stopDescription(name: string, fallback: string, locale: LocalizedTripLocale) {
  const normalizedName = name.replaceAll("★", "").trim();
  const guide = sharedGuides.find((item) => item.names.includes(normalizedName));
  if (guide) return guide.copy[locale];
  return firstSentence(fallback, locale);
}
