export function StatsBand({
  eyebrow,
  heading,
  items,
}: {
  eyebrow?: string | undefined;
  heading: string;
  items: { value: string; label: string }[];
}) {
  return (
    <section className="section-y bg-secondary">
      <div className="container-page">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">{heading}</h2>
        <dl className="mt-10">
          {items.map((item) => (
            <div
              key={item.value + item.label}
              className="flex flex-col gap-2 border-t border-border py-7 last:border-b sm:flex-row sm:items-baseline sm:gap-10"
            >
              <dt className="font-display text-5xl font-semibold text-primary sm:w-48 md:text-6xl">
                {item.value}
              </dt>
              <dd className="text-base leading-relaxed text-muted-foreground">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}