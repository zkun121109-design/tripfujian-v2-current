import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/noto-sans-sc";
import "@fontsource-variable/noto-sans-tc";
import "./globals.css";
import "./design-system.css";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import AnalyticsTracker from "./analytics-tracker";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "与君游（厦门）国际旅游有限公司",
  alternateName: "TripFujian by Yujunyou Travel",
  url: "https://tripfujian.com",
  logo: "https://tripfujian.com/yujunyou-mark-v4.svg",
  email: "yujunyou2026@163.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "杏林湾路474号2606单元",
    addressLocality: "厦门市",
    addressRegion: "福建省",
    addressCountry: "CN",
  },
  areaServed: ["福建", "中国"],
  availableLanguage: ["zh-CN", "zh-Hant", "en"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tripfujian.com"),
  title: "TripFujian｜福建本地私人定制旅行",
  description: "TripFujian 由厦门本地团队提供福建私人定制旅行，协助规划路线、酒店、包车接送与当地体验。",
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "TripFujian by Yujunyou Travel",
    images: [{ url: "/og-yujunyou.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "TripFujian 福建私人定制旅行" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-yujunyou.jpg"],
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = (await headers()).get("x-yujunyou-pathname") ?? "/";
  const language = pathname === "/en" || pathname.startsWith("/en/")
    ? "en"
    : pathname === "/zh-tw" || pathname.startsWith("/zh-tw/")
      ? "zh-Hant"
      : "zh-CN";

  const localeClass = language === "en" ? "locale-en" : language === "zh-Hant" ? "locale-zh-hant" : "locale-zh-hans";
  return <html lang={language}><body className={localeClass}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} /><AnalyticsTracker /><SiteHeader />{children}<SiteFooter /></body></html>;
}
