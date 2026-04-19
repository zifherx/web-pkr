import { FC } from "react";

import { Body, Container, Head, Heading, Hr, Html, Section, Text } from "react-email";

import { CONTACTO_EMAIL_PROPS } from "@/types";

export const ContactoEmail: FC<Readonly<CONTACTO_EMAIL_PROPS>> = ({ propsEmail }) => {
  const { email, mensaje, nombre_completo, servicio_interes, telefono, empresa, fecha } = propsEmail;

  return (
    <Html lang="es">
      <Head />
      <Body style={{ backgroundColor: "#f4f4f5", fontFamily: "sans-serif" }}>
        <Container
          style={{ background: "#fff", padding: "32px", borderRadius: "8px", margin: "40px auto", maxWidth: "520px" }}
        >
          <Heading style={{ fontSize: "20px", marginBottom: "4px" }}>Nuevo mensaje de contacto</Heading>
          <Text style={{ color: "#71717a", fontSize: "13px", marginTop: 0 }}>Recibido desde el formulario web</Text>
          <Hr style={{ borderColor: "#e4e4e7" }} />
          <Section>
            <Text>
              <strong>Nombre:</strong> {nombre_completo}
            </Text>
            {empresa && (
              <Text>
                <strong>Empresa:</strong> {empresa}
              </Text>
            )}
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Teléfono:</strong> {telefono}
            </Text>
            <Text>
              <strong>Servicio de interes:</strong> {servicio_interes}
            </Text>
            <Text>
              <strong>Fecha:</strong> {fecha}
            </Text>
          </Section>
          <Hr style={{ borderColor: "#e4e4e7" }} />
          <Text style={{ whiteSpace: "pre-wrap" }}>{mensaje}</Text>
        </Container>
      </Body>
    </Html>
  );
};
