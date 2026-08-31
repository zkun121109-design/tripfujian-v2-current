import type { Metadata } from "next";
import LocalizedCombinedTripDetail from "../localized-combined-trip-detail";

export const metadata: Metadata = {
  "title": "厦门土楼东山岛五日定制游｜与君游",
  "description": "厦门、福建土楼与东山岛5天4晚定制游参考行程。",
  "alternates": {
    "canonical": "/trips/xiamen-tulou-dongshan-5-days",
    "languages": {
      "zh-CN": "/trips/xiamen-tulou-dongshan-5-days",
      "zh-Hant": "/zh-tw/trips/xiamen-tulou-dongshan-5-days",
      "en": "/en/trips/xiamen-tulou-dongshan-5-days",
      "x-default": "/trips/xiamen-tulou-dongshan-5-days"
    }
  }
};

export default function Page() {
  return <LocalizedCombinedTripDetail routeId="xiamen-tulou-dongshan-5-days" locale="zh-CN" />;
}
