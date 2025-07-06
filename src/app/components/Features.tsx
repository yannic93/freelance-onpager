"use client";

import React from "react";
import { Zap, Settings, Brain, Puzzle, Bot, BarChart, Workflow } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

const bentoFeatures = [
  {
    icon: <Zap className="w-8 h-8 text-[#cda967]" />,
    title: "Systeme verbinden",
    desc: "Shopify, Plentymarkets, Klaviyo & n8n – alles spielt reibungslos zusammen.",
    className: "",
  },
  {
    icon: <Settings className="w-8 h-8 text-[#cda967]" />,
    title: "Abläufe automatisieren",
    desc: "Weniger manuelle Arbeit, mehr Effizienz durch cleveres Setup, Trigger und Logiken.",
    className: "",
  },
  {
    icon: <Bot className="w-8 h-8 text-[#cda967]" />,
    title: "KI-Workflows & Agenten",
    desc: "Individuelle LLM-Workflows, Automatisierungen mit ChatGPT & Co.",
    className: "",
  },
  {
    icon: <Brain className="w-8 h-8 text-[#cda967]" />,
    title: "Business + Technik vereint",
    desc: "Ich denke in Prozessen, Zielgruppen und Wachstum – nicht nur in Code oder Content.",
    className: "",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-[#cda967]" />,
    title: "Projekte strukturiert führen",
    desc: "Mit klarer Kommunikation, realistischen Zeitplänen und sichtbaren Ergebnissen.",
    className: "",
  },
  {
    icon: <BarChart className="w-8 h-8 text-[#cda967]" />,
    title: "Datengetriebenes Performance-Marketing",
    desc: "Effiziente Kampagnen mit sauberen Datenfeeds via Channable – für Google Ads, Meta & Co.",
    className: "",
  },
];

const Features = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <section id="features" className={`py-16 transition-colors duration-300`} style={{ 
      backgroundColor: 'var(--section-bg-secondary)',
      color: isDarkMode ? '#ededed' : '#1A1A1A' 
    }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-10">
          <Workflow className="w-8 h-8 text-[#cda967] mb-2" />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">Skalier dein E-Commerce Business – mit klaren Prozessen und sauberen Datenflüssen.</h2>
          <p className={`text-lg sm:text-xl mb-6 font-normal ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>
            Ich helfe dir, dein E-Commerce-Fundament zu stabilisieren – mit strukturierter Systemarchitektur, sauberen Datenflüssen, smarten Workflows und KI-gestützter Prozessautomatisierung.
          </p>
          <div className="w-16 h-1 bg-[#cda967] rounded-full opacity-60 mb-2" />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bentoFeatures.map((f, i) => (
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

export default Features; 