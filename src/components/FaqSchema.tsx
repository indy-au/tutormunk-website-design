// JSON-LD FAQPage markup, generated from the same FAQ data faqPage.faq.items
// renders on the page (src/content/faq.ts), one Question/acceptedAnswer per
// item. Rendered inline in the page body, same convention as
// LocalBusinessSchema: Google reads JSON-LD anywhere in the document, this
// doesn't need to live in <head>.
function stripMarkup(text: string): string {
  return text.replace(/<[^>]*>/g, "").trim();
}

export function FaqSchema({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: stripMarkup(item.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarkup(item.answer),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
