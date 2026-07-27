import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/plenitud/LegalPage";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — SR Plenitud Dental" },
      { name: "description", content: "Aviso legal e información general sobre el sitio web de SR Plenitud Dental." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LegalNoticePage,
});

function LegalNoticePage() {
  return (
    <LegalPage title="Aviso Legal" updatedAt="Julio 2026">
      <p>
        En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los
        usuarios de los datos identificativos del titular de este sitio web.
      </p>

      <LegalSection title="1. Titular del sitio web">
        <p>
          Denominación: SR Plenitud Dental.<br />
          Domicilio: Carrer d'Andrade, 45, 08020 Sant Martí, Barcelona.<br />
          Correo electrónico: <a className="text-primary hover:underline" href="mailto:srplenitudental@gmail.com">srplenitudental@gmail.com</a><br />
          Teléfono: 933 087 059
        </p>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p>
          El presente sitio web tiene por objeto informar sobre los servicios odontológicos que
          ofrece la clínica y facilitar el contacto y la solicitud de cita por parte de los
          usuarios.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de uso">
        <p>
          El acceso a este sitio web es gratuito y no requiere registro previo. El usuario se
          compromete a hacer un uso adecuado de los contenidos y servicios y a no emplearlos
          para incurrir en actividades ilícitas o contrarias a la buena fe.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p>
          Todos los contenidos del sitio (textos, imágenes, logotipos, diseños y código) son
          titularidad de SR Plenitud Dental o de terceros que han autorizado su uso. Queda
          prohibida su reproducción, distribución o modificación sin autorización expresa.
        </p>
      </LegalSection>

      <LegalSection title="5. Responsabilidad">
        <p>
          SR Plenitud Dental no se hace responsable de los daños o perjuicios derivados del uso
          inadecuado del sitio ni de la presencia de virus u otros elementos lesivos que puedan
          producir alteraciones en el sistema informático del usuario.
        </p>
      </LegalSection>

      <LegalSection title="6. Legislación aplicable">
        <p>
          Las presentes condiciones se rigen por la legislación española. Para cualquier
          controversia, las partes se someten a los Juzgados y Tribunales de Barcelona, salvo
          que la normativa aplicable disponga otro fuero.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
