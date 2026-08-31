import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.TRIP_PREVIEW_URL || "http://127.0.0.1:3000";
const routes = [
  "xiamen-4-days",
  "quanzhou-4-days",
  "zhangzhou-3-days",
  "fuzhou-pingtan-4-days",
  "sanming-5-days",
  "xiamen-tulou-dongshan-5-days",
  "minnan-meizhou-tulou-7-days",
  "fujian-grand-tour-8-days",
];

const locales = [
  { id: "zh-CN", prefix: "/trips/" },
  { id: "zh-TW", prefix: "/zh-tw/trips/" },
  { id: "en", prefix: "/en/trips/" },
];

const decode = (value) => value
  .replaceAll("&amp;", "&")
  .replaceAll("&#x27;", "'")
  .replaceAll("&quot;", '"');

const capture = (html, pattern, label) => {
  const match = html.match(pattern);
  if (!match) throw new Error(`Missing ${label}`);
  return match[1];
};

function snapshot(html) {
  const heroSection = capture(html, /<section class="reference-trip-title">([\s\S]*?)<\/section>/, "hero section");
  const hero = decode(capture(heroSection, /<img[^>]+src="([^"]+)"/, "hero image"));
  const title = decode(capture(heroSection, /<h1>([^<]+)<\/h1>/, "route title"));
  const collageSection = capture(html, /<div class="reference-trip-collage">([\s\S]*?)<\/div><div class="reference-trip-brief">/, "collage");
  const collage = [...collageSection.matchAll(/<figure><img src="([^"]+)"/g)].map((match) => decode(match[1]));
  const priceText = capture(html, /<a href="#booking-notice">([^<]+)<\/a>/, "price");
  const price = priceText.replace(/\D/g, "");

  const days = [...html.matchAll(/<article class="reference-trip-day[^"]*" id="day-([^"]+)">([\s\S]*?)<\/article>/g)].map((match) => {
    const body = match[2];
    const images = [...body.matchAll(/<div class="reference-flip-photo[^>]*>[\s\S]*?<span><img src="([^"]+)"/g)].map((item) => decode(item[1]));
    const flipDescriptions = [...body.matchAll(/<div class="[^"]*flipCaption[^"]*">[\s\S]*?<div><b>[^<]*<\/b><p>([^<]*)<\/p><\/div><\/div>/g)].map((item) => decode(item[1]));
    const stopList = body.match(/<ol class="[^"]*dayStops[^"]*">([\s\S]*?)<\/ol>/)?.[1] || "";
    const stopCount = (stopList.match(/<li>/g) || []).length;
    const detailGrid = body.match(/<div class="[^"]*dayDetails[^"]*">([\s\S]*?)<\/div>/)?.[1] || "";
    const detailSections = [...detailGrid.matchAll(/<section(?: class="[^"]*")?>[\s\S]*?<\/section>/g)].map((item) => item[0]);
    const detailLineCounts = detailSections.map((section) => (section.match(/<li>/g) || []).length);
    return { number: match[1], images, flipDescriptions, stopCount, detailLineCounts };
  });

  return { title, hero, collage, price, days };
}

const comparable = (value) => JSON.stringify(value);

for (const route of routes) {
  const localized = [];
  for (const locale of locales) {
    const url = `${baseUrl}${locale.prefix}${route}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${url} returned ${response.status}`);
    localized.push({ locale: locale.id, url, value: snapshot(await response.text()) });
  }

  const canonical = localized[0];
  for (const page of localized) {
    if (/私人游|私人遊|Private\s+[^<]{0,40}tour/i.test(page.value.title || "")) {
      throw new Error(`${route} ${page.locale}: route title still uses the old Private Tour branding`);
    }
    for (const day of page.value.days) {
      if (day.flipDescriptions.length !== 2) throw new Error(`${route} ${page.locale} day ${day.number}: expected 2 image descriptions`);
      for (const description of day.flipDescriptions) {
        const limit = page.locale === "en" ? 520 : 240;
        if (description.length > limit) throw new Error(`${route} ${page.locale} day ${day.number}: image description is too long`);
        const sentenceMarks = (description.match(page.locale === "en" ? /[.!?](?=\s|$)/g : /[。！？]/g) || []).length;
        if (sentenceMarks < 2 || sentenceMarks > 3) throw new Error(`${route} ${page.locale} day ${day.number}: image description must be two or three sentences`);
      }
    }
  }
  for (const day of canonical.value.days) {
    if (day.images.length !== 2) throw new Error(`${route} day ${day.number}: expected 2 daily images, found ${day.images.length}`);
    if (day.stopCount < 1) throw new Error(`${route} day ${day.number}: itinerary stops are empty`);
    if (day.detailLineCounts.length < 1 || day.detailLineCounts.some((count) => count < 1)) {
      throw new Error(`${route} day ${day.number}: stay, meal, ticket, or transport details are incomplete`);
    }
  }
  for (const candidate of localized.slice(1)) {
    for (const field of ["hero", "collage", "price", "days"]) {
      const structural = (value) => field === "days"
        ? value.map((day) => ({ number: day.number, images: day.images, stopCount: day.stopCount, detailLineCounts: day.detailLineCounts }))
        : value;
      if (comparable(structural(candidate.value[field])) !== comparable(structural(canonical.value[field]))) {
        throw new Error(`${route}: ${field} differs between ${canonical.locale} and ${candidate.locale}`);
      }
    }
  }
  console.log(`PASS ${route}: ${canonical.value.days.length} days, ${canonical.value.collage.length} collage images`);
}

async function findRenderers(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) found.push(...await findRenderers(fullPath));
    if (entry.isFile() && /combined-trip-detail\.tsx$/i.test(entry.name)) found.push(fullPath);
  }
  return found;
}

const renderers = await findRenderers(path.resolve("app"));
if (renderers.length !== 1 || !renderers[0].endsWith(`${path.sep}localized-combined-trip-detail.tsx`)) {
  throw new Error(`Expected one trip detail renderer, found: ${renderers.join(", ")}`);
}
console.log("PASS one shared trip detail renderer");

const rendererSource = await readFile(path.resolve("app/trips/localized-combined-trip-detail.tsx"), "utf8");
const structureSource = await readFile(path.resolve("app/trips/route-structure.ts"), "utf8");
const detailStyles = await readFile(path.resolve("app/trips/xiamen-4-days/page.module.css"), "utf8");
if (!rendererSource.includes("applyRouteStructure(routeId, pageLocale")) {
  throw new Error("The shared renderer is not enforcing the canonical route structure");
}
for (const route of routes) {
  if (!structureSource.includes(`"${route}": {`)) {
    throw new Error(`Missing canonical route structure for ${route}`);
  }
}
console.log("PASS canonical route structure enforcement");

const fixedPageSources = [
  ...routes.map((route) => path.resolve(`app/trips/${route}/page.tsx`)),
  path.resolve("app/en/trips/xiamen-4-days/page.tsx"),
  path.resolve("app/zh-tw/trips/xiamen-4-days/page.tsx"),
  path.resolve("app/en/trips/[slug]/page.tsx"),
  path.resolve("app/zh-tw/trips/[slug]/page.tsx"),
];
for (const pagePath of fixedPageSources) {
  const source = await readFile(pagePath, "utf8");
  const calls = [...source.matchAll(/<LocalizedCombinedTripDetail\s+([^>]+?)\s*\/>/g)];
  if (calls.length !== 1) throw new Error(`${pagePath}: expected one shared route renderer call`);
  const attributes = [...calls[0][1].matchAll(/([A-Za-z]+)=/g)].map((match) => match[1]).sort();
  if (comparable(attributes) !== comparable(["locale", "routeId"])) {
    throw new Error(`${pagePath}: route page must pass only routeId and locale`);
  }
}
console.log("PASS route pages pass only routeId and locale");

const copySources = [
  path.resolve("app/trips/localized-route-content.ts"),
  ...routes.map((route) => path.resolve(`app/trips/${route}/copy.ts`)),
  path.resolve("app/trips/xiamen-4-days/copy.en.ts"),
  path.resolve("app/trips/xiamen-4-days/copy.tw.ts"),
];
for (const copyPath of copySources) {
  const source = await readFile(copyPath, "utf8");
  if (/\b(?:duration|price|hero|number)\s*:/.test(source) || /["']\/(?:trip|hero)-/.test(source)) {
    throw new Error(`${copyPath}: translation copy still contains shared structure data`);
  }
}
console.log("PASS translation sources contain copy only");

if (!detailStyles.includes(".reference-trip-day.reverse .reference-day-images")
  || !detailStyles.includes("aspect-ratio: 1.82 / 1")
  || !detailStyles.includes("aspect-ratio: 3 / 2 !important")
  || !detailStyles.includes("border-radius: 18px")
  || !detailStyles.includes("transform-style: preserve-3d")
  || !detailStyles.includes("-webkit-backface-visibility: hidden")
  || !detailStyles.includes('"dayimages"\n      "dayhead"\n      "daycopy"')
  || !detailStyles.includes("object-fit: cover")
  || !detailStyles.includes("rgb(0 0 0 / 60%)")) {
  throw new Error("Mobile daily images must remain ordered and use matching front/back framing");
}
console.log("PASS mobile daily image order and matching front/back framing");
