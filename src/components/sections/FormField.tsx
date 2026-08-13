export type FieldSpec = {
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
};

export function FormField({ field, idPrefix }: { field: FieldSpec; idPrefix: string }) {
  const id = `${idPrefix}-${field.label.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
  const control =
    "mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div className={field.type === "textarea" ? "sm:col-span-2" : undefined}>
      <label htmlFor={id} className="block text-sm font-semibold">
        {field.label}
      </label>
      {field.type === "textarea" ? (
        <textarea id={id} rows={4} placeholder={field.placeholder} className={control} />
      ) : field.type === "select" ? (
        <select id={id} className={control} defaultValue="">
          <option value="" disabled>
            Please select
          </option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input id={id} type={field.type} placeholder={field.placeholder} className={control} />
      )}
    </div>
  );
}
