"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Locale = "zh-CN" | "zh-TW" | "en";

const copy = {
  "zh-CN": {
    brand: "TripFujian",
    tagline: "by Yujunyou Travel",
    fujian: "福建旅行",
    trips: "旅行路线",
    experiences: "特色体验",
    services: "旅行服务",
    about: "关于我们",
    cta: "免费规划行程",
    menu: "打开导航",
    destinations: ["厦门", "泉州", "福建土楼", "平潭", "武夷山"],
    serviceItems: ["私人定制", "酒店", "包车", "机场接送", "当地向导"],
  },
  "zh-TW": {
    brand: "TripFujian",
    tagline: "by Yujunyou Travel",
    fujian: "福建旅行",
    trips: "旅行路線",
    experiences: "特色體驗",
    services: "旅行服務",
    about: "關於我們",
    cta: "免費規劃行程",
    menu: "開啟導覽",
    destinations: ["廈門", "泉州", "福建土樓", "平潭", "武夷山"],
    serviceItems: ["私人訂製", "飯店", "包車", "機場接送", "在地嚮導"],
  },
  en: {
    brand: "TripFujian",
    tagline: "by Yujunyou Travel",
    fujian: "Fujian",
    trips: "Trips",
    experiences: "Experiences",
    services: "Travel services",
    about: "About",
    cta: "Plan my trip free",
    menu: "Open navigation",
    destinations: ["Xiamen", "Quanzhou", "Fujian Tulou", "Pingtan", "Wuyi Mountain"],
    serviceItems: ["Custom planning", "Hotels", "Private vehicles", "Airport transfers", "Local guides"],
  },
} as const;

function localizedPath(pathname: string, locale: Locale) {
  const plainPath = pathname.replace(/^\/(?:zh-tw|en)(?=\/|$)/, "") || "/";
  const localizedTrips = new Set(["/trips", "/trips/xiamen-4-days", "/trips/quanzhou-4-days", "/trips/zhangzhou-3-days", "/trips/fuzhou-pingtan-4-days", "/trips/sanming-5-days", "/trips/xiamen-tulou-dongshan-5-days", "/trips/minnan-meizhou-tulou-7-days", "/trips/fujian-grand-tour-8-days"]);
  const localizedInfoPages = new Set(["/about", "/experiences", "/services", "/hotels", "/vehicles", "/plan", "/privacy", "/faq"]);
  const supportedPath = localizedInfoPages.has(plainPath) || localizedTrips.has(plainPath) ? plainPath : "/";
  if (locale === "zh-CN") return supportedPath;
  return `/${locale === "zh-TW" ? "zh-tw" : "en"}${supportedPath === "/" ? "" : supportedPath}`;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale: Locale = pathname.startsWith("/zh-tw") ? "zh-TW" : pathname.startsWith("/en") ? "en" : "zh-CN";
  const plainPath = pathname.replace(/^\/(?:zh-tw|en)(?=\/|$)/, "") || "/";
  const overlaysHero = plainPath === "/" || plainPath === "/about" || plainPath.startsWith("/trips/");
  const root = locale === "zh-TW" ? "/zh-tw" : locale === "en" ? "/en" : "";
  const planPath = plainPath === "/" ? `${root || ""}/#trip-planner` : `${root}/plan`;
  const text = copy[locale];
  const parentPath = plainPath.startsWith("/trips/") ? `${root}/trips` : root || "/";
  const close = () => setOpen(false);
  useEffect(() => {
    document.documentElement.lang = locale === "zh-TW" ? "zh-Hant" : locale === "en" ? "en" : "zh-Hans";
  }, [locale]);
  useEffect(() => {
    if (plainPath !== "/") return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, [plainPath]);
  useEffect(() => {
    if (plainPath === "/" || pathname.startsWith("/admin")) return;
    let startX = 0;
    let startY = 0;
    let tracking = false;
    const onTouchStart = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      tracking = touch.clientX <= 28;
      startX = touch.clientX;
      startY = touch.clientY;
    };
    const onTouchEnd = (event: TouchEvent) => {
      if (!tracking) return;
      const touch = event.changedTouches[0];
      const distanceX = touch.clientX - startX;
      const distanceY = Math.abs(touch.clientY - startY);
      tracking = false;
      if (distanceX >= 72 && distanceY <= 56 && distanceX > distanceY * 1.25) window.location.assign(parentPath);
    };
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [parentPath, pathname, plainPath]);

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className={`global-site-header ${overlaysHero ? "is-overlay" : ""} ${plainPath === "/" && scrolled ? "is-scrolled" : ""}`}>
      <div className="global-header-inner shell">
        <a className="brand global-header-brand" href={root || "/"} onClick={close}>
          <Image src="/yujunyou-mark-v4.svg" alt="" aria-hidden="true" width={42} height={42} priority />
          <span><strong>{text.brand}</strong><small>{text.tagline}</small></span>
        </a>

        <nav className={`global-header-nav ${open ? "is-open" : ""}`} aria-label={text.menu}>
          <details className="global-header-group">
            <summary>{text.fujian}</summary>
            <div className="global-header-dropdown">{text.destinations.map((item, index) => <a key={item} href={`${root}/trips?destination=${["xiamen", "quanzhou", "tulou", "pingtan", "wuyi"][index]}`} onClick={close}>{item}</a>)}</div>
          </details>
          <a href={`${root}/trips`} onClick={close}>{text.trips}</a>
          <a href={`${root}/experiences`} onClick={close}>{text.experiences}</a>
          <details className="global-header-group">
            <summary>{text.services}</summary>
            <div className="global-header-dropdown">
              <a href={planPath} onClick={close}>{text.serviceItems[0]}</a>
              <a href={`${root}/hotels`} onClick={close}>{text.serviceItems[1]}</a>
              <a href={`${root}/vehicles`} onClick={close}>{text.serviceItems[2]}</a>
              <a href={`${root}/vehicles#transfers`} onClick={close}>{text.serviceItems[3]}</a>
              <a href={`${root}/experiences`} onClick={close}>{text.serviceItems[4]}</a>
            </div>
          </details>
          <a href={`${root}/about`} onClick={close}>{text.about}</a>
          <div className="global-header-mobile-languages" aria-label="Language">
            <a className={locale === "zh-CN" ? "active" : ""} href={localizedPath(pathname, "zh-CN")} onClick={close}>简体</a>
            <a className={locale === "zh-TW" ? "active" : ""} href={localizedPath(pathname, "zh-TW")} onClick={close}>繁體</a>
            <a className={locale === "en" ? "active" : ""} href={localizedPath(pathname, "en")} onClick={close}>English</a>
          </div>
        </nav>

        <div className="global-header-actions">
          <div className="global-header-languages" aria-label="Language">
            <a className={locale === "zh-CN" ? "active" : ""} href={localizedPath(pathname, "zh-CN")}>简</a>
            <a className={locale === "zh-TW" ? "active" : ""} href={localizedPath(pathname, "zh-TW")}>繁</a>
            <a className={locale === "en" ? "active" : ""} href={localizedPath(pathname, "en")}>EN</a>
          </div>
          <a className="global-header-cta" href={planPath}>{text.cta}</a>
          <button className="global-header-menu" type="button" aria-label={text.menu} aria-expanded={open} onClick={() => setOpen(value => !value)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
