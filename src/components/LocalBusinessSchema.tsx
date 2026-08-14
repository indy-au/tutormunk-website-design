import { centre } from "@/content/locations";

// JSON-LD LocalBusiness + Service markup, real data only. No aggregateRating:
// Google's structured data guidelines prohibit self-serving review markup
// sourced from third-party platforms (including Google's own reviews). The
// real review numbers stay visible on the page itself, just not in this
// schema. Rendered inline in the page body, Google reads JSON-LD anywhere
// in the document, this doesn't need to live in <head>.
export function LocalBusinessSchema({ areaServed }: { areaServed: string[] }) {
  const areas = areaServed.map((name) => ({ "@type": "City", name: `${name}, NSW` }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TutorMunk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "The HUB, 31 Lasso Road",
      addressLocality: "Gregory Hills",
      addressRegion: "NSW",
      postalCode: "2557",
      addressCountry: "AU",
    },
    telephone: centre.phoneDial,
    areaServed: areas,
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "In-home and centre-based tutoring for K-12 students",
        areaServed: areas,
      },
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
