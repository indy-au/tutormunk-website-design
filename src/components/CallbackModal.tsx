import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { callbackModal } from "@/content/site";

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

function CallbackDialog({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 p-4 sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-title"
        className="w-full max-w-md rounded-3xl bg-card p-6 shadow-lift sm:p-8"
      >
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
        <p className="mt-3 text-sm text-muted-foreground">{callbackModal.intro}</p>
        <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
          {callbackModal.fields.map((field) => (
            <div key={field.label}>
              <label className="block text-sm font-semibold" htmlFor={`callback-${field.label}`}>
                {field.label}
              </label>
              <input
                id={`callback-${field.label}`}
                type={field.type}
                placeholder={field.placeholder}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {callbackModal.submitLabel}
          </button>
          <p className="text-center text-xs text-muted-foreground">{callbackModal.note}</p>
        </form>
      </div>
    </div>
  );
}
