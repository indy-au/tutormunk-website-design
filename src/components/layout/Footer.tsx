import { Link, useLocation } from "@tanstack/react-router";
import { brand, footer } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const pathname = useLocation({ select: (location) => location.pathname });

  return (
    <footer className="mt-8 border-t border-border bg-surface text-surface-foreground">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2.8fr]">
          <div className="max-w-sm">
            <Wordmark tone="dark" />
            <p className="mt-4 text-sm leading-relaxed text-surface-foreground/75">{footer.blurb}</p>
            <dl className="mt-6 space-y-1 text-sm">
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>{brand.phone}</dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>{brand.email}</dd>
              </div>
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="text-surface-foreground/75">{brand.centreAddress}</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footer.columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                {/* Visually hidden, not deleted: text-primary on bg-surface
                    is roughly 1.05 to 1, both dark greens, effectively
                    invisible either way, so the owner asked for no visible
                    heading at all rather than a contrast fix. The heading
                    stays in the markup, sr-only, so a screen reader still
                    hears four labelled groups instead of one run of
                    eighteen links. */}
                <h2 className="sr-only">{column.heading}</h2>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        onClick={() => {
                          // Cross-page navigation already resets scroll on its own.
                          // Same-page clicks are a router no-op, so scroll up ourselves.
                          if (link.to === pathname) {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        className="text-sm text-surface-foreground/80 transition-colors hover:text-surface-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-surface-foreground/15 pt-6 text-xs text-surface-foreground/60">
          {footer.legal}
        </p>
      </div>
    </footer>
  );
}
