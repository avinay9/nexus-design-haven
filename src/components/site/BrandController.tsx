import { useState } from "react";
import { Settings, Check, X } from "lucide-react";
import { PERSONAS, PersonaId, usePersona } from "./persona";
import { Button } from "@/components/ui/button";

export const BrandController = () => {
  const { persona, setPersona, def } = usePersona();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Brand persona controller"
        className="fixed bottom-6 right-6 z-[60] h-14 w-14 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform border border-border"
        style={{ borderRadius: "9999px" }}
      >
        <Settings className={`h-6 w-6 ${open ? "rotate-90" : ""} transition-transform`} />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[60] w-[340px] max-w-[calc(100vw-2rem)] bg-card border border-border shadow-2xl p-5 rounded-[var(--radius)]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="eyebrow mb-1">Brand Persona</p>
              <h3 className="font-bold text-foreground text-lg leading-tight">
                {def.name}
              </h3>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-xs text-muted-foreground mb-4">
            Switch the global voice, typography, palette and imagery in one click.
          </p>

          <div className="space-y-2">
            {(Object.keys(PERSONAS) as PersonaId[]).map((id) => {
              const p = PERSONAS[id];
              const active = id === persona;
              return (
                <button
                  key={id}
                  onClick={() => setPersona(id)}
                  className={`w-full text-left flex items-center gap-3 p-3 border transition-all rounded-[var(--radius)] ${
                    active
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <span
                    className={`h-8 w-8 shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-card ${p.swatch}`}
                  />
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold text-sm text-foreground truncate">
                      {p.name}
                    </span>
                    <span className="block text-[11px] text-muted-foreground truncate">
                      {p.description}
                    </span>
                  </span>
                  {active && <Check className="h-4 w-4 text-primary shrink-0" />}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <Button
              onClick={() => setOpen(false)}
              className="w-full"
              size="sm"
            >
              Apply
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
