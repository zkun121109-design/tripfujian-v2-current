import type { Metadata } from "next";
import LocalizedCombinedTripDetail from "../localized-combined-trip-detail";

export const metadata: Metadata = {
  "title": "泉州四日定制游｜开元寺、蟳埔与崇武古城｜与君游",
  "description": "泉州4天3晚定制游参考行程，包含关帝庙、清净寺、蟳埔、开元寺、西街、洛阳桥、崇武古城、洛伽寺与梧林传统村落。",
  "alternates": {
    "canonical": "/trips/quanzhou-4-days",
    "languages": {
      "zh-CN": "/trips/quanzhou-4-days",
      "zh-Hant": "/zh-tw/trips/quanzhou-4-days",
      "en": "/en/trips/quanzhou-4-days",
      "x-default": "/trips/quanzhou-4-days"
    }
  }
};

export default function Page() {
  return <LocalizedCombinedTripDetail routeId="quanzhou-4-days" locale="zh-CN" />;
}
