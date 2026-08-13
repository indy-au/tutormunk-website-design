import { CallbackButton, LinkButton } from "../CtaButton";
import heroImage from "@/assets/hero-tutoring.jpg";
import { brand } from "@/content/site";

function RatingRow() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span aria-hidden="true" className="text-base tracking-[0.15em] text-accent-foreground">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      <p className="text-sm font-medium text-muted-foreground">{brand.ratingLine}</p>
    </div>
  );
}

export function Hero({
  eyebrow,
  heading,
  body,
  ctaLabel,
  points,
  secondary,
  image,
  illustrationLabel = "A tutor working through an exercise book with a primary school student at a kitchen table",
}: {
  eyebrow?: string | undefined;
  heading: string;
  body: string;
  ctaLabel?: string | undefined;
  points?: string[] | undefined;
  secondary?: { label: string; to: string };
  image?: string | undefined;
  illustrationLabel?: string | undefined;
}) {
  return (
    <section className="bg-background">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="w-full px-5 py-14 md:py-24 lg:pr-12 lg:pl-[max(1.25rem,calc((100vw-78rem)/2+1.25rem))]">
          <RatingRow />
          {eyebrow ? <p className="eyebrow mt-6">{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">{heading}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{body}</p>
          {points?.length ? (
            <ul className="mt-7 flex flex-wrap gap-2">
              {points.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-sm font-medium"
                >
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-9 flex flex-wrap gap-3">
            {ctaLabel ? <CallbackButton label={ctaLabel} /> : null}
            {secondary ? <LinkButton label={secondary.label} to={secondary.to} /> : null}
          </div>
        </div>

        <div className="relative min-h-[20rem] lg:min-h-[34rem]">
          <img
            src={image ?? heroImage}
            alt={illustrationLabel}
            width={1200}
            height={1200}
            className="h-full w-full rounded-t-[2rem] object-cover lg:absolute lg:inset-0 lg:rounded-l-[2.5rem] lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
}
