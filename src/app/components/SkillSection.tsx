"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../contexts/DarkModeContext";
import { Zap, ShoppingCart, Bot, BarChart, Mail, Workflow, Wrench } from "lucide-react";

const categories = [
  { key: "all", label: "Alle", icon: <Zap size={18} className="text-[#cda967]" /> },
  { key: "ecommerce", label: "E-Commerce", icon: <ShoppingCart size={18} className="text-[#cda967]" /> },
  { key: "automation", label: "Automation & KI", icon: <Bot size={18} className="text-[#cda967]" /> },
  { key: "marketing", label: "Performance Marketing", icon: <BarChart size={18} className="text-[#cda967]" /> },
  { key: "crm", label: "CRM & E-Mail", icon: <Mail size={18} className="text-[#cda967]" /> },
  { key: "pm", label: "Projektmanagement", icon: <Workflow size={18} className="text-[#cda967]" /> },
  { key: "tooling", label: "Tooling & UX", icon: <Wrench size={18} className="text-[#cda967]" /> },
];

const skillData = [
  // E-Commerce
  {
    category: "ecommerce",
    type: "tool",
    name: "Shopify",
    icon: "/Media/shopify_monotone_black.svg",
    hover: "Theme-Anpassung, Liquid-Programmierung, Internationalisierung",
  },
  {
    category: "ecommerce",
    type: "tool",
    name: "Plentymarkets",
    icon: "/Media/PlentyONE-logo-blue.svg",
    hover: "Artikelstruktur, ElasticSync, Multichannel-Anbindung",
  },
  {
    category: "ecommerce",
    type: "tool",
    name: "Amazon (SEO & Ads)",
    icon: null,
    hover: "Listings optimieren, Keywordanalyse, Kampagnen-Management",
  },
  {
    category: "ecommerce",
    type: "tool",
    name: "Helium10, Sellerlogic",
    icon: null,
    hover: "Analyse-Tools für Amazon-Wachstum",
  },
  {
    category: "ecommerce",
    type: "tool",
    name: "Channable",
    icon: null,
    hover: "Feed-Management für Google Ads, Meta & Marktplätze",
  },
  {
    category: "ecommerce",
    type: "skill",
    name: "Produktdatenpflege & Automatisierung",
    icon: null,
    hover: null,
  },
  {
    category: "ecommerce",
    type: "skill",
    name: "Marktplatz-Optimierung & Feed-Exporte",
    icon: null,
    hover: null,
  },
  {
    category: "ecommerce",
    type: "skill",
    name: "E-Commerce API-Workflows (z. B. Shopify x Klaviyo)",
    icon: null,
    hover: null,
  },
  // Performance Marketing
  {
    category: "marketing",
    type: "tool",
    name: "Google Ads, Meta Ads",
    icon: null,
    hover: "Kampagnensteuerung & Testing",
  },
  {
    category: "marketing",
    type: "tool",
    name: "Adference",
    icon: null,
    hover: "AI-basiertes Bid-Management für Amazon & Google",
  },
  {
    category: "marketing",
    type: "tool",
    name: "Channable",
    icon: null,
    hover: "strukturiertes Feed-Targeting",
  },
  {
    category: "marketing",
    type: "skill",
    name: "Conversion-orientiertes Kampagnen-Setup",
    icon: null,
    hover: null,
  },
  {
    category: "marketing",
    type: "skill",
    name: "Segmentierung & Tracking-Strategien",
    icon: null,
    hover: null,
  },
  {
    category: "marketing",
    type: "skill",
    name: "Funnel-Aufbau und A/B-Testing",
    icon: null,
    hover: null,
  },
  // Automation & KI
  {
    category: "automation",
    type: "tool",
    name: "n8n, Zapier, Make",
    icon: "/Media/N8N.Io_idQ-KxEpHW_0.png",
    hover: "No-Code / Low-Code Prozessautomatisierung",
  },
  {
    category: "automation",
    type: "tool",
    name: "ChatGPT, Claude, Google Gemini, Perplexity",
    icon: null,
    hover: "Prompt-Engineering, LLM-Usecases",
  },
  {
    category: "automation",
    type: "tool",
    name: "Resend",
    icon: null,
    hover: "Transaktionsmails & Formulare automatisieren",
  },
  {
    category: "automation",
    type: "skill",
    name: "Automatisierte Datenflüsse & Trigger-Logiken",
    icon: null,
    hover: null,
  },
  {
    category: "automation",
    type: "skill",
    name: "Erstellung & Integration von LLM-Agents",
    icon: null,
    hover: null,
  },
  {
    category: "automation",
    type: "skill",
    name: "E-Mail-Automation & Systemvernetzung",
    icon: null,
    hover: null,
  },
  // CRM & E-Mail
  {
    category: "crm",
    type: "tool",
    name: "Klaviyo",
    icon: "/Media/klaviyo_black.svg",
    hover: "Flows, Segmentierung, Dynamic Content",
  },
  {
    category: "crm",
    type: "tool",
    name: "Shopify + Klaviyo Integration",
    icon: null,
    hover: null,
  },
  {
    category: "crm",
    type: "tool",
    name: "LLM-Flows für Texte",
    icon: null,
    hover: "z. B. Reisebeschreibungen, Review-Zusammenfassungen",
  },
  {
    category: "crm",
    type: "skill",
    name: "Lifecycle E-Mail-Marketing",
    icon: null,
    hover: null,
  },
  {
    category: "crm",
    type: "skill",
    name: "Multi-language Campaign Setup",
    icon: null,
    hover: null,
  },
  {
    category: "crm",
    type: "skill",
    name: "Automatisiertes Content-Rendering",
    icon: null,
    hover: null,
  },
  // Projektmanagement
  {
    category: "pm",
    type: "tool",
    name: "ClickUp, Asana, Trello, Jira, Todoist",
    icon: null,
    hover: null,
  },
  {
    category: "pm",
    type: "skill",
    name: "Agile Arbeitsweise (Scrum/Kanban)",
    icon: null,
    hover: null,
  },
  {
    category: "pm",
    type: "skill",
    name: "Teamstruktur & Onboarding",
    icon: null,
    hover: null,
  },
  {
    category: "pm",
    type: "skill",
    name: "Planung komplexer Projekte (Tools + Kommunikation + Zielstruktur)",
    icon: null,
    hover: null,
  },
  // Tooling & UX
  {
    category: "tooling",
    type: "tool",
    name: "Shopify Liquid",
    icon: null,
    hover: null,
  },
  {
    category: "tooling",
    type: "tool",
    name: "MacOS, Arc Browser, Canva",
    icon: null,
    hover: null,
  },
  {
    category: "tooling",
    type: "skill",
    name: "Technisches Verständnis von Webprojekten",
    icon: null,
    hover: null,
  },
  {
    category: "tooling",
    type: "skill",
    name: "Schnelles Prototyping & Visualisierung",
    icon: null,
    hover: null,
  },
  {
    category: "tooling",
    type: "skill",
    name: "Minimalistische UX / UI-Prinzipien",
    icon: null,
    hover: null,
  },
];

