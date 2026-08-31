"use client";

import { type KeyboardEvent, useState } from "react";
import styles from "./xiamen-4-days/page.module.css";

export default function TripFlipPhoto({
  src,
  alt,
  description,
  flipLabel,
  objectPosition,
}: {
  src: string;
  alt: string;
  description: string;
  flipLabel: string;
  objectPosition?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped(value => !value);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggle();
  };

  return <div
    className={`reference-flip-photo ${styles.flipPhoto}`}
    role="button"
    tabIndex={0}
    aria-label={`${flipLabel}: ${alt}`}
    aria-pressed={flipped}
    onClick={toggle}
    onKeyDown={onKeyDown}
  >
    <div className={flipped ? styles.flipped : undefined}>
      <span><img src={src} style={objectPosition ? { objectPosition } : undefined} alt={alt}/><small>{flipLabel}</small></span>
      <div className={styles.flipCaption}><img src={src} style={objectPosition ? { objectPosition } : undefined} alt="" aria-hidden="true"/><div><b>{alt}</b><p>{description}</p></div></div>
    </div>
  </div>;
}
