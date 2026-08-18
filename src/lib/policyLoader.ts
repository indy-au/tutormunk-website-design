// ============================================================================
// INTERIM POLICY LOADER, same pattern as src/lib/blogLoader.ts and for the
// same reason: a stopgap for the current client-rendered Vite build, to be
// replaced at the SSG conversion. The markdown files in
// src/content/policies-md/ carry over unchanged.
//
// The published flag works exactly like blogLoader's draft flag, but
// inverted: an unpublished policy (tutor-engagement-agreement.md,
// data-breach-response.md, both internal HR documents signed by tutors, not
// public pages) is filtered out here, at the loader, the one place every
// route and every link goes through. It can never leak into a route or a
// link because nothing downstream ever sees it in the first place.
// ============================================================================

import { parseFrontmatter, parseMarkdownBody, type Block } from "./markdown";

export type PolicyGroup = "families" | "safety";

export type PolicyFrontmatter = {
  title: string;
  metaDescription: string;
  name: string;
  slug: string;
  summary: string;
  group: PolicyGroup;
  icon: string;
  published: boolean;
  order: number;
  // Deliberately NOT carrying version, effective or nextReview through from
  // the source frontmatter. Those are internal and must never be visible on
  // the hub or a policy page, leaving them out of this type is one less way
  // a future change could accidentally render one.
};

export type PolicyDoc = {
  frontmatter: PolicyFrontmatter;
  body: Block[];
};

function toFrontmatter(data: Record<string, string>, filePath: string): PolicyFrontmatter {
  const slug = data["slug"];
  if (!slug) {
    throw new Error(`Policy file at ${filePath} is missing a "slug" in its frontmatter.`);
  }
  const group = data["group"] === "safety" ? "safety" : "families";
  const order = Number(data["order"]);
  return {
    title: data["title"] ?? "",
    metaDescription: data["metaDescription"] ?? "",
    name: data["name"] ?? "",
    slug,
    summary: data["summary"] ?? "",
    group,
    icon: data["icon"] ?? "doc",
    published: data["published"] === "true",
    order: Number.isFinite(order) ? order : 0,
  };
}

const rawFiles = import.meta.glob("/src/content/policies-md/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const parsedPolicies: PolicyDoc[] = Object.entries(rawFiles).map(([filePath, raw]) => {
  const { data, body } = parseFrontmatter(raw);
  return {
    frontmatter: toFrontmatter(data, filePath),
    body: parseMarkdownBody(body),
  };
});

/** Every policy file, unpublished internal documents included. Not exported: nothing outside this module should ever see the unpublished pair, see allPolicies below for the one place that changes. */
const allPolicies: PolicyDoc[] = [...parsedPolicies].sort(
  (a, b) => a.frontmatter.order - b.frontmatter.order,
);

/** Unpublished internal documents never render, never appear here. */
export const publishedPolicies: PolicyDoc[] = allPolicies.filter((policy) => policy.frontmatter.published);

/** Looks up a policy by slug among PUBLISHED policies only. An unpublished or unknown slug both return undefined, the route turns that into a 404. */
export function getPolicyBySlug(slug: string): PolicyDoc | undefined {
  return publishedPolicies.find((policy) => policy.frontmatter.slug === slug);
}

/** Published policies for one hub column, in frontmatter order. */
export function getPoliciesByGroup(group: PolicyGroup): PolicyDoc[] {
  return publishedPolicies.filter((policy) => policy.frontmatter.group === group);
}
