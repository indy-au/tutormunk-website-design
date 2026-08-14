import { Link } from "@tanstack/react-router";
import { categoryLabel, formatBlogDate } from "@/lib/markdown";
import type { BlogPost } from "@/lib/blogLoader";

function FeaturedCard({ post }: { post: BlogPost }) {
  const { frontmatter } = post;
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: frontmatter.slug }}
      className="grid overflow-hidden rounded-4xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift md:grid-cols-2"
    >
      <div className="h-56 w-full overflow-hidden md:h-full">
        <img src={post.heroImage} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-center p-7 md:p-9">
        <p className="eyebrow">{categoryLabel(frontmatter.category)}</p>
        <h2 className="mt-3 text-2xl md:text-3xl">{frontmatter.heading}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{frontmatter.metaDescription}</p>
        <p className="mt-5 text-xs text-muted-foreground">{formatBlogDate(frontmatter.date)}</p>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const { frontmatter } = post;
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: frontmatter.slug }}
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
    >
      <div className="h-40 w-full overflow-hidden">
        <img src={post.heroImage} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{categoryLabel(frontmatter.category)}</p>
        <h3 className="mt-2 text-xl leading-snug">{frontmatter.heading}</h3>
        <p className="mt-2 line-clamp-1 text-sm leading-relaxed text-muted-foreground">
          {frontmatter.metaDescription}
        </p>
        <p className="mt-auto pt-5 text-xs text-muted-foreground">{formatBlogDate(frontmatter.date)}</p>
      </div>
    </Link>
  );
}

export function BlogList({
  posts,
  categories,
  activeCategory,
}: {
  posts: BlogPost[];
  categories: { slug: string; label: string }[];
  activeCategory?: string | undefined;
}) {
  const [featured, ...rest] = posts;

  return (
    <section className="section-y">
      <div className="container-page">
        {categories.length > 0 ? (
          <nav aria-label="Filter by category" className="flex flex-wrap gap-2">
            <Link
              to="/blog"
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                !activeCategory
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground hover:bg-muted",
              ].join(" ")}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                to="/blog"
                search={{ category: category.slug }}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  activeCategory === category.slug
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground hover:bg-muted",
                ].join(" ")}
              >
                {category.label}
              </Link>
            ))}
          </nav>
        ) : null}

        {featured ? (
          <div className="mt-8">
            <FeaturedCard post={featured} />
          </div>
        ) : (
          <p className="mt-8 text-base text-muted-foreground">No articles in this category yet.</p>
        )}

        {rest.length > 0 ? (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <li key={post.frontmatter.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
