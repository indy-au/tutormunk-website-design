import { SectionHeading } from "../SectionHeading";
import { deliveryModes } from "@/content/site";
import { getIcon } from "../icons";

export function DeliveryModesBand({
  eyebrow,
  heading,
  body,
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {deliveryModes.map((mode) => {
            const Icon = getIcon(mode.icon);
            const SettingIcon = getIcon(mode.settingIcon);
            return (
              <article
                key={mode.name}
                className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    <SettingIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    {mode.setting}
                  </span>
                </div>
                <h3 className="mt-5 text-xl">{mode.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-wide text-accent-ink uppercase">
                  {mode.format}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mode.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
