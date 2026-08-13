import { SectionHeading } from "../SectionHeading";

export function PricingTable({
  eyebrow,
  heading,
  columns,
  rows,
  notes,
}: {
  eyebrow?: string;
  heading: string;
  columns: string[];
  rows: { mode: string; detail: string; rates: string[] }[];
  notes?: string[];
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} heading={heading} />
        <div className="mt-10 overflow-x-auto rounded-3xl border border-border bg-card shadow-card">
          <table className="w-full min-w-3xl border-collapse text-left">
            <caption className="sr-only">Tutoring rates by delivery mode and stage</caption>
            <thead>
              <tr className="bg-primary-soft/70">
                {columns.map((column) => (
                  <th key={column} scope="col" className="px-5 py-4 text-sm font-semibold">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.mode} className="border-t border-border">
                  <th scope="row" className="px-5 py-4 align-top">
                    <span className="block text-sm font-semibold">{row.mode}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{row.detail}</span>
                  </th>
                  {row.rates.map((rate, index) => (
                    <td key={`${row.mode}-${columns[index + 1]}`} className="px-5 py-4 text-sm font-semibold text-primary">
                      {rate}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {notes?.length ? (
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
