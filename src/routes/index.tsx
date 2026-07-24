import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Menu,
  X,
  MapPin,
  Mail,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { Placeholder } from "@/components/plenitud/Placeholder";
import { AppointmentModal } from "@/components/plenitud/AppointmentModal";
import logoAsset from "@/assets/logo_plenitud.png.asset.json";
import plenitud5Asset from "@/assets/plenitud_5.jpg.asset.json";
import clinicaExteriorAsset from "@/assets/clinica_exterior.jpeg.asset.json";

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
  },
  {
    title: "Periodoncia",
    desc: "Cuidado especializado de encías y tejidos de soporte dental. Prevención y tratamiento de enfermedades periodontales.",
  },
  {
    title: "Implantología y Prótesis",
    desc: "Recupera la funcionalidad y estética de tu sonrisa con implantes de última generación y prótesis personalizadas.",
  },
  {
    title: "Estética y Rehabilitación",
    desc: "Blanqueamiento, carillas, coronas y diseño de sonrisa. Recupera la belleza natural de tu sonrisa con tratamientos personalizados.",
  },
  {
    title: "Endodoncia",
    desc: "Tratamiento de conductos con tecnología microscópica de precisión. Salvamos tus dientes naturales con técnicas mínimamente invasivas.",
  },
  {
    title: "Ortodoncia",
    desc: "Corregimos la alineación de tus dientes con brackets estéticos y alineadores invisibles. Logra la sonrisa recta y armoniosa que siempre has deseado.",
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
      <Header onOpenModal={openModal} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Treatments />
        <PhotoBanner onOpenModal={openModal} />
      </main>
      <Footer />
      <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

/* ---------- Brand mark ---------- */
function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/40 font-serif text-xs font-semibold text-primary">
        SR
      </span>
      <span
        className={
          compact
            ? "font-serif text-sm font-semibold tracking-[0.22em] text-primary"
            : "font-serif text-sm font-semibold tracking-[0.22em] text-primary sm:text-base"
        }
      >
        PLENITUD DENTAL
      </span>
    </div>
  );
}

