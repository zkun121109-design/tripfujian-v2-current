import type { Metadata } from "next";
import LocalizedCombinedTripDetail from "../localized-combined-trip-detail";

export const metadata: Metadata = {
  "title": "福州平潭四日定制游｜海岛风光与三坊七巷｜与君游",
  "description": "福州平潭4天3晚定制游参考行程，包含长江澳、北部湾、仙人井、68海里、坛南湾、烟台山与三坊七巷。",
  "alternates": {
    "canonical": "/trips/fuzhou-pingtan-4-days",
    "languages": {
      "zh-CN": "/trips/fuzhou-pingtan-4-days",
      "zh-Hant": "/zh-tw/trips/fuzhou-pingtan-4-days",
      "en": "/en/trips/fuzhou-pingtan-4-days",
      "x-default": "/trips/fuzhou-pingtan-4-days"
    }
  }
};

export default function Page() {
  return <LocalizedCombinedTripDetail routeId="fuzhou-pingtan-4-days" locale="zh-CN" />;
}
