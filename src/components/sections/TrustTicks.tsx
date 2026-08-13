export function TrustTicks({ items }: { items: string[] }) {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
        {items.map((item) => (
          <p key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
            <span
              aria-hidden="true"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[0.65rem] font-bold text-accent-foreground"
            >
              &#10003;
            </span>
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}