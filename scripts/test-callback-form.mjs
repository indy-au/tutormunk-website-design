// Regression test for the three Request a Call field validators in
// src/components/CallbackModal.tsx: the name field (validateName /
// NAME_ALLOWED), the phone field (normaliseAuPhone / AU_PHONE), and the
// email field (validateEmail). Renamed from test-callback-phone.mjs on
// 18 Aug 2026 when name and email coverage was added.
//
// There is no test runner configured in this repo (no vitest/jest, no
// "test" script in package.json), so this is a standalone, zero-dependency
// script rather than a suite wired into one. Run it directly with:
//
//   node scripts/test-callback-form.mjs
//
// It exits with a non-zero status if any case fails, so it can still be
// wired into CI or a future test runner later without rewriting it.
//
// IMPORTANT: normaliseAuPhone, AU_PHONE, validateName, NAME_ALLOWED and
// validateEmail are not exported from CallbackModal.tsx (they are
// private), so the implementations below are a deliberate duplicate, not
// an import. If you change any of them in CallbackModal.tsx, update this
// copy to match, and rerun this script before committing.
//
// Phone: three bugs (the "00" international prefix and non-numeric input
// both passing normaliseAuPhone, and AU_PHONE accepting geographic
// subscriber numbers starting with 0 or 1) were fixed on 18 Aug 2026, see
// CLAUDE.md's Request a Call section. Sweep A and sweep B below are
// exhaustive, not hand-picked, specifically because hand-picked cases let
// the third phone bug survive three rounds of review.
//
// Name and email: an adversarial sweep on 18 Aug 2026 found the name field
// accepting 10 of 10 attack strings (including a newline-based mail-header
// injection payload) and the email field accepting 3 hyphen-malformed
// domains. Both were fixed the same day.

const ALLOWED_PHONE_CHARS = /^[0-9+()\-.\s]+$/;

function normaliseAuPhone(raw) {
  const value = raw.trim();
  if (!ALLOWED_PHONE_CHARS.test(value)) return "";
  if (value.indexOf("+") > 0) return "";
  let d = value.replace(/[^\d+]/g, "");
  if (d.startsWith("+61")) d = "0" + d.slice(3);
  else if (d.startsWith("0061")) d = "0" + d.slice(4);
  else if (d.startsWith("61") && d.length === 11) d = "0" + d.slice(2);
  else return d;
  if (d.startsWith("00")) d = d.slice(1);
  return d;
}
// Mobiles are 04 plus 8 digits. Geographic numbers are 02/03/07/08 plus an
// 8-digit subscriber number that can never begin with 0 or 1. See CLAUDE.md
// and the comment above AU_PHONE in CallbackModal.tsx for why 2-9 rather
// than today's exact per-state ranges.
const AU_PHONE = /^(?:04\d{8}|0[2378][2-9]\d{7})$/;

// Letters in any script, plus the punctuation that appears in real names.
// Must START with a letter, so "!!!!a" and "$$$ FREE MONEY a" cannot pass.
// Deliberately excludes digits, @, <, >, /, newlines and every other symbol.
const NAME_ALLOWED = /^[\p{L}\p{M}][\p{L}\p{M}'’.\- ]*$/u;

function validateName(raw) {
  const value = raw.trim();
  if (value.length < 2 || value.length > 80) return "Please enter your full name.";
  if (!NAME_ALLOWED.test(value)) return "Please enter your full name.";
  return null;
}

function validateEmail(raw) {
  const value = raw.trim();
  if (!value) return "Please enter your email address.";

  const invalid = "Please enter a valid email address.";
  const atIndex = value.indexOf("@");
  if (atIndex <= 0 || atIndex !== value.lastIndexOf("@")) return invalid;

  const local = value.slice(0, atIndex);
  const domain = value.slice(atIndex + 1);
  if (!domain.includes(".")) return invalid;
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) return invalid;
  if (domain.startsWith(".") || domain.endsWith(".") || domain.includes("..")) return invalid;
  if (domain.split(".").some((l) => l.length === 0 || l.startsWith("-") || l.endsWith("-"))) {
    return invalid;
  }

  const EMAIL_SHAPE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!EMAIL_SHAPE.test(value)) return invalid;

  return null;
}

let failures = 0;

// ============================== PHONE ==============================

