import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import { brand, callbackModal, type CallbackField } from "@/content/site";

type CallbackContextValue = { open: () => void; close: () => void; isOpen: boolean };

const CallbackContext = createContext<CallbackContextValue | null>(null);

export function useCallbackModal() {
  const ctx = useContext(CallbackContext);
  if (!ctx) throw new Error("useCallbackModal must be used inside CallbackModalProvider");
  return ctx;
}

export function CallbackModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <CallbackContext.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen ? <CallbackDialog onClose={close} /> : null}
    </CallbackContext.Provider>
  );
}

// ACMA allocates Australian mobiles as 04 plus 8 digits, and landlines as
// 02, 03, 07 or 08 plus 8 digits. Nothing else is a personal Australian
// number: 1300, 1800 and 13 numbers are business inbound lines, and every
// overseas number fails to normalise into this shape at all.
const ALLOWED_PHONE_CHARS = /^[0-9+()\-.\s]+$/;

// Fixed 18 Aug 2026: two bugs here let non-Australian numbers through.
// See CLAUDE.md's Request a Call section for details, do not reintroduce
// either.
function normaliseAuPhone(raw: string): string {
  const value = raw.trim();
  // A phone number contains digits and separators, nothing else. Letters
  // and other characters are not stripped and ignored, they invalidate
  // the whole input, otherwise "my number is 0412345678" validates.
  if (!ALLOWED_PHONE_CHARS.test(value)) return "";
  // "+" is only ever a leading country code marker.
  if (value.indexOf("+") > 0) return "";
  let d = value.replace(/[^\d+]/g, "");
  if (d.startsWith("+61")) d = "0" + d.slice(3);
  else if (d.startsWith("0061")) d = "0" + d.slice(4);
  else if (d.startsWith("61") && d.length === 11) d = "0" + d.slice(2);
  else return d; // no country code was present, take the number exactly as typed
  // Only reachable when a +61/0061/61 prefix was just replaced, so this
  // collapses "+61 (0)4..." and can no longer strip the leading zero of
  // an international 00-prefixed number.
  if (d.startsWith("00")) d = d.slice(1);
  return d;
}
// Mobiles are 04 plus 8 digits. Geographic numbers are 02/03/07/08 plus
// an 8-digit subscriber number that can never begin with 0 (the trunk
// prefix) or 1 (reserved for 13/1300/1800/1900). Deliberately allows
// 2-9 rather than today's exact per-state ranges (02 is 4-9, 03 is 4-9,
// 07 is 2-5, 08 is 5-9): ACMA releases new ranges over time, and wrongly
// turning away a real parent costs more than accepting an unallocated
// but structurally valid number.
const AU_PHONE = /^(?:04\d{8}|0[2378][2-9]\d{7})$/;

type FieldName = CallbackField["name"];
const FIELD_ORDER: FieldName[] = ["name", "phone", "email"];

