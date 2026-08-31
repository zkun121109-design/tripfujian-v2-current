import type { Metadata } from "next";
import LocalizedCombinedTripDetail from "../localized-combined-trip-detail";

export const metadata: Metadata = {
  "title": "三明文化五日定制游｜尤溪、泰宁与沙县｜与君游",
  "description": "三明5天4晚定制游参考行程，包含朱子家宴、泰宁古城、大金湖、朱子文化园、书京土堡、桂峰古民居与沙县。",
  "alternates": {
    "canonical": "/trips/sanming-5-days",
    "languages": {
      "zh-CN": "/trips/sanming-5-days",
      "zh-Hant": "/zh-tw/trips/sanming-5-days",
      "en": "/en/trips/sanming-5-days",
      "x-default": "/trips/sanming-5-days"
    }
  }
};

export default function Page() {
  return <LocalizedCombinedTripDetail routeId="sanming-5-days" locale="zh-CN" />;
}
