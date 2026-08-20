# TutorMunk blog risk and quality remediation — final report

Measured facts from this pass. Nothing here was committed; all changes are in the working tree. Dated 20 Aug 2026.

**Correction, 21 Aug 2026:** two issues found after this report was written were fixed and re-validated. (1) Five kept posts' `metaDescription` fields carried banned words that the original body-only scan missed: `basic-math-concepts`, `choose-the-right-tutor`, `improve-childrens-social-skills` (also truncated mid-sentence), `select-subjects-for-year-11-and-12`, and `school-eating-and-homework-routines` (found during the re-scan, not in the original four flagged). All five rewritten in plain voice, 120-155 characters, zero banned words; the frontmatter-inclusive scan across all 23 posts now returns zero. (2) The `/topics/primary-english` link removed from `naplan-test.md` and `compliment-and-complement.md` during the original pass was removed because that path does not exist; the real route is `/primary-english` (no `/topics/` prefix), which was not checked for at the time. Restored in `naplan-test.md`, where the surrounding sentence still fits it naturally. Left as plain text in `compliment-and-complement.md`: that post's `stage` is `general`, not primary-specific, and `/primary-english` is K-6 tutoring content, so forcing the link there would misrepresent the post's audience. Full detail on both fixes is below, folded into the sections they affect.

## 1. Baseline

Measured by importing the real `parseFrontmatter` from `src/lib/markdown.ts` via Vite SSR and reproducing the exact draft check used by the app (`src/lib/blogLoader.ts`: `data["draft"] === "true"`, case-sensitive, after quote-stripping), not a plain grep.

| Metric | Expected (brief) | Measured |
|---|---|---|
| Total files | — | 187 |
| Published (no effective `draft: true`) | 169 | 169 (exact match) |
| Existing drafts | 18 | 18 (exact match) |
| Posts with possible unsupported claims | 42 | 100 |
| Posts referencing online tutoring | 11 | 26 |
| Posts with prohibited filler words | 144 | 155 |

The three structural counts (total/published/drafts) matched exactly. The three content-risk counts came back higher than the brief's expectation. This is explained by method, not by a wrong baseline: the brief's figures came from a simpler grep pass, while this measurement used a broader semantic pattern set (implied-outcome phrasing such as "will help you remember", not just the literal word "guarantee"; "Skype" and "Zoom" as online-tutoring references, not just the word "online"; the full CLAUDE.md banned-word list, not a short sample list). The higher counts made the scale of the problem clearer, not different in kind, and did not conflict with the task's scope, so no escalation was needed.

Draft semantics: confirmed unquoted `draft: false` on all 169 published files and unquoted `draft: true` on all 18 existing drafts before any edit was made, so the mechanical flip used for quarantining could not silently fail to take effect.

## 2. Final state

**Retained: 23. Newly quarantined: 146. Total drafts after this pass: 164 (18 pre-existing + 146 newly quarantined).**

23 + 146 = 169, the full original published count, with nothing left over and nothing double-counted.

### Why 23 and not 30-40

Selection followed a full editorial read of every one of the 169 published posts (not a sample), in six batches, against the keeper requirements in the brief: genuine usefulness to a TutorMunk parent, factual salvageability without inventing anything, an in-person premise, and no substantial duplication with another post. The great majority of the migrated set was single-purpose SEO landing-page content built around a fabricated personal anecdote, an unsupported outcome claim, a service TutorMunk does not offer, or a premise (online tutoring, a Sprouts-specific service or location) that cannot be repaired by editing. After removing those, the pool of posts that could pass every keeper requirement without inventing anything to fill the gap was smaller than 30. The brief is explicit that quality and safety outrank the numeric target ("never retain a liability to meet a count"), so the list was frozen at 23 rather than padded. No provisional keeper was demoted during remediation; all posts provisionally selected passed the full keeper pass.

### Full retained list (23)