// Letters in any script, plus the punctuation that appears in real names.
// Must START with a letter, so "!!!!a" and "$$$ FREE MONEY a" cannot pass.
// Deliberately excludes digits, @, <, >, /, newlines and every other symbol.
// Fixed 18 Aug 2026: the previous "at least one letter anywhere" rule
// accepted scripts, email addresses, URLs and a newline-based mail-header
// injection payload, see CLAUDE.md's Request a Call section.
const NAME_ALLOWED = /^[\p{L}\p{M}][\p{L}\p{M}'’.\- ]*$/u;

function validateName(raw: string): string | null {
  const value = raw.trim();
  if (value.length < 2 || value.length > 80) return "Please enter your full name.";
  if (!NAME_ALLOWED.test(value)) return "Please enter your full name.";
  return null;
}

// Used only to decide whether to show the phone field's error immediately,
// while the visitor is still typing, before blur. True once the input can
// no longer possibly resolve to a valid number no matter what is typed
// next: a character outside ALLOWED_PHONE_CHARS, or more digits than the
// longest valid input ("0061412345678", 13 digits) could ever have.
// Valid-so-far input is left alone, so this never nags mid-typing.
function isPhoneBeyondRecovery(value: string): boolean {
  if (value === "") return false;
  if (!ALLOWED_PHONE_CHARS.test(value)) return true;
  const digitCount = (value.match(/\d/g) ?? []).length;
  return digitCount > 13;
}

function validatePhone(raw: string): string | null {
  const value = raw.trim();
  if (!value) return "Please enter your phone number.";
  if (!AU_PHONE.test(normaliseAuPhone(value))) {
    return "Please enter a valid Australian mobile or landline number, for example 0412 345 678.";
  }
  return null;
}

// Local part and domain checked separately from the overall shape, rather
// than one dense regex, so "reject leading/trailing dots and consecutive
// dots" is something a reader can actually verify by eye against the code,
// not just trust.
function validateEmail(raw: string): string | null {
  const value = raw.trim();
  if (!value) return "Please enter your email address.";

  const invalid = "Please enter a valid email address.";
  const atIndex = value.indexOf("@");
  if (atIndex <= 0 || atIndex !== value.lastIndexOf("@")) return invalid;

  const local = value.slice(0, atIndex);
  const domain = value.slice(atIndex + 1);
  if (!domain.includes(".")) return invalid;
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) return invalid;
  if (domain.startsWith(".") || domain.endsWith(".") || domain.includes("..")) return invalid;
  // RFC 1035: a domain label cannot begin or end with a hyphen.
  if (domain.split(".").some((l) => l.length === 0 || l.startsWith("-") || l.endsWith("-"))) {
    return invalid;
  }

  const EMAIL_SHAPE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!EMAIL_SHAPE.test(value)) return invalid;

  return null;
}