/* ---------- Header ---------- */
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
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="#inicio" className="shrink-0">
          <BrandMark />
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
          <PrimaryCta onClick={onOpenModal}>Pedir Cita</PrimaryCta>
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
              <PrimaryCta onClick={onOpenModal} className="w-full justify-center">
                Pedir Cita
              </PrimaryCta>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function PrimaryCta({
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
      className={`group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}

/* ---------- Hero (centered with monogram + wavy decoration) ---------- */
function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <WavyLines />
      <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-24 text-center lg:pt-28 lg:pb-32">
        <div className="mx-auto flex flex-col items-center">
          <img
            src={logoAsset.url}
            alt="SR Plenitud Dental"
            className="h-56 w-auto lg:h-72"
          />
        </div>

        <h1 className="mt-10 font-serif text-5xl leading-[1.05] font-semibold tracking-tight text-foreground lg:text-7xl">
          Tu sonrisa en Plenitud
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground lg:text-lg">
          Cuidado dental de confianza en el corazón de Sant Martí, Barcelona.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#tratamientos"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Ver Tratamientos
          </a>
          <a
            href="tel:933087059"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-white/60 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-white"
          >
            <Phone className="h-4 w-4" />
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}

function WavyLines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full text-[oklch(0.78_0.08_80)]/40"
      preserveAspectRatio="none"
      viewBox="0 0 1200 800"
      fill="none"
    >
      {[0, 40, 80, 120, 160].map((o, i) => (
        <path
          key={i}
          d={`M -50 ${260 + o} C 250 ${200 + o}, 500 ${340 + o}, 800 ${240 + o} S 1250 ${180 + o}, 1300 ${260 + o}`}
          stroke="currentColor"
          strokeWidth={0.6}
          fill="none"
          opacity={0.9 - i * 0.12}
        />
      ))}
    </svg>
  );
}

function ToothIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7.5 3.5C5.5 3.5 4 5 4 7.2c0 1.4.4 2.5.8 3.6.4 1 .7 2 .7 3.2 0 1.4.2 3 .9 4.4.5 1 1.3 1.6 2 1.6.7 0 1.1-.5 1.4-1.6l.6-2.2c.2-.8.7-1.4 1.6-1.4s1.4.6 1.6 1.4l.6 2.2c.3 1.1.7 1.6 1.4 1.6.7 0 1.5-.6 2-1.6.7-1.4.9-3 .9-4.4 0-1.2.3-2.2.7-3.2.4-1.1.8-2.2.8-3.6C20 5 18.5 3.5 16.5 3.5c-1.4 0-2.4.5-3.2 1-.6.4-1 .7-1.3.7-.3 0-.7-.3-1.3-.7-.8-.5-1.8-1-3.2-1z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="sobre-nosotros" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <span className="inline-block rounded-full border border-border px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-foreground/80 uppercase">
          Sobre Nosotros
        </span>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <img
            src={plenitud5Asset.url}
            alt="Sillón odontológico en Plenitud Dental"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-sm"
          />
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl leading-[1.1] font-semibold text-foreground lg:text-5xl">
              Tu <span className="italic">clínica dental</span> de barrio, con alma de alta gama.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              En <span className="font-semibold text-foreground">Plenitud Dental</span> creemos
              que cuidar tu sonrisa no debería ser un lujo frío e impersonal. Somos una clínica
              de proximidad en el corazón de Sant Martí donde combinamos la calidez del trato
              cercano con los estándares más exigentes de la odontología moderna.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Un equipo que te escucha de verdad y un espacio diseñado para que te sientas como
              en casa. Porque tu bienestar empieza por una sonrisa cuidada con mimo.
            </p>
            <div className="mt-8">
              <a
                href="#tratamientos"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Descubre nuestros tratamientos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Treatments ---------- */
function Treatments() {
  return (
    <section id="tratamientos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl font-semibold text-foreground lg:text-5xl">
          Nuestros Tratamientos
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TREATMENT_ITEMS.map(({ title, desc }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-4 pb-0">
                <Placeholder
                  className="aspect-square w-full rounded-xl"
                  label={`Imagen de ${title}`}
                  dimensions="800 × 800"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-6 pt-5 pb-8 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Photo banner ---------- */
function PhotoBanner({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative">
      <div className="relative h-[420px] w-full overflow-hidden lg:h-[520px]">
        <img
          src={clinicaExteriorAsset.url}
          alt="Fachada de la clínica Plenitud Dental en Sant Martí"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/50" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 lg:px-8">
          <h2 className="max-w-2xl font-serif text-4xl leading-tight font-medium text-white lg:text-6xl">
            tu mejor <br />
            sonrisa empieza <br />
            <span className="italic">aquí.</span>
          </h2>

          <div className="mt-8 flex flex-col items-start gap-3">
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-sm font-semibold text-primary transition-all hover:bg-white/90"
            >
              Pedir Cita
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
            <a
              href="tel:933087059"
              className="text-xs font-semibold tracking-[0.25em] text-white/90 uppercase hover:text-white"
            >
              Tel 933 08 70 59
            </a>
          </div>

          <div className="absolute right-6 bottom-8 hidden max-w-xs items-start gap-2 text-right text-white/90 lg:flex lg:right-8">
            <p className="text-sm leading-snug">
              Da el primer paso hacia <br /> una sonrisa que te enamore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer id="contacto" className="bg-background px-4 pt-14 pb-10 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-10 shadow-sm ring-1 ring-border/40 lg:p-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandMark />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Clínica dental en Sant Martí. Tecnología avanzada, equipo cercano y un espacio
              pensado para tu bienestar.
            </p>
          </div>

          <FooterCol title="Contacto">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
              <span>Carrer d'Andrade, 45, Sant Martí, Barcelona</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
              <a href="tel:933087059" className="hover:text-primary">933 087 059</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
              <a href="https://wa.me/34692434765" target="_blank" rel="noopener noreferrer" className="hover:text-primary">692 434 765</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
              <a href="mailto:srplenitudental@gmail.com" className="break-all hover:text-primary">
                srplenitudental@gmail.com
              </a>
            </li>
          </FooterCol>

          <FooterCol title="Horario">
            <li className="text-foreground">Lunes a Viernes</li>
            <li>10:00 – 14:00</li>
            <li>15:00 – 19:00</li>
            <li className="pt-2">Sábados y domingos cerrado</li>
          </FooterCol>

          <FooterCol title="Legal">
            <li><a href="#" className="hover:text-primary">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-primary">Aviso Legal</a></li>
            <li><a href="#" className="hover:text-primary">Política de Cookies</a></li>
          </FooterCol>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <ToothIcon className="h-4 w-4 text-primary/60" />
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Plenitud Dental &nbsp;|&nbsp; Privacidad &nbsp;|&nbsp; Cookies</p>
          <a
            href="#"
            aria-label="Instagram"
            className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold tracking-[0.28em] text-primary uppercase">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </ul>
    </div>
  );
}
