export function PageIntro({
  eyebrow,
  heading,
  body,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
}) {
  return (
    <section className="border-b border-border bg-primary-soft/50">
      <div className="container-page py-12 md:py-16">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">{heading}</h1>
        {body ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{body}</p>
        ) : null}
      </div>
    </section>
  );
}
