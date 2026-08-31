import type { CombinedTripDay, LocalizedTripCopy, LocalizedTripLocale, LocalizedTripProps } from "./localized-combined-trip-detail";

export type TripRouteId =
  | "xiamen-4-days"
  | "quanzhou-4-days"
  | "zhangzhou-3-days"
  | "fuzhou-pingtan-4-days"
  | "sanming-5-days"
  | "xiamen-tulou-dongshan-5-days"
  | "minnan-meizhou-tulou-7-days"
  | "fujian-grand-tour-8-days";

type DayStructure = {
  number: string;
  images: readonly (readonly [string, string?])[];
  stopCount: number;
  detailLineCounts: readonly number[];
};

type RouteStructure = {
  hero: string;
  collage: readonly string[];
  priceCny: number;
  days: readonly DayStructure[];
};

const day = (
  number: string,
  images: readonly (readonly [string, string?])[],
  stopCount: number,
  detailLineCounts: readonly number[],
): DayStructure => ({ number, images, stopCount, detailLineCounts });

export const routeStructures: Record<TripRouteId, RouteStructure> = {
  "xiamen-4-days": {
    hero: "/trip-xiamen-hero-night.webp",
    collage: ["/trip-xiamen-gulangyu.webp", "/trip-xiamen-shili-causeway.webp", "/trip-xiamen-jimei.webp", "/trip-xiamen-zhongshan-road.webp"],
    priceCny: 0,
    days: [
      day("01", [["/trip-xiamen-ruiyi-1.webp", "50% 48%"], ["/trip-xiamen-ruiyi-2.webp", "50% 50%"]], 1, [1, 2]),
      day("02", [["/trip-xiamen-gulangyu.webp", "50% 48%"], ["/trip-xiamen-zhongshan-road.webp", "50% 52%"]], 2, [1, 3]),
      day("03", [["/trip-zhangzhou-yunshuiyao.webp", "50% 50%"], ["/trip-zhangzhou-tulou-king.webp", "50% 48%"]], 4, [1, 4]),
      day("04", [["/trip-quanzhou-kaiyuan.webp", "50% 48%"], ["/trip-quanzhou-wulin.webp", "50% 58%"]], 4, [1, 4]),
      day("05", [["/trip-quanzhou-xunpu.webp", "50% 48%"], ["/trip-xiamen-shili-causeway.webp", "50% 58%"]], 3, [1, 3]),
    ],
  },
  "quanzhou-4-days": {
    hero: "/trip-quanzhou-cityscape-v2.webp",
    collage: ["/trip-quanzhou-luojia.webp", "/trip-quanzhou-kaiyuan.webp", "/trip-quanzhou-xunpu.webp", "/trip-quanzhou-chongwu.webp"],
    priceCny: 2599,
    days: [
      day("01", [["/trip-quanzhou-hotel-1.webp"], ["/trip-quanzhou-hotel-2.webp"]], 1, [4, 2]),
      day("02", [["/trip-quanzhou-kaiyuan.webp"], ["/trip-quanzhou-xunpu.webp"]], 5, [2, 1, 2]),
      day("03", [["/trip-quanzhou-luoyang-bridge.webp"], ["/trip-quanzhou-chongwu.webp"]], 3, [2, 2]),
      day("04", [["/trip-quanzhou-luojia.webp"], ["/trip-quanzhou-wulin.webp"]], 4, [2, 2]),
    ],
  },
  "zhangzhou-3-days": {
    hero: "/trip-zhangzhou-tulou-hero-v2.webp",
    collage: ["/trip-zhangzhou-ancient-city.webp", "/trip-zhangzhou-yunshuiyao.webp", "/trip-zhangzhou-tulou-king.webp", "/trip-zhangzhou-nanmen-bay.webp"],
    priceCny: 3899,
    days: [
      day("01", [["/trip-zhangzhou-hotel-1.webp"], ["/trip-zhangzhou-hotel-2.webp"]], 6, [4, 2]),
      day("02", [["/trip-zhangzhou-yunshuiyao.webp"], ["/trip-zhangzhou-tulou-king.webp"]], 3, [4, 3, 2]),
      day("03", [["/trip-zhangzhou-nanmen-bay.webp"], ["/trip-zhangzhou-sufeng.webp"]], 4, [3, 2]),
    ],
  },
  "fuzhou-pingtan-4-days": {
    hero: "/trip-fuzhou-pingtan-hero-v3.webp",
    collage: ["/trip-fuzhou-changjiangao.webp", "/trip-fuzhou-beibuwan.webp", "/trip-fuzhou-yantaishan.webp", "/trip-fuzhou-sanfangqixiang.webp"],
    priceCny: 3588,
    days: [
      day("01", [["/trip-fuzhou-hotel-1.webp"], ["/trip-fuzhou-hotel-2.webp"]], 1, [4, 2]),
      day("02", [["/trip-fuzhou-changjiangao.webp"], ["/trip-fuzhou-beibuwan.webp"]], 4, [2, 3, 2]),
      day("03", [["/trip-fuzhou-68hai.webp"], ["/trip-fuzhou-longwangtou.webp"]], 5, [3, 1, 2]),
      day("04", [["/trip-fuzhou-yantaishan.webp"], ["/trip-fuzhou-sanfangqixiang.webp"]], 4, [2, 2]),
    ],
  },
  "sanming-5-days": {
    hero: "/trip-sanming-danxia-hero-v2.webp",
    collage: ["/trip-sanming-taining.webp", "/trip-sanming-dajinhu.webp", "/trip-sanming-tubao.webp", "/trip-sanming-guifeng.webp"],
    priceCny: 5999,
    days: [
      day("01", [["/trip-sanming-hotel.webp"], ["/trip-sanming-feast.webp"]], 3, [3, 3]),
      day("02", [["/trip-sanming-taining.webp"], ["/trip-sanming-dajinhu.webp"]], 3, [3, 3]),
      day("03", [["/trip-sanming-zhuxi.webp"], ["/trip-sanming-tubao.webp"]], 3, [3, 2]),
      day("04", [["/trip-sanming-guifeng.webp"], ["/trip-sanming-costume.webp"]], 4, [3, 3]),
      day("05", [["/trip-sanming-dongmen.webp"], ["/trip-sanming-foodcity.webp"]], 3, [2, 2]),
    ],
  },
  "xiamen-tulou-dongshan-5-days": {
    hero: "/trip-zhangzhou-sufeng.webp",
    collage: ["/trip-zhangzhou-yunshuiyao.webp", "/trip-zhangzhou-tulou-king.webp", "/trip-zhangzhou-nanmen-bay.webp", "/trip-xiamen-gulangyu.webp"],
    priceCny: 4999,
    days: [
      day("01", [["/trip-xiamen-ruiyi-1.webp"], ["/trip-xiamen-ruiyi-2.webp"]], 1, [3, 2]),
      day("02", [["/trip-zhangzhou-yunshuiyao.webp"], ["/trip-zhangzhou-tulou-king.webp"]], 3, [4, 3, 2]),
      day("03", [["/trip-zhangzhou-sufeng.webp"], ["/trip-zhangzhou-nanmen-bay.webp"]], 3, [2, 2, 2]),
      day("04", [["/trip-xiamen-gulangyu.webp"], ["/trip-xiamen-zhongshan-road.webp"]], 2, [2, 1, 2]),
      day("05", [["/trip-xiamen-nanputuo.webp"], ["/trip-xiamen-huandao.webp"]], 3, [1, 2]),
    ],
  },
  "minnan-meizhou-tulou-7-days": {
    hero: "/trip-meizhou-chaoyin.webp",
    collage: ["/trip-quanzhou-wulin.webp", "/trip-meizhou-mazu.webp", "/trip-zhangzhou-tulou-king.webp", "/trip-xiamen-gulangyu.webp"],
    priceCny: 4999,
    days: [
      day("01", [["/trip-xiamen-ruiyi-1.webp"], ["/trip-quanzhou-hotel-1.webp"]], 1, [3, 1]),
      day("02", [["/trip-quanzhou-wulin.webp"], ["/trip-quanzhou-luojia.webp"]], 3, [3, 2]),
      day("03", [["/trip-meizhou-chaoyin.webp"], ["/trip-meizhou-mazu.webp"]], 3, [2, 3, 2]),
      day("04", [["/trip-zhangzhou-yunshuiyao.webp"], ["/trip-zhangzhou-tulou-king.webp"]], 2, [4, 3, 2]),
      day("05", [["/trip-zhangzhou-sufeng.webp"], ["/trip-zhangzhou-nanmen-bay.webp"]], 3, [2, 2, 2]),
      day("06", [["/trip-xiamen-gulangyu.webp"], ["/trip-xiamen-zhongshan-road.webp"]], 2, [2, 1, 2]),
      day("07", [["/trip-xiamen-nanputuo.webp"], ["/trip-xiamen-huandao.webp"]], 3, [1, 2]),
    ],
  },
  "fujian-grand-tour-8-days": {
    hero: "/trip-fuzhou-sanfangqixiang.webp",
    collage: ["/trip-fuzhou-yantaishan.webp", "/trip-meizhou-mazu.webp", "/trip-quanzhou-luojia.webp", "/trip-xiamen-gulangyu.webp"],
    priceCny: 6999,
    days: [
      day("01", [["/trip-fuzhou-hotel-1.webp"], ["/trip-fuzhou-hotel-2.webp"]], 1, [3, 1]),
      day("02", [["/trip-fuzhou-yantaishan.webp"], ["/trip-fuzhou-sanfangqixiang.webp"]], 3, [1, 2]),
      day("03", [["/trip-meizhou-chaoyin.webp"], ["/trip-meizhou-mazu.webp"]], 3, [2, 3, 2]),
      day("04", [["/trip-quanzhou-wulin.webp"], ["/trip-quanzhou-luojia.webp"]], 3, [1, 2]),
      day("05", [["/trip-zhangzhou-yunshuiyao.webp"], ["/trip-zhangzhou-tulou-king.webp"]], 2, [4, 3, 2]),
      day("06", [["/trip-zhangzhou-sufeng.webp"], ["/trip-zhangzhou-nanmen-bay.webp"]], 3, [2, 3, 2]),
      day("07", [["/trip-xiamen-gulangyu.webp"], ["/trip-xiamen-zhongshan-road.webp"]], 2, [2, 1, 2]),
      day("08", [["/trip-xiamen-nanputuo.webp"], ["/trip-xiamen-huandao.webp"]], 3, [1, 2]),
    ],
  },
};

