import { createFileRoute } from "@tanstack/react-router";
import { NotFoundComponent } from "./__root";

// Static-export spike only (Phase 3A). A real, ordinary route (HTTP 200)
// so it can be prerendered to a real 404.html file, reusing the exact same
// markup as the root's client-side notFoundComponent. See the comment on
// NotFoundComponent in __root.tsx for why this exists as its own route.
export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Page not found | TutorMunk" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFoundComponent,
});
