# CLAUDE.md - TutorMunk Website Project Briefing

Read this fully before making any change. These rules come from the business owner (Indy Singh) and are non-negotiable. When in doubt, ask Indy before acting. He is not a developer: explain things in plain language, give small steps, and never assume technical knowledge.

## What this project is

TutorMunk is a premium IN-PERSON tutoring company in South-West Sydney (sister company to Sprouts Academy). Strictly OFFLINE: no online tutoring anywhere on the site, ever. Four delivery modes: 1-to-1 at the family home, group at the family home, 1-to-1 at our centre, group at our centre. The site targets parents of K-12 students. This codebase started as a Lovable design export (Vite + React + TanStack Router + Tailwind v4). It is the DESIGN BASE for the real site.

## Hard business rules (never violate)

1. NO PRICING anywhere on the website. No dollar amounts, no rate tables, no "from $X per hour". Pricing is only discussed by phone. Use "Talk to us" bands with the Request a Call button instead.
2. Phone number: display "1300 00MUNK", dial target 1300 006 865 (tel:1300006865). The floating CALL US NOW button appears on every page.
3. Munk branding is deliberate: "Become a Munk" (tutor recruitment), "Our Munks" (tutor showcase), "Choose your Munk" (step 3 of the How It Works journey). Never rename these back to generic terms.
4. No login/portal features. Forms are visual shells until the forms backend phase.
5. Never delete files or content without explicit approval. Archive instead.

## Content and language rules (apply to every word of copy)

- Australian English spelling: enrol, enrolment, centre, colour, personalised, organise. Write "program", not "programme".
- Australian school terms used naturally: Year 5, K-6, Stage 4, HSC, NAPLAN, OC, Selective, NESA, Band 6, ATAR.
- NEVER use em dashes or en dashes anywhere. Use commas, full stops or brackets.
- Voice: experienced Australian education copywriter talking to a parent. Plain, direct, factual, warm but never gushing. Short sentences, active voice, max two sentences per paragraph in cards.
- Be concrete: WWCC-verified tutors, NESA syllabus, 60-minute sessions, South-West Sydney suburbs, term reports to parents.
- Banned: unlock, elevate, empower, seamless, supercharge, game-changing, world-class, "we've got you covered", "look no further", "we believe", "we're passionate", rhetorical questions as headings, exclamation marks, starting sentences with "Whether you're".
- Headlines are sentence case and end with a full stop.
- Menus and page titles use short HSC course names (English Std, Maths Std 1, Maths Ext 2); page body content uses full official NESA names for SEO (Mathematics Standard 1 etc.).

## Design direction

- Owner is partially colour-blind. Palette must be HIGH CONTRAST (WCAG AA minimum) and print-ready (imagine business cards and T-shirts).
- Palette status (updated 14 Aug 2026): the ORIGINAL palette from the Lovable export is retained for now. Navy variations were trialled and REJECTED by the owner. The final brand palette is an OPEN decision, likely to be settled alongside logo/brand design. Do not propose or apply palette changes unless the owner explicitly asks; when he does, change theme tokens only and show variations one at a time for his approval.
- All colours and fonts flow through the theme tokens in src/styles.css ONLY. Never hard-code colours in components.
- Design references the owner likes: tutorful.co.uk (light, airy, big friendly type, pill buttons, stats band, guarantee card) and tutorgator.com.au (mega-menu dropdowns with icons and one-line grey descriptions, stage-first nav, floating call button).
- The four hub pages (Primary School, High School, Senior School, Exam Prep) must share ONE identical structure: rating row, uppercase kicker, sentence-case headline with full stop, two supporting sentences, pill Request a Call button, large photo right, then stats/ticks, card grid, why-parents-choose section, guarantee card, Talk to us band, navy CTA band. Different photo per page, same skeleton.

## Outstanding design spec (from prompt v6, not yet implemented)

1. Top-level nav items (Primary School, High School, Senior School, Exam Prep) must NAVIGATE on click; dropdown panels open on hover only. Mobile: chevron expands accordion, name navigates.
2. Remove every trace of pricing (see hard rule 1), including the delivery-mode cards on How It Works.
3. (Palette change removed: original palette retained, see Design direction above.)
4. Dropdown icons (lucide): English open-book, Maths calculator, Science flask, Selective trophy, OC target, NAPLAN clipboard-check, Writing pen, ICAS medal, HSC Sprint timer, Primary overview graduation-cap, High School school, Senior award. Senior panel: 3 grouped columns (ENGLISH, MATHS, SCIENCE headings), compact rows.
5. How It Works: 5-step vertical journey with numbered navy circle badges, connector line, alternating cards on desktop; step icons clipboard-list, users, user-check, calendar-check, sparkles. Then delivery modes as a 2x2 icon card grid (house, users, building, school). No pricing.
6. Exam Prep hub: 6 equal designed cards with icon tile, year-range chip, two-line description, navy Learn more link; "Intensive" chip on HSC Sprint.

