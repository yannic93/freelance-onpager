import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClockCard from "./components/ClockCard";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import CalcomFloatingButton from "./components/CalcomFloatingButton";

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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7L18SD4YDS"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7L18SD4YDS');
          `,
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DarkModeProvider>
          {children}
          <ClockCard />
          <CalcomFloatingButton />
        </DarkModeProvider>
      </body>
    </html>
  );
}
