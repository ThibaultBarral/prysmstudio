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
    default: "Pryzm - Agence Web à Bordeaux | Création de Sites Internet",
    template: "%s | Pryzm"
  },
  description: "Agence web à Bordeaux spécialisée dans la création de sites internet performants. Design moderne, développement rapide et stratégie digitale pour développer votre activité en ligne.",
  keywords: [
    "agence web Bordeaux",
    "création site internet Bordeaux",
    "développement web Bordeaux",
    "agence digitale Bordeaux",
    "design web",
    "site vitrine",
    "site e-commerce",
    "refonte site web",
    "SEO Bordeaux",
    "webdesign Bordeaux",
    "agence création site internet"
  ],
  authors: [{ name: "Pryzm" }],
  creator: "Pryzm",
  publisher: "Pryzm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://pryzm.agency",
    siteName: "Pryzm",
    title: "Pryzm - Agence Web à Bordeaux | Création de Sites Internet",
    description: "Agence web à Bordeaux spécialisée dans la création de sites internet performants. Design moderne, développement rapide et stratégie digitale.",
    images: [
      {
        url: "/logo-pryzm.svg",
        width: 1200,
        height: 630,
        alt: "Pryzm - Agence Web Bordeaux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pryzm - Agence Web à Bordeaux | Création de Sites Internet",
    description: "Agence web à Bordeaux spécialisée dans la création de sites internet performants. Design moderne, développement rapide et stratégie digitale.",
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
