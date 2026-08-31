import type { Metadata } from "next";
import LocalizedTripsPage from "../../localized-trips-page";

export const metadata: Metadata = {
  title: "中國訂製遊參考行程｜與君游",
  description: "瀏覽廈門、泉州、福建土樓、福州平潭及其他中國訂製遊參考行程。",
  alternates: {
    canonical: "/zh-tw/trips",
    languages: { "zh-CN": "/trips", "zh-Hant": "/zh-tw/trips", en: "/en/trips" },
  },
};

export default function TraditionalChineseTripsPage() {
  return <LocalizedTripsPage locale="zh-TW"/>;
}