const phoneMustPass = [
  "0412345678",
  "0412 345 678",
  "04 1234 5678",
  "+61412345678",
  "+61 412 345 678",
  "+61 (0) 412 345 678",
  "0061412345678",
  "61412345678",
  "(02) 9876 5432",
  "02 9876 5432",
  "+61 2 9876 5432",
  "0398765432",
  "0798765432",
  "0898765432",
  "0412-345-678",
  "0412.345.678",
  "0287654321",
  "0745678901",
  "0865432109",
  "0355512345",
];

const phoneMustFail = [
  "041234567",
  "04123456789",
  "0512345678",
  "0112345678",
  "0612345678",
  "0912345678",
  "1300123456",
  "1800123456",
  "131234",
  "+919876543210",
  "+12025550123",
  "+447911123456",
  "",
  "abcdefghij",
  "0044 1234 567",
  "00441234567",
  "00712345678",
  "00331234567",
  "00861234567",
  "00811234567",
  "00491234567",
  "abc0412345678",
  "04AA12345678",
  "call me on 0412345678 thanks",
  "hi@0412345678.com",
  "my india no 0412345678",
  "0412+345678",
  "0011 61 412 345 678",
  "0201234567",
  "0211234567",
  "0301234567",
  "0311234567",
  "0701234567",
  "0711234567",
  "0801234567",
  "0811234567",
];

console.log(`=== PHONE, must pass (${phoneMustPass.length}) ===`);
for (const raw of phoneMustPass) {
  const normalised = normaliseAuPhone(raw);
  const ok = AU_PHONE.test(normalised);
  if (!ok) failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${JSON.stringify(raw)} -> ${JSON.stringify(normalised)}`);
}

console.log(`\n=== PHONE, must be rejected (${phoneMustFail.length}) ===`);
for (const raw of phoneMustFail) {
  const normalised = normaliseAuPhone(raw);
  const rejected = !AU_PHONE.test(normalised);
  if (!rejected) failures++;
  console.log(`${rejected ? "PASS" : "FAIL"}  ${JSON.stringify(raw)} -> ${JSON.stringify(normalised)}`);
}

// The "00" international prefix bug: before the 18 Aug 2026 fix, "00" plus
// any 3 digits plus 6 more digits normalised into a 10-digit string that
// could pass AU_PHONE for half of all 3-digit combinations. Every one of
// these must now be rejected.
let sweepAccepted = 0;
for (let i = 0; i < 1000; i++) {
  const padded = String(i).padStart(3, "0");
  const raw = "00" + padded + "123456";
  const normalised = normaliseAuPhone(raw);
  if (AU_PHONE.test(normalised)) sweepAccepted++;
}
if (sweepAccepted !== 0) {
  failures++;
  console.error(`FAIL: "00" + 3 digits + "123456" sweep accepted ${sweepAccepted} of 1000, must be 0`);
}

// SWEEP A, prefix sweep. Every 0ab prefix combination is tested
// exhaustively, not hand-picked. The accepted set must be exactly the 42
// structurally valid prefixes: 04 (any second digit, mobile) plus
// 02/03/07/08 with a 2-9 second digit.
const expectedPrefixesA = [
  "022", "023", "024", "025", "026", "027", "028", "029",
  "032", "033", "034", "035", "036", "037", "038", "039",
  "040", "041", "042", "043", "044", "045", "046", "047", "048", "049",
  "072", "073", "074", "075", "076", "077", "078", "079",
  "082", "083", "084", "085", "086", "087", "088", "089",
];
const acceptedPrefixesA = [];
for (let a = 0; a <= 9; a++) {
  for (let b = 0; b <= 9; b++) {
    const raw = `0${a}${b}1234567`;
    const normalised = normaliseAuPhone(raw);
    if (AU_PHONE.test(normalised)) acceptedPrefixesA.push(`0${a}${b}`);
  }
}
const expectedSetA = new Set(expectedPrefixesA);
const acceptedSetA = new Set(acceptedPrefixesA);
const missingFromA = expectedPrefixesA.filter((p) => !acceptedSetA.has(p));
const extraInA = acceptedPrefixesA.filter((p) => !expectedSetA.has(p));
if (missingFromA.length > 0 || extraInA.length > 0) {
  failures++;
  console.error(
    `FAIL: sweep A prefix set does not match. Missing (expected but not accepted): ${JSON.stringify(missingFromA)}. Extra (accepted but not expected): ${JSON.stringify(extraInA)}.`,
  );
} else {
  console.log(`Sweep A: accepted exactly the expected 42 prefixes.`);
}

// SWEEP B, international sweep. Exhaustively tries every country code
// 1-999 in all three dial styles a parent might type, and asserts the only
// codes that let any style through are 61 (the real Australian country
// code) and 610, which is "+61 (0)4..." typed as digits with no separators.
const expectedCodesB = new Set(["61", "610"]);
const acceptedCodesB = new Set();
for (let c = 1; c <= 999; c++) {
  const code = String(c);
  const styles = [`+${code}412345678`, `00${code}412345678`, `${code}412345678`];
  for (const raw of styles) {
    const normalised = normaliseAuPhone(raw);
    if (AU_PHONE.test(normalised)) {
      acceptedCodesB.add(code);
      break;
    }
  }
}
const missingFromB = [...expectedCodesB].filter((c) => !acceptedCodesB.has(c));
const extraInB = [...acceptedCodesB].filter((c) => !expectedCodesB.has(c));
if (missingFromB.length > 0 || extraInB.length > 0) {
  failures++;
  console.error(
    `FAIL: sweep B accepted country code set does not match. Missing (expected but not accepted): ${JSON.stringify(missingFromB)}. Extra (accepted but not expected): ${JSON.stringify(extraInB)}.`,
  );
} else {
  console.log(`Sweep B: the only country codes accepted in any style were 61 and 610, as expected.`);
}

// ============================== NAME ==============================

const nameMustPass = [
  "Jane Nguyen",
  "Prince",
  "Anne-Marie O'Brien",
  "José Muñoz",
  "J. Smith",
  "O'Brien",
  "Nguyen Thi Minh Khai",
  "Siobhán Ní Bhriain",
  "李明",
  "Renée D'Souza",
];

const nameMustFail = [
  "a1",
  "0412345678a",
  "<script>alert(1)</script>",
  "Robert'); DROP TABLE--",
  "jane@example.com",
  "!!!!a!!!!",
  "https://spam.example.com",
  "12345678a",
  "Jane\nBcc: spam@evil.com",
  "$$$ FREE MONEY a",
  "J",
  "",
  "   ",
  "123456",
];

console.log(`\n=== NAME, must pass (${nameMustPass.length}) ===`);
for (const raw of nameMustPass) {
  const error = validateName(raw);
  const ok = error === null;
  if (!ok) failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${JSON.stringify(raw)}${ok ? "" : ` -> ${JSON.stringify(error)}`}`);
}

