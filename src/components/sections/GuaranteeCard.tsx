import { CallbackButton } from "../CtaButton";

export function GuaranteeCard({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="pb-4">
      <div className="container-page">
        <div className="rounded-[2rem] bg-accent px-6 py-12 text-accent-foreground md:px-12 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl">{heading}</h2>
              <p className="mt-3 text-base leading-relaxed">{body}</p>
            </div>
            <CallbackButton label="Request a Call" variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
}