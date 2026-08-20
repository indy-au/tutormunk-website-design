// Measurement script for the batch-4 suburb + hub content pass. Not part of
// the build. Loads the real content modules via Vite SSR. See CLAUDE.md's
// "Suburb pages" note.
import { createServer } from "vite";
import path from "node:path";

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

function maskSuburb(sentence, suburbName) {
  // Replace the suburb name (and its slug-form words individually) with a
  // placeholder so a templated pattern with only the suburb swapped is
  // caught even though the exact-string check would miss it.
  let masked = sentence;
  const re = new RegExp(suburbName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
  masked = masked.replace(re, "<SUBURB>");
  return masked.toLowerCase();
}

async function main() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "error",
  });
  const mod = await vite.ssrLoadModule(path.resolve("src/content/locations.ts"));
  const locations = mod.locations;

  const mode = process.argv[2] || "all";

  if (mode === "all" || mode === "existing-dupes") {
    console.log(
      "=== EXISTING CONTENT: exact duplicate sentences across the 23 suburbs (heroIntro + bodySections) ===",
    );
    const sentencesBySlug = {};
    for (const loc of locations) {
      const parts = [loc.heroIntro, ...loc.bodySections.flatMap((s) => s.paragraphs)];
      sentencesBySlug[loc.slug] = parts.flatMap(splitSentences);
    }
    let exactDupes = 0;
    const slugs = Object.keys(sentencesBySlug);
    for (let i = 0; i < slugs.length; i++) {
      for (let j = i + 1; j < slugs.length; j++) {
        const a = slugs[i],
          b = slugs[j];
        const setA = new Set(sentencesBySlug[a].map((s) => s.toLowerCase()));
        for (const s of sentencesBySlug[b]) {
          if (setA.has(s.toLowerCase())) {
            console.log(`  EXACT DUPLICATE ${a} <-> ${b}: "${s}"`);
            exactDupes++;
          }
        }
      }
    }
    console.log(`Exact duplicates: ${exactDupes}`);

    console.log("\n=== EXISTING CONTENT: masked-suburb-name pattern duplicates ===");
    const maskedBySlug = {};
    for (const loc of locations) {
      const parts = [loc.heroIntro, ...loc.bodySections.flatMap((s) => s.paragraphs)];
      maskedBySlug[loc.slug] = parts.flatMap(splitSentences).map((s) => ({
        original: s,
        masked: maskSuburb(s, loc.suburbName),
      }));
    }
    let maskedDupes = 0;
    for (let i = 0; i < slugs.length; i++) {
      for (let j = i + 1; j < slugs.length; j++) {
        const a = slugs[i],
          b = slugs[j];
        const setA = new Map(maskedBySlug[a].map((x) => [x.masked, x.original]));
        for (const x of maskedBySlug[b]) {
          if (setA.has(x.masked)) {
            console.log(`  MASKED DUPLICATE ${a} <-> ${b}:`);
            console.log(`    ${a}: "${setA.get(x.masked)}"`);
            console.log(`    ${b}: "${x.original}"`);
            maskedDupes++;
          }
        }
      }
    }
    console.log(`Masked-pattern duplicates: ${maskedDupes}`);
  }

  if (mode === "all" || mode === "final") {
    console.log("\n=== FINAL: word counts (3rd bodySection only) ===");
    for (const loc of locations) {
      const third = loc.bodySections[2];
      if (third) {
        console.log(`${loc.slug}: ${wordCount(third.paragraphs.join(" "))} words`);
      } else {
        console.log(`${loc.slug}: NO THIRD SECTION`);
      }
    }

    console.log("\n=== FINAL: FAQ counts ===");
    for (const loc of locations) {
      console.log(`${loc.slug}: ${loc.faqs ? loc.faqs.length : 0} FAQs`);
    }

    console.log(
      "\n=== FINAL: banned-word grep (heroIntro + all bodySections + faqs + entitySentence) ===",
    );
    let bannedTotal = 0;
    for (const loc of locations) {
      const fullText = [
        loc.heroIntro,
        loc.entitySentence || "",
        ...loc.bodySections.flatMap((s) => [s.heading, ...s.paragraphs]),
        ...(loc.faqs || []).flatMap((f) => [f.question, f.answer]),
      ]
        .join(" ")
        .toLowerCase();
      for (const word of BANNED_WORDS) {
        const re = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi");
        const matches = fullText.match(re);
        if (matches) {
          console.log(`  ${loc.slug}: "${word}" found ${matches.length} time(s)`);
          bannedTotal += matches.length;
        }
      }
    }
    console.log(`Total banned-word hits: ${bannedTotal}`);

    console.log("\n=== FINAL: em/en dash and exclamation mark check ===");
    for (const loc of locations) {
      const fullText = [
        loc.heroIntro,
        loc.entitySentence || "",
        ...loc.bodySections.flatMap((s) => [s.heading, ...s.paragraphs]),
        ...(loc.faqs || []).flatMap((f) => [f.question, f.answer]),
      ].join(" ");
      const dashes = (fullText.match(/—|–/g) || []).length;
      const bangs = (fullText.match(/!/g) || []).length;
      if (dashes || bangs) console.log(`${loc.slug}: dashes=${dashes} bangs=${bangs}`);
    }
    console.log("(only pages with non-zero counts are printed above)");

    console.log(
      "\n=== FINAL: exact duplicate sentences across all 23 (heroIntro + entitySentence + all bodySections + faqs) ===",
    );
    const sentencesBySlug2 = {};
    for (const loc of locations) {
      const parts = [
        loc.heroIntro,
        loc.entitySentence || "",
        ...loc.bodySections.flatMap((s) => s.paragraphs),
        ...(loc.faqs || []).flatMap((f) => [f.question, f.answer]),
      ];
      sentencesBySlug2[loc.slug] = parts.flatMap(splitSentences);
    }
    let exact2 = 0;
    const slugs2 = Object.keys(sentencesBySlug2);
    for (let i = 0; i < slugs2.length; i++) {
      for (let j = i + 1; j < slugs2.length; j++) {
        const a = slugs2[i],
          b = slugs2[j];
        const setA = new Set(sentencesBySlug2[a].map((s) => s.toLowerCase()));
        for (const s of sentencesBySlug2[b]) {
          if (setA.has(s.toLowerCase())) {
            console.log(`  EXACT DUPLICATE ${a} <-> ${b}: "${s}"`);
            exact2++;
          }
        }
      }
    }
    console.log(`Total exact duplicates: ${exact2}`);

    console.log("\n=== FINAL: masked-suburb-name pattern duplicates (all content) ===");
    const maskedBySlug2 = {};
    for (const loc of locations) {
      const parts = [
        loc.heroIntro,
        loc.entitySentence || "",
        ...loc.bodySections.flatMap((s) => s.paragraphs),
        ...(loc.faqs || []).flatMap((f) => [f.question, f.answer]),
      ];
      maskedBySlug2[loc.slug] = parts.flatMap(splitSentences).map((s) => ({
        original: s,
        masked: maskSuburb(s, loc.suburbName),
      }));
    }
    let masked2 = 0;
    for (let i = 0; i < slugs2.length; i++) {
      for (let j = i + 1; j < slugs2.length; j++) {
        const a = slugs2[i],
          b = slugs2[j];
        const setA = new Map(maskedBySlug2[a].map((x) => [x.masked, x.original]));
        for (const x of maskedBySlug2[b]) {
          if (setA.has(x.masked)) {
            console.log(`  MASKED DUPLICATE ${a} <-> ${b}:`);
            console.log(`    ${a}: "${setA.get(x.masked)}"`);
            console.log(`    ${b}: "${x.original}"`);
            masked2++;
          }
        }
      }
    }
    console.log(`Total masked-pattern duplicates: ${masked2}`);

    console.log("\n=== FINAL: internal links used in 3rd bodySection ===");
    const linkSet = new Set();
    for (const loc of locations) {
      const third = loc.bodySections[2];
      if (third?.links) {
        for (const l of third.links) linkSet.add(l.to);
        if (third.links.length > 3)
          console.log(`  ${loc.slug}: MORE THAN 3 LINKS (${third.links.length})`);
      }
    }
    console.log("Unique link targets used:", [...linkSet].sort().join(", "));

    console.log("\n=== FINAL: titles/descriptions exceeding limits ===");
    for (const loc of locations) {
      if (loc.titleTag.length > 60)
        console.log(`  ${loc.slug}: title ${loc.titleTag.length} chars (over 60)`);
      if (loc.metaDescription.length > 155)
        console.log(
          `  ${loc.slug}: metaDescription ${loc.metaDescription.length} chars (over 155)`,
        );
    }
  }

  await vite.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
