import { X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const TREATMENTS = [
  "Odontología General",
  "Periodoncia",
  "Implantología y Prótesis",
  "Estética y Rehabilitación",
  "Endodoncia",
  "Ortodoncia",
] as const;

export function AppointmentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 fade-in duration-200"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/30 font-serif text-xs font-semibold text-primary">
              SR
            </span>
            <span className="font-serif text-sm font-semibold tracking-[0.2em] text-primary">
              PLENITUD DENTAL
            </span>
          </div>
          <button
            aria-label="Cerrar"
            onClick={onClose}
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 pb-6">
          <h2 id="appointment-title" className="font-serif text-2xl font-semibold text-foreground">
            Reserva tu cita
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Completa el formulario y te contactaremos para confirmar tu visita.
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Nombre" required>
                <input required placeholder="Tu nombre" className={inputCls} />
              </Field>
              <Field label="Teléfono" required>
                <input required type="tel" placeholder="600 000 000" className={inputCls} />
              </Field>
            </div>

            <Field label="Correo electrónico" required>
              <input required type="email" placeholder="tu@email.com" className={inputCls} />
            </Field>

            <Field label="Tratamiento de interés">
              <select defaultValue="" className={inputCls}>
                <option value="" disabled>
                  Selecciona un tratamiento
                </option>
                {TREATMENTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            <Field label={`Mensaje (${message.length}/500)`}>
              <textarea
                maxLength={500}
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntanos qué necesitas o el horario que prefieres..."
                className={`${inputCls} resize-none`}
              />
            </Field>

            <button
              type="submit"
              className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Solicitar Cita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
