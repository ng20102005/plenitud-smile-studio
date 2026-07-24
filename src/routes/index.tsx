import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Menu,
  X,
  MapPin,
  Mail,
  Clock,
  Stethoscope,
  Sparkles,
  Smile,
  ShieldCheck,
  Wand2,
  AlignHorizontalDistributeCenter,
} from "lucide-react";
import { Placeholder } from "@/components/plenitud/Placeholder";
import { AppointmentModal, TREATMENTS } from "@/components/plenitud/AppointmentModal";

export const Route = createFileRoute("/")({
  component: Landing,
});

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Contacto", href: "#contacto" },
];

const TREATMENT_ITEMS = [
  {
    title: "Odontología General",
    desc: "Revisiones, limpiezas, empastes y todo el cuidado esencial para mantener tu salud bucal en perfecto estado.",
    Icon: Stethoscope,
  },
  {
    title: "Periodoncia",
    desc: "Cuidado especializado de encías y tejidos de soporte dental. Prevención y tratamiento de enfermedades periodontales.",
    Icon: ShieldCheck,
  },
  {
    title: "Implantología y Prótesis",
    desc: "Recupera la funcionalidad y estética de tu sonrisa con implantes de última generación y prótesis personalizadas.",
    Icon: Sparkles,
  },
  {
    title: "Estética y Rehabilitación",
    desc: "Blanqueamiento, carillas, coronas y diseño de sonrisa. Recupera la belleza natural de tu sonrisa con tratamientos personalizados.",
    Icon: Wand2,
  },
  {
    title: "Endodoncia",
    desc: "Tratamiento de conductos con tecnología microscópica de precisión. Salvamos tus dientes naturales con técnicas mínimamente invasivas.",
    Icon: Smile,
  },
  {
    title: "Ortodoncia",
    desc: "Corregimos la alineación de tus dientes con brackets estéticos y alineadores invisibles. Logra la sonrisa recta y armoniosa que siempre has deseado.",
    Icon: AlignHorizontalDistributeCenter,
  },
];

function Landing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const openModal = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header
        onOpenModal={openModal}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <Hero onOpenModal={openModal} />
        <About onOpenModal={openModal} />
        <Treatments />
      </main>
      <Footer />
      <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

function Header({
  onOpenModal,
  menuOpen,
  setMenuOpen,
}: {
  onOpenModal: () => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/30 font-serif text-sm font-semibold text-primary">
            SR
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            SR PLENITUD DENTAL
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton onClick={onOpenModal}>Pedir Cita</CtaButton>
        </div>

        <button
          className="rounded-lg p-2 text-foreground lg:hidden"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2">
              <CtaButton onClick={onOpenModal} className="w-full justify-center">
                Pedir Cita
              </CtaButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function CtaButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}

function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="inicio" className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-32 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-24 lg:pb-40">
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Sant Martí · Barcelona
          </span>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] font-semibold tracking-tight text-foreground lg:text-7xl">
            Tu sonrisa <br />
            <span className="italic text-primary">en Plenitud</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground lg:text-xl">
            Cuidado dental de confianza en el corazón de Sant Martí, Barcelona.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#tratamientos"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Ver Tratamientos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:933087059"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/5"
            >
              <Phone className="h-4 w-4" />
              Llamar Ahora
            </a>
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <Placeholder
            className="h-[420px] w-full rounded-[2rem] lg:h-[560px]"
            label="Fotografía de la clínica"
            dimensions="1200×1400"
          />
        </div>
      </div>

      {/* Floating banner */}
      <div className="relative -mt-20 px-6 pb-16 lg:pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl lg:grid-cols-[1.1fr_1fr_auto] lg:items-center lg:gap-10 lg:p-10">
          <p className="font-serif text-2xl leading-tight font-medium lg:text-3xl">
            tu mejor sonrisa <br />
            <span className="italic opacity-90">empieza aquí.</span>
          </p>
          <p className="text-sm text-primary-foreground/80 lg:text-base">
            Da el primer paso hacia una sonrisa que te enamore.
          </p>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-background/90"
            >
              Pedir Cita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="tel:933087059"
              className="text-xs font-medium tracking-widest text-primary-foreground/80 uppercase hover:text-primary-foreground"
            >
              Tel 933 08 70 59
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section
      id="sobre-nosotros"
      className="bg-[oklch(0.965_0.014_85)] py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Placeholder
          className="h-[500px] w-full rounded-3xl lg:h-[640px]"
          label="Equipo de la clínica"
          dimensions="900×1200"
        />
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold tracking-[0.25em] text-primary uppercase">
            Sobre Nosotros
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-semibold text-foreground lg:text-5xl">
            Tu clínica dental de barrio, con alma de alta gama.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            En Plenitud Dental creemos que cuidar tu sonrisa no debería ser un
            lujo frío e impersonal. Somos una clínica de proximidad en el
            corazón de Sant Martí donde combinamos la calidez del trato cercano
            con los estándares más exigentes de la odontología moderna.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Un equipo que te escucha de verdad y un espacio diseñado para que te
            sientas como en casa. Porque tu bienestar empieza por una sonrisa
            cuidada con mimo.
          </p>
          <div className="mt-8">
            <a
              href="#tratamientos"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("tratamientos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Descubre nuestros tratamientos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 lg:hidden">
            <CtaButton onClick={onOpenModal}>Pedir Cita</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section id="tratamientos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.25em] text-primary uppercase">
            Especialidades
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-semibold text-foreground lg:text-5xl">
            Nuestros Tratamientos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Odontología integral con tecnología avanzada y un cuidado siempre
            personal.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {TREATMENT_ITEMS.map(({ title, desc, Icon }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Placeholder
                className="aspect-square w-full"
                label={`Imagen de ${title}`}
                dimensions="800×800"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[oklch(0.28_0.09_262)] text-[oklch(0.92_0.01_85)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 font-serif text-sm font-semibold text-white">
                SR
              </span>
              <span className="font-serif text-lg font-semibold tracking-tight text-white">
                SR PLENITUD DENTAL
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Clínica dental en Sant Martí. Tecnología avanzada, equipo cercano
              y un espacio pensado para tu bienestar.
            </p>
          </div>

          <FooterCol title="Contacto">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
              <span>Carrer d'Andrade, 45, Sant Martí, Barcelona</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-white/60" />
              <a href="tel:933087059" className="hover:text-white">933 087 059</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-white/60" />
              <a href="tel:692434765" className="hover:text-white">692 434 765</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-white/60" />
              <a href="mailto:srplenitudental@gmail.com" className="hover:text-white break-all">
                srplenitudental@gmail.com
              </a>
            </li>
          </FooterCol>

          <FooterCol title="Horario">
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
              <span>Lunes a viernes: 10:00–14:00 &amp; 15:00–19:00</span>
            </li>
            <li className="pl-6 text-white/60">Sábados y domingos cerrado</li>
          </FooterCol>

          <FooterCol title="Legal">
            <li><a href="#" className="hover:text-white">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-white">Aviso Legal</a></li>
            <li><a href="#" className="hover:text-white">Política de Cookies</a></li>
            <li className="pt-2 text-xs text-white/60">
              Tratamientos: {TREATMENTS.length} especialidades
            </li>
          </FooterCol>
        </div>

        <div className="mt-14 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          2026 — Plenitud Dental · Privacidad · Cookies
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-[0.25em] text-white uppercase">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm text-white/80">{children}</ul>
    </div>
  );
}
