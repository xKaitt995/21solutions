import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "21 solutions",
  description: "Consultora boutique de élite en Ciberseguridad, IA e Infraestructuras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