console.log(`\n=== NAME, must be rejected (${nameMustFail.length}) ===`);
for (const raw of nameMustFail) {
  const error = validateName(raw);
  const rejected = error !== null;
  if (!rejected) failures++;
  console.log(`${rejected ? "PASS" : "FAIL"}  ${JSON.stringify(raw)}${rejected ? "" : " -> accepted"}`);
}

// ============================== EMAIL ==============================

const emailMustPass = [
  "jane@example.com",
  "jane+tutor@example.com.au",
  "j@mail.example.co.uk",
  "a@b.co",
  "a@1.co",
  "first.last@sub.domain.org",
  "x@y-z.com",
];

const emailMustFail = [
  "a@-.co",
  "a@b-.com",
  "a@-b-.com",
  "a@.com",
  "a@b..com",
  ".a@b.com",
  "a@b.c",
  "a b@c.com",
  "a@@b.com",
  "a@b",
];

console.log(`\n=== EMAIL, must pass (${emailMustPass.length}) ===`);
for (const raw of emailMustPass) {
  const error = validateEmail(raw);
  const ok = error === null;
  if (!ok) failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${JSON.stringify(raw)}${ok ? "" : ` -> ${JSON.stringify(error)}`}`);
}

console.log(`\n=== EMAIL, must be rejected (${emailMustFail.length}) ===`);
for (const raw of emailMustFail) {
  const error = validateEmail(raw);
  const rejected = error !== null;
  if (!rejected) failures++;
  console.log(`${rejected ? "PASS" : "FAIL"}  ${JSON.stringify(raw)}${rejected ? "" : " -> accepted"}`);
}

// ============================== SUMMARY ==============================

const totalNamed =
  phoneMustPass.length +
  phoneMustFail.length +
  nameMustPass.length +
  nameMustFail.length +
  emailMustPass.length +
  emailMustFail.length;

if (failures === 0) {
  console.log(
    `OK: all ${totalNamed} named cases correct (phone, name, email), "00"-prefix sweep accepted 0 / 1000, sweep A and sweep B both matched exactly.`,
  );
  process.exit(0);
} else {
  console.error(`${failures} failure(s) out of ${totalNamed} named cases plus the sweeps.`);
  process.exit(1);
}
