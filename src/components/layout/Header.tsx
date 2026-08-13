import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { brand, primaryNav } from "@/content/site";
import { CallbackButton } from "../CtaButton";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.groups ? (
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
                <div className="invisible absolute left-0 top-full w-[34rem] pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid grid-cols-3 gap-5 rounded-2xl border border-border bg-card p-5 shadow-lift">
                    {item.groups.map((group) => (
                      <div key={group.heading}>
                        <p className="eyebrow">{group.heading}</p>
                        <ul className="mt-2 space-y-1.5">
                          {group.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                to={link.to}
                                className="block rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
          <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-sm font-semibold text-muted-foreground">
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
            {primaryNav.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-semibold"
                >
                  {item.label}
                </Link>
                {item.groups ? (
                  <div className="mt-2 space-y-3 border-l border-border pl-4">
                    {item.groups.map((group) => (
                      <div key={group.heading}>
                        <p className="eyebrow">{group.heading}</p>
                        <ul className="mt-1 space-y-1">
                          {group.links.map((link) => (
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
                  </div>
                ) : null}
              </div>
            ))}
            <CallbackButton label="Request a Call" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
