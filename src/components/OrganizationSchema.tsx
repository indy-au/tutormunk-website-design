import { brand } from "@/content/site";

// JSON-LD Organization markup, rendered once, site-wide (see __root.tsx).
// Deliberately separate from LocalBusinessSchema (per-page, area-served
// tutoring markup): this one describes TutorMunk the legal entity, at the
// head office address used in the policies, not the Gregory Hills tutoring
// centre. Never merge the two addresses, see the comment on brand in
// src/content/site.ts.
//
// The structured address fields below are the head office address broken
// into PostalAddress parts by hand, the same convention LocalBusinessSchema
// already uses for the centre address. Keep in sync with
// brand.headOfficeAddress if it ever changes.
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: "https://tutormunk.com.au",
    email: brand.email,
    telephone: `+61${brand.phoneDial}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 27, International Towers, 100 Barangaroo Avenue",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      postalCode: "2000",
      addressCountry: "AU",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
