// Copy for the /policies hub. The eight published policy documents
// themselves live in src/content/policies-md/ and are loaded through
// src/lib/policyLoader.ts, this file only holds the page furniture around
// them.
//
// The published frontmatter splits 5 families / 3 safety, not 4 and 4, see
// the discussion with Indy on 17 Aug 2026. Rather than relabel a document's
// group (content metadata, not to be touched without approval) or leave the
// right column visibly shorter, the right column carries two extra blocks
// of real content, the internal documents note and the contact card below,
// so both columns hold five blocks and finish level. There is no separate
// CtaBand on this page, the contact card below is that call to action.

export const policiesHub = {
  title: "Policies | TutorMunk",
  metaDescription:
    "TutorMunk's policies for families and students, and how we keep tutoring safe, in plain English.",
  eyebrow: "Policies",
  heading: "Our policies, in plain English.",
  body: "These are the documents that apply when you enrol with TutorMunk, and the ones that set out how we keep every session safe.",
  columns: {
    families: {
      heading: "For families and students",
      body: "What applies when you enrol a child with TutorMunk.",
    },
    safety: {
      heading: "Child safety and how we operate",
      body: "Our tutors sit beside your child, at home or at our centre. These set out how we keep that safe.",
    },
  },
  // Sits in the safety column, after its three policy cards. Same card
  // shell as the policy cards but no icon tile and no Read link, quieter
  // on purpose, it is not a link.
  internalNote: {
    body: "Two more policies are internal. Our Tutor Engagement Agreement and our Data Breach Response procedure are held by our HR team and signed by tutors when they join. Contact us if you would like to see them.",
  },
  // Sits last in the safety column. This is the page's only call to
  // action, doubling as what would otherwise have been a separate CtaBand.
  contactCard: {
    heading: "Something here not clear?",
    body: "If any part of these policies does not make sense, or you would like a copy in another format, call us and we will talk it through.",
    ctaLabel: "Request a Call",
  },
};
