import { Fragment, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { Block } from "@/lib/markdown";

// Renders inline markdown (**bold** and [text](url)) inside a block's text
// as real React nodes. Internal links (starting with "/") use the router's
// Link so they behave like any other in-site link; external links get a
// plain anchor with target/rel. Keeps the loader itself free of any JSX.
const INLINE_PATTERN = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  INLINE_PATTERN.lastIndex = 0;
  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }
    const [, boldText, linkText, linkHref] = match;
    if (boldText !== undefined) {
      nodes.push(<strong key={key++}>{boldText}</strong>);
    } else if (linkText !== undefined && linkHref !== undefined) {
      const isInternal = linkHref.startsWith("/");
      nodes.push(
        isInternal ? (
          <Link key={key++} to={linkHref} className="font-semibold text-accent-ink underline underline-offset-2">
            {linkText}
          </Link>
        ) : (
          <a
            key={key++}
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent-ink underline underline-offset-2"
          >
            {linkText}
          </a>
        ),
      );
    }
    lastIndex = INLINE_PATTERN.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }
  return nodes;
}

export function BlogArticle({
  heading,
  category,
  date,
  readingTime,
  heroImage,
  body,
}: {
  heading: string;
  category: string;
  date: string;
  readingTime: string;
  heroImage: string;
  body: Block[];
}) {
  return (
    <article>
      <div className="h-64 w-full overflow-hidden md:h-[26rem]">
        <img src={heroImage} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="container-page max-w-2xl pt-9 pb-14 md:pb-20">
        <p className="eyebrow-sm">{category}</p>
        <h1 className="mt-3 text-3xl leading-tight md:text-4xl">{heading}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {date} · {readingTime}
        </p>

        <div className="mt-9">
          {body.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} className="mt-9 text-2xl">
                  {renderInline(block.text)}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3 key={index} className="mt-7 text-xl">
                  {renderInline(block.text)}
                </h3>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="mt-7 border-l-4 border-accent pl-5 font-display text-xl leading-snug"
                >
                  {renderInline(block.text)}
                </blockquote>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{renderInline(item)}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="mt-5 text-base leading-loose text-foreground/90">
                {renderInline(block.text)}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
