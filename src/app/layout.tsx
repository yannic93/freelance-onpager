import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClockCard from "./components/ClockCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yannic Nandy – E-Commerce Freelancer für Shopify, Plentymarkets, Klaviyo & n8n",
  description: "Freelancer für skalierbare E-Commerce-Systeme, Automatisierung und Prozessoptimierung, in DE/EU/CH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ClockCard />
      </body>
    </html>
  );
}
