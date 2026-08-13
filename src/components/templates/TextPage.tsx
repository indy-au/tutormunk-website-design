import type { TextPageContent } from "@/content/policies";
import { PageIntro } from "../sections/PageIntro";
import { TextPageSection } from "../sections/TextPageSection";

export function TextPage({ content }: { content: TextPageContent }) {
  return (
    <>
      <PageIntro eyebrow={content.eyebrow} heading={content.heading} />
      <TextPageSection content={content} />
    </>
  );
}
