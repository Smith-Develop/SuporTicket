import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { db } from "@/lib/db";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await db.companySettings.findFirst();
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || `http://localhost:3000`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: settings?.name || "SuporTicket - Servicio Técnico",
      template: `%s | ${settings?.name || "SuporTicket"}`
    },
    description: "Servicio Técnico Profesional de Electrodomésticos en Madrid. Reparación de lavadoras, neveras, hornos y más. Garantía por escrito.",
    keywords: ["reparación", "electrodomésticos", "madrid", "servicio técnico", "lavadoras", "neveras"],
    authors: [{ name: settings?.name || "SuporTicket" }],
    creator: "SuporTicket",
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: baseUrl,
      title: settings?.name || "SuporTicket",
      description: "Servicios de reparación y mantenimiento técnico profesional.",
      siteName: settings?.name || "SuporTicket",
      images: [
        {
          url: settings?.logoUrl || "/og-image.jpg", // Ensure this exists or use logo
          width: 1200,
          height: 630,
          alt: settings?.name || "SuporTicket"
        }
      ]
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
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
