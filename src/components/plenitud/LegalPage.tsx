import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <span className="font-serif text-sm font-semibold tracking-[0.22em] text-primary">
            PLENITUD DENTAL
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <h1 className="font-serif text-4xl font-semibold text-foreground lg:text-5xl">
          {title}
        </h1>
        {updatedAt && (
          <p className="mt-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Última actualización: {updatedAt}
          </p>
        )}
        <div className="legal-content mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          {children}
        </div>
      </main>

      <footer className="border-t border-border/60 px-6 py-8 text-center text-xs text-muted-foreground">
        © 2026 SR Plenitud Dental — Carrer d'Andrade, 45, Sant Martí, Barcelona
      </footer>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl font-semibold text-foreground">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
