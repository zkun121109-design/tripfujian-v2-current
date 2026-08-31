import type { Metadata } from "next";
import LocalizedHome from "./localized-home";

export const metadata: Metadata = {
  title: "TripFujian｜福建本地私人定制旅行",
  description: "第一次来福建？由厦门本地团队协助规划福建路线、酒店、私人用车、接送与当地体验。",
  alternates: { canonical: "/", languages: { "zh-CN": "/", "zh-Hant": "/zh-tw", en: "/en", "x-default": "/" } },
};

export default function SimplifiedChineseHome() {
  return <LocalizedHome locale="zh-CN" />;
}
