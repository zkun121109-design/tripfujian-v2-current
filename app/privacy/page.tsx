import type { Metadata } from "next";
import LocalizedPrivacyPage from "../localized-privacy-page";

export const metadata: Metadata = {
  title: "隐私政策与客户数据说明｜与君游",
  description: "了解与君游如何收集、使用、保存和保护旅行咨询资料，以及如何提出查阅、更正或删除请求。",
  alternates: { canonical: "/privacy", languages: { "zh-CN": "/privacy", "zh-Hant": "/zh-tw/privacy", en: "/en/privacy", "x-default": "/privacy" } },
};

export default function PrivacyPage() {
  return <LocalizedPrivacyPage locale="zh-CN" />;
}
