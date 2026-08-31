import type { Metadata } from "next";
import LocalizedPrivacyPage from "../../localized-privacy-page";
export const metadata:Metadata={title:"隱私政策與客戶資料說明｜與君游",description:"了解與君游如何收集、使用、保存和保護旅行諮詢資料。",alternates:{canonical:"/zh-tw/privacy",languages:{"zh-CN":"/privacy","zh-Hant":"/zh-tw/privacy",en:"/en/privacy","x-default":"/privacy"}}};
export default function Page(){return <LocalizedPrivacyPage locale="zh-TW"/>}
