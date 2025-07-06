"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Rocket } from "lucide-react";

const workExperience = [
  {
    icon: <Briefcase size={20} className="text-[#cda967]" />,
    logo: ["/Media/protag.png", "/Media/camya-dark.png"],
    company: "Freelancer & Gründer | MarketExperts GbR",
    period: "Sep 2021 – heute",
    role: null,
    description: [
      "Aufbau und Betrieb eigener D2C-Marken via Shopify & Amazon:",
      "campya.com – Camping- und Outdoor-Zubehör",
      "protag-germany.com – AirTag-Fahrradhalterungen",
      "End-to-End-Verantwortung für Strategie, Performance Marketing, CRM (Klaviyo), Shop-Management, Buchhaltung & Budget",
      "Spezialisiert auf skalierbare E-Commerce-Systeme, automatisierte Datenflüsse und Performance-getriebene Setups",
    ],
    tags: ["Shopify", "Amazon", "Klaviyo", "D2C", "Performance Marketing"],
  },
  {
    icon: <Briefcase size={20} className="text-[#cda967]" />,
    logo: "/Media/iluxi_logo.jpeg",
    company: "ILUXI GmbH",
    period: "Hamburg, Mai 2023 – Dez 2023",
    role: "E-Commerce Projektmanager" ,
    description: [
      "Launch & Weiterentwicklung Shopify-Shop",
      "Klaviyo Automationen & CRM-Setup",
      "Schnittstellenmanagement: Agentursteuerung für Google Ads, Social Ads, ERP, BI",
      "Setup & Optimierung Plentymarkets System",
      "Crossfunktionale Zusammenarbeit mit Marketing, IT & Geschäftsführung",
    ],
    tags: ["Shopify", "Klaviyo", "Google Ads", "PlentyONE", "CRM", "Projektmanagement"],
  },
  {
    icon: <Briefcase size={20} className="text-[#cda967]" />,
    logo: "/Media/logo_awn_dklBla.png",
    company: "A.W. Niemeyer GmbH",
    period: "März 2019 – Mai 2023",
    role: "Leitung Marketplaces, Shopify Tech Support & Klaviyo",
    description: [
      "Leitung eines 4-köpfigen Marketplace-Teams (Amazon, eBay, FBA)",
      "Einführung & Skalierung von Amazon PPC (bis 15.000 €/Monat)",
      "Migration von Emarsys zu Klaviyo inkl. CRM-Strategie",
      "Unterstützung bei der Shopify-Migration & Shop-Management",
      "Meta Ads Management & KPI-basierte Wachstumsstrategie",
      "Absatzprognosen & datengetriebene Optimierung der Sortimente",
    ],
    tags: ["Amazon", "Projektmanagement", "Shopify", "Klaviyo", "Meta Ads", "CRM"],
  },
];

const projectExperience = [
  {
    icon: <Rocket size={20} className="text-[#cda967]" />,
    logo: "/Media/logo_awn_dklBla.png",
    company: "awn GmbH | e-scalegroup",
    period: "seit Mai 2024 – heute",
    role: "Technischer E-Commerce Projektmanager",
    description: [
      "Zusammenführung und Standardisierung mehrerer ERP-Systeme zu einem konsistenten Plentymarkets Setup inklusive Datenstruktur, Schnittstellen und Mandantenlogik",
      "Projektverantwortung für Amazon-Accounts inkl. Performance-Analyse, SEO/SEA-Optimierung und Steuerung der Kampagnen via Adference",
      "Migration von Shopware zu Shopify, inklusive Planung, Datenübernahme und Template-Anpassung",
      "Aufbau und Implementierung von Prozessautomatisierungen mit n8n",
    ],
    tags: ["Plentymarkets", "Amazon Marketplace", "SEO / SEA", "Shop-Migration", "Shopify", "n8n Automation", "ERP-Integration", "Adference"],
  },
  {
    icon: <Rocket size={20} className="text-[#cda967]" />,
    logo: "/Media/reisenthel.svg",
    company: "reisenthel",
    period: "seit Oktober 2024 – heute",
    role: "E-Mail-Marketing & CRM Consultant / Shopify Tech Support",
    description: [
      "Analyse, Optimierung und strategische Beratung zum bestehenden Klaviyo-Setup, inklusive Segmentierung, Flows und Template-Struktur",
      "Konzeption und Umsetzung der Black-Friday-E-Mail-Marketing-Strategie mit Fokus auf internationale Zielgruppen und Umsatzmaximierung",
      "Interner Ansprechpartner für CRM-bezogene Fragestellungen sowie Einarbeitung neuer Teammitglieder im Bereich E-Mail & Marketing-Automation",
      "Technische Unterstützung bei der Internationalisierung des Shopify-Shops, inkl. Entwicklung und Implementierung von Custom Liquid-Modulen",
      "Aufbau Bestandkunden E-Mail-Automationen gemäß §7 Abs. 3 UWG, inkl. Segmentierung und Flow-Setup",
    ],
    tags: ["Klaviyo", "E-Mail-Marketing", "CRM", "Shopify", "Internationalisierung", "Liquid", "Automation"],
  },
  {
    icon: <Rocket size={20} className="text-[#cda967]" />,
    logo: "/Media/KFB Logo.svg",
    company: "Kreuzfahrtberater",
    period: "seit Juni 2024 – heute",
    role: "Projektmanager / E-Commerce & MarTech",
    description: [
      "Optimierung der internen Marketingprozesse inkl. Einführung eines zentralen Projektmanagement-Tools zur teamübergreifenden Kollaboration",
      "Entwicklung und Implementierung von KI-basierten Automationen im Frontend, z. B. dynamisch generierte Reisebeschreibungen und zusammengefasste Kundenbewertungen auf Basis von strukturierten Daten",
      "Analyse und Optimierung des Buchungsprozesses (Booking Funnel) mit Fokus auf Conversion-Steigerung und User Experience",
    ],
    tags: ["Projektmanagement", "n8n", "Meta Ads", "CRM", "KI-Agents"],
  },
  {
    icon: <Rocket size={20} className="text-[#cda967]" />,
    logo: "/Media/bh-logo-small.svg",
    company: "Burnhard GmbH",
    role:"Klaviyo Transaktionsmails & Tech Support",
    period: "Feb 2024 – Apr 2024",
    description: [
      "Technische Integration transaktionaler E-Mails in Shopify & Klaviyo",
      "Automatisierung von Rechnungsversand, Versandtracking & Reviewflows (u. a. mit Judge.me)",
      "Dokumentation & Events für saubere Nachvollziehbarkeit",
    ],
    tags: ["Shopify", "Klaviyo", "reviews.io", "Automatisierung"],
  },
  {
    icon: <Rocket size={20} className="text-[#cda967]" />,
    logo: "/Media/doppio coffee roastery logo.png",
    company: "Shopware → Shopify Migration | Aydin Roasting GmbH (DOPPIO)",
    period: "März 2024 – heute",
    description: [
      "Technische Shopmigration & Custom-Code-Anpassungen",
      "Beratung zu Warenwirtschaft, App-Auswahl & Datenstruktur",
      "Nachhaltige Verbesserung der UX & Wartbarkeit",
    ],
    tags: ["Shopware", "Shopify", "UX", "Custom Code"],
  },
];

