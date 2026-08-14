// ============================================================================
// INTERIM BLOG LOADER. This whole file is a stopgap for the current
// client-rendered Vite build. It reads markdown files at build time via
// import.meta.glob and shapes them into the data the blog routes need.
//
// At the SSG conversion, replace ONLY this file (and markdown.ts's parsing
// helpers if the new build tool has its own markdown pipeline). The
// markdown files in src/content/blog/ carry over completely unchanged,
// frontmatter contract and all, that's the whole point of writing posts
// as markdown now instead of hand-built content objects.
// ============================================================================

import {
  parseFrontmatter,
  parseMarkdownBody,
  estimateReadingTime,
  categoryLabel,
  displayTitle,
  type Block,
} from "./markdown";
import { stageImages, type Stage } from "@/content/stageImages";

export type BlogStage = Stage;

export type BlogFrontmatter = {
  titleTag: string;
  /**
   * On-page heading, sentence case with a full stop per CLAUDE.md, e.g.
   * "A term by term timeline for the Selective test." Not in the
   * originally specified contract (which only has titleTag, meant for
   * <title>/og:title); added because reusing titleTag as the H1 renders
   * "A Term by Term Timeline... | TutorMunk" style casing on the page,
   * which breaks the sentence-case headline rule. Falls back to titleTag
   * with the brand suffix stripped if a post omits it, so this is purely
   * additive, no existing post breaks without it.
   */
  heading: string;
  metaDescription: string;
  slug: string;
  category: string;
  date: string;
  stage: BlogStage;
  /**
   * Optional per-post hero image path (e.g. "/images/blog/slug.jpg",
   * served from public/). When present it wins over the stage fallback,
   * so every post can carry its own topic-specific image while older
   * posts keep inheriting their stage photo until one is added.
   */
  image: string;
  sourceUrl: string;
  draft: boolean;
};

export type BlogPost = {
  frontmatter: BlogFrontmatter;
  body: Block[];
  readingTime: string;
  heroImage: string;
};

const STAGES = new Set<string>(Object.keys(stageImages));

function toFrontmatter(data: Record<string, string>, filePath: string): BlogFrontmatter {
  const stage = STAGES.has(data["stage"] ?? "") ? (data["stage"] as BlogStage) : "general";
  const slug = data["slug"];
  if (!slug) {
    throw new Error(`Blog post at ${filePath} is missing a "slug" in its frontmatter.`);
  }
  const titleTag = data["titleTag"] ?? "";
  return {
    titleTag,
    heading: data["heading"] || displayTitle(titleTag),
    metaDescription: data["metaDescription"] ?? "",
    slug,
    category: data["category"] ?? "",
    date: data["date"] ?? "",
    stage,
    image: data["image"] ?? "",
    sourceUrl: data["sourceUrl"] ?? "",
    draft: data["draft"] === "true",
  };
}

// Eager + ?raw: every post's text is bundled at build time as a plain
// string, no runtime fetch. Fine at this scale, revisit if the post count
// grows large enough to matter for bundle size before SSG lands.
const rawFiles = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const parsedPosts: BlogPost[] = Object.entries(rawFiles).map(([filePath, raw]) => {
  const { data, body } = parseFrontmatter(raw);
  const frontmatter = toFrontmatter(data, filePath);
  return {
    frontmatter,
    body: parseMarkdownBody(body),
    readingTime: estimateReadingTime(body),
    heroImage: frontmatter.image || stageImages[frontmatter.stage],
  };
});

/** Every post, drafts included, newest first. */
export const allBlogPosts: BlogPost[] = [...parsedPosts].sort((a, b) =>
  b.frontmatter.date.localeCompare(a.frontmatter.date),
);

/** Drafts never render, never appear here. */
export const publishedBlogPosts: BlogPost[] = allBlogPosts.filter((post) => !post.frontmatter.draft);

/** Looks up a post by slug among PUBLISHED posts only. Draft and unknown slugs both return undefined, the route turns that into a 404. */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return publishedBlogPosts.find((post) => post.frontmatter.slug === slug);
}

/** Categories present across published posts, in first-seen (newest-post-first) order. */
export function getBlogCategories(): { slug: string; label: string }[] {
  const seen = new Map<string, string>();
  for (const post of publishedBlogPosts) {
    const { category } = post.frontmatter;
    if (category && !seen.has(category)) {
      seen.set(category, categoryLabel(category));
    }
  }
  return Array.from(seen, ([slug, label]) => ({ slug, label }));
}

/** Up to `count` other published posts, for the "More advice" strip. */
export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return publishedBlogPosts.filter((post) => post.frontmatter.slug !== currentSlug).slice(0, count);
}
