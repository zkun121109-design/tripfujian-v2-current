import type { Metadata } from "next";
import LocalizedFaqPage from "../../localized-faq-page";

export const metadata: Metadata = {
  title: "Custom China Travel FAQs | Yujunyou",
  description: "Answers about custom itinerary planning, hotels, vehicles, guides, pricing, changes, and payment.",
  alternates: { canonical: "/en/faq", languages: { "zh-CN": "/faq", "zh-Hant": "/zh-tw/faq", en: "/en/faq", "x-default": "/faq" } },
};

export default function Page() { return <LocalizedFaqPage locale="en" />; }