const formatPrice = (locale: LocalizedTripLocale, priceCny: number) => {
  if (locale === "en") return `CNY ${priceCny.toLocaleString("en-US")} per person`;
  return locale === "zh-TW" ? `${priceCny}元／人` : `${priceCny}元/人`;
};

const formatDuration = (locale: LocalizedTripLocale, dayCount: number) => {
  const nightCount = Math.max(0, dayCount - 1);
  if (locale === "en") return `${dayCount} days · ${nightCount} nights`;
  return `${dayCount}天${nightCount}晚`;
};

export const getRouteHero = (routeId: TripRouteId) => routeStructures[routeId].hero;

export function applyRouteStructure(
  routeId: TripRouteId,
  locale: LocalizedTripLocale,
  props: LocalizedTripCopy,
): LocalizedTripProps {
  const structure = routeStructures[routeId];
  if (props.collage.length !== structure.collage.length || props.days.length !== structure.days.length) {
    throw new Error(`${routeId} ${locale}: localized copy does not match the shared route structure`);
  }

  const days: CombinedTripDay[] = props.days.map((copyDay, dayIndex) => {
    const sharedDay = structure.days[dayIndex];
    const detailLineCounts = copyDay.details.map((detail) => detail.lines.length);
    if (
      copyDay.images.length !== sharedDay.images.length
      || copyDay.stops.length !== sharedDay.stopCount
      || JSON.stringify(detailLineCounts) !== JSON.stringify(sharedDay.detailLineCounts)
    ) {
      throw new Error(`${routeId} ${locale} day ${sharedDay.number}: localized copy does not match the shared route structure`);
    }
    return {
      ...copyDay,
      number: sharedDay.number,
      images: copyDay.images.map((copyImage, imageIndex) => {
        const [src, objectPosition] = sharedDay.images[imageIndex];
        return [src, copyImage[0], copyImage[1], objectPosition] as const;
      }),
    };
  });

  return {
    ...props,
    hero: structure.hero,
    collage: props.collage.map((caption, index) => [structure.collage[index], caption] as const),
    duration: formatDuration(locale, structure.days.length),
    price: formatPrice(locale, structure.priceCny),
    days,
  };
}
