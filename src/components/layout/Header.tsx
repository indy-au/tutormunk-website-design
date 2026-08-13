import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { brand, primaryNav } from "@/content/site";
import type { MegaLink } from "@/content/site";
import { CallbackButton } from "../CtaButton";
import { Wordmark } from "./Wordmark";

function MegaIcon({ icon }: { icon: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-xs font-bold text-primary"
    >
      {icon}
    </span>
  );
}

function MegaRow({ link, compact }: { link: MegaLink; compact?: boolean | undefined }) {
  return (
    <Link
      to={link.to}
      className={[
        "flex items-start gap-3 rounded-2xl transition-colors hover:bg-secondary",
        compact ? "px-2 py-1.5" : "p-3",
      ].join(" ")}
    >
      <MegaIcon icon={link.icon} />
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

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.panel ? (
              <div key={item.label} className="group relative">
                <Link
                  to={item.to}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  activeProps={{ className: "bg-primary-soft" }}
                >
                  {item.label}
                  <span aria-hidden="true" className="text-[0.6rem]">
                    &#9662;
                  </span>
                </Link>
                <div
                  className={[
                    "invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
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
                            <p className="eyebrow mb-2 px-2">{column.heading}</p>
                          ) : null}
                          <ul className={item.panel?.compact ? "space-y-0.5" : "space-y-1"}>
                            {column.links.map((link) => (
                              <li key={link.label}>
                                <MegaRow link={link} compact={item.panel?.compact} />
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
                        className="text-sm font-semibold text-accent-foreground underline decoration-accent decoration-2 underline-offset-4"
                      >
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
                className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                activeProps={{ className: "bg-primary-soft" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${brand.phoneDial}`} className="text-sm font-semibold text-muted-foreground">
            {brand.phone}
          </a>
          <CallbackButton label="Request a Call" />
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          className="rounded-full border border-border px-4 py-2 text-sm font-semibold lg:hidden"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-border bg-card lg:hidden">
          <nav aria-label="Mobile" className="container-page space-y-4 py-5">
            {primaryNav.map((item) =>
              item.panel ? (
                <div key={item.label} className="border-b border-border pb-3">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenAccordion((current) => (current === item.label ? null : item.label))
                    }
                    aria-expanded={openAccordion === item.label}
                    className="flex w-full items-center justify-between text-base font-semibold"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-xs">
                      {openAccordion === item.label ? "\u2212" : "+"}
                    </span>
                  </button>
                  {openAccordion === item.label ? (
                    <div className="mt-3 space-y-3 border-l border-border pl-4">
                      {item.panel.columns.map((column, index) => (
                        <div key={column.heading ?? index}>
                          {column.heading ? <p className="eyebrow">{column.heading}</p> : null}
                          <ul className="mt-1 space-y-1.5">
                            {column.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  to={link.to}
                                  onClick={() => setMobileOpen(false)}
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
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm font-semibold text-accent-foreground"
                      >
                        {item.panel.footerLabel}
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
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
