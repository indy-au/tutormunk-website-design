import { Link } from "@tanstack/react-router";

export function BlogList({
  posts,
}: {
  posts: { slug: string; title: string; excerpt: string; date: string; readingTime: string; category: string }[];
}) {
  return (
    <section className="section-y">
      <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
          >
            <div
              role="img"
              aria-label={`Colour block for the article ${post.title}`}
              className="h-32 rounded-2xl bg-accent-soft"
            />
            <p className="mt-5 eyebrow">{post.category}</p>
            <h2 className="mt-2 text-xl leading-snug">
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <p className="mt-5 text-xs text-muted-foreground">
              {post.date}, {post.readingTime}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