const VALIDATORS: Record<FieldName, (value: string) => string | null> = {
  name: validateName,
  phone: validatePhone,
  email: validateEmail,
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

function CallbackDialog({ onClose }: { onClose: () => void }) {
  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const mountTimeRef = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  // Recomputed fresh from the current values on every render, deliberately
  // not read off `errors`: `errors` only fills in once a field has been
  // blurred or submit attempted, so it cannot tell whether an untouched
  // field is currently valid. The submit button needs to know that from
  // the first keystroke, with no field ever having been touched yet.
  const allValid = FIELD_ORDER.every((name) => VALIDATORS[name](values[name]) === null);

  function handleChange(name: FieldName, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    // Not on every keystroke, only once this field has already shown an
    // error, so it can clear (or, if the new value is invalid a different
    // way, update) the moment the user fixes it.
    if (touched[name]) {
      setErrors((current) => ({ ...current, [name]: VALIDATORS[name](value) ?? undefined }));
      return;
    }
    // The phone field is the exception: once typing can no longer possibly
    // resolve to a valid number, show the error immediately rather than
    // waiting for blur, so a visitor typing a long or garbled number gets
    // feedback instead of a silently dead submit button. Gated strictly on
    // isPhoneBeyondRecovery, not on whether an error happens to already be
    // showing: valid-so-far input (even right after a beyond-recovery value
    // is corrected) is deliberately left untouched here and falls back to
    // waiting for blur, so this never re-validates on every keystroke while
    // the visitor is still mid-typing.
    if (name === "phone" && isPhoneBeyondRecovery(value)) {
      const phoneError = VALIDATORS.phone(value);
      // Delete rather than assign undefined: with exactOptionalPropertyTypes
      // on, a literal "phone" key (as opposed to the computed [name] key
      // the other two call sites use) type-checks as a specific property,
      // not a generic FieldName-indexed one, so an explicit undefined isn't
      // assignable even though the property is optional.
      setErrors((current) => {
        const next = { ...current };
        if (phoneError) next.phone = phoneError;
        else delete next.phone;
        return next;
      });
    }
  }

  function handleBlur(name: FieldName) {
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: VALIDATORS[name](values[name]) ?? undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<FieldName, string>> = {};
    for (const name of FIELD_ORDER) {
      const error = VALIDATORS[name](values[name]);
      if (error) nextErrors[name] = error;
    }
    setTouched({ name: true, phone: true, email: true });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // The honeypot value and fill time are still sent below so send.php can
    // make the bot/human judgement server side and log what it rejects.
    // Fixed 18 Aug 2026: this used to drop the submission here, silently,
    // whenever either signal looked bot-like. A real parent using browser
    // autofill can complete three fields in under 3 seconds, and a bot
    // posting straight to send.php never runs this code anyway, so a
    // client-side silent drop only ever penalised real visitors. See
    // CLAUDE.md's Request a Call section.
    const honeypotValue = honeypotRef.current?.value ?? "";
    const elapsed = Date.now() - mountTimeRef.current;

    setStatus("submitting");
    try {
      const body = new URLSearchParams({
        name: values.name.trim(),
        phone: normaliseAuPhone(values.phone.trim()),
        email: values.email.trim(),
        website: honeypotValue,
        elapsed: String(elapsed),
      });
      const response = await fetch("/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("send.php returned a non-OK status");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (hasError: boolean) =>
    [
      "mt-1.5 w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring",
      hasError ? "border-destructive" : "border-input",
    ].join(" ");

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 p-4 sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-title"
        className="flex max-h-[90vh] w-full max-w-md flex-col rounded-3xl bg-card shadow-lift"
      >
        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id="callback-title" className="text-2xl">
              {callbackModal.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close request a call form"
              className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted"
            >
              Close
            </button>
          </div>

          {status === "success" ? (
            <p className="mt-6 text-sm text-foreground">
              Thanks for submitting the form. A Munk will get in touch soon.
            </p>
          ) : (
            <>
              <p className="mt-3 text-sm text-muted-foreground">{callbackModal.intro}</p>

              {status === "error" ? (
                <p
                  role="alert"
                  className="mt-4 rounded-xl bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive"
                >
                  Something went wrong. Please call us on{" "}
                  <a
                    href={`tel:${brand.phoneDial}`}
                    className="font-semibold underline underline-offset-2"
                  >
                    {brand.phone}
                  </a>{" "}
                  instead.
                </p>
              ) : null}

              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                {callbackModal.fields.map((field) => {
                  const errorId = `callback-${field.name}-error`;
                  const hasError = Boolean(errors[field.name]);
                  return (
                    <div key={field.name}>
                      <label
                        className="block text-sm font-semibold"
                        htmlFor={`callback-${field.name}`}
                      >
                        {field.label}
                      </label>
                      <input
                        id={`callback-${field.name}`}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        value={values[field.name]}
                        onChange={(event) => handleChange(field.name, event.target.value)}
                        onBlur={() => handleBlur(field.name)}
                        aria-invalid={hasError ? "true" : "false"}
                        aria-describedby={hasError ? errorId : undefined}
                        className={inputClass(hasError)}
                      />
                      {hasError ? (
                        <p id={errorId} className="mt-1.5 text-xs text-destructive">
                          {errors[field.name]}
                        </p>
                      ) : null}
                    </div>
                  );
                })}

                {/* Honeypot: invisible to a person, present in the DOM for
                    a bot that fills in every field it finds. Absolute
                    positioning with a large negative left offset, not
                    display:none, some bots skip fields display:none hides.
                    aria-hidden and tabIndex -1 keep it out of the reach of
                    a real visitor using a screen reader or the keyboard. */}
                <input
                  ref={honeypotRef}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px]"
                />

                <button
                  type="submit"
                  disabled={!allValid || status === "submitting"}
                  className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:hover:bg-muted"
                >
                  {status === "submitting" ? "Sending..." : callbackModal.submitLabel}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
