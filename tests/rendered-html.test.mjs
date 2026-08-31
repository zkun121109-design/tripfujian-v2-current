import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function dispatch(url) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${url}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(url), {}, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the production travel homepage and privacy consent", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>与君游｜福建本地・中国定制旅行<\/title>/);
  assert.equal((html.match(/<header class="global-site-header/g) ?? []).length, 1);
  assert.doesNotMatch(html, /<header class="site-header"/);
  assert.match(html, /<meta property="og:image" content="https:\/\/tripfujian\.com\/og-yujunyou\.jpg"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/tripfujian\.com\/?"/);
  assert.match(html, /与君游（厦门）国际旅游有限公司/);
  assert.match(html, /<input(?=[^>]*name="privacyConsent")(?=[^>]*required)[^>]*>/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /隐私政策/);
  assert.match(html, /请勿填写护照、身份证、银行卡或详细病历等敏感资料/);
  assert.match(html, /常见问题/);
  assert.match(html, /href="\/about"/);
  assert.doesNotMatch(html, /福建本地出发，/);
  assert.match(html, /只做福建旅游吗/);
  assert.match(html, /咨询、报价和付款如何进行/);
  assert.doesNotMatch(html, /★★★★★|贵宾评价与定制案例/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("uses a lightweight social sharing image", async () => {
  const image = await stat(new URL("../public/og-yujunyou.jpg", import.meta.url));
  assert.ok(image.size < 200_000, `Social image is too large: ${image.size} bytes`);
});

test("renders localized company pages and keeps claims factual", async () => {
  const simplified = await render("/about");
  assert.equal(simplified.status, 200);
  const simplifiedHtml = await simplified.text();
  assert.match(simplifiedHtml, /<title>关于与君游｜厦门定制旅行团队<\/title>/);
  assert.match(simplifiedHtml, /与君游（厦门）国际旅游有限公司/);
  assert.match(simplifiedHtml, /暂不提供在线支付/);

  const traditional = await render("/zh-tw/about");
  assert.equal(traditional.status, 200);
  const traditionalAboutHtml = await traditional.text();
  assert.match(traditionalAboutHtml, /關於與君游/);
  assert.match(traditionalAboutHtml, /與君游（廈門）國際旅遊有限公司/);
  assert.match(traditionalAboutHtml, /廈門市集美區杏林灣路474號2606單元/);
  const traditionalAboutMain = traditionalAboutHtml.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  assert.doesNotMatch(traditionalAboutMain, /与君游（厦门）国际旅游有限公司|厦门市集美区杏林湾路474号2606单元/);

  const english = await render("/en/about");
  assert.equal(english.status, 200);
  const englishHtml = await english.text();
  assert.match(englishHtml, /About Yujunyou/);
  assert.match(englishHtml, /does not accept online payments/);
});

test("renders working Traditional Chinese and English landing pages", async () => {
  const traditional = await render("/zh-tw");
  assert.equal(traditional.status, 200);
  const traditionalHtml = await traditional.text();
  assert.equal((traditionalHtml.match(/<header class="global-site-header/g) ?? []).length, 1);
  assert.doesNotMatch(traditionalHtml, /<header class="site-header"/);
  assert.match(traditionalHtml, /<html lang="zh-Hant">/);
  assert.match(traditionalHtml, /<title>與君游｜福建在地・中國訂製旅行<\/title>/);
  assert.match(traditionalHtml, /<link rel="canonical" href="https:\/\/tripfujian\.com\/zh-tw"/);
  assert.match(traditionalHtml, /福建在地團隊/);
  assert.match(traditionalHtml, /href="\/zh-tw\/trips">探索更多旅行/);

  const english = await render("/en");
  assert.equal(english.status, 200);
  const englishHtml = await english.text();
  assert.equal((englishHtml.match(/<header class="global-site-header/g) ?? []).length, 1);
  assert.doesNotMatch(englishHtml, /<header class="site-header"/);
  assert.match(englishHtml, /<html lang="en">/);
  assert.match(englishHtml, /<title>Yujunyou Travel \| Fujian and China Custom Tours<\/title>/);
  assert.match(englishHtml, /<link rel="canonical" href="https:\/\/tripfujian\.com\/en"/);
  assert.match(englishHtml, /Fujian-based team/);
  assert.match(englishHtml, /href="\/en\/experiences"/);
  assert.match(englishHtml, /href="\/en\/trips">Explore more journeys/);
  assert.doesNotMatch(englishHtml, /official Simplified Chinese version/);
});

test("renders localized cultural-experience pages with distinct metadata", async () => {
  const traditional = await render("/zh-tw/experiences");
  assert.equal(traditional.status, 200);
  const traditionalHtml = await traditional.text();
  assert.match(traditionalHtml, /<title>中國文化旅行體驗｜尋根・漢服・地方生活｜與君游<\/title>/);
  assert.match(traditionalHtml, /故鄉重訪與家族記憶/);
  assert.match(traditionalHtml, /href="\/zh-tw\/plan"/);

  const english = await render("/en/experiences");
  assert.equal(english.status, 200);
  const englishHtml = await english.text();
  assert.match(englishHtml, /<title>China Cultural Travel Experiences \| Yujunyou Travel<\/title>/);
  assert.match(englishHtml, /Returning to family roots/);
  assert.match(englishHtml, /href="\/en\/plan"/);
});

test("renders one localized consultation flow and routes contact links to it", async () => {
  const cases = [
    ["/plan", "zh-Hans", "填写表单，我们会在24小时以内与您取得联系", "/plan"],
    ["/zh-tw/plan", "zh-Hant", "填寫表單，我們會在24小時內與您取得聯絡", "/zh-tw/plan"],
    ["/en/plan", "en", "CUSTOM TRIP INQUIRY", "/en/plan"],
  ];

  for (const [path, lang, label, href] of cases) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`<main lang="${lang}"`));
    assert.match(html, new RegExp(label));
    assert.match(html, /id="consultationForm"/);
    assert.match(html, /<input(?=[^>]*name="name")(?=[^>]*required)[^>]*>/);
    assert.match(html, /<input(?=[^>]*name="contactMethod")(?=[^>]*required)[^>]*>/);
    assert.match(html, /<input(?=[^>]*name="days")(?=[^>]*required)[^>]*>/);
    assert.match(html, new RegExp(`href="${href.replaceAll("/", "\\/")}"`));
    assert.doesNotMatch(html, /#planForm/);
  }

  const source = await readFile(new URL("../app/localized-detailed-plan-form.tsx", import.meta.url), "utf8");
  for (const page of ["../app/plan/page.tsx", "../app/zh-tw/plan/page.tsx", "../app/en/plan/page.tsx"]) {
    const pageSource = await readFile(new URL(page, import.meta.url), "utf8");
    assert.match(pageSource, /LocalizedPlanPage/);
    assert.doesNotMatch(pageSource, /<form\b/);
  }
  assert.equal((source.match(/<form\b/g) ?? []).length, 1);
});

test("server-renders a complete privacy and customer-data notice", async () => {
  const response = await render("/privacy");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>隐私政策与客户数据说明｜与君游<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/tripfujian\.com\/privacy"/);
  assert.match(html, /个人信息处理者为/);
  assert.match(html, /Cloudflare D1/);
  assert.match(html, /不会保存原始 IP 地址/);
  assert.match(html, /匿名访问统计最多保存12个月/);
  assert.match(html, /最长保存30天的第一方来源 Cookie/);
  assert.match(html, /最后一次有效联系后不超过24个月/);
  assert.match(html, /微信和其他第三方平台/);
  assert.match(html, /查阅、复制、更正、补充或删除/);
  assert.match(html, /任何网络服务都无法承诺绝对安全/);

  const englishHtml = await (await render("/en/privacy")).text();
  assert.match(englishHtml, /We do not store the raw IP address/);
  assert.match(englishHtml, /automatically deleted after 12 months/);
  assert.match(englishHtml, /first-party attribution cookie for up to 30 days/);

  const traditionalHtml = await (await render("/zh-tw/privacy")).text();
  assert.match(traditionalHtml, /不會保存原始 IP 位址/);
  assert.match(traditionalHtml, /最多保存12個月/);
  assert.match(traditionalHtml, /最長保存30天的第一方來源 Cookie/);

  const analyticsRoute = await readFile(new URL("../app/api/analytics/visit/route.ts", import.meta.url), "utf8");
  assert.match(analyticsRoute, /DELETE FROM analytics_events WHERE created_at < datetime\('now', '-12 months'\)/);
});

test("publishes distinct experience metadata and keeps admin out of search", async () => {
  const experiences = await render("/experiences");
  assert.equal(experiences.status, 200);
  const experiencesHtml = await experiences.text();
  assert.match(experiencesHtml, /<title>中国主题旅行体验｜寻根、文化与美食｜与君游<\/title>/);
  assert.match(experiencesHtml, /<link rel="canonical" href="https:\/\/tripfujian\.com\/experiences"/);

  const admin = await render("/admin");
  assert.equal(admin.status, 200);
  assert.match(await admin.text(), /<meta name="robots" content="noindex, nofollow, nocache"/);
});

test("redirects the www host and retires confirmed legacy CMS URLs", async () => {
  const canonical = await dispatch("https://www.tripfujian.com/experiences?from=www");
  assert.equal(canonical.status, 308);
  assert.equal(canonical.headers.get("location"), "https://tripfujian.com/experiences?from=www");

  const legacy = await dispatch("https://tripfujian.com/lineline/23.html");
  assert.equal(legacy.status, 410);
  assert.equal(legacy.headers.get("x-robots-tag"), "noindex, nofollow");

  const oldSitemap = await dispatch("https://tripfujian.com/sitemap_index.xml");
  assert.equal(oldSitemap.status, 308);
  assert.equal(oldSitemap.headers.get("location"), "https://tripfujian.com/sitemap.xml");
});

test("publishes every public localized page in the sitemap with reciprocal language links", async () => {
  const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 45);
  assert.equal((sitemap.match(/rel="alternate"/g) ?? []).length, 180);
  assert.match(sitemap, /https:\/\/tripfujian\.com\/en\/trips\/fujian-grand-tour-8-days/);
  assert.match(sitemap, /https:\/\/tripfujian\.com\/zh-tw\/trips\/xiamen-tulou-dongshan-5-days/);
  assert.match(sitemap, /hreflang="zh-CN"/);
  assert.match(sitemap, /hreflang="zh-Hant"/);
  assert.match(sitemap, /hreflang="en"/);
  assert.match(sitemap, /hreflang="x-default"/);
});
