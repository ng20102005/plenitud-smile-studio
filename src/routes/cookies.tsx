import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/plenitud/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — SR Plenitud Dental" },
      { name: "description", content: "Información sobre el uso de cookies en el sitio web de SR Plenitud Dental." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalPage title="Política de Cookies" updatedAt="Julio 2026">
      <p>
        Este sitio web utiliza cookies y tecnologías similares para garantizar su correcto
        funcionamiento y mejorar la experiencia de navegación. A continuación te explicamos qué
        son las cookies, qué tipos utilizamos y cómo puedes gestionarlas.
      </p>

      <LegalSection title="1. ¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en el
          dispositivo del usuario para recordar información sobre la visita, como el idioma
          preferido u otras opciones, con el fin de mejorar la experiencia de uso.
        </p>
      </LegalSection>

      <LegalSection title="2. Tipos de cookies que utilizamos">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Cookies técnicas:</strong> imprescindibles para el funcionamiento del sitio
            (navegación, carga de recursos, seguridad). No requieren consentimiento.
          </li>
          <li>
            <strong>Cookies de personalización:</strong> permiten recordar preferencias del
            usuario, como el idioma o la región.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> nos ayudan a entender de forma anónima cómo se
            utiliza el sitio para poder mejorarlo. Solo se activan con tu consentimiento.
          </li>
          <li>
            <strong>Cookies de terceros:</strong> pueden instalarse al integrar contenido
            externo (por ejemplo, Instagram, Google Fonts o servicios de reserva de cita).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Gestión y desactivación de cookies">
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo
          configurando las opciones de tu navegador. Consulta la ayuda de tu navegador para
          saber cómo hacerlo (Chrome, Firefox, Safari, Edge, etc.). Ten en cuenta que
          deshabilitar ciertas cookies puede afectar al correcto funcionamiento del sitio.
        </p>
      </LegalSection>

      <LegalSection title="4. Actualización">
        <p>
          Podemos actualizar esta política de cookies para adaptarla a novedades normativas o
          técnicas. Te recomendamos revisarla periódicamente. Para cualquier duda puedes
          escribirnos a{" "}
          <a className="text-primary hover:underline" href="mailto:srplenitudental@gmail.com">
            srplenitudental@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
