import type { Metadata } from "next";
import LocalizedPlanPage from "../../localized-plan-page";

export const metadata: Metadata = { title:"提交訂製旅行需求｜與君游", description:"告訴與君游你的目的地、時間、同行人數和旅行偏好，取得福建及中國訂製行程建議。", alternates:{canonical:"/zh-tw/plan",languages:{"zh-CN":"/plan","zh-Hant":"/zh-tw/plan",en:"/en/plan"}} };
export default function TraditionalPlanPage(){return <LocalizedPlanPage locale="zh-TW"/>}
