import type { Metadata } from "next";
import LocalizedHome from "../localized-home";

export const metadata: Metadata = {
  title: "TripFujian｜福建在地私人訂製旅行",
  description: "第一次來福建？由廈門在地團隊協助規劃福建路線、飯店、私人用車、接送與在地體驗。",
  alternates: { canonical: "/zh-tw", languages: { "zh-CN": "/", "zh-Hant": "/zh-tw", en: "/en", "x-default": "/" } },
};

export default function TraditionalChineseHome() { return <LocalizedHome locale="zh-TW"/>; }
