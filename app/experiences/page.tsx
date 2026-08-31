import type { Metadata } from "next";
import LocalizedExperiences from "../localized-experiences";

export const metadata: Metadata = {
  title: "中国主题旅行体验｜寻根、文化与美食｜与君游",
  description: "按家庭、朋友和小团需求组合中国寻根、汉服、古建筑、地方生活与美食体验，并搭配酒店、包车和定制行程。",
  alternates: { canonical: "/experiences", languages: { "zh-CN": "/experiences", "zh-Hant": "/zh-tw/experiences", en: "/en/experiences", "x-default": "/experiences" } },
};

export default function ExperiencesPage() {
  return <LocalizedExperiences locale="zh-CN" />;
}
