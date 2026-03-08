import "./globals.css";
import type { Metadata } from "next";
import { geistMono, geistSans } from "@/fonts";

export const metadata: Metadata = {
  title: "PKR | Especialistas Tributarios y Contables",
  description:
    "PKR brinda soluciones personalizadas en asesoría tributaria, contabilidad, auditoría y gestión empresarial.",
  keywords:
    "asesoría tributaria, contabilidad, auditoría financiera, planificación financiera, gestión empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
