import { brand } from "@/content/site";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${brand.phoneDial}`}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-primary py-3 pl-3 pr-5 text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
    >
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M6.6 2.5a1.6 1.6 0 0 1 2.2.6l1.4 2.4a1.6 1.6 0 0 1-.3 2l-1 .9a12.2 12.2 0 0 0 4.7 4.7l.9-1a1.6 1.6 0 0 1 2-.3l2.4 1.4a1.6 1.6 0 0 1 .6 2.2l-1 1.7a2.6 2.6 0 0 1-3 1.2A18.6 18.6 0 0 1 3.6 6.8a2.6 2.6 0 0 1 1.2-3l1.8-1.3Z" />
        </svg>
      </span>
      <span className="text-left leading-tight">
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground/75">
          Call us now
        </span>
        <span className="block text-sm font-bold">{brand.phone}</span>
      </span>
    </a>
  );
}