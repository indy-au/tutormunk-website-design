import type { TextPageContent } from "@/content/policies";

export function TextPageSection({ content }: { content: TextPageContent }) {
  return (
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <p className="text-sm text-muted-foreground">{content.updated}</p>
        <p className="mt-6 text-lg leading-relaxed">{content.intro}</p>
        <div className="mt-10 space-y-9">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
