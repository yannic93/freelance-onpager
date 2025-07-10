"use client";

import React from "react";
import { Workflow, Zap, Settings, BarChart, Puzzle, Bot, Brain } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

const shopifyFreiburgFeatures = [
  {
    icon: <Zap className="w-8 h-8 text-[#cda967]" />,
    title: "Shopify Expertenwissen",
    desc: "Langjährige Erfahrung mit Shopify-Projekten für lokale Unternehmen in Freiburg und Umgebung.",
    className: "",
  },
  {
    icon: <Settings className="w-8 h-8 text-[#cda967]" />,
    title: "Individuelle Shop-Lösungen",
    desc: "Von der Konzeption bis zum Go-Live – maßgeschneiderte Shops, die verkaufen.",
    className: "",
  },
  {
    icon: <BarChart className="w-8 h-8 text-[#cda967]" />,
    title: "SEO & Performance",
    desc: "Optimierung für Google & Co. – damit dein Shop gefunden wird.",
    className: "",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-[#cda967]" />,
    title: "Schnittstellen & Automatisierung",
    desc: "Anbindung an Warenwirtschaft, Zahlungsanbieter und Marketing-Tools.",
    className: "",
  },
  {
    icon: <Bot className="w-8 h-8 text-[#cda967]" />,
    title: "Support & Betreuung",
    desc: "Persönlicher Ansprechpartner für alle Shopify-Fragen – auch nach dem Launch.",
    className: "",
  },
  {
    icon: <Brain className="w-8 h-8 text-[#cda967]" />,
    title: "Workshops & Schulungen",
    desc: "Schulungen für Ihr Team in Freiburg – damit du deinen Shop selbst steuern kannst.",
    className: "",
  },
];

const ShopifyFreiburgFeatures = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <section id="features" className={`py-16 transition-colors duration-300`} style={{ 
      backgroundColor: 'var(--section-bg-secondary)',
      color: isDarkMode ? '#ededed' : '#1A1A1A' 
    }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-10">
          <Workflow className="w-8 h-8 text-[#cda967] mb-2" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">Shopify in Freiburg – lokal, persönlich, professionell.</h2>
          <p className={`text-lg sm:text-xl mb-6 font-normal ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>
            Dein Partner für erfolgreiche Shopify-Projekte in der Region Freiburg. Von der ersten Idee bis zur laufenden Optimierung.
          </p>
          <div className="w-16 h-1 bg-[#cda967] rounded-full opacity-60 mb-2" />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopifyFreiburgFeatures.map((f, i) => (
            <div key={i} className={`flex flex-col rounded-3xl shadow-lg p-8 min-h-[180px] transition-colors duration-300 ${f.className}`} style={{
              backgroundColor: 'var(--card-bg)',
              border: `1px solid var(--card-border)`
            }}>
              {f.icon}
              <h3 className="text-lg font-semibold mt-4 mb-1">{f.title}</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyFreiburgFeatures; 