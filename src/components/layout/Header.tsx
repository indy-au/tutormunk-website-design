import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Plus, Minus, X } from "lucide-react";
import { brand, primaryNav } from "@/content/site";
import type { MegaLink } from "@/content/site";
import { getIcon } from "../icons";
import { CallbackButton } from "../CtaButton";
import { Wordmark } from "./Wordmark";

function IconTile({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const Icon = getIcon(name);
  return (
    <span
      aria-hidden="true"
      className={[
        "flex shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink",
        size === "sm" ? "h-7 w-7" : "h-9 w-9",
      ].join(" ")}
    >
      <Icon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
    </span>
  );
}

function MegaRow({
  link,
  compact,
  onNavigate,
}: {
  link: MegaLink;
  compact?: boolean | undefined;
  onNavigate: () => void;
}) {
  return (
    <Link
      to={link.to}
      onClick={onNavigate}
      className={[
        "flex items-start gap-3 rounded-2xl transition-colors hover:bg-secondary",
        compact ? "px-2 py-1.5" : "p-3",
      ].join(" ")}
    >
      {compact ? null : <IconTile name={link.icon} />}
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-foreground">{link.label}</span>
        {link.description && !compact ? (
          <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
            {link.description}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  // Single place that closes the mobile menu, used by every path that can
  // close it (a menu link, the logo, the header's own Close button, and the
  // route-change safety net below). Always resetting openAccordion here too
  // means a closed menu can never reopen mid-expanded, no matter which of
  // those paths closed it.
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenAccordion(null);
  };

  // Safety net: close the mobile menu whenever the route actually changes,
  // not just on a menu-link click. This covers the browser back/forward
  // buttons and any future link rendered outside the mobile menu. It does
  // NOT cover tapping the logo while already on the home page, since the
  // path does not change there, that case is handled by Wordmark's own
  // onNavigate below.
  //
  // This also runs once on mount, closing a menu that is already closed.
  // That is harmless and cannot fight the menu open: it only re-runs when
  // `pathname` changes, and opening the menu does not change the pathname.
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    closeMobileMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-page flex h-24 items-center justify-between gap-4 py-4">
        <Wordmark size="lg" onNavigate={closeMobileMenu} />

        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {primaryNav.map((item) =>
            item.panel ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenPanel(item.label)}
                onMouseLeave={() => setOpenPanel(null)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setOpenPanel(null);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setOpenPanel(null);
                }}
              >
                <Link
                  to={item.to}
                  onClick={() => setOpenPanel(null)}
                  onFocus={() => setOpenPanel(item.label)}
                  aria-expanded={openPanel === item.label}
                  className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2.5 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                  activeProps={{ className: "bg-primary-soft" }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <div
                  className={[
                    "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-opacity",
                    openPanel === item.label ? "visible opacity-100" : "invisible opacity-0",
                    item.panel.width === "extra" ? "w-[52rem]" : "w-[38rem]",
                  ].join(" ")}
                >
                  <div className="rounded-[1.75rem] border border-border bg-card p-7 shadow-lift">
                    <div
                      className={[
                        "grid gap-x-8 gap-y-6",
                        item.panel.columns.length >= 3 ? "grid-cols-3" : "grid-cols-2",
                      ].join(" ")}
                    >
                      {item.panel.columns.map((column, index) => (
                        <div key={column.heading ?? index}>
                          {column.heading ? (
                            <p className="mb-2 flex items-center gap-2 px-2">
                              {column.icon ? <IconTile name={column.icon} size="sm" /> : null}
                              <span className="eyebrow-sm">{column.heading}</span>
                            </p>
                          ) : null}
                          <ul className={item.panel?.compact ? "space-y-0.5" : "space-y-1"}>
                            {column.links.map((link) => (
                              <li key={link.label}>
                                <MegaRow
                                  link={link}
                                  compact={item.panel?.compact}
                                  onNavigate={() => setOpenPanel(null)}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground">{item.panel.note}</p>
                      <Link
                        to={item.panel.footerTo}
                        onClick={() => setOpenPanel(null)}
                        className="flex items-center gap-2 text-sm font-semibold text-accent-ink underline decoration-accent decoration-2 underline-offset-4"
                      >
                        {item.panel.footerIcon ? <IconTile name={item.panel.footerIcon} size="sm" /> : null}
                        {item.panel.footerLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="whitespace-nowrap rounded-full px-3 py-2.5 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                activeProps={{ className: "bg-primary-soft" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={`tel:${brand.phoneDial}`}
            className="whitespace-nowrap text-base font-semibold text-foreground"
          >
            {brand.phone}
          </a>
          <CallbackButton label="Request a Call" className="whitespace-nowrap px-6 py-4 text-base" />
        </div>

        <button
          type="button"
          onClick={() => (mobileOpen ? closeMobileMenu() : setMobileOpen(true))}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold xl:hidden"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/*
        Known behaviour, not fixed here: the page behind this panel is not
        scroll-locked, so a visitor can still scroll the background page
        while the mobile menu is open. Flagged for the owner to decide on
        separately, out of scope for the "menu stays open after the logo"
        fix this block was touched for.
      */}
      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-border bg-card xl:hidden">
          <nav aria-label="Mobile" className="container-page space-y-4 py-5">
            {primaryNav.map((item) =>
              item.panel ? (
                <div key={item.label} className="border-b border-border pb-3">
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      to={item.to}
                      onClick={closeMobileMenu}
                      className="text-base font-semibold"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenAccordion((current) => (current === item.label ? null : item.label))
                      }
                      aria-expanded={openAccordion === item.label}
                      aria-label={`${openAccordion === item.label ? "Hide" : "Show"} ${item.label} links`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border"
                    >
                      {openAccordion === item.label ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {openAccordion === item.label ? (
                    <div className="mt-3 space-y-3 border-l border-border pl-4">
                      {item.panel.columns.map((column, index) => (
                        <div key={column.heading ?? index}>
                          {column.heading ? <p className="eyebrow-sm">{column.heading}</p> : null}
                          <ul className="mt-1 space-y-1.5">
                            {column.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  to={link.to}
                                  onClick={closeMobileMenu}
                                  className="text-sm text-muted-foreground"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        to={item.panel.footerTo}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 text-sm font-semibold text-accent-ink"
                      >
                        {item.panel.footerIcon ? <IconTile name={item.panel.footerIcon} size="sm" /> : null}
                        {item.panel.footerLabel}
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className="block text-base font-semibold"
                >
                  {item.label}
                </Link>
              ),
            )}
            <CallbackButton label="Request a Call" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
