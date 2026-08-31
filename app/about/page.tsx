import type { Metadata } from "next";
import CompanyAboutPage from "../company-about-page";

export const metadata: Metadata = {
  title: "关于与君游｜厦门定制旅行团队",
  description: "了解与君游（厦门）国际旅游有限公司的服务范围、旅行规划方式，以及福建在地与全国定制旅行服务。",
  alternates: { canonical: "/about", languages: { "zh-CN": "/about", "zh-Hant": "/zh-tw/about", en: "/en/about", "x-default": "/about" } },
};

export default function AboutPage() { return <CompanyAboutPage locale="zh-CN" />; }
