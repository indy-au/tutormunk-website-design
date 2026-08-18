// Minimal, dependency-free frontmatter and markdown parsing for the interim
// blog loader (see src/lib/blogLoader.ts). Intentionally small: it only
// supports the handful of block types TutorMunk's articles actually use.
// At the SSG conversion this file and the loader get replaced together;
// the markdown files themselves carry over unchanged.

export type Block =
  | { type: "h2" | "h3" | "p" | "quote"; text: string }
  | { type: "ul"; items: string[] }
  // GitHub style table: a header row, a "|---|---|" separator row (never
  // rendered itself, only used to recognise the table), then zero or more
  // data rows. Cells can be empty (an unfilled register column, say), kept
  // as "" rather than dropped, so every row still has one cell per header.
  | { type: "table"; header: string[]; rows: string[][] };

/**
 * Splits a raw markdown file into its frontmatter fields and body text.
 * Frontmatter is a flat `key: value` block between two `---` lines, no
 * nested structures, no arrays, exactly what the blog frontmatter contract
 * needs.
 */
export function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const trimmed = raw.replace(/^﻿/, "").trimStart();
  if (!trimmed.startsWith("---")) {
    return { data: {}, body: raw.trim() };
  }

  const lines = trimmed.split("\n");
  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i]?.trim() === "---") {
      end = i;
      break;
    }
  }
  if (end === -1) {
    return { data: {}, body: raw.trim() };
  }

  const data: Record<string, string> = {};
  for (const line of lines.slice(1, end)) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    let value = line.slice(colon + 1).trim();
    // Strip a single layer of matching quotes, e.g. title: "Foo: Bar"
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) data[key] = value;
  }

  const body = lines.slice(end + 1).join("\n").trim();
  return { data, body };
}

/** A line that opens and closes with "|", the shape every table row takes
 * in this site's markdown (outer pipes always present, GFM's optional-outer-
 * pipe form is not used here so it is not supported). */
function isTableRowLine(trimmed: string): boolean {
  return trimmed.length > 1 && trimmed.startsWith("|") && trimmed.endsWith("|");
}

/** The "|---|---|" (optionally ":---", "---:", ":---:") row directly under
 * a table header. Never rendered itself, only used to recognise a table. */
function isTableSeparatorLine(trimmed: string): boolean {
  if (!isTableRowLine(trimmed)) return false;
  const cells = splitTableRow(trimmed);
  return cells.length > 0 && cells.every((cell) => /^:?-+:?$/.test(cell.trim()));
}

function splitTableRow(trimmed: string): string[] {
  const inner = trimmed.slice(1, -1);
  return inner.split("|").map((cell) => cell.trim());
}

/**
 * Converts markdown body text into a flat list of typed blocks. Supports
 * exactly what the site's article templates render: ## / ### headings,
 * blank-line-separated paragraphs, "- " bullet lists, "> " blockquotes and
 * GitHub style tables. Inline `**bold**` and `[text](url)` survive as raw
 * text inside a block, see renderInlineMarkdown() in BlogArticle.tsx for
 * where those render.
 */
export function parseMarkdownBody(markdown: string): Block[] {
  const lines = markdown.split("\n");
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "p", text: paragraph.join(" ").trim() });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (listItems.length) {
      blocks.push({ type: "ul", items: listItems });
      listItems = [];
    }
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i]!.trimEnd();
    const trimmed = line.trim();

    if (trimmed === "") {
      flushParagraph();
      flushList();
      i++;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h3", text: trimmed.slice(4).trim() });
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", text: trimmed.slice(3).trim() });
      i++;
      continue;
    }
    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "quote", text: trimmed.slice(2).trim() });
      i++;
      continue;
    }
    if (trimmed.startsWith("- ")) {
      flushParagraph();
      listItems.push(trimmed.slice(2).trim());
      i++;
      continue;
    }
    // A table needs a header row immediately followed by a separator row,
    // that pair is what distinguishes a real table from a paragraph that
    // merely contains a "|" character.
    if (isTableRowLine(trimmed) && i + 1 < lines.length && isTableSeparatorLine(lines[i + 1]!.trim())) {
      flushParagraph();
      flushList();
      const header = splitTableRow(trimmed);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && isTableRowLine(lines[i]!.trim())) {
        rows.push(splitTableRow(lines[i]!.trim()));
        i++;
      }
      blocks.push({ type: "table", header, rows });
      continue;
    }
    // Plain text line: continues the current paragraph.
    flushList();
    paragraph.push(trimmed);
    i++;
  }
  flushParagraph();
  flushList();

  return blocks;
}

const WORDS_PER_MINUTE = 200;

/** Estimated reading time from the raw body word count, minimum 1 minute. */
export function estimateReadingTime(markdown: string): string {
  const words = markdown
    .replace(/[#>*_[\]()-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

/** "2026-03-12" -> "12 March 2026", matching the site's existing date style. */
export function formatBlogDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return isoDate;
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

// Known acronyms and multi-word categories that plain title-casing would
// get wrong (NAPLAN, not Naplan). Anything not listed falls back to
// title-casing each hyphen-separated word.
const CATEGORY_LABEL_OVERRIDES: Record<string, string> = {
  "selective-prep": "Selective Prep",
  "oc-prep": "OC Prep",
  naplan: "NAPLAN",
  hsc: "HSC",
  icas: "ICAS",
  "for-parents": "For Parents",
  primary: "Primary",
};

/** "selective-prep" -> "Selective Prep" (or a known-acronym override). */
export function categoryLabel(slug: string): string {
  const override = CATEGORY_LABEL_OVERRIDES[slug];
  if (override) return override;
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word[0]!.toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * The frontmatter contract has one title field, titleTag, meant for
 * <title> and og:title ("... | TutorMunk"). On-page headings and card
 * titles drop that brand suffix so it doesn't repeat itself all over the
 * page, this is the one place that split happens.
 */
export function displayTitle(titleTag: string): string {
  return titleTag.split(" | TutorMunk")[0] ?? titleTag;
}
