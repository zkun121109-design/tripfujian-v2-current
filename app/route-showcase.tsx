"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

export type RouteShowcaseItem = {
  image: string;
  place: string;
  englishPlace: string;
  days: string;
  title: string;
  tags: string[];
  itineraryTitle: string;
  itinerary: string[];
  detailHref?: string;
  imageAlt?: string;
};

export default function RouteShowcase({
  routes,
  openLabel,
  closeLabel,
  note,
  ctaLabel,
  ctaHref,
  detailLabel,
  dayLabel,
  imagePendingLabel,
  photoCredit,
  moreLabel,
  lessLabel,
  mobileVisibleCount = 3,
}: {
  routes: RouteShowcaseItem[];
  openLabel: string;
  closeLabel: string;
  note: string;
  ctaLabel: string;
  ctaHref: string;
  detailLabel: string;
  dayLabel: (day: number) => string;
  imagePendingLabel: string;
  photoCredit?: string;
  moreLabel: string;
  lessLabel: string;
  mobileVisibleCount?: number;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const active = activeIndex === null ? null : routes[activeIndex];
  const itineraryOrder = activeIndex === null ? undefined : {
    "--desktop-order": (Math.floor(activeIndex / 4) * 4 + 3) * 2 + 1,
    "--tablet-order": (Math.floor(activeIndex / 2) * 2 + 1) * 2 + 1,
    "--mobile-order": activeIndex * 2 + 1,
  } as CSSProperties;

  useEffect(() => {
    if (activeIndex === null) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.requestAnimationFrame(() => itineraryRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" }));
  }, [activeIndex]);

  return <>
    <div className="route-poster-grid">
      {routes.slice(0, 6).map((route, index) => {
        const isActive = activeIndex === index;
        return <button
          className={`route-poster${isActive ? " is-active" : ""}${index >= mobileVisibleCount && !mobileExpanded ? " is-mobile-hidden" : ""}`}
          key={route.title}
          type="button"
          aria-expanded={isActive}
          aria-controls="route-itinerary"
          style={{ "--route-order": index * 2 } as CSSProperties}
          onClick={() => setActiveIndex(isActive ? null : index)}
        >
          <span className="route-poster-media">
            {route.image
              ? <img src={route.image} alt={route.imageAlt || route.place} />
              : <span className="route-poster-placeholder" aria-hidden="true"><b>{route.place}</b><small>{imagePendingLabel}</small></span>}
            <span className="route-poster-days">{route.days}</span>
          </span>
          <span className="route-poster-content">
            <small>{route.place}</small>
            <strong>{route.title}</strong>
            <em>{route.tags.join(" · ")}</em>
            <span className="route-poster-action">{isActive ? closeLabel : openLabel}<b>{isActive ? "−" : "+"}</b></span>
          </span>
        </button>;
      })}
      {active && <div className="route-itinerary" id="route-itinerary" ref={itineraryRef} aria-live="polite" style={itineraryOrder}>
        <div className="route-itinerary-heading"><span>{active.days}</span><div><small>{active.place}</small><h3>{active.itineraryTitle}</h3></div></div>
        <ol>{active.itinerary.map((day, index) => <li key={day}><b>{dayLabel(index + 1)}</b><span>{day}</span></li>)}</ol>
        <div className="route-itinerary-footer"><p>{note}</p><a href={active.detailHref || ctaHref}>{active.detailHref ? detailLabel : ctaLabel}<b>→</b></a></div>
      </div>}
    </div>

    <button
      className="route-mobile-toggle"
      type="button"
      aria-expanded={mobileExpanded}
      onClick={() => {
        if (mobileExpanded && activeIndex !== null && activeIndex >= mobileVisibleCount) setActiveIndex(null);
        setMobileExpanded((current) => !current);
      }}
    >
      <span>{mobileExpanded ? lessLabel : moreLabel}</span><b aria-hidden="true">{mobileExpanded ? "↑" : "↓"}</b>
    </button>

    {photoCredit && <p className="route-photo-credit">{photoCredit}</p>}
  </>;
}
