import type { Metadata } from "next";
import LocalizedTripsPage from "../../localized-trips-page";

export const metadata: Metadata = {
  title: "Sample China Itineraries | Yujunyou Custom Travel",
  description: "Browse custom trip ideas for Xiamen, Quanzhou, Fujian Tulou, Fuzhou, Pingtan, Beijing, Xi'an, and more.",
  alternates: {
    canonical: "/en/trips",
    languages: { "zh-CN": "/trips", "zh-Hant": "/zh-tw/trips", en: "/en/trips" },
  },
};

export default function EnglishTripsPage() {
  return <LocalizedTripsPage locale="en"/>;
}
