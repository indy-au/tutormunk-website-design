import { Link } from "@tanstack/react-router";
import { useCallbackModal } from "./CallbackModal";

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const styles = {
  primary: `${base} bg-accent text-accent-foreground hover:bg-accent/85`,
  accent: `${base} bg-accent text-accent-foreground hover:bg-accent/85`,
  outline: `${base} border border-border bg-card text-foreground hover:bg-muted`,
  ghostOnDark: `${base} border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10`,
};

export type CtaVariant = keyof typeof styles;

export function CallbackButton({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: CtaVariant | undefined;
}) {
  const { open } = useCallbackModal();
  return (
    <button type="button" onClick={open} className={styles[variant]}>
      {label}
    </button>
  );
}

export function LinkButton({
  label,
  to,
  variant = "outline",
}: {
  label: string;
  to: string;
  variant?: CtaVariant | undefined;
}) {
  return (
    <Link to={to} className={styles[variant]}>
      {label}
    </Link>
  );
}
