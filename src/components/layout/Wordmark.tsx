import { Link } from "@tanstack/react-router";
import { brand } from "@/content/site";

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      to="/"
      className="inline-flex items-baseline gap-0.5 font-display text-2xl font-semibold tracking-tight"
      aria-label={`${brand.name} home`}
    >
      <span className={tone === "dark" ? "text-surface-foreground" : "text-primary"}>Tutor</span>
      <span className="text-accent">Munk</span>
    </Link>
  );
}
