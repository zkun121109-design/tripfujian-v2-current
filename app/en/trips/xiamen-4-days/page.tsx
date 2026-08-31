import type { Metadata } from "next";
import LocalizedCombinedTripDetail from "../../../trips/localized-combined-trip-detail";

export const metadata: Metadata = {
  "title": "Custom Xiamen Tour · 4 Days | Yujunyou",
  "description": "A relaxed four-day custom Xiamen itinerary with Gulangyu Island, Zhongshan Road, Nanputuo Temple, Huandao Road, and Jimei.",
  "alternates": {
    "canonical": "/en/trips/xiamen-4-days",
    "languages": {
      "zh-CN": "/trips/xiamen-4-days",
      "zh-Hant": "/zh-tw/trips/xiamen-4-days",
      "en": "/en/trips/xiamen-4-days",
      "x-default": "/trips/xiamen-4-days"
    }
  }
};

export default function Page() {
  return <LocalizedCombinedTripDetail routeId="xiamen-4-days" locale="en" />;
}
