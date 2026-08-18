import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { contact } from "@/content/contact";
import { PageIntro } from "@/components/sections/PageIntro";
import { ContactDetails } from "@/components/sections/ContactDetails";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({ title: contact.title, description: contact.metaDescription, path: "/contact" }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro {...contact.hero} />
      <ContactDetails
        details={contact.details}
        mapLabel={contact.mapLabel}
        mapEmbedUrl={contact.mapEmbedUrl}
      />
    </>
  );
}
