import { Link } from "@tanstack/react-router";
import { brand } from "@/content/site";

export function Wordmark({
  tone = "light",
  size = "md",
  onNavigate,
}: {
  tone?: "light" | "dark";
  size?: "md" | "lg";
  // Optional: fired on click, in addition to the navigation itself. Header
  // passes this to close the mobile menu when the logo is tapped. Left
  // optional so the Footer's plain usage of Wordmark is unaffected.
  onNavigate?: () => void;
}) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      className={[
        "inline-flex items-baseline gap-0.5 font-display font-semibold tracking-tight",
        size === "lg" ? "text-[2rem]" : "text-2xl",
      ].join(" ")}
      aria-label={`${brand.name} home`}
    >
      <span className={tone === "dark" ? "text-surface-foreground" : "text-primary"}>Tutor</span>
      <span className={tone === "dark" ? "text-accent" : "text-accent-ink"}>Munk</span>
    </Link>
  );
}
