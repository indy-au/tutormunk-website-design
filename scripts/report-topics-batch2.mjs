// One-off measurement script for the batch-2 topic content pass. Not part
// of the build, just here to compute real facts (word counts, char counts,
// banned-word grep, sentence-level duplicate check) from the actual data
// rather than by eye. Extends the batch-1 script (report-topics-batch1.mjs)
// to cover all 11 content-complete topic pages (5 from batch 1, 6 from
// batch 2), per CLAUDE.md's "Topic pages" note.
import { createServer } from "vite";
import path from "node:path";

const BATCH1_SLUGS = [
  "primary-maths",
  "selective-school-prep",
  "oc-prep",
  "naplan",
  "writing-program",
];
const BATCH2_SLUGS = [
  "high-school-english",
  "high-school-maths",
  "high-school-science",
  "naplan-years-7-and-9",
  "icas",
  "hsc-sprint",
];
const ALL_SLUGS = [...BATCH1_SLUGS, ...BATCH2_SLUGS];

const BANNED_WORDS = [
  "unlock",
  "unleash",
  "journey",
  "tailored",
  "bespoke",
  "empower",
  "elevate",
  "seamless",
  "holistic",
  "foster",
  "nurture",
  "thrive",
  "transform",
  "transformative",
  "robust",
  "leverage",
  "passion",
  "passionate",
  "dive into",
  "delve",
  "navigate",
  "landscape",
  "game-changer",
  "cutting-edge",
  "world-class",
  "it's important to note",
  "it is worth noting",
  "in essence",
  "ultimately",
  "at the end of the day",
  "a testament to",
  "ensure",
  "utilise",
  "utilize",
  "crucial",
  "vital",
  "essential",
  "comprehensive",
  "dedicated",
  "personalised",
  "personalized",
];

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function splitSentences(text) {
  return text
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

const DELIVERY_LINE_RE = /^in your home or at our gregory hills centre\.?$/i;

async function main() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "error",
  });
  const mod = await vite.ssrLoadModule(path.resolve("src/content/topics.ts"));
  const topics = mod.topics;

  console.log("=== Titles and meta descriptions (batch 2) ===");
  for (const slug of BATCH2_SLUGS) {
    const t = topics[slug];
    console.log(slug);
    console.log(`  title (${t.title.length} chars): ${t.title}`);
    console.log(`  metaDescription (${t.metaDescription.length} chars): ${t.metaDescription}`);
  }

  console.log(
    "\n=== Unique body word counts, batch 2 (entitySentence + section paragraphs, excludes FAQs) ===",
  );
  const bodyText = {};
  for (const slug of ALL_SLUGS) {
    const t = topics[slug];
    const parts = [t.entitySentence, ...t.sections.flatMap((s) => s.paragraphs)];
    const text = parts.join(" ");
    bodyText[slug] = text;
    if (BATCH2_SLUGS.includes(slug)) {
      console.log(`${slug}: ${wordCount(text)} words`);
    }
  }

  console.log("\n=== FAQ counts and word counts per answer, batch 2 ===");
  for (const slug of BATCH2_SLUGS) {
    const t = topics[slug];
    console.log(`${slug}: ${t.faqs.length} FAQs`);
    t.faqs.forEach((faq, i) => {
      console.log(`  ${i + 1}. (${wordCount(faq.answer)} words) ${faq.question}`);
    });
  }

  console.log("\n=== Banned-word grep across all batch-2 body text + FAQs ===");
  let bannedTotal = 0;
  for (const slug of BATCH2_SLUGS) {
    const t = topics[slug];
    const fullText = [
      t.title,
      t.metaDescription,
      t.heading,
      t.intro,
      t.entitySentence,
      ...t.sections.flatMap((s) => [s.heading, ...s.paragraphs]),
      ...t.faqs.flatMap((f) => [f.question, f.answer]),
    ]
      .join(" ")
      .toLowerCase();
    for (const word of BANNED_WORDS) {
      const re = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      const matches = fullText.match(re);
      if (matches) {
        console.log(`  ${slug}: "${word}" found ${matches.length} time(s)`);
        bannedTotal += matches.length;
      }
    }
  }
  console.log(`Total banned-word hits: ${bannedTotal}`);

  console.log("\n=== Em/en dash and exclamation mark check, batch 2 ===");
  for (const slug of BATCH2_SLUGS) {
    const t = topics[slug];
    const fullText = [
      t.title,
      t.metaDescription,
      t.heading,
      t.intro,
      t.entitySentence,
      ...t.sections.flatMap((s) => [s.heading, ...s.paragraphs]),
      ...t.faqs.flatMap((f) => [f.question, f.answer]),
    ].join(" ");
    const dashes = (fullText.match(/—|–/g) || []).length;
    const bangs = (fullText.match(/!/g) || []).length;
    console.log(`${slug}: em/en dashes = ${dashes}, exclamation marks = ${bangs}`);
  }

  console.log("\n=== Sentence-level duplicate check across all 11 content-complete pages ===");
  // Include entitySentence + section paragraphs + FAQ questions/answers,
  // since all of that is real visible page content. Headings excluded
  // (short noun phrases repeat by design, e.g. "What parents can expect").
  const sentencesBySlug = {};
  for (const slug of ALL_SLUGS) {
    const t = topics[slug];
    const parts = [
      t.entitySentence,
      ...t.sections.flatMap((s) => s.paragraphs),
      ...t.faqs.flatMap((f) => [f.question, f.answer]),
    ];
    sentencesBySlug[slug] = parts.flatMap(splitSentences);
  }

  let duplicateCount = 0;
  const slugs = Object.keys(sentencesBySlug);
  for (let i = 0; i < slugs.length; i++) {
    for (let j = i + 1; j < slugs.length; j++) {
      const a = slugs[i];
      const b = slugs[j];
      const setA = new Map();
      for (const s of sentencesBySlug[a]) {
        const norm = s.toLowerCase();
        if (!setA.has(norm)) setA.set(norm, s);
      }
      for (const s of sentencesBySlug[b]) {
        const norm = s.toLowerCase();
        if (DELIVERY_LINE_RE.test(norm)) continue; // exempted fragment-as-sentence case
        if (setA.has(norm)) {
          console.log(`  DUPLICATE between ${a} and ${b}: "${s}"`);
          duplicateCount++;
        }
      }
    }
  }
  console.log(
    `Total exact-duplicate sentences found across all 11 pages (excluding the delivery line): ${duplicateCount}`,
  );

  console.log("\n=== related[] link counts, batch 2 ===");
  for (const slug of BATCH2_SLUGS) {
    const t = topics[slug];
    console.log(
      `${slug}: ${t.related.length} related links -> ${t.related.map((r) => r.to).join(", ")}`,
    );
  }

  await vite.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
