import type { Metadata } from "next";
import LocalizedCombinedTripDetail from "../localized-combined-trip-detail";

export const metadata: Metadata = {
  "title": "福建全景八日定制游｜与君游",
  "description": "福州、莆田、泉州、福建土楼、东山岛与厦门8天7晚定制游参考行程。",
  "alternates": {
    "canonical": "/trips/fujian-grand-tour-8-days",
    "languages": {
      "zh-CN": "/trips/fujian-grand-tour-8-days",
      "zh-Hant": "/zh-tw/trips/fujian-grand-tour-8-days",
      "en": "/en/trips/fujian-grand-tour-8-days",
      "x-default": "/trips/fujian-grand-tour-8-days"
    }
  }
};

export default function Page() {
  return <LocalizedCombinedTripDetail routeId="fujian-grand-tour-8-days" locale="zh-CN" />;
}
