"use client";

import React from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <footer className={`border-t pt-8 pb-4 px-4 text-center mt-16 transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0a] border-[#333] text-[#ededed]' : 'bg-white border-[#eee] text-[#1A1A1A]'}`}>
      <hr className={`max-w-2xl mx-auto mb-6 ${isDarkMode ? 'border-[#333]' : 'border-[#eee]'}`} />
      <div className="text-base sm:text-lg font-semibold mb-2">
        © 2025 Yannic Nandy – E-Commerce Freelancer für Shopify, Plentymarkets, Klaviyo &amp; n8n
      </div>
      <div className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Remote verfügbar · Projekte in DE / EU / CH · Persönlich ansprechbar
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
        <a href="/impressum" className="text-[#cda967] hover:underline transition">Impressum</a>
        <span className={isDarkMode ? "text-gray-600" : "text-gray-300"}>|</span>
        <a href="/datenschutz" className="text-[#cda967] hover:underline transition">Datenschutz</a>
        <span className={isDarkMode ? "text-gray-600" : "text-gray-300"}>|</span>
        <a href="https://www.linkedin.com/in/dein-profil" target="_blank" rel="noopener noreferrer" className="text-[#cda967] hover:underline transition">LinkedIn</a>
      </div>
      <div className={`mt-4 text-xs leading-tight text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        Yannic Nandy, Neunlindenstr. 28, 79106 Freiburg i. Br.
      </div>
    </footer>
  );
};

export default Footer;