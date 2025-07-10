import React from "react";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import ShopifyFreiburgFeatures from "../components/ShopifyFreiburgFeatures";
import Contact from "../components/Contact";
import HeroFreiburg from "../components/HeroFreiburg";

export const metadata = {
  title: "Shopify Agentur Freiburg | Yannic Nandy",
  description: "Ihre Shopify Experten in Freiburg – maßgeschneiderte Shops, Beratung & Umsetzung. Jetzt kostenloses Erstgespräch sichern!",
  keywords: [
    "Shopify Freiburg",
    "Shopify Agentur Freiburg",
    "Shopify Experten Freiburg",
    "Shopify Beratung Freiburg",
    "Shopify Freelancer Freiburg",
    "Shopify Hilfe Freiburg"
  ],
  openGraph: {
    title: "Shopify Agentur Freiburg | Yannic Nandy",
    description: "Ihre Shopify Experten in Freiburg – maßgeschneiderte Shops, Beratung & Umsetzung. Jetzt kostenloses Erstgespräch sichern!",
    url: "https://yannicnandy.com/shopify-freiburg",
    type: "website"
  }
};

export default function ShopifyFreiburgPage() {
  return (
    <main>
      <HeroFreiburg />
      <ShopifyFreiburgFeatures />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
} 