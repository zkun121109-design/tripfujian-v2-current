import type { Metadata } from "next";
import LocalizedHome from "../localized-home";

export const metadata: Metadata = {
  title: "TripFujian | Private Custom Travel in Fujian",
  description: "Plan a private Fujian trip with a Xiamen-based local team, including itineraries, stays, private transport, transfers and local experiences.",
  alternates: { canonical: "/en", languages: { "zh-CN": "/", "zh-Hant": "/zh-tw", en: "/en", "x-default": "/" } },
};

export default function EnglishHome() { return <LocalizedHome locale="en"/>; }
