import type { Metadata } from "next";
import LocalizedPlanPage from "../../localized-plan-page";

export const metadata: Metadata = { title:"Plan a Custom China Trip | Yujunyou", description:"Share your destinations, dates, group size, and travel preferences for a custom China itinerary.", alternates:{canonical:"/en/plan",languages:{"zh-CN":"/plan","zh-Hant":"/zh-tw/plan",en:"/en/plan"}} };
export default function EnglishPlanPage(){return <LocalizedPlanPage locale="en"/>}