const Experience = () => (
  <section className="bg-white text-[#1A1A1A] py-20 px-4" id="experience">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 tracking-tight">Projektauszug & Erfahrung</h2>
      <p className="text-center text-gray-500 mb-10 text-base sm:text-lg">Einige Stationen & Projekte aus den letzten Jahren</p>
      {/* Projekterfahrung */}
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Rocket size={22} className="text-[#cda967]" /> Projekterfahrung (Auszug)</h3>
      <ol className="relative border-l-2 border-[#cda967]/30 ml-2 mb-12">
        {projectExperience.map((exp, i) => (
          <motion.li
            key={i}
            className="mb-12 ml-10 relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: 'easeOut' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="font-bold text-[#1A1A1A] text-lg mb-1 sm:mb-0 flex flex-col items-start">
                {Array.isArray(exp.logo) && (
                  <span className="flex flex-row items-center gap-2 mb-1">
                    {exp.logo.map((src, idx) => (
                      <img key={idx} src={src} alt="Logo" className="h-5 w-auto" style={{height: 20, maxHeight: 20, minHeight: 20, width: 'auto', objectFit: 'contain'}} />
                    ))}
                  </span>
                )}
                {!Array.isArray(exp.logo) && exp.logo && (
                  <img src={exp.logo} alt="Logo" className="h-6 w-auto mb-1" style={{height: 24, maxHeight: 24, minHeight: 24, width: 'auto', objectFit: 'contain'}} />
                )}
                {exp.role && <span className="font-bold text-[#1A1A1A] text-lg mb-0.5">{exp.role}</span>}
                <span className="text-base text-gray-500 font-normal block w-full">{exp.company}</span>
              </div>
              <div className="text-sm text-gray-400 font-mono">{exp.period}</div>
            </div>
            <ul className="text-gray-600 text-sm mb-2 list-disc ml-5">
              {exp.description.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.tags.map((tag, j) => (
                <span key={j} className="bg-[#f8f8f8] border border-[#cda967]/30 text-[#1A1A1A] text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
      {/* Berufserfahrung */}
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Briefcase size={22} className="text-[#cda967]" /> Berufserfahrung</h3>
      <ol className="relative border-l-2 border-[#cda967]/30 ml-2">
        {workExperience.map((exp, i) => (
          <motion.li
            key={i}
            className="mb-12 ml-10 relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: 'easeOut' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="font-bold text-[#1A1A1A] text-lg mb-1 sm:mb-0 flex flex-col items-start">
                {Array.isArray(exp.logo) && (
                  <span className="flex flex-row items-center gap-2 mb-1">
                    {exp.logo.map((src, idx) => (
                      <img key={idx} src={src} alt="Logo" className="h-5 w-auto" style={{height: 20, maxHeight: 20, minHeight: 20, width: 'auto', objectFit: 'contain'}} />
                    ))}
                  </span>
                )}
                {!Array.isArray(exp.logo) && exp.logo && (
                  <img src={exp.logo} alt="Logo" className="h-6 w-auto mb-1" style={{height: 24, maxHeight: 24, minHeight: 24, width: 'auto', objectFit: 'contain'}} />
                )}
                {exp.role && <span className="font-bold text-[#1A1A1A] text-lg mb-0.5">{exp.role}</span>}
                <span className="text-base text-gray-500 font-normal block w-full">{exp.company}</span>
              </div>
              <div className="text-sm text-gray-400 font-mono">{exp.period}</div>
            </div>
            <ul className="text-gray-600 text-sm mb-2 list-disc ml-5">
              {exp.description.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.tags.map((tag, j) => (
                <span key={j} className="bg-[#f8f8f8] border border-[#cda967]/30 text-[#1A1A1A] text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience; 