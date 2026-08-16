import { Link } from "@tanstack/react-router";
import { categoryLabel, formatBlogDate } from "@/lib/markdown";
import type { BlogPost } from "@/lib/blogLoader";

export function MoreAdvice({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="section-y bg-secondary">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl">More advice.</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.frontmatter.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.frontmatter.slug }}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="h-36 w-full overflow-hidden">
                  <img src={post.heroImage} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="eyebrow-sm">{categoryLabel(post.frontmatter.category)}</p>
                  <h3 className="mt-2 text-base leading-snug">{post.frontmatter.heading}</h3>
                  <p className="mt-auto pt-3 text-xs text-muted-foreground">
                    {formatBlogDate(post.frontmatter.date)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
