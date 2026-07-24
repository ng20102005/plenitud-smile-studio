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
const logoAsset = "/logo_plenitud.png";
const plenitud5Asset = "/plenitud_5.jpg";
const clinicaExteriorAsset = "/clinica_exterior.jpeg";
const trGeneral = "/tratamiento_general.png";
const trPeriodoncia = "/tratamiento_periodoncia.png";
const trImplantologia = "/tratamiento_implantologia.png";
const trEstetica = "/tratamiento_estetica.png";
const trEndodoncia = "/tratamiento_endodoncia.png";
const trOrtodoncia = "/tratamiento_ortodoncia.png";

export const Route = createFileRoute("/")({
  component: Landing,
});

const APPOINTMENT_URL = "https://www.doctoralia.es/clinicas/plenitud-dental";
const INSTAGRAM_URL = "https://www.instagram.com/plenituddental/";
const WHATSAPP_URL = "https://wa.me/34692434765";

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
    image: trGeneral.url,
  },
  {
    title: "Periodoncia",
    desc: "Cuidado especializado de encías y tejidos de soporte dental. Prevención y tratamiento de enfermedades periodontales.",
    image: trPeriodoncia.url,
  },
  {
    title: "Implantología y Prótesis",
    desc: "Recupera la funcionalidad y estética de tu sonrisa con implantes de última generación y prótesis personalizadas.",
    image: trImplantologia.url,
  },
  {
    title: "Estética y Rehabilitación",
    desc: "Blanqueamiento, carillas, coronas y diseño de sonrisa. Recupera la belleza natural de tu sonrisa con tratamientos personalizados.",
    image: trEstetica.url,
  },
  {
    title: "Endodoncia",
    desc: "Tratamiento de conductos con tecnología microscópica de precisión. Salvamos tus dientes naturales con técnicas mínimamente invasivas.",
    image: trEndodoncia.url,
  },
  {
    title: "Ortodoncia",
    desc: "Corregimos la alineación de tus dientes con brackets estéticos y alineadores invisibles. Logra la sonrisa recta y armoniosa que siempre has deseado.",
    image: trOrtodoncia.url,
  },
];

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Treatments />
        <PhotoBanner />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

/* ---------- Appointment link (reusable) ---------- */
function AppointmentLink({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={APPOINTMENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
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
  menuOpen,
  setMenuOpen,
}: {
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

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-primary/80 transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <AppointmentLink>Pedir Cita</AppointmentLink>
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
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
              Instagram
            </a>
            <div className="mt-2">
              <AppointmentLink
                onClick={() => setMenuOpen(false)}
                className="w-full justify-center"
              >
                Pedir Cita
              </AppointmentLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
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
          <AppointmentLink className="px-6 py-3">Pedir Cita</AppointmentLink>
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
      className="pointer-events-none absolute inset-0 h-full w-full text-primary/25"
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
          {TREATMENT_ITEMS.map(({ title, desc, image }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-4 pb-0">
                <img
                  src={image}
                  alt={title}
                  className="aspect-square w-full rounded-xl object-cover"
                  loading="lazy"
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
function PhotoBanner() {
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
            <a
              href={APPOINTMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-sm font-semibold text-primary transition-all hover:bg-white/90"
            >
              Pedir Cita
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
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

/* ---------- Floating WhatsApp button ---------- */
function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor" aria-hidden>
        <path d="M19.11 17.24c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.8 1.18 2.99.15.19 2.04 3.12 4.95 4.37.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.03 5.33h-.01c-5.91 0-10.71 4.8-10.71 10.71 0 1.89.49 3.74 1.44 5.37L5 27l5.74-1.5c1.57.86 3.35 1.32 5.28 1.32h.01c5.9 0 10.71-4.8 10.71-10.71 0-2.86-1.11-5.55-3.14-7.58a10.66 10.66 0 0 0-7.57-3.2zm0 19.42h-.01a8.9 8.9 0 0 1-4.53-1.24l-.32-.19-3.4.89.91-3.31-.21-.34a8.87 8.87 0 0 1-1.36-4.72c0-4.9 3.99-8.89 8.9-8.89 2.37 0 4.6.92 6.28 2.6a8.83 8.83 0 0 1 2.6 6.29c0 4.9-3.99 8.9-8.87 8.9z" />
      </svg>
    </a>
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
            <div className="mt-6">
              <h4 className="text-[11px] font-semibold tracking-[0.28em] text-primary uppercase">
                Síguenos
              </h4>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
                @plenituddental
              </a>
            </div>
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
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">692 434 765</a>
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
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
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
