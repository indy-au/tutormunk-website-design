import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

// Plain nav/ol, not the unused shadcn breadcrumb primitive already sitting
// in src/components/ui/breadcrumb.tsx. That component's generality (asChild
// slots, separate list/item/link/page/ellipsis pieces) buys nothing for a
// two or three item trail, and it renders a plain <a>, not the router's own
// Link, so a real reused component here is both simpler and correct.
export function Breadcrumb({ items }: { items: { label: string; to?: string | undefined }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 ? <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" /> : null}
              {item.to && !isLast ? (
                <Link to={item.to} className="hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "font-medium text-foreground" : ""}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