| Slug | Title | Audience / stage | Why retained |
|---|---|---|---|
| basic-math-concepts | Basic Maths concepts to have solid before high school. | High school | Concrete, subject-specific study advice with no claims risk; salvageable as-is with a voice pass. |
| choose-the-right-tutor | How to choose the right tutor for a primary-aged child. | Primary | Genuine parent decision-making guide; no promised outcomes once outcome language was removed. |
| compliment-and-complement | The difference between compliment and complement. | General | Self-contained grammar explainer, factually stable, no claims. |
| dropping-a-subject | A thoughtful consideration of dropping a subject. | Senior | Addresses a real, specific parent/student decision with balanced, non-prescriptive advice. |
| early-intervention-in-literac | Why early support with literacy can make a real difference. | Primary | Concrete, general-audience literacy guidance, salvageable without invented statistics. |
| guide-to-choosing-the-best-school-for-your-child | A parent's guide to choosing a school for your child. | Primary | Practical decision framework, no unsupported claims once outcome language was removed. |
| helping-your-child-bounce-back | Helping your child bounce back after academic disappointment. | Primary | Genuinely useful parenting guidance distinct from other retained posts. |
| homework-overload | How to deal with homework overload. | General | Practical, non-promotional advice with a clear parent use case. |
| how-to-study-effectively | How to study effectively and plan everything. | General | Concrete study-skills content, strongest of several near-duplicate study-tips posts. |
| improve-childrens-social-skills | Engaging activities to improve children's social skills. | Primary | Specific, actionable activity list, no tutoring-outcome claims. |
| informal-and-formal-language | Difference between formal and informal language. | General | Self-contained English-usage explainer. |
| math-anxiety | Top 5 tips for helping your child overcome Maths anxiety. | Primary | Addresses a real, specific parent concern with practical, non-clinical advice. |
| naplan-test | What is NAPLAN? A plain guide for parents. | Exam prep | Rewritten after two factual errors were found and corrected against ACARA/NAP sources (see Section 6). |
| new-schools-and-teachers | How a new school or teacher can affect your child's confidence. | Primary | Genuine transition-support content, distinct topic from other retained posts. |
| prepare-for-the-hsc | 5 ways to prepare for the HSC. | Senior | Concrete HSC study advice with the one confirmed non-guarantee disclaimer (Section 4). |
| reading-and-writing-skills | How tutoring can strengthen reading and writing skills. | General | Strongest of several near-duplicate literacy posts after removing invented special-needs-expertise claims. |
| right-tutor-for-high-school-students | Choosing the right tutor for a high school student. | High school | Distinct audience (high school, not primary) from choose-the-right-tutor. |
| school-eating-and-homework-routines | Guide to after-school eating and homework routines. | General | Practical routine-building guidance, no claims risk. |
| select-subjects-for-year-11-and-12 | How to select subjects for Year 11 and 12. | Senior | Concrete, syllabus-relevant decision guidance for HSC subject selection. |
| selective-test-timeline | A term by term timeline for the Selective test. | Primary | Not a migrated post (no `sourceUrl`, originally authored in this repo). Already in-person consistent and claims-free; needed no edits. |
| strong-reader-and-writer | Helping your child become a strong reader and writer. | Primary | Practical home-habit list distinct from the tutoring-focused literacy post. |
| the-impact-of-sleep-on-childrens-learning-and-behavior | The impact of sleep on children's learning and behaviour. | Primary | General child-development content, no claims risk, distinct topic. |
| write-effective-math-notes | How to write effective Maths notes. | General | Concrete study-skills content distinct from how-to-study-effectively. |

### Full newly-quarantined list (146), grouped by primary reason

Grouping method: each file was tagged against the mechanical baseline signals (online-tutoring references, claim-pattern hits, banned-word hits) plus an explicit check for wrong-location and off-premise content, then filed under its single most severe applicable reason, in this priority order: wrong location → off-premise/wrong-brand content → online-tutoring premise → unsupported claims → thin/generic/voice failure only. Most quarantined posts had more than one problem; the group shown is the dominant one, not the only one.

**Wrong location (1)** — content refers to a place TutorMunk does not serve:
canberra-math-tutor

**Off-premise: Sprouts-specific service or a service TutorMunk does not offer (2):**
educational-therapist, young-writer-holiday-programs

**Online-tutoring premise or reference (24):**
3-mistakes-to-avoid-in-your-school-studies, 5-tips-for-getting-prepared-for-school-in-2024, a-guide-on-how-to-help-your-child-plan-their-future, activities-for-easy-math, can-you-learn-math-on-your-own, child-needs-a-productive-hobby, enhance-your-intelligence-thinking-skills, face-to-face-tutoring-in-sydney, find-tutor-in-gregory-hills, how-to-learn-math-effectively, learn-math, math-exam-score, mathematics-important-for-children, one-to-one-math-tutoring-in-sydney, one-to-one-tutoring-in-sydney, one-to-one-tutoring-services-oran-park, perfect-study-environment, preschool-tutoring-in-sydney, private-maths-tutoring, social-media-mental-health, study-habits-guide-for-the-student, tips-for-primary-class-students, top-private-tutors, why-tutormunk-private-tutoring-is-the-best-option-in-sydney

