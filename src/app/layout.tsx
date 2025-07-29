import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClockCard from "./components/ClockCard";
import { DarkModeProvider } from "./contexts/DarkModeContext";

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
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Media/favicon-yn.png", type: "image/png", sizes: "32x32" },
      { url: "/Media/favicon-yn.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/Media/favicon-yn.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
        </DarkModeProvider>
      </body>
    </html>
  );
}
