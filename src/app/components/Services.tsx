"use client";

import React, { useState } from "react";
import { ShoppingBag, Database, Code, ArrowRight, Zap, Settings, TrendingUp } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";
import Image from "next/image";



interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  color: string;
  gradient: string;
  size: 'small' | 'medium' | 'large';
  featured?: boolean;
}

// Logo component for services
const ServiceLogo = ({ service, isDarkMode }: { service: ServiceCard; isDarkMode: boolean }) => {
  if (service.id === "shopify") {
    return (
      <Image
        src={isDarkMode ? "/Media/shopify_monotone_white.svg" : "/Media/shopify_monotone_black.svg"}
        alt="Shopify Logo"
        width={64}
        height={32}
        className="w-16 h-8"
      />
    );
  }
  
  if (service.id === "plentymarkets") {
    return (
      <Image
        src={isDarkMode ? "/Media/PlentyONE-logo-white.svg" : "/Media/PlentyONE-logo-blue.svg"}
        alt="PlentyONE Logo"
        width={64}
        height={32}
        className="w-16 h-8"
      />
    );
  }
  
  if (service.id === "klaviyo") {
    return (
      <Image
        src={isDarkMode ? "/Media/klaviyo_white.svg" : "/Media/klaviyo_black.svg"}
        alt="Klaviyo Logo"
        width={64}
        height={32}
        className="w-16 h-8"
      />
    );
  }
  
  return service.icon as React.ReactElement;
};

const services: ServiceCard[] = [
  {
    id: "shopify",
    icon: <ShoppingBag className="w-8 h-8" />, // Fallback icon
    title: "Shopify Setup & Optimierung",
    description: "Komplette Shop-Einrichtung und Performance-Optimierung für maximalen Umsatz",
    details: [
      "Theme-Entwicklung & Anpassung",
      "App-Integration & Workflow-Setup",
      "Performance-Optimierung",
      "SEO & Conversion-Optimierung"
    ],
    color: "#96C93F",
    gradient: "from-green-400 to-green-600",
    size: "large",
    featured: true
  },
  {
    id: "plentymarkets",
    icon: <Database className="w-8 h-8" />, // Fallback icon
    title: "PlentyONE Integration",
    description: "Nahtlose Systemverbindungen und Automatisierung deiner E-Commerce-Prozesse",
    details: [
      "Multi-Channel Verkauf Setup",
      "Warehouse Management",
      "API-Integrationen zu Drittanbietern",
      "Automatisierte Datenflüsse"
    ],
    color: "#0071BC",
    gradient: "from-blue-400 to-blue-600",
    size: "large"
  },
  {
    id: "klaviyo",
    icon: <Zap className="w-8 h-8" />, // Fallback icon
    title: "Klaviyo Setup & Integration",
    description: "E-Mail Marketing Automatisierung mit komplexen Flows und Custom Coding",
    details: [
      "Klaviyo Setup & Integration",
      "Komplexe Flow-Entwicklung",
      "Custom Coding & Templates",
      "Segmentierung & Personalisierung"
    ],
    color: "#FF6900",
    gradient: "from-orange-400 to-orange-600",
    size: "medium"
  },
  {
    id: "automation",
    icon: <Settings className="w-8 h-8" />,
    title: "Workflow Automatisierung",
    description: "Intelligente Automatisierung deiner Geschäftsprozesse",
    details: [
      "n8n Workflow Setup",
      "API-Orchestrierung",
      "Trigger & Logiken"
    ],
    color: "#FF6B6B",
    gradient: "from-red-400 to-red-600",
    size: "small"
  },
  {
    id: "analytics",
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Performance Marketing",
    description: "Google Ads Setup und Optimierung für maximale ROI",
    details: [
      "Google Ads Account Setup",
      "Shopping Campaigns",
      "Conversion Tracking",
      "Performance Optimierung"
    ],
    color: "#4285F4",
    gradient: "from-blue-400 to-blue-600",
    size: "small"
  },
  {
    id: "development",
    icon: <Code className="w-8 h-8" />,
    title: "Custom Development",
    description: "Maßgeschneiderte Lösungen und Softwareentwicklung für deine spezifischen Anforderungen",
    details: [
      "Web-Anwendungen & APIs",
      "Individuelle Shop Anpassungen",
      "Clean Code durch Entwickler Partnerschaft"
    ],
    color: "#cda967",
    gradient: "from-yellow-400 to-amber-500",
    size: "medium"
  }
];

const Services = () => {
  const { isDarkMode } = useDarkMode();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section 
      id="features" 
      className="py-16 transition-colors duration-300"
      style={{ 
        backgroundColor: 'var(--section-bg-tertiary)',
        color: isDarkMode ? '#ededed' : '#1A1A1A' 
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Zap className="w-8 h-8 text-[#cda967] mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Meine Dienstleistungen
            </h2>
          </div>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Spezialisierte E-Commerce-Lösungen für nachhaltiges Wachstum
          </p>
          <div className="w-20 h-1 bg-[#cda967] rounded-full mx-auto mt-4 opacity-60" />
        </div>

        {/* Clean Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: `1px solid var(--card-border)`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Simple gradient accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                style={{
                  backgroundColor: service.color,
                  opacity: hoveredCard === service.id ? 1 : 0.3
                }}
              />
              
              {/* Card Content */}
              <div className="p-6">
                {/* Icon */}
                <div 
                  className="inline-flex p-3 rounded-xl mb-4 transition-colors duration-300"
                  style={{ 
                    backgroundColor: hoveredCard === service.id 
                      ? `${service.color}20` 
                      : `${service.color}10`,
                    color: service.color 
                  }}
                >
                  <ServiceLogo service={service} isDarkMode={isDarkMode} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-[#cda967]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, index) => (
                    <li 
                      key={index}
                      className={`flex items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0" 
                        style={{ backgroundColor: service.color }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 cursor-pointer group/cta"
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 110; // 110px Offset für Stickybar
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400 group-hover/cta:text-[#cda967]' : 'text-gray-500 group-hover/cta:text-[#cda967]'
                  }`}>
                    Mehr erfahren
                  </span>
                  <ArrowRight 
                    className={`w-5 h-5 transition-all duration-300 ${
                      hoveredCard === service.id 
                        ? 'translate-x-1 text-[#cda967]' 
                        : isDarkMode 
                          ? 'text-gray-400 group-hover/cta:text-[#cda967] group-hover/cta:translate-x-1' 
                          : 'text-gray-500 group-hover/cta:text-[#cda967] group-hover/cta:translate-x-1'
                    }`}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Lass uns dein E-Commerce-Potenzial gemeinsam ausschöpfen
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[#cda967] text-white font-medium rounded-xl hover:bg-[#b8955a] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Projekt besprechen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 