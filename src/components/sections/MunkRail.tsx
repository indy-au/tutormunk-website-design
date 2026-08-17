import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { CallbackButton, LinkButton } from "../CtaButton";
import { SectionHeading } from "../SectionHeading";
import type { MunkProfile } from "@/content/munks";

// Fixed card width so every card is identical regardless of how much text a
// tutor sends, the single most important detail in this design. Height is
// NOT fixed here (no aspect-ratio on the outer card): the photo box below is
// a fixed 5:4 ratio of this width, and every text block in the lower
// section has its own explicit height, so the total height falls out
// identical across cards on its own, bottom up, without needing to force
// it from the outside. That is also what lets a card grow taller when its
// bio expands without ever touching this width.
const CARD_WIDTH = "w-[clamp(250px,26vw,360px)]";

// Spacing lives on each card (a right margin), not as a flex `gap` on the
// track or on the two set wrappers. Every card, including the very last one
// of each set, gets the same margin, so every card occupies an identical
// "cell" of card-width-plus-spacing. That is what makes 50% of the track's
// total width land exactly on one set's width, see the marquee comment in
// styles.css.
const CARD_SPACING = "mr-5";

// Used for the no-photo fallback panel only. Every fallback uses the same
// soft accent tint, on purpose, this is not a rotation of tones like the
// previous dark design needed, a light card does not have that problem.
const FALLBACK_TONE = "bg-accent-soft";

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Reads the live translateX in pixels off an element, animated or not. */
function readTranslateX(el: HTMLElement): number {
  const value = getComputedStyle(el).transform;
  if (value === "none") return 0;
  return new DOMMatrixReadOnly(value).m41;
}

function VerificationPill({ label }: { label: string }) {
  // Solid, light background on every pill over the photo (this one and the
  // stage pill below), never a translucent one, the photo now sits at full
  // brightness with no dark wash to lean on for contrast, so the pill has
  // to supply its own.
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-card px-2 py-0.5 text-[11px] font-semibold text-foreground shadow-sm">
      <Check className="h-3 w-3" aria-hidden="true" />
      {label}
    </span>
  );
}

