import type { Metadata } from "next";
import LocalizedCombinedTripDetail from "../localized-combined-trip-detail";

export const metadata: Metadata = {
  "title": "漳州土楼三日定制游｜云水谣、永定土楼与东山岛｜与君游",
  "description": "漳州3天2晚定制游参考行程，包含漳州古城、云水谣、永定土楼、金銮湾、南门湾、苏峰山与风动石。",
  "alternates": {
    "canonical": "/trips/zhangzhou-3-days",
    "languages": {
      "zh-CN": "/trips/zhangzhou-3-days",
      "zh-Hant": "/zh-tw/trips/zhangzhou-3-days",
      "en": "/en/trips/zhangzhou-3-days",
      "x-default": "/trips/zhangzhou-3-days"
    }
  }
};

export default function Page() {
  return <LocalizedCombinedTripDetail routeId="zhangzhou-3-days" locale="zh-CN" />;
}
