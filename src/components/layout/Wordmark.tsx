import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { brand } from "@/content/site";

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

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
  const navigate = useNavigate();
  const router = useRouter();

  // The logo must always land at the top of the home page, including two
  // cases a plain <Link to="/"> cannot handle on its own:
  //   1. Already on "/": the destination equals the current location, so
  //      the router treats a plain click as a no-op, nothing scrolls.
  //   2. Coming from another page, when "/" was scrolled down on a
  //      previous visit: scrollRestoration (correctly, for back/forward)
  //      would restore that old position instead of starting at the top.
  // skipOwnScrollRestoration (declared in router.tsx) tells the router to
  // sit out its own scroll handling for this one navigation, so there is
  // nothing left to race, then this handler scrolls itself once the new
  // page has actually rendered.
  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    // A modified click (open in new tab, middle click, etc.) should behave
    // like a normal link, not be hijacked.
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    onNavigate?.();

    await navigate({ to: "/", state: { skipOwnScrollRestoration: true } });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });

    // The flag only needs to live for this one navigation, the router has
    // already read it (above) to skip its own scroll handling. Left in
    // place, it stays written into this browser history entry's state and
    // keeps suppressing scroll restoration on every later visit to it,
    // including browser back and forward, long after the logo click is
    // over. Strip it once we are done with it.
    //
    // history.push writes to the real browser history asynchronously (a
    // queued microtask, to avoid tripping the browser's own throttling of
    // rapid history calls), so flush() first to force that write to
    // actually land before reading window.history.state, otherwise this
    // could read a stale, pre-navigation entry.
    router.history.flush();

    const currentState = window.history.state as Record<string, unknown> | null;
    if (currentState && "skipOwnScrollRestoration" in currentState) {
      // Copy everything else across untouched, especially key, __TSR_key
      // and __TSR_index, the router's own bookkeeping for this history
      // entry. Losing those breaks its history tracking. Deliberately not
      // using router.history.replace() here, it mints a brand new key on
      // every call, which would orphan this entry's cached scroll position
      // rather than just remove our one flag.
      const nextState = { ...currentState };
      delete nextState["skipOwnScrollRestoration"];
      window.history.replaceState(nextState, "", window.location.href);
    }
  }

  return (
    <Link
      to="/"
      onClick={handleClick}
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
