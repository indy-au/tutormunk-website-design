// One-off measurement script for the batch-1 topic content pass. Not part
// of the build, just here to compute real facts (word counts, char counts,
// sentence-level duplicate check) from the actual data rather than by eye.
import { createServer } from "vite";
import path from "node:path";

const root = process.cwd();

const server = await createServer({
  root,
  configFile: path.join(root, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "warn",
});

const SLUGS = ["primary-maths", "selective-school-prep", "oc-prep", "naplan", "writing-program"];

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Splits on sentence-ending punctuation followed by a space/end, keeping it
// simple and conservative (good enough to catch verbatim-shared sentences,
// which is what we're checking for).
function splitSentences(text) {
  return text
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

try {
  const { topics } = await server.ssrLoadModule("/src/content/topics.ts");

  console.log("=== Titles and meta descriptions ===");
  for (const slug of SLUGS) {
    const t = topics[slug];
    console.log(`${slug}`);
    console.log(`  title (${t.title.length} chars): ${t.title}`);
    console.log(`  metaDescription (${t.metaDescription.length} chars): ${t.metaDescription}`);
  }

  console.log("\n=== Unique body word counts (entitySentence + section paragraphs, excludes FAQs) ===");
  const allSentencesBySlug = {};
  for (const slug of SLUGS) {
    const t = topics[slug];
    const bodyParts = [t.entitySentence, ...t.sections.flatMap((s) => s.paragraphs)];
    const bodyText = bodyParts.join(" ");
    const wc = wordCount(bodyText);
    console.log(`${slug}: ${wc} words`);

    // For the duplicate check: entitySentence + sections + FAQ Q&A, the
    // whole page's written content, not just the word-count scope.
    const allText = [
      t.entitySentence,
      ...t.sections.flatMap((s) => [s.heading, ...s.paragraphs]),
      ...t.faqs.flatMap((f) => [f.question, f.answer]),
    ].join(" ");
    allSentencesBySlug[slug] = splitSentences(allText);
  }

  console.log("\n=== FAQ counts and word counts per answer ===");
  for (const slug of SLUGS) {
    const t = topics[slug];
    console.log(`${slug}: ${t.faqs.length} FAQs`);
    t.faqs.forEach((f, i) => {
      console.log(`  ${i + 1}. (${wordCount(f.answer)} words) ${f.question}`);
    });
  }

  console.log("\n=== Sentence-level duplicate check across the five pages ===");
  const DELIVERY_LINE = "in your home or at our Gregory Hills centre";
  let dupesFound = 0;
  for (let i = 0; i < SLUGS.length; i++) {
    for (let j = i + 1; j < SLUGS.length; j++) {
      const a = SLUGS[i];
      const b = SLUGS[j];
      const setA = new Set(allSentencesBySlug[a]);
      for (const sentence of allSentencesBySlug[b]) {
        if (setA.has(sentence)) {
          const normalised = sentence.toLowerCase();
          const isJustDeliveryLine =
            normalised === DELIVERY_LINE.toLowerCase() ||
            normalised === (DELIVERY_LINE.toLowerCase() + ".");
          if (isJustDeliveryLine) continue;
          dupesFound++;
          console.log(`DUPLICATE between ${a} and ${b}: "${sentence}"`);
        }
      }
    }
  }
  console.log(`Total exact-duplicate sentences found (excluding the delivery line): ${dupesFound}`);

  console.log("\n=== related[] link counts ===");
  for (const slug of SLUGS) {
    console.log(`${slug}: ${topics[slug].related.length} related links -> ${topics[slug].related.map((r) => r.to).join(", ")}`);
  }
} finally {
  await server.close();
}
