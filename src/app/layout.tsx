import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Footer from "./components/Footer";
import ClientLayout from "./components/ClientLayout";
import ScrollProvider from "@/components/ScrollProvider";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import StructuredData from "./components/StructuredData";
import { GoogleAnalytics } from '@next/third-parties/google';
export const metadata: Metadata = {
  metadataBase: new URL('https://pryzm.agency'),
  title: {
    default: "Thibault Barral – Fondateur & Web Developer | Pryzm Agency – Agence Digitale à Bordeaux",
    template: "%s | Pryzm Agency - Thibault Barral"
  },
  description: "Thibault Barral, fondateur de Pryzm Agency à Bordeaux. Expert en création de sites internet performants, web design UX/UI, développement web, SEO et stratégie d'acquisition digitale. Transformez votre présence en ligne.",
  keywords: [
    "Thibault Barral",
    "Pryzm Agency",
    "agence web Bordeaux",
    "création site internet Bordeaux",
    "développement web Bordeaux",
    "agence digitale Bordeaux",
    "web design UX UI",
    "développement web SEO",
    "création de site internet performant",
    "expert SEO Bordeaux",
    "stratégie digitale Bordeaux",
    "site vitrine",
    "site e-commerce",
    "refonte site web",
    "webdesign Bordeaux",
    "consultant web Bordeaux",
    "freelance développeur web Bordeaux"
  ],
  authors: [
    { name: "Thibault Barral", url: "https://www.linkedin.com/in/thibaultbarral/" },
    { name: "Pryzm Agency" }
  ],
  creator: "Thibault Barral",
  publisher: "Pryzm Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://pryzm.agency",
    siteName: "Pryzm Agency - Thibault Barral",
    title: "Thibault Barral – Fondateur & Web Developer | Pryzm Agency Bordeaux",
    description: "Thibault Barral, fondateur de Pryzm Agency. Expert en création de sites web performants, UX/UI design, développement et SEO à Bordeaux. Boostez votre présence digitale.",
    images: [
      {
        url: "/logo-pryzm.svg",
        width: 1200,
        height: 630,
        alt: "Pryzm Agency - Thibault Barral - Agence Web Bordeaux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thibault Barral – Fondateur & Web Developer | Pryzm Agency",
    description: "Thibault Barral, fondateur de Pryzm Agency. Expert en création de sites web performants, UX/UI design, développement et SEO à Bordeaux.",
    creator: "@thibaultbarral",
    images: ["/logo-pryzm.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://pryzm.agency",
  },
  verification: {
    google: "votre-code-google-search-console", // À remplacer avec votre code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className={GeistSans.className}>
        <ClientLayout>
          <ScrollProvider>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
          </ScrollProvider>
        </ClientLayout>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
