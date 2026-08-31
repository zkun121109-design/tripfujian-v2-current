import type { Metadata } from "next";
import LocalizedPlanPage from "../localized-plan-page";

export const metadata: Metadata = {
  title: "提交定制旅行需求｜与君游",
  description: "告诉与君游你的目的地、时间、同行人数和旅行偏好，获取福建及中国定制行程建议。",
  alternates: { canonical: "/plan", languages: { "zh-CN": "/plan", "zh-Hant": "/zh-tw/plan", en: "/en/plan", "x-default": "/plan" } },
};

export default function PlanPage() {
  return <LocalizedPlanPage locale="zh-CN" />;
}