function MunkCardPoster({
  munk,
  id,
  tabIndex,
  isCentered,
  isExpanded,
  onActivate,
  onToggleExpand,
}: {
  munk: MunkProfile;
  id: string;
  tabIndex?: number | undefined;
  isCentered: boolean;
  isExpanded: boolean;
  onActivate: (id: string, cardEl: HTMLElement | null) => void;
  onToggleExpand: (id: string) => void;
}) {
  // aria-labelledby references the visible name text below rather than
  // repeating the tutor's name in a separate aria-label string. Same
  // accessible name ("Bring Anne M. to the centre"), but the name itself
  // only ever exists once in the HTML, not twice. aria-labelledby splits
  // on whitespace, so the id has to be space-free even though names like
  // "Anne M." are not, hence the slug.
  const slug = id.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const nameId = `munk-name-${slug}`;
  const prefixId = `munk-prefix-${slug}`;
  const suffixId = `munk-suffix-${slug}`;

  const articleRef = useRef<HTMLElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const [bioOverflows, setBioOverflows] = useState(false);

  // Whether "Read more" is needed is measured, never assumed: a short bio
  // must never show it. Compares the clamped paragraph's scrollHeight (the
  // full, unclamped content height the browser still tracks internally)
  // against its clientHeight (the visible, clamped box), which is the
  // standard, reliable way to detect line-clamp overflow. Only meaningful
  // while collapsed, the clamp classes are not applied while expanded, so
  // there is nothing to compare then, the previous measurement is left in
  // place instead (see the render condition below).
  useLayoutEffect(() => {
    if (isExpanded) return;
    function measure() {
      const el = bioRef.current;
      if (!el) return;
      setBioOverflows(el.scrollHeight > el.clientHeight + 1);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [munk.bio, isExpanded]);

  return (
    <article
      ref={articleRef}
      onClick={() => onActivate(id, articleRef.current)}
      className={[
        "block shrink-0 overflow-hidden rounded-3xl border border-border bg-card shadow-card",
        CARD_WIDTH,
        CARD_SPACING,
        "motion-reduce:snap-center",
        isCentered ? "ring-4 ring-accent" : "",
      ].join(" ")}
    >
      {/* Photo box: fixed 5:4 ratio of the card's width, so it is identical
          across every card. Full brightness, no dark wash, clipped by the
          card's own top corners (rounded-t-[inherit] picks up the radius
          set on the article above). */}
      <div className="relative aspect-[5/4] w-full overflow-hidden rounded-t-[inherit]">
        {munk.photo ? (
          <img
            src={munk.photo}
            alt=""
            loading="lazy"
            width={360}
            height={288}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center ${FALLBACK_TONE}`}>
            <span aria-hidden="true" className="font-display text-6xl font-semibold text-accent-ink">
              {munk.initials}
            </span>
          </div>
        )}

        {/* Top strip: stage pill left, verification pills right. */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-1.5 p-3">
          <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold tracking-wide text-accent-foreground uppercase">
            {munk.stage}
          </span>
          <div className="flex items-center gap-1">
            <VerificationPill label="WWCC verified" />
            <VerificationPill label="NESA aligned" />
          </div>
        </div>
      </div>

      {/* Lower body, on white. Every line below has an EXPLICIT height
          equal to its line-height times its clamped line count (not a
          guessed min-height), so a one-word bio and a three-line bio
          produce the exact same box, and the card's overall height falls
          out identical across every card as a result. */}
      <div className="p-4">
        <span id={prefixId} className="sr-only">
          Bring
        </span>
        <button
          type="button"
          id={nameId}
          tabIndex={tabIndex}
          aria-pressed={isCentered}
          aria-labelledby={`${prefixId} ${nameId} ${suffixId}`}
          onClick={(event) => {
            event.stopPropagation();
            onActivate(id, articleRef.current);
          }}
          className="line-clamp-1 h-[24px] w-full overflow-hidden text-left text-xl leading-[24px] font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {munk.firstName}
        </button>
        <span id={suffixId} className="sr-only">
          to the centre
        </span>
        <p className="mt-0.5 line-clamp-1 h-[20px] overflow-hidden text-sm leading-[20px] font-bold text-accent-ink">
          {munk.years}
        </p>
        <p className="mt-1.5 line-clamp-2 h-[32px] overflow-hidden text-xs leading-[16px] text-muted-foreground">
          {munk.education}
        </p>
        <p
          ref={bioRef}
          className={
            isExpanded
              ? "mt-1.5 text-sm leading-[20px] text-muted-foreground"
              : "mt-1.5 line-clamp-3 h-[60px] overflow-hidden text-sm leading-[20px] text-muted-foreground"
          }
        >
          {munk.bio}
        </p>
        {bioOverflows || isExpanded ? (
          <button
            type="button"
            tabIndex={tabIndex}
            onClick={(event) => {
              event.stopPropagation();
              onToggleExpand(id);
            }}
            className="mt-1 text-xs font-semibold text-accent-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        ) : null}

        <div className="mt-3 border-t border-border pt-3">
          <p className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
            Specialties
          </p>
          {/* One row, always: extra chips are clipped by overflow-hidden,
              not wrapped to a second line (flex-nowrap), so the row's
              height never varies either. */}
          <div className="mt-1.5 flex h-[22px] flex-nowrap items-center gap-1 overflow-hidden">
            {munk.specialties.map((specialty) => (
              <span
                key={specialty}
                className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] text-accent-ink"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

// The track's animation state. "auto" is the normal 90 second loop, driven
// by the animate-munk-marquee class. The other three only ever apply an
// inline transform, in sequence, so a click-to-centre glide never snaps:
// "frozen" pins the exact live position with no transition (a single,
// silent paint), then "centering" adds the transition and the target on
// the NEXT paint, then "held" keeps it there once the transition ends.
type TrackMode =
  | { kind: "auto" }
  | { kind: "frozen"; atPx: number }
  | { kind: "centering"; targetPx: number }
  | { kind: "held"; atPx: number };

const MARQUEE_DURATION_SECONDS = 90;

// How far the page has to scroll, in either direction, from the moment a
// card was centred before rotation resumes on its own. Big enough that a
// trackpad twitch or a momentum wobble right after the click does not
// cancel the centring the visitor just asked for.
const SCROLL_RESUME_THRESHOLD_PX = 40;

// How long a touch has to sit idle (no further touchstart) before rotation
// resumes, so a visitor gets a real pause to swipe with but the rail does
// not stay frozen forever afterwards.
const TOUCH_IDLE_RESUME_MS = 1500;

export function MunkRail({
  profiles,
  eyebrow,
  heading,
  body,
  variant = "full",
}: {
  profiles: MunkProfile[];
  // When supplied, a SectionHeading renders above the rail (used on the
  // home page). Left unsupplied on /our-munks, which keeps its existing
  // PageIntro instead and renders no heading here.
  eyebrow?: string | undefined;
  heading?: string | undefined;
  body?: string | undefined;
  // "full": the caption plus Request a Call and Become a Munk (/our-munks).
  // "teaser": the caption plus a single "Meet all our Munks" link back to
  // the canonical tutor page (home). Home already has Request a Call
  // buttons elsewhere on the page.
  variant?: "full" | "teaser" | undefined;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchIdleTimer = useRef<number | null>(null);

  const [mode, setMode] = useState<TrackMode>({ kind: "auto" });
  const [centeredId, setCenteredId] = useState<string | null>(null);
  // Carries the animation-delay (a negative offset into the 90 second
  // cycle) used to resume the loop from wherever it was left, rather than
  // snapping back to the start. Updated only when resuming.
  const [resumeDelay, setResumeDelay] = useState("0s");

  const [hovering, setHovering] = useState(false);
  const [focusedWithin, setFocusedWithin] = useState(false);
  const [touchActive, setTouchActive] = useState(false);
  // A card expanded to show its full bio pauses rotation exactly like
  // hover, focus or touch do, through the same isAutoPaused flag those
  // already drive, rather than a new mechanism. Keyed by card id (real and
  // duplicate ids are distinct strings), so expanding one card can never
  // expand, or pause on behalf of, any other, including its own duplicate.
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());
  const isAutoPaused = hovering || focusedWithin || touchActive || expandedIds.size > 0;

  // The duplicate set only exists to make the CSS loop seamless, it is not
  // real content. Keeping it out of server-rendered markup entirely (not
  // just aria-hidden) means a crawler reading the raw HTML, curl included,
  // sees exactly eight tutors, never sixteen. It mounts a moment after
  // hydration instead.
  const [showDuplicate, setShowDuplicate] = useState(false);
  useEffect(() => {
    setShowDuplicate(true);
  }, []);

  // Advances "centering" to "held" once the CSS transition actually
  // finishes, rather than guessing with a timeout.
  useEffect(() => {
    if (mode.kind !== "centering") return;
    const track = trackRef.current;
    if (!track) return;
    const targetPx = mode.targetPx;
    const handleEnd = () => setMode({ kind: "held", atPx: targetPx });
    track.addEventListener("transitionend", handleEnd, { once: true });
    return () => track.removeEventListener("transitionend", handleEnd);
  }, [mode]);

  // Resumes on scroll: a small threshold of cumulative scroll, in either
  // direction, measured from the moment this card became centred. Only
  // listens while something actually is centred, and re-measures its
  // baseline whenever centeredId changes (including switching straight
  // from one centred card to another).
  useEffect(() => {
    if (centeredId === null) return;
    const startScrollY = window.scrollY;
    function handleScroll() {
      if (Math.abs(window.scrollY - startScrollY) >= SCROLL_RESUME_THRESHOLD_PX) {
        resumeRotation();
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centeredId]);

  // Cleans up the touch idle timer if the component unmounts mid-wait.
  useEffect(() => {
    return () => {
      if (touchIdleTimer.current !== null) {
        window.clearTimeout(touchIdleTimer.current);
      }
    };
  }, []);

  function oneSetWidthPx(track: HTMLElement): number {
    return showDuplicate ? track.scrollWidth / 2 : track.scrollWidth;
  }

  // Starts (or restarts) the idle countdown that clears touchActive, used
  // by both touchend and touchcancel. A fresh touchstart in the meantime
  // cancels this via touchIdleTimer, so a visitor mid-swipe never has the
  // rail cut back in on them.
  function scheduleTouchIdleResume() {
    if (touchIdleTimer.current !== null) window.clearTimeout(touchIdleTimer.current);
    touchIdleTimer.current = window.setTimeout(() => {
      setTouchActive(false);
      touchIdleTimer.current = null;
    }, TOUCH_IDLE_RESUME_MS);
  }

  function resumeRotation() {
    const track = trackRef.current;
    if (!track) {
      setMode({ kind: "auto" });
      setCenteredId(null);
      return;
    }
    const currentPx = readTranslateX(track);
    const setWidth = oneSetWidthPx(track);
    const fraction = setWidth > 0 ? Math.min(1, Math.max(0, -currentPx / setWidth)) : 0;
    setResumeDelay(`-${(fraction * MARQUEE_DURATION_SECONDS).toFixed(3)}s`);
    setMode({ kind: "auto" });
    setCenteredId(null);
  }

  function toggleExpand(id: string) {
    setExpandedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function activateCard(id: string, cardEl: HTMLElement | null) {
    if (!cardEl) return;

    if (prefersReducedMotion()) {
      if (centeredId === id) {
        setCenteredId(null);
      } else {
        cardEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        setCenteredId(id);
      }
      return;
    }

    if (centeredId === id) {
      resumeRotation();
      return;
    }

    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const currentPx = readTranslateX(track);

    // Phase 1: pin exactly where it already is, animation off, no
    // transition. This has to be its own committed paint, or the browser
    // has nothing to transition FROM in phase 2 and the card would jump
    // to 0 first.
    setMode({ kind: "frozen", atPx: currentPx });
    setCenteredId(id);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const wrapperRect = wrapper.getBoundingClientRect();
        const cardRect = cardEl.getBoundingClientRect();
        const delta =
          wrapperRect.left + wrapperRect.width / 2 - (cardRect.left + cardRect.width / 2);
        setMode({ kind: "centering", targetPx: currentPx + delta });
      });
    });
  }

  function handleWrapperKeyDown(event: React.KeyboardEvent) {
    if (event.key !== "Escape" || centeredId === null) return;
    if (prefersReducedMotion()) {
      setCenteredId(null);
    } else {
      resumeRotation();
    }
  }

  let trackStyle: React.CSSProperties;
  if (mode.kind === "auto") {
    trackStyle = {
      animationPlayState: isAutoPaused ? "paused" : "running",
      animationDelay: resumeDelay,
    };
  } else if (mode.kind === "frozen" || mode.kind === "held") {
    trackStyle = { animation: "none", transform: `translateX(${mode.atPx}px)`, transition: "none" };
  } else {
    trackStyle = {
      animation: "none",
      transform: `translateX(${mode.targetPx}px)`,
      transition: "transform 500ms ease-out",
    };
  }

  return (
    <section className="section-y">
      {heading ? (
        <div className="container-page pb-10">
          <SectionHeading eyebrow={eyebrow} heading={heading} body={body} />
        </div>
      ) : null}

      {/* Full-bleed: this scroller is a direct child of the section, not
          inside container-page, so the rail runs edge to edge. The
          caption and buttons below it go back inside container-page. */}
      <div
        ref={wrapperRef}
        className="munk-rail-scrollbar-none overflow-x-auto px-6 motion-reduce:snap-x motion-reduce:snap-mandatory"
        style={{
          // Fixed pixel stops, matching the px-6 (24px) breathing padding
          // above: the fade completes right where that padding ends, so
          // it only ever touches empty space, never a card's own text.
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
          maskImage: "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          // The main way back: look at the tutor, move the mouse on, the
          // rail carries on by itself.
          if (centeredId !== null) resumeRotation();
        }}
        onFocus={() => setFocusedWithin(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setFocusedWithin(false);
          }
        }}
        onTouchStart={() => {
          setTouchActive(true);
          if (touchIdleTimer.current !== null) {
            window.clearTimeout(touchIdleTimer.current);
            touchIdleTimer.current = null;
          }
        }}
        onTouchEnd={scheduleTouchIdleResume}
        onTouchCancel={scheduleTouchIdleResume}
        onKeyDown={handleWrapperKeyDown}
      >
        <div
          ref={trackRef}
          // items-start, not the flex default of stretch: a card with a
          // longer bio (Read more showing, or expanded) must only grow
          // itself, never pull its neighbours taller along with it.
          className="flex w-max items-start animate-munk-marquee motion-reduce:animate-none"
          style={trackStyle}
        >
          {/* Real set: the only one screen readers and search engines
              see. */}
          {profiles.map((munk) => (
            <MunkCardPoster
              key={munk.firstName}
              munk={munk}
              id={munk.firstName}
              isCentered={centeredId === munk.firstName}
              isExpanded={expandedIds.has(munk.firstName)}
              onActivate={activateCard}
              onToggleExpand={toggleExpand}
            />
          ))}
          {/* Duplicate set, purely visual, added client-side only (see
              showDuplicate above). aria-hidden as duplicate content, and
              tabIndex -1 on every control inside each card so a keyboard
              user tabbing through never reaches sixteen tutors, only
              eight. Hidden outright under reduced motion, where the rail
              is a plain single-set scrollable strip. */}
          {showDuplicate ? (
            <div aria-hidden="true" className="flex items-start motion-reduce:hidden">
              {profiles.map((munk) => {
                const duplicateId = `${munk.firstName}-duplicate`;
                return (
                  <MunkCardPoster
                    key={duplicateId}
                    munk={munk}
                    id={duplicateId}
                    tabIndex={-1}
                    isCentered={centeredId === duplicateId}
                    isExpanded={expandedIds.has(duplicateId)}
                    onActivate={activateCard}
                    onToggleExpand={toggleExpand}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <div className="container-page">
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Eight Munks across Primary, High and Senior.
          </p>
          {variant === "teaser" ? (
            // Home page: this section is a teaser, not the canonical tutor
            // page, so it points on to /our-munks rather than duplicating
            // Request a Call, which the home page already has elsewhere.
            <LinkButton label="Meet all our Munks" to="/our-munks" variant="outline" />
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              <CallbackButton label="Request a Call" variant="accent" />
              <LinkButton label="Become a Munk" to="/become-a-tutor" variant="outline" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
