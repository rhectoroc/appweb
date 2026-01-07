import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adriel's Systems | Soluciones tecnológicas a tu medida",
  description: "Liderazgo tecnológico internacional con más de 20 años de experiencia en desarrollo web, hosting y soluciones digitales.",
  keywords: ["desarrollo web", "hosting", "VPS", "soluciones tecnológicas", "Adriel's Systems"],
};

import Chatbot from "@/components/ui/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
