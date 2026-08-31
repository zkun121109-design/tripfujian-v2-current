import type { Metadata } from "next";
import LocalizedExperiences from "../../localized-experiences";

export const metadata: Metadata = {
  title: "中國文化旅行體驗｜尋根・漢服・地方生活｜與君游",
  description: "把尋根、漢服、傳統建築、地方生活與美食體驗加入福建或全中國訂製行程。",
  alternates: { canonical: "/zh-tw/experiences", languages: { "zh-CN": "/experiences", "zh-Hant": "/zh-tw/experiences", en: "/en/experiences", "x-default": "/experiences" } },
};

export default function TraditionalExperiences() { return <LocalizedExperiences locale="zh-TW"/>; }
