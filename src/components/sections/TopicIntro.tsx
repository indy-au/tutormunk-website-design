// Content pass, batch 1 of 3 (19 Aug 2026). Renders a topic's entitySentence
// as the first paragraph, then its sections as h2/paragraph blocks. Reused
// by every content-rich topic page from here on, see CLAUDE.md's "Topic
// pages" note. Typographic scale matches PolicyArticle.tsx (the other
// prose-heavy page on the site), so a long-form topic page reads like the
// rest of the site rather than introducing a new style.
export function TopicIntro({
  entitySentence,
  sections,
}: {
  entitySentence: string;
  sections: { heading: string; paragraphs: string[] }[];
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="max-w-[70ch]">
          <p className="text-lg leading-relaxed text-foreground">{entitySentence}</p>
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mt-10 text-2xl md:text-3xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-4 text-base leading-loose text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
