type ReferenceDayNavProps = {
  dayNumbers: readonly string[];
  locale?: "zh-CN" | "zh-TW" | "en";
};

const labels = {
  "zh-CN": { ariaLabel: "快速选择行程天数", day: (value: string) => `第${Number(value)}天` },
  "zh-TW": { ariaLabel: "快速選擇行程天數", day: (value: string) => `第${Number(value)}天` },
  en: { ariaLabel: "Jump to a day", day: (value: string) => `Day ${Number(value)}` },
} as const;

export default function ReferenceDayNav({ dayNumbers, locale = "zh-CN" }: ReferenceDayNavProps) {
  const copy = labels[locale];
  return <nav className="reference-day-nav" aria-label={copy.ariaLabel}><div>
    {dayNumbers.map(dayNumber => <a href={`#day-${dayNumber}`} key={dayNumber}>{copy.day(dayNumber)}</a>)}
  </div></nav>;
}
