import type { Metadata } from "next";
import LocalizedExperiences from "../../localized-experiences";

export const metadata: Metadata = {
  title: "China Cultural Travel Experiences | Yujunyou Travel",
  description: "Add heritage, Hanfu, historic architecture, local life and food experiences to a custom Fujian or China journey.",
  alternates: { canonical: "/en/experiences", languages: { "zh-CN": "/experiences", "zh-Hant": "/zh-tw/experiences", en: "/en/experiences", "x-default": "/experiences" } },
};

export default function EnglishExperiences() { return <LocalizedExperiences locale="en"/>; }
