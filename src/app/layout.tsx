import type { Metadata } from "next";
import { Archivo, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: "variable",
  axes: ["wdth"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: "variable",
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Academic Side Quest — where curiosity turns into conversations",
    template: "%s · Academic Side Quest",
  },
  description:
    "A twice-a-month community exploring psychology research, human behaviour, and ideas worth obsessing over. Come for the papers, stay for the rabbit holes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${inter.variable} ${playfair.variable} font-body antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <div
          aria-hidden
          className="grain pointer-events-none fixed inset-0 z-[90] opacity-[0.04] mix-blend-soft-light"
        />
      </body>
    </html>
  );
}
