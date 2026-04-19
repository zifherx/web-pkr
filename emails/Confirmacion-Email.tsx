import { FC } from "react";
import { Body, Container, Head, Heading, Hr, Html, Text } from "react-email";

import { CONTACTO_EMAIL_PROPS } from "@/types";

export const ConfirmacionEmail: FC<Readonly<CONTACTO_EMAIL_PROPS>> = ({ propsEmail }) => {
  const { nombre_completo } = propsEmail;

  return (
    <Html lang="es">
      <Head />
      <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f4f4f5" }}>
        <Container style={{ maxWidth: "480px", margin: "40px auto" }}>
          <Heading style={{ fontSize: "20px", marginBottom: "4px" }}>Hola, {nombre_completo}</Heading>
          <Text style={{ color: "#71717a", fontSize: "13px", marginTop: 0 }}>
            Recibimos tu mensaje correctamente. Un asesor de PKR se comunicará contigo en menos de 24 horas hábiles.
          </Text>
          <Text>Gracias por contactarnos.</Text>
          <Hr style={{ borderColor: "#e4e4e7" }} />
          <Text style={{ fontSize: "12px", color: "#999" }}>PKR - pkr.com.pe</Text>
        </Container>
      </Body>
    </Html>
  );
};
