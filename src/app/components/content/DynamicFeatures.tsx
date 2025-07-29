"use client";

import React from "react";
import { 
  Zap, Settings, Brain, Puzzle, Bot, BarChart, Workflow, 
  ShoppingBag, Code, Globe, 
  TrendingUp, Users, ArrowRight, Headphones, 
  Search, GitBranch
} from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { FeatureConfig } from "../../data/types";
import Image from "next/image";

interface DynamicFeaturesProps {
  features: FeatureConfig[];
}

const DynamicFeatures = ({ features }: DynamicFeaturesProps) => {
  const { isDarkMode } = useDarkMode();

  // Erweiteres Icon-Mapping für alle Service-Icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="w-8 h-8 text-[#cda967]" />;
      case 'settings':
        return <Settings className="w-8 h-8 text-[#cda967]" />;
      case 'bot':
        return <Bot className="w-8 h-8 text-[#cda967]" />;
      case 'brain':
        return <Brain className="w-8 h-8 text-[#cda967]" />;
      case 'puzzle':
        return <Puzzle className="w-8 h-8 text-[#cda967]" />;
      case 'barchart':
        return <BarChart className="w-8 h-8 text-[#cda967]" />;
      // Shopify-spezifische Icons
      case 'shopify':
        return (
          <Image
            src={isDarkMode ? "/Media/shopify_monotone_white.svg" : "/Media/shopify_monotone_black.svg"}
            alt="Shopify"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        );
      case 'integration':
        return <Puzzle className="w-8 h-8 text-[#cda967]" />;
      case 'performance':
        return <TrendingUp className="w-8 h-8 text-[#cda967]" />;
      case 'enterprise':
        return <Users className="w-8 h-8 text-[#cda967]" />;
      case 'migration':
        return <GitBranch className="w-8 h-8 text-[#cda967]" />;
      case 'api':
        return <Globe className="w-8 h-8 text-[#cda967]" />;
      case 'support':
        return <Headphones className="w-8 h-8 text-[#cda967]" />;
      case 'marketing':
        return <Search className="w-8 h-8 text-[#cda967]" />;
      case 'consulting':
        return <Brain className="w-8 h-8 text-[#cda967]" />;
      case 'expertise':
        return <Code className="w-8 h-8 text-[#cda967]" />;
      case 'workflow':
        return <Workflow className="w-8 h-8 text-[#cda967]" />;
      default:
        return <span className="text-2xl">📊</span>;
    }
  };

  // Prüfe ob Card-Variante verwendet werden soll
  const hasCardVariants = features.some(feature => feature.variant === 'card');

  if (hasCardVariants) {
    // Card-Layout für Shopify Freelancer Seite
    return (
      <section id="features" className="py-16 transition-colors duration-300" style={{ 
        backgroundColor: 'var(--section-bg-secondary)',
        color: isDarkMode ? '#ededed' : '#1A1A1A' 
      }}>
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <ShoppingBag className="w-8 h-8 text-[#cda967] mr-2" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Shopify Expertise & Services
              </h2>
            </div>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Professionelle Shopify-Entwicklung für nachhaltigen E-Commerce Erfolg
            </p>
            <div className="w-20 h-1 bg-[#cda967] rounded-full mx-auto mt-4 opacity-60" />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: `1px solid var(--card-border)`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                {/* Gradient accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 bg-[#cda967] transition-all duration-300 opacity-30 group-hover:opacity-100"
                />
                
                {/* Card Content */}
                <div className="p-6">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl mb-4 transition-colors duration-300 bg-[#cda967]/10 group-hover:bg-[#cda967]/20">
                    {getIcon(feature.icon || '')}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-[#cda967]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>

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
                      Kontakt aufnehmen
                    </span>
                    <ArrowRight 
                      className={`w-5 h-5 transition-all duration-300 group-hover/cta:translate-x-1 group-hover/cta:text-[#cda967] ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Standard Layout für andere Seiten
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
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col rounded-3xl shadow-lg p-8 min-h-[180px] transition-colors duration-300`} style={{
              backgroundColor: 'var(--card-bg)',
              border: `1px solid var(--card-border)`
            }}>
              {getIcon(feature.icon || '')}
              <h3 className="text-lg font-semibold mt-4 mb-1">{feature.title}</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicFeatures; 