## Business-critical priorities (owner statement, 14 Aug 2026)

1. SEO is existential: "Google builds our business. We can't lose it." Every change must be SEO-friendly: unique titles and meta descriptions per page, semantic HTML, clean URLs, unique content per page. The SSG conversion (below) is a NON-NEGOTIABLE roadmap milestone because a client-side SPA is invisible to Google's fast path and AI crawlers. When relevant, prefer the SEO-stronger option without being asked.
2. Forms are essential launch features (currently visual shells only): the small lead form (name, phone, email), the parent enrolment form (50-field structure exists from the owner's previous business), a PAYMENT LINK capability (to be designed later; options and costs go to the owner first), and the Become a Munk tutor application form (27-field with file upload). Do not wire form backends without the owner approving the chosen service and its cost.

## Architecture plan (the bigger picture)

- This SPA must eventually be converted to a statically generated site (SSG) because client-side-only React is invisible to Google's fast path and to AI crawlers. Do not fight the current stack for now; keep content in src/content/*.ts data files with title and metaDescription fields so the conversion stays painless.
- Target sitemap is ~76 pages: see the LATEST TutorMunk_Sitemap_v1.x.txt in /Users/dhody/Desktop/Claude-Cowork/Projects/TutorMunk/Website/ (v1.3 at time of writing). The 17 HSC course pages and policies generate from existing templates.
- LOCATIONS (real business data, 14 Aug 2026): the ONLY centre is TutorMunk Gregory Hills, The HUB, 31 Lasso Road, Gregory Hills NSW 2557 (sessions by appointment; never invent opening hours or room details). 23 suburbs served with in-home tutoring, each with its OWN unique SEO page; the canonical list lives in src/content/locations.ts. Footer shows ONE "Locations" link, never individual suburb links. Never invent local facts, school names or distances on suburb pages.
- REVIEWS (real data): src/content/reviews.real.json holds 73 real Google reviews (avg 4.9). Display only 4-5 star reviews with text; aggregate numbers stay the real totals. Never invent, edit or categorise reviews.
- Content bank: the Sprouts Academy website backup (owner's other company) provides source material that must be REWRITTEN fresh, never copied as-is.
- Final hosting: static files on Hostinger at tutormunk.com.au (domain transfer in progress).
- Blog pagination (added 14 Aug 2026): /blog shows 1 featured post plus a grid of 9 (page 1 only), /blog/page/2, /blog/page/3 etc. show a plain grid of 9. Real pages exist for every page number, each with real anchor links in the markup, this is how Google reaches all posts, not just the first 10. A "Load more" link enhances this for humans (intercepted by JS, appends in place, updates the URL via router.navigate with replace) but the underlying pages must keep working with JavaScript off. Each paginated page canonicals to ITSELF (never back to /blog), carries rel=prev/next, and stays indexable. Page 1 has exactly one URL (/blog); /blog/page/1 404s. Pagination maths lives in src/lib/blogPagination.ts (FEATURED_COUNT, PAGE_SIZE constants), title/description copy in src/content/blogIndex.ts. At the SSG conversion, every paginated page must be pre-rendered and listed in sitemap.xml, same as every post.

## Our Munks page (added 15 Aug 2026)

- The poster rail design (v4) is approved: large auto-scrolling portrait cards, full width edge to edge, pausing on hover, keyboard focus and touch, clicking or tapping a tutor glides that card to the centre and holds it there until the visitor moves on (pointer leaves the rail, scrolls, clicks the same card again, or presses Escape). It now appears on BOTH /our-munks (the canonical tutor page, full detail, its own hero and trust chips) and on the home page (a shorter teaser under "Meet our Munks", linking on to /our-munks, no Request a Call button there since the home page already has several). /our-munks stays the page search engines should treat as the real tutor content; the home section is intentionally just a teaser, no extra tutor metadata or copy.
- Cards are fixed-size (not auto-height). Every text line (name, years, education, bio) and the specialty chip row has an EXPLICIT height, not a guessed min-height, so a one-line bio and a long bio produce a byte-for-byte identical card. Never let card size vary with content length.
- Tutor content in src/content/munks.ts (the munkProfiles array) is PLACEHOLDER: years, education, bios, specialties and photos all still to be replaced once the tutor email arrives. The eight names are real and already final.
- Headshots go in public/images/munks/ once supplied, one file per tutor, wired up via the `photo` field on each profile. Until then every card falls back to one of three tinted panel tones, rotated so no two adjacent cards look identical, on purpose, not a bug.
- Tutors are published as first name plus surname initial only (e.g. "Anne M."), never a full surname.
- "NESA aligned" is the approved wording for the verification pill and trust chip. Never "NESA accredited": NESA accredits teachers and schools, not tutoring companies, so that wording would be misleading conduct. Keep this in mind if any other page ever mentions NESA.
- This is a new, separate data shape (MunkProfile) from the older MunkCard type. MunkCards.tsx, the MunkCard type and the `munks` array in src/content/munks.ts are now UNUSED (the home page's old 4-card grid is gone, replaced by the rail) but were kept in place rather than deleted, per the standing rule of archiving instead of deleting. Safe to actually remove later once the owner confirms nothing still needs them.

## Request a Call form (added 18 Aug 2026)

- The Request a Call modal (CallbackModal.tsx) collects exactly three mandatory fields: full name, phone, email. "Best time to call" was removed to keep the first live version minimal, and is archived at archive/2026-08-18-callback-form/, with exact restore steps.
- The Australian phone validation rule (the normaliser and the `AU_PHONE` pattern) lives in CallbackModal.tsx. Mobiles are 04 plus 8 digits, landlines are 02, 03, 07 or 08 plus 8 digits, nothing else passes.
- Browser side validation here is duplicated server side in send.php, which is built separately (not yet built at time of writing). Do not treat client side validation alone as sufficient.
- Three real bugs were found and fixed in the phone validation on 18 Aug 2026: the normaliser stripped the leading zero off ANY "00"-prefixed number, not just a genuine "+61 (0)" case, so overseas numbers like UK "0044..." passed as valid Australian numbers; it silently stripped letters instead of rejecting them, so text like "hi@0412345678.com" passed; and the `AU_PHONE` pattern accepted a geographic subscriber number starting with 0 (the trunk prefix) or 1 (reserved for 13/1300/1800/1900), e.g. 0201234567. All three are covered by scripts/test-callback-form.mjs, which now includes two exhaustive sweeps (every 0ab prefix, and every international country code 1-999 in three dial styles) rather than only named cases, because named cases alone let the third bug survive three rounds of review. Run it after touching normaliseAuPhone or AU_PHONE.

## Two addresses, and review presentation (added 18 Aug 2026)

- TutorMunk has two real addresses, never merge them. Head office: Level 27, International Towers, 100 Barangaroo Avenue, Sydney NSW 2000, the legal and postal address already used throughout the ten published policies. Tutoring centre: The HUB, 31 Lasso Road, Gregory Hills NSW 2557, where sessions actually happen. Both live on `brand` in src/content/site.ts (`headOfficeAddress`, `centreAddress`). The footer and the contact page show both, separately labelled. Schema.org keeps them apart on purpose: `OrganizationSchema` (rendered once, site-wide, in `__root.tsx`) uses the head office address, `LocalBusinessSchema` (rendered only on /locations) keeps using the Gregory Hills centre address. Never point one at the other's address.
- `centre.phoneDial` in locations.ts and `brand.phoneDial` in site.ts used to restate the same digits twice and had drifted to two different formats. locations.ts now imports `brand` and derives its values from it, so there is one source of truth. If you add a third place that needs the phone number, do the same: import `brand`, do not retype the digits.
- Review presentation: the 4.9 rating is shown everywhere, the review COUNT (73) is shown nowhere. Never round 4.9 up to 5, never write "5-star". The real count stays in src/content/reviews.real.json and `reviewSummary.total`, untouched, so it can come back later if the owner wants it, it is just not rendered today. If you add a new component that shows review data, pull the rating from `reviewSummary.score` (already built from the real average, never hardcode "4.9") and leave the count out of the copy entirely, do not assume the four places already fixed (site.ts's `ratingLine`, ReviewsCarousel.tsx, ReviewWall.tsx, StatsBand.tsx) are the only places it could leak back in.

## Backlog, open items (owner approved list, 16 Aug 2026)

These are agreed as outstanding, not forgotten. Do not action them without asking Indy
first, and do not silently close one off. When an item is done, delete its line from here.

ARCHIVED, DO NOT RE-ADD
- Ask Munk (the drop-in, on-demand exam prep program) was archived on 16 Aug 2026 at the
  owner's explicit instruction. Drop-in help is a TutorGator concept, the owner's separate
  online platform, and TutorMunk is strictly in person, so it has no place on this site.
  Removed from the Exam Prep hub (subject and program cards), the Exam Prep mega-menu
  dropdown, the footer Programs column, and /topics/ask-munk, which now 404s. The original
  copy is kept, not deleted, in archived consts alongside the live content it was removed
  from: archivedTopics in src/content/topics.ts, archivedExamPrepMegaLink and
  archivedFooterProgramLink in src/content/site.ts, and archivedAskMunkSubjectCard plus
  archivedAskMunkProgramCard in src/content/examPrep.ts. Do not re-add Ask Munk anywhere
  without asking Indy first.

WAITING ON INDY
- Tutor email to all Sprouts contractors and employees, drafted and approved, requesting
  first name, years taught, qualifications, specialties, a short intro and a headshot.
  Blocked on two blanks only: the return-by date, and Samantha's email address. Samantha
  sends it, and it is written from her, not from Indy. It is framed entirely as TutorGator.
  Do NOT mention TutorMunk in it.
- The four hub pages (Primary, High, Senior, Exam Prep) each need their own photo for the
  "Why parents and students choose TutorMunk" card. All four currently share
  hero-tutoring.jpg, because each page's own stage photo is already used in its hero and
  the same picture must never appear twice on one page. Swapping in real photos is a
  one-line change per content file, via the whyUs image field.
- Real tutor headshots for the Our Munks rail. Only Varsha has one. Ask for at least 1000
  pixels on the short side, the current one came in at 630 by 622 and is soft at card size.
  Files go in public/images/munks/, wired via the photo field on each MunkProfile.
  Card design note: the dark veil version is GONE, replaced 17 Aug 2026 by the approved
  light card (photo on top at full brightness, white card below). Do not reintroduce a dark
  wash over the photo.
- Tutor photo cropping. The Munk card photo box is a 5 by 4 landscape. Varsha's stored
  file (public/images/munks/varsha.jpg) was cropped to a 5 by 7 portrait for the earlier
  dark card design, so in the new box it is cropped again and the top of her head is cut
  off. She is still recognisable, so this is not urgent, but every tutor photo should be
  cropped from its ORIGINAL for the 5 by 4 box, not from a previously cropped file. Do this
  in one pass when the tutor photos arrive rather than one at a time.
- Tutor email, one line to add before sending: ask for a little space above the head in the
  photo, so it can be cropped to a wide box without cutting the top of the head off.

SMALL, DO WHEN NEXT IN THE FILE
- The gradient fading the photo into the dark card in WhyUsList.tsx is short, so there is a
  slightly visible vertical seam where they meet. Lengthen it.
- .claude/settings.local.json is untracked and shows up in every commit. Add it to
  .gitignore so it stops appearing. Awaiting Indy's go-ahead.
- Scroll-behind-mobile-menu: with the mobile menu open, the page behind it still scrolls.
  Known and deliberately unfixed, logged so it is not rediscovered as a new bug.

BLOG CONTENT, STILL DRAFT
- 18 posts remain unpublished. 8 are waiting on images. 9 are on a watch list needing
  Indy's editorial verdict, mostly near-duplicates on tutoring cost, private tutoring
  versus learning centres, and how to become a tutor. 1 (naplan-writing) is a stub needing
  real content.

## How prompts for Claude Code are written (added 17 Aug 2026)

Indy does not write the prompts himself. They are written for him in the Cowork session and
pasted into Claude Code. These rules exist because real mistakes were made and caught, and
they are binding on whoever writes the next prompt.

The failure pattern to guard against: assertions written from memory while composing a
prompt, rather than checked. A wrong number in a prompt is not a harmless typo. Claude Code
treats anything in the brief as a hard requirement and will break working code to satisfy
it. That has already happened once, when an unachievable 320px column minimum was met by
forcing the list out of the page container and cutting the column gutter to 4px.

1. Every number in a prompt is computed before it is typed. Counts, totals, file lists,
   widths, word counts. Run the command, then write the figure. Three of the four errors so
   far would have been caught by this alone.
2. Separate a hard requirement from a target. Say which is which. Where a value is a
   preference, write it as "make it as close to X as the other constraints allow, and report
   what you achieved". Every prompt carries a standing line telling Claude Code to stop and
   report rather than satisfy conflicting constraints by breaking something.
3. Judge a design in context, never in isolation. A section that looks right in a standalone
   mockup can look foreign on the real page. Check what sits directly above and below it on
   the running site before writing the spec.
4. Before claiming something is absent, search the whole repo, including the navigation,
   footer and layout files. A claim that nothing links to a page was wrong once because only
   the page cards were checked and the mega-menu was not.

Two things that are working and should be kept. Every prompt ends with a verification list
that asks for pasted output rather than a summary, and every prompt gives Claude Code
explicit permission to stop and challenge the brief. The 5 and 3 column split, the flexbox
stretch bug and the scroll restoration leak were all found that way.

## Working style with Indy

- Small steps, one at a time. Ask "any more changes?" before finalising a batch of work.
- Show changes visually (screenshots or the running dev server) and wait for approval on anything significant.
- Cost transparency: flag anything that costs money BEFORE doing it; he decides.
- Version deliverable files (v1, v2...) rather than overwriting.
- He runs the project from a Claude Cowork session (project HQ that holds full history, memory, his Hostinger/browser access and the Sprouts backup). Keep this file updated when major decisions change so both assistants stay in sync.
