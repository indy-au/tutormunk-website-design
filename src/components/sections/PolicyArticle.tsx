import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Block } from "@/lib/markdown";
import { renderInline } from "./BlogArticle";
import { CallbackButton } from "../CtaButton";
import { Breadcrumb } from "../Breadcrumb";

export function PolicyArticle({
  name,
  body,
}: {
  name: string;
  body: Block[];
}) {
  return (
    <article className="section-y">
      <div className="container-page">
        <div className="max-w-[70ch]">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Policies", to: "/policies" }, { label: name }]} />
        </div>

        <h1 className="mt-4 max-w-[70ch] text-3xl leading-tight md:text-4xl">{name}</h1>

        {/* Roughly 70 characters per line at this font size and width, the
            readable measure the brief asks for. Tables carry their own
            horizontal scroll below rather than being squeezed into it,
            wide columns (the Child Safe Standards mapping, the data
            retention schedule) need more room than prose does. */}
        <div className="mt-9 max-w-[70ch]">
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
            if (block.type === "table") {
              return (
                <div key={index} className="mt-7 overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted">
                        {block.header.map((cell, cellIndex) => (
                          <th key={cellIndex} scope="col" className="p-3 font-semibold text-foreground">
                            {renderInline(cell)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-border last:border-b-0">
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="p-3 align-top text-muted-foreground">
                              {cell ? renderInline(cell) : null}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return (
              <p key={index} className="mt-5 text-base leading-loose text-foreground/90">
                {renderInline(block.text)}
              </p>
            );
          })}
        </div>

        <div className="mt-12 flex max-w-[70ch] flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <Link
            to="/policies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-ink"
          >
            <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
            Back to Policies
          </Link>
          <CallbackButton label="Request a Call" variant="accent" />
        </div>
      </div>
    </article>
  );
}