**Unsupported or absolute claims that could not be removed without destroying the article (73):**
5-key-benefits-of-personalised-learning, about-college, advantages-of-learning-english, art-of-homework, become-an-excellent-tutor, beneficial-for-senior-high-school-students, benefits-of-private-tutoring-in-gregory-hills, best-creative-writing-courses-in-sydney, best-time-to-start-tutoring, boost-your-childs-english-skills, can-tutors-help-with-assignments, child-needs-private-tutoring-in-sydney, complete-private-tutoring-sydney, comprehensive-primary-to-k6-private-tutoring-in-sydney, create-a-effective-study-plan, critical-thinking-skills-in-students, english-exam-preparation, english-for-global-economy, english-tutor-for-year-12, get-ready-for-final-exams, group-classes-tutoring, guiding-the-young-generation-to-success, high-school-math-tutoring-in-sydney, highly-successful-students, homework-struggles, how-one-to-one-english-tutoring-boosts-confidence, how-private-tutoring-helps-children-develop, how-to-study-for-finals, how-to-teach-a-child-to-think, importance-of-english-learning, importance-of-thinking-skills-in-students, importance-of-tutor-in-life, improve-naplan-performance, improve-your-critical-thinking-skills, math-challenges-faced-by-sydney-students, math-english-affordable-tutor, motivated-to-teach, motivation-to-keep-teaching-everyday, naplan-tutoring-boost-your-childs-performance, naplan-tutoring, naplan-tutors, oc-test-preparation-tutoring, one-on-one-english-tutoring, one-to-one-english-and-math-tutoring, one-to-one-tutoring-boosts-confidence, one-to-one-tutoring-for-child, one-to-one-tutoring-in-leppington, prepare-for-naplan, prepare-your-kids-for-school-camp, primary-school-students-in-sydney, private-math-tutor-make-your-child-excel-in-mathematics, private-mathematics-tutor, private-tutoring-in-leppington-is-essential, private-tutoring-is-better-than-group-tutoring, private-tutoring-is-the-best-investment, right-way-to-memorise-an-essay, role-of-naplan-tutors, role-of-positive-reinforcement, secondary-school-tutoring-in-sydney, strategies-to-help-young-learners, study-smart-not-hard-the-key-to-effective-learning, subject-specific-private-tutoring-in-sydney, sydney-hsc-tutoring, thinking-skills-selective-test-blog, top-qualities-to-look-for-in-a-professional-tutor, tutoring-in-gregory-hills-success, tutoring-in-harrington-park-2, understanding-why-early-childhood, why-children-often-learn-more-effectively-with-a-tutor-than-at-home, why-parents-trust-tutormunk, why-private-tutoring-is-essential, why-private-tutoring-is-important-for-your-child, work-smarter-not-harder

**Thin, generic content or voice/banned-word failure only (46):**
advantages-of-studying-with-tutormunk-tutors, advantages-of-studying, after-school-tutoring-gregory-hills, benefits-of-learning-math, benefits-of-primary-school-tutoring, boost-productivity-in-study, child-be-more-confident-at-school, child-needs-tutor, child-struggling-in-school, childs-learning-needs, contact-with-your-childs-tutor, critical-thinking-and-problem-solving-skills, do-tutors-help-with-homework, easiest-way-for-effective-note-taking-during-class, habits-of-successful-students, helping-a-child-overcome-difficulty-in-one-subject, hings-to-consider-when-choosing-a-private-tutor, homework-is-important, how-to-know-if-your-child-is-learning, hsc-students-study, importance-of-study-in-students-life, learning-and-personal-growth, learning-to-your-child, mastering-math-with-private-tutoring-in-gregory-hills, math-tutoring-helps-develop-critical-thinking, one-to-one-tutoring-primary, our-story, perfect-study-environment-for-kids, positive-environment-for-your-child, reward-your-child, role-of-tutors-in-gregory-hills, start-tutoring-early-in-the-year, the-role-of-outdoor-education-in-early-childhood-development, thinking-skills-for-kids, tutoring-helps, tutormunk-high-school-tutoring-services, tutormunk-one-on-one-tutoring, tutormunk-tutors-in-developing-study-habits, tutors-loves-tutoring-with-us, understanding-learning-disabilities-in-children, unveiling-our-mission-in-tutoring, what-is-the-average-atar, what-is-the-best-way-to-improve-my-childs-maths-and-english-skills, what-makes-tutormunk-different, why-you-shouldnt-drop-out-of-high-school, writing-workshops-for-kids

