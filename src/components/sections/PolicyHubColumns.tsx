import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getIcon } from "../icons";
import { CallbackButton } from "../CtaButton";
import type { PolicyDoc } from "@/lib/policyLoader";

const CARD_SHELL =
  "rounded-4xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-lift";

function PolicyLinkCard({ policy }: { policy: PolicyDoc }) {
  const Icon = getIcon(policy.frontmatter.icon);
  return (
    <Link
      to="/policies/$slug"
      params={{ slug: policy.frontmatter.slug }}
      className={`group flex items-start gap-4 ${CARD_SHELL}`}
    >
      <span
        aria-hidden="true"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink"
      >
        <Icon className="h-6 w-6" />
      </span>
      <span className="min-w-0">
        <span className="block text-lg font-semibold text-foreground">{policy.frontmatter.name}</span>
        <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
          {policy.frontmatter.summary}
        </span>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-ink">
          Read
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}

// Same card shell as the policy cards, minus the hover lift (it is not a
// link) and the icon tile, quieter on purpose so it reads as a footnote to
// the three cards above it, not a fourth policy.
function InternalNoteCard({ body }: { body: string }) {
  return (
    <div className="rounded-4xl border border-border bg-card p-6">
      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function ContactCard({
  heading,
  body,
  ctaLabel,
}: {
  heading: string;
  body: string;
  ctaLabel: string;
}) {
  return (
    <div className={CARD_SHELL}>
      <h3 className="text-xl">{heading}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <div className="mt-5">
        <CallbackButton label={ctaLabel} variant="accent" />
      </div>
    </div>
  );
}

export function PolicyHubColumns({
  families,
  familiesPolicies,
  safety,
  safetyPolicies,
  internalNote,
  contactCard,
}: {
  families: { heading: string; body: string };
  familiesPolicies: PolicyDoc[];
  safety: { heading: string; body: string };
  safetyPolicies: PolicyDoc[];
  internalNote: { body: string };
  contactCard: { heading: string; body: string; ctaLabel: string };
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl">{families.heading}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{families.body}</p>
            <div className="mt-6 space-y-5">
              {familiesPolicies.map((policy) => (
                <PolicyLinkCard key={policy.frontmatter.slug} policy={policy} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl">{safety.heading}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{safety.body}</p>
            <div className="mt-6 space-y-5">
              {safetyPolicies.map((policy) => (
                <PolicyLinkCard key={policy.frontmatter.slug} policy={policy} />
              ))}
              <InternalNoteCard body={internalNote.body} />
              <ContactCard heading={contactCard.heading} body={contactCard.body} ctaLabel={contactCard.ctaLabel} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
