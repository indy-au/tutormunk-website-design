export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string | undefined;
  heading: string;
  body?: string | undefined;
  align?: "left" | "center" | undefined;
  tone?: "light" | "dark" | undefined;
}) {
  return (
    <div
      className={[
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        tone === "dark" ? "text-surface-foreground" : "text-foreground",
      ].join(" ")}
    >
      {eyebrow ? (
        <p className={tone === "dark" ? "eyebrow text-accent-soft" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl md:text-4xl">{heading}</h2>
      {body ? (
        <p
          className={[
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-surface-foreground/80" : "text-muted-foreground",
          ].join(" ")}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
