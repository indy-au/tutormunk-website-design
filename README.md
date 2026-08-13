# TutorMunk Marketing Website (Design Only)

Design-only marketing site for TutorMunk, a premium in-person tutoring company in South-West Sydney (in-home and at our Oran Park centre, 1-to-1 and small groups, K-12). No online tutoring is offered.

There is no backend, no auth, no CMS and no database. All forms are visual shells.

## Stack notes

- React 19 + Tailwind CSS v4 + TypeScript.
- Routing uses TanStack Router (file based routes in `src/routes`). This project template does not support react-router, so TanStack Router provides the equivalent client routing with `<Link>` and typed params.
- All colours, fonts, radii and shadows are CSS variables / Tailwind theme tokens defined in `src/styles.css`. Swap the palette there and the whole site follows.
- All copy lives in `src/content/*.ts`. Components contain no hard-coded page text.
- Every content file exports `title` and `metaDescription`, which each route passes into its `head()` metadata.
- Semantic HTML5 throughout: `header`, `nav`, `main`, `section`, `article`, `footer`, `dl`, `table`.
- Mobile first and responsive. Placeholder art uses colour blocks with `role="img"` and `aria-label` descriptions instead of stock photos.

## Routes

| Route | Page | Template used |
| --- | --- | --- |
| `/` | Home | `src/routes/index.tsx` |
| `/primary-school` | Primary School K-6 | Stage page template |
| `/high-school` | High School 7-10 | Stage page template |
| `/senior-school` | Senior School 11-12 (grouped courses: English / Maths / Science) | Stage page template |
| `/primary-english` | Primary English Tutoring | Subject page template |
| `/hsc-maths-advanced` | HSC Maths Advanced | HSC course page template |
| `/how-it-works` | How It Works | Composed sections |
| `/exam-prep` | Exam Prep hub (7 programs) | Composed sections |
| `/locations` | Locations: our centre plus 8 suburbs | Composed sections |
| `/locations/oran-park` | Tutoring in Oran Park | Suburb page template |
| `/pricing` | Pricing rate table | Composed sections |
| `/enrol` | Enrol Now, 5 step form shell | Composed sections |
| `/become-a-tutor` | Become a Tutor, application shell with file upload | Composed sections |
| `/blog` | Blog index | Composed sections |
| `/blog/$slug` | Blog post | Blog article template |
| `/about` | About Us | Composed sections |
| `/contact` | Contact | Composed sections |
| `/faq` | FAQ (reuses the FAQ accordion section) | Composed sections |
| `/testimonials` | Testimonials (reuses the reviews carousel section) | Composed sections |
| `/privacy` | Privacy Policy | Text page template |
| `/terms` | Terms of Service | Text page template |
| `/student-agreement` | Student Agreement | Text page template |
| `/cancellation-and-refund` | Cancellation and Refund Policy | Text page template |
| `/data-collection` | Data Collection Statement | Text page template |

## Page templates (`src/components/templates`)

| Component | Purpose |
| --- | --- |
| `StagePage.tsx` | Stage pages. Supports flat subject cards or grouped subject sections. |
| `SubjectPage.tsx` | Subject pages: hero, what we cover, how sessions work, FAQ, CTA. |
| `CoursePage.tsx` | HSC course pages: compact hero, modules, Band 6 tutor pitch, CTA. |
| `SuburbPage.tsx` | Suburb pages: hero, local details, reviews, CTA. |
| `TextPage.tsx` | Plain text pages, used by all 5 policy pages. |

## Section components (`src/components/sections`)

| Component | Used by |
| --- | --- |
| `Hero.tsx` | Home, stage, subject, suburb, about, become a tutor |
| `CompactHero.tsx` | HSC course pages |
| `PageIntro.tsx` | Exam prep, locations, pricing, enrol, blog, contact, FAQ, testimonials, policies |
| `StageCards.tsx` | Home |
| `StepsStrip.tsx` | Home (strip), How It Works and subject pages (detailed) |
| `DeliveryModesBand.tsx` | Home, How It Works, Pricing |
| `ReviewsCarousel.tsx` | Home, Testimonials, Suburb pages |
| `SuburbsStrip.tsx` | Home |
| `CtaBand.tsx` | Most pages |
| `SubjectCards.tsx` | Stage pages (flat cards and grouped sections) |
| `WhyUsList.tsx` | Stage pages |
| `FeatureGrid.tsx` | Subject pages, suburb pages, about values, tutor requirements |
| `PricingTeaser.tsx` | Stage pages |
| `FaqAccordion.tsx` | Subject pages, FAQ page |
| `CourseModules.tsx` | HSC course pages |
| `TutorPitch.tsx` | HSC course pages |
| `ProgramCards.tsx` | Exam prep hub |
| `CentreSection.tsx` | Locations |
| `SuburbGrid.tsx` | Locations |
| `PricingTable.tsx` | Pricing |
| `MultiStepFormShell.tsx` | Enrol Now |
| `ApplicationFormShell.tsx` | Become a Tutor |
| `ContactSection.tsx` | Contact |
| `TextPageSection.tsx` | Policy pages |
| `BlogList.tsx` | Blog index |
| `BlogArticle.tsx` | Blog post |
| `StorySection.tsx` | About |
| `FormField.tsx` | Shared field renderer for all form shells |

## Shared components

| Component | Purpose |
| --- | --- |
| `layout/PageShell.tsx` | Header, `main`, footer wrapper applied in `src/routes/__root.tsx` |
| `layout/Header.tsx` | Sticky nav: Primary School, High School, Senior School (dropdown grouped English / Maths / Science), How It Works, plus Request a Call. Mobile menu included. |
| `layout/Footer.tsx` | Four column footer: Programs, Locations, Company, Policies |
| `layout/Wordmark.tsx` | "TutorMunk" text wordmark placeholder |
| `CallbackModal.tsx` | Callback modal provider and dialog shell (name, phone, best time to call) |
| `CtaButton.tsx` | `CallbackButton` (opens the modal) and `LinkButton` variants |
| `SectionHeading.tsx` | Shared eyebrow, heading and intro block |

## Content files (`src/content`)

`site.ts` (brand, nav, footer, delivery modes, reviews, suburbs, callback modal), `home.ts`, `howItWorks.ts`, `primarySchool.ts`, `highSchool.ts`, `seniorSchool.ts`, `primaryEnglish.ts`, `hscMathsAdvanced.ts`, `examPrep.ts`, `locations.ts` (locations hub plus Oran Park suburb page), `pricing.ts`, `enrol.ts`, `becomeTutor.ts`, `blog.ts` (index plus post), `about.ts` (about plus contact), `faq.ts` (FAQ plus testimonials), `policies.ts` (all 5 policy pages), `types.ts` (shared content types).

## Copy rules applied

- Australian English spelling: enrol, enrolment, centre, colour, personalised, program.
- Australian school terms: Year 5, K-6, HSC, NAPLAN, OC, Selective, NESA, Band 6, ATAR.
- No em dashes or en dashes anywhere in the copy.
- Plain, factual sentences and short paragraphs. No hype words and no rhetorical headings.
- Rates, reviews, addresses and policy bodies are placeholders for client sign off.
