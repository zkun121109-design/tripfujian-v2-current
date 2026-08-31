import type { Metadata } from "next";
import LocalizedFaqPage from "../localized-faq-page";

export const metadata: Metadata = {
  title: "定制旅行常见问题｜与君游",
  description: "了解与君游的定制范围、酒店包车安排、费用说明、行程调整和咨询付款流程。",
  alternates: { canonical: "/faq", languages: { "zh-CN": "/faq", "zh-Hant": "/zh-tw/faq", en: "/en/faq", "x-default": "/faq" } },
};

export default function FaqPage() {
  return <LocalizedFaqPage locale="zh-CN" />;
}
