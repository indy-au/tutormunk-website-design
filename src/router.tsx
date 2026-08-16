import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Extends the router's history state with one custom flag, used only by
// Wordmark.tsx (the logo). Declaring it here keeps the type next to the
// scrollRestoration option below that reads it. HistoryState itself lives
// in @tanstack/history, not @tanstack/router-core, this has to augment the
// package it is actually declared in or TypeScript will not merge it.
declare module "@tanstack/history" {
  interface HistoryState {
    // Set on the logo's own navigation so the router's built-in scroll
    // restoration (below) skips that one navigation entirely, rather than
    // restoring whatever scroll position "/" had saved from before.
    // Wordmark.tsx does the scrolling itself once the navigation lands,
    // then strips this flag straight back out of the browser history
    // entry, so it does not linger and suppress scroll restoration on a
    // later, unrelated visit to that same entry (back/forward included).
    skipOwnScrollRestoration?: boolean;
  }
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // A function rather than a plain `true`, so browser back/forward and
    // every ordinary navigation keep restoring scroll position exactly as
    // before. It only turns off (returns false) for the one navigation
    // Wordmark.tsx flags, see the HistoryState augmentation above. Do not
    // change this back to a bare `true`, that would remove the escape
    // hatch the logo needs and reintroduce the "logo click restores an
    // old scroll position" bug.
    scrollRestoration: (opts) => !opts.location.state.skipOwnScrollRestoration,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
