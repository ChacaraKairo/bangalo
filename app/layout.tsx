import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bangalodesign.com.br"),
  title: {
    default: "Bangalô Design | Quiosques, lojas e espaços comerciais sob medida",
    template: "%s | Bangalô Design"
  },
  description:
    "Showroom digital conceitual da Bangalô Design: projetos comerciais, quiosques, lojas, mobiliário e experiências 3D para marcas.",
  openGraph: {
    title: "Bangalô Design",
    description:
      "Projetos comerciais sob medida com arquitetura, design, engenharia e visualização 3D.",
    url: "https://bangalodesign.com.br",
    siteName: "Bangalô Design",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/projects/quiosque-interno-38.webp", width: 1000, height: 563 }]
  },
  icons: {
    icon: "/brand/icon.png",
    apple: "/brand/icon.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
