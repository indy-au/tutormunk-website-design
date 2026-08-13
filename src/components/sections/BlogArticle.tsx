type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] };

export function BlogArticle({
  meta,
  heading,
  standfirst,
  imageCaption,
  body,
}: {
  meta: { category: string; date: string; readingTime: string; author: string };
  heading: string;
  standfirst: string;
  imageCaption: string;
  body: Block[];
}) {
  return (
    <article className="section-y">
      <div className="container-page max-w-2xl">
        <p className="eyebrow">{meta.category}</p>
        <h1 className="mt-3 text-3xl leading-tight md:text-4xl">{heading}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{standfirst}</p>
        <p className="mt-5 text-sm text-muted-foreground">
          {meta.author}, {meta.date}, {meta.readingTime}
        </p>

        <figure className="mt-8">
          <div
            role="img"
            aria-label={imageCaption}
            className="aspect-16/9 rounded-3xl bg-primary-soft"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">{imageCaption}</figcaption>
        </figure>

        <div className="mt-9">
          {body.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} className="mt-9 text-2xl">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="mt-7 border-l-4 border-accent pl-5 font-display text-xl leading-snug"
                >
                  {block.text}
                </blockquote>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="mt-5 text-base leading-loose text-foreground/90">
                {block.text}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
