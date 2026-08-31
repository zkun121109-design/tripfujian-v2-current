export type FaqItem = readonly [question: string, answer: string];

export default function FaqSection({
  label,
  title,
  intro,
  items,
  ctaLabel,
  ctaHref,
  headingLevel = "h2",
}: {
  label: string;
  title: string;
  intro: string;
  items: readonly FaqItem[];
  ctaLabel: string;
  ctaHref: string;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  return <section className="faq-section" id="faq">
    <div className="shell faq-layout">
      <div className="faq-heading">
        <p className="overline dark">{label}</p>
        <Heading>{title}</Heading>
        <p>{intro}</p>
        <a href={ctaHref}>{ctaLabel}<b>→</b></a>
      </div>
      <div className="faq-list">
        {items.map(([question, answer], index) => <details key={question}>
          <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><b className="faq-chevron" aria-hidden="true" /></summary>
          <div className="faq-answer"><p>{answer}</p></div>
        </details>)}
      </div>
    </div>
  </section>;
}
