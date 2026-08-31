import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedCombinedTripDetail from "../../../trips/localized-combined-trip-detail";
import { getLocalizedRoute, type LocalizedRouteId } from "../../../trips/localized-route-content";
import { getRouteHero } from "../../../trips/route-structure";

const routes: LocalizedRouteId[] = ["quanzhou-4-days","zhangzhou-3-days","fuzhou-pingtan-4-days","sanming-5-days","xiamen-tulou-dongshan-5-days","minnan-meizhou-tulou-7-days","fujian-grand-tour-8-days"];
const valid = (slug: string): slug is LocalizedRouteId => routes.includes(slug as LocalizedRouteId);

export function generateStaticParams() { return routes.map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!valid(slug)) return {};
  const route = getLocalizedRoute("zh-TW", slug);
  const title = `${route.title}｜與君游`;
  const image = new URL(getRouteHero(slug), "https://tripfujian.com").toString();
  return {
    title,
    description: route.description,
    alternates: { canonical: `/zh-tw/trips/${slug}`, languages: { "zh-CN": `/trips/${slug}`, "zh-Hant": `/zh-tw/trips/${slug}`, en: `/en/trips/${slug}` } },
    openGraph: { type: "website", url: `/zh-tw/trips/${slug}`, title, description: route.description, images: [{ url: image, alt: route.title }] },
    twitter: { card: "summary_large_image", title, description: route.description, images: [image] },
  };
}

export default async function TraditionalRoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!valid(slug)) notFound();
  return <LocalizedCombinedTripDetail routeId={slug} locale="zh-TW"/>;
}
