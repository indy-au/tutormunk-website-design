// One-off measurement script for the batch-3 topic content pass (senior
// English, Maths and Science pages). Not part of the build. Extends the
// batch-2 script to cover every content-complete topic page, and adds the
// extended banned-word list batch 3 introduced. Pass a comma-separated list
// of slugs via --new=slug1,slug2 to control which pages get the per-page
// title/description/word-count/FAQ printout; the duplicate check and the
// untouched-page confirmation always run across everything in `topics`.
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
const HALF_A_SLUGS = [
  "english-studies",
  "english-standard",
  "english-advanced",
  "english-extension-1",
  "english-extension-2",
  "english-eal-d",
  "biology",
  "chemistry",
  "physics",
  "earth-and-environmental",
  "investigating-science",
];
const HALF_B_SLUGS = [
  "maths-standard",
  "maths-standard-1",
  "maths-standard-2",
  "maths-extension-1",
  "maths-extension-2",
];

const newArg = process.argv.find((a) => a.startsWith("--new="));
const NEW_SLUGS = newArg
  ? newArg.slice("--new=".length).split(",")
  : [...HALF_A_SLUGS, ...HALF_B_SLUGS];

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
  // Added batch 3, 19 Aug 2026:
  "mastery",
  "master",
  "excel",
  "ace",
  "top marks",
  "skyrocket",
  "boost",
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

  // ALL_SLUGS = every content-complete page in the live object, discovered
  // dynamically (has .sections), so this script stays correct as batches land.
  const ALL_SLUGS = Object.keys(topics).filter((slug) => topics[slug].sections);

  console.log(`=== Content-complete pages found: ${ALL_SLUGS.length} ===`);
  console.log(ALL_SLUGS.join(", "));

  console.log(`\n=== Titles and meta descriptions (${NEW_SLUGS.length} pages) ===`);
  for (const slug of NEW_SLUGS) {
    const t = topics[slug];
    if (!t) {
      console.log(`${slug}: MISSING`);
      continue;
    }
    console.log(slug);
    console.log(`  title (${t.title.length} chars): ${t.title}`);
    console.log(`  metaDescription (${t.metaDescription.length} chars): ${t.metaDescription}`);
  }

  console.log(
    `\n=== Unique body word counts (entitySentence + section paragraphs, excludes FAQs) ===`,
  );
  for (const slug of NEW_SLUGS) {
    const t = topics[slug];
    if (!t) continue;
    const parts = [t.entitySentence, ...t.sections.flatMap((s) => s.paragraphs)];
    console.log(`${slug}: ${wordCount(parts.join(" "))} words`);
  }

  console.log("\n=== FAQ counts and word counts per answer ===");
  for (const slug of NEW_SLUGS) {
    const t = topics[slug];
    if (!t) continue;
    console.log(`${slug}: ${t.faqs.length} FAQs`);
    t.faqs.forEach((faq, i) => {
      console.log(`  ${i + 1}. (${wordCount(faq.answer)} words) ${faq.question}`);
    });
  }

  console.log("\n=== Banned-word grep (extended batch-3 list) ===");
  let bannedTotal = 0;
  for (const slug of NEW_SLUGS) {
    const t = topics[slug];
    if (!t) continue;
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
      const re = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
      const matches = fullText.match(re);
      if (matches) {
        console.log(`  ${slug}: "${word}" found ${matches.length} time(s)`);
        bannedTotal += matches.length;
      }
    }
  }
  console.log(`Total banned-word hits: ${bannedTotal}`);

  console.log("\n=== Em/en dash and exclamation mark check ===");
  for (const slug of NEW_SLUGS) {
    const t = topics[slug];
    if (!t) continue;
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

  console.log(
    `\n=== Sentence-level duplicate check across all ${ALL_SLUGS.length} content-complete pages ===`,
  );
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
        if (DELIVERY_LINE_RE.test(norm)) continue;
        if (setA.has(norm)) {
          console.log(`  DUPLICATE between ${a} and ${b}: "${s}"`);
          duplicateCount++;
        }
      }
    }
  }
  console.log(
    `Total exact-duplicate sentences found across all ${ALL_SLUGS.length} pages (excluding the delivery line): ${duplicateCount}`,
  );

  console.log("\n=== related[] link counts ===");
  for (const slug of NEW_SLUGS) {
    const t = topics[slug];
    if (!t) continue;
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
