import { brand } from "@/content/site";
import { SITE_URL } from "@/lib/seo";

// JSON-LD BlogPosting markup, rendered once per published blog post (see
// blog.$slug.tsx). Added as part of the 20 Aug 2026 blog remediation, see
// CLAUDE.md's "Blog" note.
//
// author and publisher are both the TutorMunk organisation, matching the
// owner-approved attribution wording ("Reviewed and updated by the
// TutorMunk team", rendered as the visible byline in BlogArticle.tsx) --
// individual posts are not attributed to a named person, and this schema
// deliberately does not invent one. No `logo` property: OrganizationSchema.tsx
// (this site's other Organization markup) does not declare one either, so
// there is no verified logo asset to point to here.
//
// `datePublished` is included only when the post has a `date` in
// frontmatter (every current post does; the field is optional in the type
// so a future post without one still renders valid schema). There is no
// `dateModified`: the content schema has exactly one date field, `date`,
// and nothing establishes it as an original-publication vs a
// last-modified date, so inventing a second date here would be a guess.
// See CLAUDE.md for the reasoning.
export function BlogPostingSchema({
  headline,
  description,
  path,
  image,
  datePublished,
}: {
  headline: string;
  description: string;
  path: string;
  image?: string | undefined;
  datePublished?: string | undefined;
}) {
  const url = `${SITE_URL}${path}`;
  const organization = {
    "@type": "Organization",
    name: brand.name,
    url: SITE_URL,
  };

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: organization,
    publisher: organization,
  };
  if (image) schema["image"] = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  if (datePublished) schema["datePublished"] = datePublished;

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
