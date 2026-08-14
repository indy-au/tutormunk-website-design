# CLAUDE.md - TutorMunk Website Project Briefing

Read this fully before making any change. These rules come from the business owner (Indy Singh) and are non-negotiable. When in doubt, ask Indy before acting. He is not a developer: explain things in plain language, give small steps, and never assume technical knowledge.

## What this project is

TutorMunk is a premium IN-PERSON tutoring company in South-West Sydney (sister company to Sprouts Academy). Strictly OFFLINE: no online tutoring anywhere on the site, ever. Four delivery modes: 1-to-1 at the family home, group at the family home, 1-to-1 at our centre, group at our centre. The site targets parents of K-12 students. This codebase started as a Lovable design export (Vite + React + TanStack Router + Tailwind v4). It is the DESIGN BASE for the real site.

## Hard business rules (never violate)

1. NO PRICING anywhere on the website. No dollar amounts, no rate tables, no "from $X per hour". Pricing is only discussed by phone. Use "Talk to us" bands with the Request a Call button instead.
2. Phone number: display "1300 00MUNK", dial target 1300 006 865 (tel:1300006865). The floating CALL US NOW button appears on every page.
3. Munk branding is deliberate: "Become a Munk" (tutor recruitment), "Our Munks" (tutor showcase), "Ask Munk" (on-demand program), "Choose your Munk" (step 3 of the How It Works journey). Never rename these back to generic terms.
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
4. Dropdown icons (lucide): English open-book, Maths calculator, Science flask, Selective trophy, OC target, NAPLAN clipboard-check, Writing pen, ICAS medal, HSC Sprint timer, Ask Munk message-circle-question, Primary overview graduation-cap, High School school, Senior award. Senior panel: 3 grouped columns (ENGLISH, MATHS, SCIENCE headings), compact rows.
5. How It Works: 5-step vertical journey with numbered navy circle badges, connector line, alternating cards on desktop; step icons clipboard-list, users, user-check, calendar-check, sparkles. Then delivery modes as a 2x2 icon card grid (house, users, building, school). No pricing.
6. Exam Prep hub: 7 equal designed cards with icon tile, year-range chip, two-line description, navy Learn more link; "On demand" chip on Ask Munk, "Intensive" chip on HSC Sprint.

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

## Working style with Indy

- Small steps, one at a time. Ask "any more changes?" before finalising a batch of work.
- Show changes visually (screenshots or the running dev server) and wait for approval on anything significant.
- Cost transparency: flag anything that costs money BEFORE doing it; he decides.
- Version deliverable files (v1, v2...) rather than overwriting.
- He runs the project from a Claude Cowork session (project HQ that holds full history, memory, his Hostinger/browser access and the Sprouts backup). Keep this file updated when major decisions change so both assistants stay in sync.
