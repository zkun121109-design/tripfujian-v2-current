import type { Metadata } from "next";
import LocalizedCombinedTripDetail from "../../../trips/localized-combined-trip-detail";

export const metadata: Metadata = {
  "title": "廈門四日訂製遊｜鼓浪嶼、南普陀與集美｜與君游",
  "description": "廈門4天3晚訂製遊參考行程，包含鼓浪嶼、中山路、植物園、南普陀寺、環島路與集美學村。",
  "alternates": {
    "canonical": "/zh-tw/trips/xiamen-4-days",
    "languages": {
      "zh-CN": "/trips/xiamen-4-days",
      "zh-Hant": "/zh-tw/trips/xiamen-4-days",
      "en": "/en/trips/xiamen-4-days"
    }
  }
};

export default function Page() {
  return <LocalizedCombinedTripDetail routeId="xiamen-4-days" locale="zh-TW" />;
}
