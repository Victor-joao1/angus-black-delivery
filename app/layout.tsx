import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angus Black | Hamburgueria Artesanal",
  description:
    "Peça online os hambúrgueres artesanais da Angus Black — carne de verdade, fogo e sabor. Delivery em Jaconé, Saquarema - RJ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-body">{children}</body>
    </html>
  );
}
