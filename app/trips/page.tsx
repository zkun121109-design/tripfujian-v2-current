import type { Metadata } from "next";
import LocalizedTripsPage from "../localized-trips-page";

export const metadata: Metadata = {
  title: "中国定制游参考行程｜福建与全国路线｜与君游",
  description: "查看厦门、泉州、福建土楼、闽南组合及北京西安等中国定制游参考行程，并按天数、同行成员和旅行节奏调整。",
  alternates: { canonical: "/trips", languages: { "zh-CN": "/trips", "zh-Hant": "/zh-tw/trips", en: "/en/trips", "x-default": "/trips" } },
};

export default function TripsPage() {
  return <LocalizedTripsPage locale="zh-CN" />;
}