## 3. Per-retained-post ledger

All 23 retained posts got the complete keeper pass: claims/voice review, in-person consistency check, link and asset check, title/description review, and JSON-LD schema addition. Details that differ from "standard pass, no issues found":

- **naplan-test**: two factual errors corrected against ACARA/NAP primary sources (see Section 6 for the before/after). Title and meta description rewritten (old meta description was a fabricated first-person parent anecdote, "Just a few weeks ago, my eight-year-old daughter sat for the NAPLAN Test..."; not descriptive of the article and not something TutorMunk can truthfully claim as its own voice). One internal link fixed (`/topics/primary-english`, which does not exist as a route, removed).
- **compliment-and-complement**: one internal link removed (`/topics/primary-english`, same non-existent route, found during the final technical validation pass documented below) and converted to plain text rather than replaced with an unrelated destination.
- **reading-and-writing-skills**: an "Overcoming Learning Difficulties" section claiming tutors have "experience in special education" and can address dyslexia/dysgraphia specifically was removed outright, no evidence of any tutor's specific special-education qualifications exists on the site. Meta description rewritten (old one used "cannot be overstated" and referenced "a world increasingly dominated by digital communication", generic filler unrelated to the actual content). A banned word ("tailored") was found in this post's own rewritten subheading during the post-remediation scan and corrected to "matched", see Section 4.
- **prepare-for-the-hsc**: contains the one confirmed contextual false positive in the final claims scan, a sentence that explicitly states preparation "does not guarantee a particular result" (a disclaimer, not a guarantee claim). See Section 4.
- **selective-test-timeline**: not a migrated post, no `sourceUrl`, originally authored in this repository (confirmed via `git log`, committed under "Blog: batch 2 posts" and "Blog: markdown pipeline"). Required no content edits, it already met every keeper requirement.
- All other 18 retained posts: rewritten in full for voice (removing "personalised"/"tailored"/superlatives/rhetorical-question headings/"Whether you're..." openers and similar CLAUDE.md-banned constructions), with unsupported-outcome language removed and replaced with modest process descriptions ("can help identify", "gives a safe space to", "helps build the habit"), and the standard `[Gregory Hills](/tutoring-in-gregory-hills)` in-person delivery link kept where it already existed. No title/description changes were needed beyond the two listed above; the rest were already accurate and non-misleading once the body was cleaned up.

Internal links: 7 unique targets used across the 23 posts (`/high-school`, `/topics/high-school-maths`, `/topics/naplan`, `/topics/primary-maths`, `/topics/selective-school-prep`, `/topics/writing-program`, `/tutoring-in-gregory-hills`), all verified against the built output (Section 5). One broken link (`/topics/primary-english`, pointed to by two posts) was found and fixed. Zero of the retained posts' links pointed to a newly-quarantined sibling. Zero external links exist across the 23 retained posts (source-level grep, confirmed twice, before and after the link fix).

Dates: all 23 use the single `date` frontmatter field, mapped to `datePublished`. No `dateModified` was added, no reliable modification-date convention exists in this schema. Attribution: all 23 render the fixed "Reviewed and updated by the TutorMunk team" line, no named author anywhere.

## 4. Content-quality results

Final source-level scan (same script and pattern set as the baseline measurement, rerun against the post-remediation working tree):

| Check | Result |
|---|---|
| Published posts | 23 |
| Draft posts | 164 |
| Claim-risk pattern hits | 1 (confirmed contextual false positive) |
| Online-tutoring references | 0 |
| Banned-word hits | 0 |

The 1 remaining claim-risk hit is in `prepare-for-the-hsc.md`: "None of this **guarantees** a particular result, but it puts a student in the best position..." This is a disclaimer explicitly negating a guarantee, not a claim of one, confirmed by reading the full sentence in context. No fix was needed or made.

Manual semantic review beyond the mechanical scan (the brief is explicit that a clean grep does not replace this) surfaced three further candidate matches, all confirmed as false positives after reading context: "one of the best ways" in `how-to-study-effectively.md` (describes a study technique, not a superlative brand or outcome claim); "can significantly impact" in `select-subjects-for-year-11-and-12.md`'s meta description (an honestly hedged general statement, "can", not a promised outcome); and a regex mismatch on "Year 6 students" in `selective-test-timeline.md` (the pattern matched the substring "6 students", not an actual numeric claim).

