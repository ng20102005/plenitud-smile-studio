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
        <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            SR PLENITUD DENTAL
          </span>
          <button
            aria-label="Cerrar"
            onClick={onClose}
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6">
          <h2 id="appointment-title" className="font-serif text-2xl font-semibold text-foreground">
            Reserva tu cita
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Completa el formulario y te contactaremos para confirmar tu visita
          </p>

          <form
            className="mt-6 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FloatInput label="Nombre" name="nombre" required />
              <FloatInput label="Teléfono" name="telefono" type="tel" required />
            </div>
            <FloatInput label="Correo electrónico" name="email" type="email" required />

            <div>
              <label className="block text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Tratamiento de interés
              </label>
              <select
                required
                defaultValue=""
                className="mt-1 w-full border-0 border-b border-border bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
              >
                <option value="" disabled>
                  Selecciona un tratamiento
                </option>
                {TREATMENTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Mensaje
              </label>
              <textarea
                maxLength={500}
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntanos qué necesitas o el horario que prefieres..."
                className="mt-1 w-full resize-none border-0 border-b border-border bg-transparent py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
              />
              <div className="mt-1 text-right text-xs text-muted-foreground">
                {message.length}/500
              </div>
            </div>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
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

function FloatInput({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </label>
      <input
        {...rest}
        className="mt-1 w-full border-0 border-b border-border bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
