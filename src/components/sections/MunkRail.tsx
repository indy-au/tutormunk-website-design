import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { CallbackButton, LinkButton } from "../CtaButton";
import { SectionHeading } from "../SectionHeading";
import type { MunkProfile } from "@/content/munks";

// Fixed card footprint so every card is identical regardless of how much
// text a tutor sends, the single most important detail in this design.
// aspect-[5/7] means only the width needs to be set, height follows.
const CARD_SIZE = "w-[clamp(250px,26vw,360px)] aspect-[5/7]";

// Spacing lives on each card (a right margin), not as a flex `gap` on the
// track or on the two set wrappers. Every card, including the very last one
// of each set, gets the same margin, so every card occupies an identical
// "cell" of card-width-plus-spacing. That is what makes 50% of the track's
// total width land exactly on one set's width, see the marquee comment in
// styles.css.
const CARD_SPACING = "mr-5";

// Three existing dark tokens, rotated so no two adjacent cards look the
// same while a real headshot is still missing. primary and surface alone
// read as near-identical, accent-ink adds real, visible variety without
// introducing a new colour.
const FALLBACK_TONES = ["bg-primary", "bg-accent-ink", "bg-surface"] as const;

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Reads the live translateX in pixels off an element, animated or not. */
function readTranslateX(el: HTMLElement): number {
  const value = getComputedStyle(el).transform;
  if (value === "none") return 0;
  return new DOMMatrixReadOnly(value).m41;
}

function VerificationPill({
  label,
  tone,
}: {
  label: string;
  tone: "solid" | "translucent";
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold",
        tone === "solid"
          ? "bg-card text-foreground"
          : "border border-primary-foreground/40 bg-primary-foreground/15 text-primary-foreground",
      ].join(" ")}
    >
      <Check className="h-3 w-3" aria-hidden="true" />
      {label}
    </span>
  );
}

function MunkCardPoster({
  munk,
  id,
  toneIndex,
  tabIndex,
  isCentered,
  onActivate,
}: {
  munk: MunkProfile;
  id: string;
  toneIndex: number;
  tabIndex?: number | undefined;
  isCentered: boolean;
  onActivate: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
}) {
  const fallbackTone = FALLBACK_TONES[toneIndex % FALLBACK_TONES.length];
  // aria-labelledby references the visible name paragraph below rather
  // than repeating the tutor's name in a separate aria-label string. Same
  // accessible name ("Bring Anne M. to the centre"), but the name itself
  // only ever exists once in the HTML, not twice. aria-labelledby splits
  // on whitespace, so the id has to be space-free even though names like
  // "Anne M." are not, hence the slug.
  const slug = id.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const nameId = `munk-name-${slug}`;
  const prefixId = `munk-prefix-${slug}`;
  const suffixId = `munk-suffix-${slug}`;

  return (
    <button
      type="button"
      onClick={onActivate}
      tabIndex={tabIndex}
      aria-labelledby={`${prefixId} ${nameId} ${suffixId}`}
      aria-pressed={isCentered}
      className={[
        "relative block shrink-0 overflow-hidden rounded-[30px] text-left",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        CARD_SIZE,
        CARD_SPACING,
        "motion-reduce:snap-center",
        isCentered ? "ring-4 ring-accent" : "",
      ].join(" ")}
    >
      {/* Photo layer, fills the card. */}
      <div className="absolute inset-0">
        {munk.photo ? (
          <img
            src={munk.photo}
            alt=""
            loading="lazy"
            width={360}
            height={504}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center ${fallbackTone}`}>
            <span
              aria-hidden="true"
              className="font-display text-[5rem] font-semibold text-primary-foreground/30"
            >
              {munk.initials}
            </span>
          </div>
        )}
      </div>

      {/* Dark gradient veil so white text always passes contrast, even over
          a photo, per CLAUDE.md's contrast rule. */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/55 to-surface/5" />

      {/* Top strip: stage pill left, verification pills right. Type sizes
          unchanged from the original, larger card, only the padding
          shrank to suit the smaller card. */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-1.5 p-3">
        <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold tracking-wide text-accent-foreground uppercase">
          {munk.stage}
        </span>
        <div className="flex items-center gap-1">
          <VerificationPill label="WWCC verified" tone="solid" />
          <VerificationPill label="NESA aligned" tone="translucent" />
        </div>
      </div>

      {/* Bottom body block. Every line below has an EXPLICIT height equal
          to its line-height times its clamped line count (not a guessed
          min-height), so a one-word bio and a three-line bio produce the
          exact same box. overflow-hidden plus line-clamp both apply:
          line-clamp gives the "..." affordance, the explicit height is
          what actually guarantees identical cards. */}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <span id={prefixId} className="sr-only">
          Bring
        </span>
        <p
          id={nameId}
          className="line-clamp-1 h-[24px] overflow-hidden text-xl leading-[24px] font-semibold text-primary-foreground"
        >
          {munk.firstName}
        </p>
        <span id={suffixId} className="sr-only">
          to the centre
        </span>
        <p className="mt-0.5 line-clamp-1 h-[20px] overflow-hidden text-sm leading-[20px] font-bold text-accent">
          {munk.years}
        </p>
        <p className="mt-1.5 line-clamp-2 h-[32px] overflow-hidden text-xs leading-[16px] text-primary-foreground/80">
          {munk.education}
        </p>
        <p className="mt-1.5 line-clamp-3 h-[60px] overflow-hidden text-sm leading-[20px] text-primary-foreground/90">
          {munk.bio}
        </p>
        <div className="mt-3 border-t border-primary-foreground/20 pt-3">
          <p className="text-[10px] font-bold tracking-[0.12em] text-primary-foreground/55 uppercase">
            Specialties
          </p>
          <div className="mt-1.5 flex h-[22px] flex-wrap content-start gap-1 overflow-hidden">
            {munk.specialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full border border-primary-foreground/30 px-2 py-0.5 text-[11px] text-primary-foreground/90"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
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
  const isAutoPaused = hovering || focusedWithin || touchActive;

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

  function activateCard(id: string, cardEl: HTMLButtonElement) {
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
          className="flex w-max animate-munk-marquee motion-reduce:animate-none"
          style={trackStyle}
        >
          {/* Real set: the only one screen readers and search engines
              see. */}
          {profiles.map((munk, index) => (
            <MunkCardPoster
              key={munk.firstName}
              munk={munk}
              id={munk.firstName}
              toneIndex={index}
              isCentered={centeredId === munk.firstName}
              onActivate={(event) => activateCard(munk.firstName, event.currentTarget)}
            />
          ))}
          {/* Duplicate set, purely visual, added client-side only (see
              showDuplicate above). aria-hidden as duplicate content, and
              tabIndex -1 on every card so a keyboard user tabbing through
              never reaches sixteen tutors, only eight. Hidden outright
              under reduced motion, where the rail is a plain single-set
              scrollable strip. */}
          {showDuplicate ? (
            <div aria-hidden="true" className="flex motion-reduce:hidden">
              {profiles.map((munk, index) => {
                const duplicateId = `${munk.firstName}-duplicate`;
                return (
                  <MunkCardPoster
                    key={duplicateId}
                    munk={munk}
                    id={duplicateId}
                    toneIndex={index}
                    tabIndex={-1}
                    isCentered={centeredId === duplicateId}
                    onActivate={(event) => activateCard(duplicateId, event.currentTarget)}
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