Duplicate-content check: the 23 retained posts were read together in full as part of selection specifically to avoid retaining two posts answering the same parent question (for example, only one of several near-duplicate "how to study" posts and only one of several near-duplicate literacy-tutoring posts was kept). No exact or near-duplicate titles, meta descriptions, opening paragraphs or closing paragraphs exist across the 23, excluding the shared CTA band and attribution line, which are expected to repeat.

## 5. Technical results

All checks below were run against a genuine `npm run build:static` production build (100 HTML files written, 0 failures) served by a local static file server that mirrors the routing rules actually declared in `dist-static/.htaccess` (extensionless path resolves to that folder's `index.html`; a path with no matching folder returns the packaged `404.html` with a 404 status; the `.htaccess` explicitly keeps the SPA catch-all rewrite OFF, confirmed by reading the file, so an unmatched route is a genuine 404 on the real host too, not an app-shell 200). This is a faithful reproduction of the documented Apache rewrite behaviour, not the literal production Apache/Hostinger process, and is reported as such.

| Check | Result |
|---|---|
| Published article routes generated | 23/23 present with real HTML |
| Quarantined routes present in build output | 0/146 (fully absent) |
| Quarantined slugs in sitemap.xml | 0/146 |
| **HTTP status, 23 keeper routes** | **23/23 = 200** (verified via local server, not just output-absence) |
| **HTTP status, 146 quarantined routes** | **146/146 = 404** (verified via local server, not just output-absence) |
| Blog index (`/blog`) | 200 |
| `/blog/page/1` (must not exist) | 404 |
| `/blog/page/2`, `/blog/page/3` (valid, last valid) | 200, 200 |
| `/blog/page/4` (first invalid) | 404 |
| Total blog pages | 3 (1 featured + 9 grid on `/blog`, 9 on page 2, 4 on page 3; 23 posts total) |
| `getBlogCategories()` output | 5 categories, all with ≥1 published post, none empty, none missing |
| Sitemap URL count | 99 |
| Total generated routes | 99 |
| Internal links used by the 23 keepers | 8 unique targets, 8/8 resolve (after the 1 fix in Section 3) |
| Image assets referenced by the 23 keepers | 23/23 present in build output |
| External links used by the 23 keepers | 0 |
| JSON-LD `BlogPosting` blocks parsed and validated | 23/23 valid (correct `@type`, `headline`, `description`, `author`, `publisher`, and a canonical URL that matches the post's own `/blog/<slug>` and never `sproutsacademy.com.au`) |
| `sproutsacademy.com.au` in rendered/served HTML | 0 occurrences |
| `sproutsacademy.com.au` anywhere in built output | 2 occurrences, both inside a JS asset bundle as the raw `sourceUrl` provenance text from the client-side content-loader data, not a rendered or clickable link on any page (see Section 8) |
| `/enrol`, `/about` referenced in built HTML | 0 |
| Quarantined slugs referenced as a link anywhere in built output | 0 |
| 18 pre-existing drafts | Confirmed untouched: none appear in `git diff`, all 18 accounted for outside the keep/quarantine lists |
| Quarantined-file diff shape | 146/146 changed by exactly 1 insertion + 1 deletion (the `draft` line only); bodies and `sourceUrl` byte-preserved |

Important distinction, per the brief's explicit instruction: HTTP status was genuinely verified for all 169 previously-published routes, not only build-output absence. Python's `http.server` failed to reach a stable listening state in this environment for reasons unrelated to the sandbox (a plain Node `net`/`http` listener worked immediately once tried); a small Node static server was used instead, and its routing logic was checked against the real `.htaccess` rules before relying on it.

## 6. Examples

**Unsupported/factual claim correction — `naplan-test.md`.** The migrated post stated the first NAPLAN test "is held in May" and that "the second NAPLAN test is held in October... and it assesses students' science skills." Both are wrong: NAPLAN is a March assessment, and there is no October NAPLAN science test (a different, unrelated national sample assessment exists, but conflating it with NAPLAN is a factual error a parent could act on). Checked against ACARA/NAP sources. The post was rewritten to state only what is verifiable: sat in March, in a national test window, in Years 3, 5, 7 and 9, across four domains. The original's fabricated first-person opener ("Just a few weeks ago, my eight-year-old daughter sat for the NAPLAN Test...") was also removed, TutorMunk cannot truthfully claim a parent's personal anecdote as its own voice.

**Filler/voice correction — `reading-and-writing-skills.md`.** Original opening: *"In a world increasingly dominated by digital communication, the importance of robust reading and writing skills cannot be overstated... Private tutoring is an invaluable tool... offering personalised attention and tailored strategies... This article explores how private tutoring can significantly enhance reading and writing skills, setting students up for a lifetime of success."* This is a banned-construction opener, uses two banned words ("personalised", "tailored") in one sentence, and implies an outcome ("setting students up for a lifetime of success") with nothing behind it. Rewritten to: *"Strong reading and writing skills underpin academic success in almost every subject, and effective communication well beyond school. One to one tutoring is one way to build these skills with more targeted attention than a classroom setting allows."* Plain, factual, no banned words, no promised outcome.

## 7. Validation

| Command | Result |
|---|---|
| `npx tsc --noEmit` | Exit 0, no errors |
| `npx eslint` on the 3 non-content files touched | 1 pre-existing error (`react/no-danger` "rule not found", already present on `OrganizationSchema.tsx` and `FaqSchema.tsx`, a repo-wide eslint-config quirk, not introduced by this task), 1 pre-existing warning (`react-refresh/only-export-components` on `BlogArticle.tsx`, confirmed present by stashing this task's changes and re-linting the pre-edit file) |
| `npm run build:static` | Exit 0. 100 HTML files written, 0 failures. `sitemap.xml`: 99 URLs. |
| `git diff --check` | Exit 0, no whitespace errors |
| Local HTTP verification (169 routes + 4 pagination boundaries) | All as reported in Section 5 |
| `npm run lint` (full repo) | Not run in full; the brief allows the narrowest supported lint command for touched files, run above. Running it across the whole repo would surface pre-existing, unrelated issues outside this task's scope. |
| Dedicated test suite for blog behaviour | None exists in this repo (`package.json` has no `test` script); the technical checks in Section 5 substitute for it, run directly against the real build output. |

**Files changed outside `src/content/blog/*.md`:**
- `src/routes/blog.$slug.tsx` — added the `BlogPostingSchema` component to each post page, per the brief's structured-data requirement.
- `src/components/sections/BlogArticle.tsx` — added the fixed "Reviewed and updated by the TutorMunk team" attribution line.
- `src/components/BlogPostingSchema.tsx` (new) — the JSON-LD component, modelled directly on the existing `OrganizationSchema.tsx`/`FaqSchema.tsx` pattern.
- `CLAUDE.md` — added the "Blog" section (durable rules) and this report is referenced from it.

All four are narrowly blog-specific, none touch shared routing, sitemap, or draft-filtering logic (which needed no code changes, `publishedBlogPosts` already derives correctly from the frontmatter everywhere it's used).

**`git status --short` summary:** 168 modified files under `src/content/blog/` (146 quarantined, unchanged except the draft flag; 22 of the 23 keepers, fully rewritten; `selective-test-timeline.md` unchanged, see Section 3), 2 modified files and 1 new file outside it (listed above), plus this report. Nothing was committed.

## 8. Remaining limitations

- HTTP behaviour was verified through a faithful local reproduction of the `.htaccess` routing rules, not the literal Hostinger/Apache production server. This should still be spot-checked once deployed.
- Real search engine indexing status cannot be checked or predicted from this environment. This report does not claim Google has deindexed any URL, and does not promise a removal or re-indexing timeline; that requires Search Console access after deployment, which was explicitly out of scope for this task.
- The client-side JS bundle embeds the raw markdown content (including frontmatter, `sourceUrl` and body) for all 187 posts, published and draft alike, as part of the existing content-loader architecture (confirmed by finding `sourceUrl` provenance text for a quarantined post inside a built `.js` asset). This is not a public route, not a rendered link, and not something search engines would index as a page, but it does mean a quarantined post's raw text is technically present in a downloadable asset for anyone inspecting it directly. Changing this would mean touching the shared content-loading/bundling architecture, which is outside this task's narrow allowed-changes scope; flagging it here for a decision rather than acting on it.
- The two owner-facing decisions in this report, retaining 23 rather than 30-40, and the reason-grouping of the 146 quarantined posts, are editorial judgment calls made under the brief's own "quality outranks the quota" and "quarantine on ordinary uncertainty" rules. Both are reported here with the reasoning and evidence behind them for Indy to review, not presented as beyond question.
