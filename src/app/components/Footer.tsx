import React from "react";

const Footer = () => (
  <footer className="bg-white border-t border-[#eee] text-[#1A1A1A] pt-8 pb-4 px-4 text-center mt-16">
    <hr className="max-w-2xl mx-auto mb-6 border-[#eee]" />
    <div className="text-base sm:text-lg font-semibold mb-2">
      © 2025 Yannic Nandy – E-Commerce Freelancer für Shopify, Plentymarkets, Klaviyo &amp; n8n
    </div>
    <div className="text-sm text-gray-500 mb-4">
      Remote verfügbar · Projekte in DE / EU / CH · Persönlich ansprechbar
    </div>
    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
      <a href="/impressum" className="text-[#cda967] hover:underline transition">Impressum</a>
      <span className="text-gray-300">|</span>
      <a href="/datenschutz" className="text-[#cda967] hover:underline transition">Datenschutz</a>
      <span className="text-gray-300">|</span>
      <a href="https://www.linkedin.com/in/dein-profil" target="_blank" rel="noopener noreferrer" className="text-[#cda967] hover:underline transition">LinkedIn</a>
    </div>
    <div className="mt-4 text-xs text-gray-400 leading-tight text-center">
      Yannic Nandy, Neunlindenstr. 28, 79106 Freiburg i. Br.
    </div>
  </footer>
);

export default Footer;