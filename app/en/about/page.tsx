import type { Metadata } from "next";
import CompanyAboutPage from "../../company-about-page";

export const metadata: Metadata = {
  title: "About Yujunyou Travel | Xiamen-Based Custom China Travel",
  description: "Learn how Yujunyou plans custom journeys with local strength in Fujian and travel coordination across China.",
  alternates: { canonical: "/en/about", languages: { "zh-CN": "/about", "zh-Hant": "/zh-tw/about", en: "/en/about", "x-default": "/about" } },
};

export default function AboutPage() { return <CompanyAboutPage locale="en" />; }
