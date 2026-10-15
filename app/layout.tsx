import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iar.ro"),
  title: {
    template: "%s | IAR S.A. BRAȘOV",
    default: "IAR S.A. BRAȘOV — Producție Aeronautică, MRO & Modernizări Elicoptere",
  },
  description:
    "IAR S.A. Brașov — Unicul fabricant de elicoptere din România. Centru industrial autorizat EASA Part 145 pentru mentenanță de nivel D, revizii majore, modernizări și suport flote Puma și Alouette III.",
  keywords: [
    "IAR Brasov",
    "IAR 330 Puma",
    "IAR 316B Alouette III",
    "MRO elicoptere",
    "mentenanta aeronautica",
    "Bursa de Valori Bucuresti IARV",
    "Ghimbav Brasov",
    "EASA Part 145",
    "AQAP 2110",
    "EN 9100",
  ],
  authors: [{ name: "IAR S.A. Brașov" }],
  creator: "IAR S.A. Brașov",
  publisher: "IAR S.A. Brașov",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://www.iar.ro",
    siteName: "IAR S.A. BRAȘOV",
    title: "IAR S.A. BRAȘOV — Aerospace Engineering & MRO",
    description:
      "Unicul fabricant de elicoptere din România. Centru european autorizat pentru mentenanță de Nivel D, modernizare și integrare de sisteme.",
    images: [
      {
        url: "/images/hero-puma.jpeg",
        width: 1200,
        height: 630,
        alt: "IAR 330 Puma - IAR S.A. Brașov",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${fontSans.variable} ${fontMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#070e18] text-[#F8FAFC] antialiased selection:bg-[#0284C7] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
