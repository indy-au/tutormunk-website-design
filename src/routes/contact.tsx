import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/content/about";
import { PageIntro } from "@/components/sections/PageIntro";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: contact.title },
      { name: "description", content: contact.metaDescription },
      { property: "og:title", content: contact.title },
      { property: "og:description", content: contact.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro {...contact.hero} />
      <ContactSection
        details={contact.details}
        mapLabel={contact.mapLabel}
        mapEmbedUrl={contact.mapEmbedUrl}
        form={contact.form}
      />
    </>
  );
}