const SkillSection = () => {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? skillData
      : skillData.filter((item) => item.category === activeTab);

  return (
    <section
      id="skills"
      className="py-20 px-4 transition-colors duration-300"
      style={{
        backgroundColor: "var(--section-bg-secondary)",
        color: isDarkMode ? "#ededed" : "#1A1A1A",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 tracking-tight">
          Skills & Toolstack
        </h2>
        <p
          className={`text-center mb-10 text-base sm:text-lg ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Thematisch sortiert, filterbar & mit Hover-Details
        </p>
        {/* Legende */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#cda967]/60 bg-[#cda967]/10 text-[#cda967] font-medium shadow-sm" style={{ fontFamily: 'inherit' }}>
              Tool
            </span>
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>= Technologie/Plattform</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full border font-medium shadow-sm ${isDarkMode ? 'border-[#333] bg-black/30 text-[#ededed]' : 'border-[#e5e5e5] bg-white/80 text-[#1A1A1A]'}`} style={{ fontFamily: 'inherit' }}>
              Skill
            </span>
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>= Kompetenz/Fähigkeit</span>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex justify-center border-b border-[#cda967]/30 mb-6">
          <div className="flex flex-row gap-1 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`relative px-4 py-2 font-medium text-sm sm:text-base transition-colors duration-200 whitespace-nowrap
                  border-none bg-transparent rounded-none shadow-none
                  ${activeTab === cat.key
                    ? 'text-[#cda967] border-b-2 border-[#cda967] font-semibold'
                    : isDarkMode
                      ? 'text-[#ededed] hover:text-[#cda967]'
                      : 'text-[#1A1A1A] hover:text-[#cda967]'}
                `}
                style={{ fontFamily: "inherit" }}
              >
                <span className="flex items-center gap-2">
                  {cat.icon}
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mb-8">
          <div className="h-[2px] w-2/3 bg-gradient-to-r from-transparent via-[#cda967]/40 to-transparent rounded-full" />
        </div>
        {/* Badges */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-3 mt-2"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.name + i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className={`group relative flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium shadow-md transition-colors duration-200 cursor-pointer ${
                  item.type === "tool"
                    ? "border-[#cda967]/60 bg-[#cda967]/10 text-[#cda967]"
                    : isDarkMode
                    ? "border-[#333] bg-black/30 text-[#ededed]"
                    : "border-[#e5e5e5] bg-white/80 text-[#1A1A1A]"
                }`}
                style={{ fontFamily: "inherit" }}
                tabIndex={0}
              >
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-5 w-5 object-contain mr-1"
                    style={{ filter: isDarkMode ? "invert(1)" : undefined }}
                  />
                )}
                <span>{item.name}</span>
                {item.hover && (
                  <span
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs px-3 py-2 rounded-xl text-xs font-normal shadow-lg z-20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition bg-[#222] text-white"
                  >
                    {item.hover}
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection; 