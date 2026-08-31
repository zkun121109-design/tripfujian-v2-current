import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");
const mediaPaths = (source) => [...source.matchAll(/"(\/trip-[^"]+\.(?:webp|png|jpe?g))"/g)].map((match) => match[1]);
const activePage = (path) => read(path).split("export function Legacy", 1)[0];

function pageMedia(path) {
  const source = activePage(path);
  const defaultIndex = source.indexOf("export default");
  const renderSource = source.slice(defaultIndex);
  const hero = renderSource.match(/hero="([^"]+)"/)?.[1];
  const collageSource = renderSource.match(/collage=\{\[(.*?)\]\}\s*days=/s)?.[1] ?? "";
  return {
    hero,
    collage: mediaPaths(collageSource),
    days: mediaPaths(source.slice(0, defaultIndex)),
  };
}

const routePages = {
  "quanzhou-4-days": "app/trips/quanzhou-4-days/page.tsx",
  "zhangzhou-3-days": "app/trips/zhangzhou-3-days/page.tsx",
  "fuzhou-pingtan-4-days": "app/trips/fuzhou-pingtan-4-days/page.tsx",
  "sanming-5-days": "app/trips/sanming-5-days/page.tsx",
  "xiamen-tulou-dongshan-5-days": "app/trips/xiamen-tulou-dongshan-5-days/page.tsx",
  "minnan-meizhou-tulou-7-days": "app/trips/minnan-meizhou-tulou-7-days/page.tsx",
  "fujian-grand-tour-8-days": "app/trips/fujian-grand-tour-8-days/page.tsx",
};

const localizedSource = read("app/trips/localized-route-content.ts");
const enStart = localizedSource.indexOf("const en:");
const twStart = localizedSource.indexOf("const tw:");
const localizedSections = {
  en: localizedSource.slice(enStart, twStart),
  tw: localizedSource.slice(twStart),
};

function localizedRouteMedia(locale, slug) {
  const section = localizedSections[locale];
  const start = section.indexOf(`"${slug}":`);
  assert.notEqual(start, -1, `Missing ${locale} route data for ${slug}`);
  const nextStarts = Object.keys(routePages)
    .map((candidate) => section.indexOf(`"${candidate}":`, start + 1))
    .filter((position) => position > start);
  const end = nextStarts.length ? Math.min(...nextStarts) : section.length;
  const paths = mediaPaths(section.slice(start, end));
  return { hero: paths[0], collage: paths.slice(1, 5), days: paths.slice(5) };
}

for (const [slug, pagePath] of Object.entries(routePages)) {
  test(`${slug} uses identical media in all locales`, () => {
    const canonical = pageMedia(pagePath);
    assert.deepEqual(localizedRouteMedia("en", slug), canonical);
    assert.deepEqual(localizedRouteMedia("tw", slug), canonical);
  });
}

test("xiamen-4-days uses identical media in all locales", () => {
  const canonical = pageMedia("app/trips/xiamen-4-days/page.tsx");
  assert.deepEqual(pageMedia("app/en/trips/xiamen-4-days/page.tsx"), canonical);
  assert.deepEqual(pageMedia("app/zh-tw/trips/xiamen-4-days/page.tsx"), canonical);
});
