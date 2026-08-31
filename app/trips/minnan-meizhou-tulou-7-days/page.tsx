import type { Metadata } from "next";
import LocalizedCombinedTripDetail from "../localized-combined-trip-detail";

export const metadata: Metadata = {
  "title": "闽南湄洲岛土楼七日定制游｜与君游",
  "description": "泉州、湄洲岛、福建土楼、东山岛与厦门7天6晚定制游参考行程。",
  "alternates": {
    "canonical": "/trips/minnan-meizhou-tulou-7-days",
    "languages": {
      "zh-CN": "/trips/minnan-meizhou-tulou-7-days",
      "zh-Hant": "/zh-tw/trips/minnan-meizhou-tulou-7-days",
      "en": "/en/trips/minnan-meizhou-tulou-7-days",
      "x-default": "/trips/minnan-meizhou-tulou-7-days"
    }
  }
};

export default function Page() {
  return <LocalizedCombinedTripDetail routeId="minnan-meizhou-tulou-7-days" locale="zh-CN" />;
}
