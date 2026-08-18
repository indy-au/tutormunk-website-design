import { createFileRoute } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { getPoliciesByGroup } from "@/lib/policyLoader";
import { policiesHub } from "@/content/policiesPage";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PolicyHubColumns } from "@/components/sections/PolicyHubColumns";

export const Route = createFileRoute("/policies/")({
  head: () => seoHead({ title: policiesHub.title, description: policiesHub.metaDescription, path: "/policies" }),
  component: PoliciesHubPage,
});

function PoliciesHubPage() {
  const familiesPolicies = getPoliciesByGroup("families");
  const safetyPolicies = getPoliciesByGroup("safety");

  return (
    <>
      <section className="border-b border-border bg-primary-soft/50">
        <div className="container-page py-12 md:py-16">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Policies" }]} />
          <p className="eyebrow mt-4">{policiesHub.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">{policiesHub.heading}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{policiesHub.body}</p>
        </div>
      </section>

      <PolicyHubColumns
        families={policiesHub.columns.families}
        familiesPolicies={familiesPolicies}
        safety={policiesHub.columns.safety}
        safetyPolicies={safetyPolicies}
        internalNote={policiesHub.internalNote}
        contactCard={policiesHub.contactCard}
      />
    </>
  );
}
