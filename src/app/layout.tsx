import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Footer from "./components/Footer";
import ClientLayout from "./components/ClientLayout";
import ScrollProvider from "@/components/ScrollProvider";
import Navbar from "./components/Navbar";
export const metadata: Metadata = {
  title: "Pryzm",
  description: "Agence digitale créative",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        <ClientLayout>
          <ScrollProvider>
            <Navbar />
            {children}
            <Footer />
          </ScrollProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
