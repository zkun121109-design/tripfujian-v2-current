type StructuredTripDay = { number: string; title: string };

type TripStructuredDataProps = {
  title: string;
  description: string;
  days: readonly StructuredTripDay[];
  locale?: "zh-CN" | "zh-TW" | "en";
};

export default function TripStructuredData({ title, description, days, locale = "zh-CN" }: TripStructuredDataProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: title,
    description,
    inLanguage: locale === "zh-TW" ? "zh-Hant" : locale,
    touristType: locale === "en" ? "Custom-tour travellers" : locale === "zh-TW" ? "訂製遊旅客" : "定制游旅客",
    provider: {
      "@type": "TravelAgency",
      name: "与君游（厦门）国际旅游有限公司",
      email: "yujunyou2026@163.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "厦门市",
        addressRegion: "福建省",
        streetAddress: "集美区杏林湾路474号2606单元",
        addressCountry: "CN",
      },
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: days.map((day, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: day.title,
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }} />;
}
