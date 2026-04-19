import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { cormorantGaramond, dmSans, geistMono, geistSans } from "@/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "PKR | Especialistas Tributarios y Contables",
    template: "%s | PKR",
  },
  description:
    "PKR brinda soluciones personalizadas en asesoría tributaria, contabilidad, auditoría y gestión empresarial.",
  keywords: [
    "asesoría tributaria",
    "contabilidad",
    "auditoría financiera",
    "planificación financiera",
    "gestión empresarial",
    "contadores Trujillo",
    "tributarios Perú",
  ],
  metadataBase: new URL("https://pkr.com.pe"),
  openGraph: {
    title: "PKR | Especialistas Tributarios y Contables",
    description: "Soluciones personalizadas en asesoría tributaria y contabilidad.",
    url: "https://pkr.com.pe",
    siteName: "PKR Contadores",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} ${dmSans.variable} antialiased`.trim()}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
