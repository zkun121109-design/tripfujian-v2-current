import type { Metadata } from "next";
import LocalizedFaqPage from "../../localized-faq-page";

export const metadata: Metadata = {
  title: "訂製旅遊常見問題｜與君遊",
  description: "了解私人行程訂製、酒店、包車、導遊、費用、行程調整與付款方式。",
  alternates: { canonical: "/zh-tw/faq", languages: { "zh-CN": "/faq", "zh-Hant": "/zh-tw/faq", en: "/en/faq", "x-default": "/faq" } },
};

export default function Page() { return <LocalizedFaqPage locale="zh-TW" />; }
