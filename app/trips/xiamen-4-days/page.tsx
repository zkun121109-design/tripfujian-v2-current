import type { Metadata } from "next";
import LocalizedCombinedTripDetail from "../localized-combined-trip-detail";

export const metadata: Metadata = {
  "title": "厦门四日定制游｜鼓浪屿、南普陀与集美｜与君游",
  "description": "厦门4天3晚定制游参考行程，包含鼓浪屿、中山路、植物园、南普陀寺、环岛路与集美学村，可按家庭、长辈及小团需求调整。",
  "alternates": {
    "canonical": "/trips/xiamen-4-days",
    "languages": {
      "zh-CN": "/trips/xiamen-4-days",
      "zh-Hant": "/zh-tw/trips/xiamen-4-days",
      "en": "/en/trips/xiamen-4-days",
      "x-default": "/trips/xiamen-4-days"
    }
  }
};

export default function Page() {
  return <LocalizedCombinedTripDetail routeId="xiamen-4-days" locale="zh-CN" />;
}
