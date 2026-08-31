import type { Metadata } from "next";
import CompanyAboutPage from "../../company-about-page";

export const metadata: Metadata = {
  title: "關於與君游｜廈門訂製旅行團隊",
  description: "了解與君游（廈門）國際旅遊有限公司的服務範圍、旅行規劃方式，以及福建在地與全中國訂製旅行服務。",
  alternates: { canonical: "/zh-tw/about", languages: { "zh-CN": "/about", "zh-Hant": "/zh-tw/about", en: "/en/about", "x-default": "/about" } },
};

export default function AboutPage() { return <CompanyAboutPage locale="zh-TW" />; }
