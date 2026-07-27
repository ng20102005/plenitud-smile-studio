import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/plenitud/LegalPage";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — SR Plenitud Dental" },
      { name: "description", content: "Política de privacidad y tratamiento de datos personales de SR Plenitud Dental." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidad" updatedAt="Julio 2026">
      <p>
        En <strong>SR Plenitud Dental</strong> nos comprometemos a proteger la privacidad de
        nuestros pacientes y usuarios. Esta política explica qué datos recogemos, con qué
        finalidad, la base legal para su tratamiento y los derechos que te asisten.
      </p>

      <LegalSection title="1. Responsable del tratamiento">
        <p>
          Responsable: SR Plenitud Dental.<br />
          Dirección: Carrer d'Andrade, 45, 08020 Sant Martí, Barcelona.<br />
          Correo electrónico: <a className="text-primary hover:underline" href="mailto:srplenitudental@gmail.com">srplenitudental@gmail.com</a><br />
          Teléfono: 933 087 059
        </p>
      </LegalSection>

      <LegalSection title="2. Datos que recogemos">
        <p>
          Podemos recoger datos identificativos (nombre, apellidos, DNI), de contacto (teléfono,
          correo electrónico, dirección postal), datos de salud estrictamente necesarios para
          la prestación del servicio odontológico e información relativa a las citas y
          tratamientos realizados.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalidad y base legal">
        <p>
          Tratamos tus datos con las siguientes finalidades: prestación del servicio dental,
          gestión de citas, facturación, cumplimiento de obligaciones legales sanitarias y,
          previo consentimiento, envío de comunicaciones informativas. La base legal es la
          ejecución del contrato de servicios, el cumplimiento de obligaciones legales y tu
          consentimiento cuando corresponda.
        </p>
      </LegalSection>

      <LegalSection title="4. Conservación">
        <p>
          Conservamos los datos durante el tiempo necesario para cumplir con la finalidad para
          la que fueron recogidos y, en su caso, durante los plazos legales aplicables a la
          documentación clínica (mínimo 5 años desde el alta de cada proceso asistencial, según
          la normativa vigente).
        </p>
      </LegalSection>

      <LegalSection title="5. Destinatarios">
        <p>
          No cedemos tus datos a terceros salvo obligación legal. Podemos contar con proveedores
          de servicios (por ejemplo, gestión de citas online, servicios informáticos) que actúan
          como encargados del tratamiento bajo las debidas garantías contractuales.
        </p>
      </LegalSection>

      <LegalSection title="6. Derechos">
        <p>
          Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación
          y portabilidad enviando un correo a{" "}
          <a className="text-primary hover:underline" href="mailto:srplenitudental@gmail.com">
            srplenitudental@gmail.com
          </a>{" "}
          acreditando tu identidad. También puedes presentar una reclamación ante la Agencia
          Española de Protección de Datos (www.aepd.es).
        </p>
      </LegalSection>
    </LegalPage>
  );
}
