import { Phone } from "lucide-react";
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
        <Phone className="h-5 w-5" />
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
