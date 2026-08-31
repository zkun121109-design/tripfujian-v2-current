import type { Metadata } from "next";
import LocalizedPrivacyPage from "../../localized-privacy-page";
export const metadata:Metadata={title:"Privacy Policy and Customer Data Notice | Yujunyou",description:"Learn how Yujunyou collects, uses, stores, and protects travel inquiry data.",alternates:{canonical:"/en/privacy",languages:{"zh-CN":"/privacy","zh-Hant":"/zh-tw/privacy",en:"/en/privacy","x-default":"/privacy"}}};
export default function Page(){return <LocalizedPrivacyPage locale="en"/>}
