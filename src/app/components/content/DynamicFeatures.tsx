"use client";

import React from "react";
import { 
  Zap, Settings, Brain, Puzzle, Bot, BarChart, Workflow, 
  ShoppingBag, Code, Globe, 
  TrendingUp, Users, ArrowRight, Headphones, 
  Search, GitBranch, Mail, Heart, ShoppingCart, Target
} from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { FeatureConfig } from "../../data/types";
import Image from "next/image";

interface DynamicFeaturesProps {
  features: FeatureConfig[];
  title?: string;
  description?: string;
  iconName?: string;
}

const DynamicFeatures = ({ features, title, description, iconName }: DynamicFeaturesProps) => {
  const { isDarkMode } = useDarkMode();

  // Dynamische Akzentfarbe basierend auf Service-Typ mit Dark Mode Support
  const getAccentColor = (iconName?: string, forDarkMode: boolean = false) => {
    switch (iconName) {
      case 'shopify':
        return forDarkMode ? '#a5c965' : '#9ebe59'; // Shopify Grün
      case 'plenty':
        return forDarkMode ? '#2a4a5a' : '#0f2532'; // PlentyONE Petrol
      case 'zap':
        return forDarkMode ? '#eb7c6b' : '#e76e5b'; // Klaviyo Orange
      default:
        return '#cda967'; // Standard Gold
    }
  };

  // Aktuelle Akzentfarbe für die Seite
  const currentAccentColor = getAccentColor(iconName, isDarkMode);

  // Header-Icon-Mapping für die Section-Überschriften
  const getHeaderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="w-8 h-8 mr-2" style={{ color: currentAccentColor }} />;
      case 'shopify':
        return (
          <Image
            src={isDarkMode ? "/Media/shopify_monotone_white.svg" : "/Media/shopify_monotone_black.svg"}
            alt="Shopify"
            width={32}
            height={32}
            className="w-8 h-8 mr-2"
          />
        );
      case 'plenty':
        return (
          <Image
            src={isDarkMode ? "/Media/PlentyONE-logo-white.svg" : "/Media/PlentyONE-logo-blue.svg"}
            alt="PlentyONE"
            width={32}
            height={32}
            className="w-8 h-8 mr-2"
          />
        );
      default:
        return <ShoppingBag className="w-8 h-8 text-[#cda967] mr-2" />;
    }
  };

  // Erweiteres Icon-Mapping für alle Service-Icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'settings':
        return <Settings className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'bot':
        return <Bot className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'brain':
        return <Brain className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'puzzle':
        return <Puzzle className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'barchart':
        return <BarChart className="w-8 h-8" style={{ color: currentAccentColor }} />;
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
      // PlentyONE-spezifische Icons
      case 'plenty':
        return (
          <Image
            src={isDarkMode ? "/Media/PlentyONE-logo-white.svg" : "/Media/PlentyONE-logo-blue.svg"}
            alt="PlentyONE"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        );
      case 'integration':
        return <Puzzle className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'performance':
        return <TrendingUp className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'enterprise':
        return <Users className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'migration':
        return <GitBranch className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'api':
        return <Globe className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'support':
        return <Headphones className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'marketing':
        return <Search className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'consulting':
        return <Brain className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'expertise':
        return <Code className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'workflow':
        return <Workflow className="w-8 h-8" style={{ color: currentAccentColor }} />;
      // Klaviyo-spezifische Icons
      case 'cart':
        return <ShoppingCart className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'welcome':
        return <Mail className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'purchase':
        return <Heart className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'segmentation':
        return <Target className="w-8 h-8" style={{ color: currentAccentColor }} />;
      case 'mail':
        return <Mail className="w-8 h-8" style={{ color: currentAccentColor }} />;
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
              {getHeaderIcon(iconName)}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {title || 'Services & Expertise'}
              </h2>
            </div>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {description || 'Professionelle Entwicklung für nachhaltigen E-Commerce Erfolg'}
            </p>
            <div 
              className="w-20 h-1 rounded-full mx-auto mt-4 opacity-60" 
              style={{ backgroundColor: currentAccentColor }}
            />
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
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-30 group-hover:opacity-100"
                  style={{ backgroundColor: currentAccentColor }}
                />
                
                {/* Card Content */}
                <div className="p-6">
                  {/* Icon */}
                  <div 
                    className="inline-flex p-3 rounded-xl mb-4 transition-colors duration-300"
                    style={{ 
                      backgroundColor: `${currentAccentColor}10`,
                    }}
                  >
                    {getIcon(feature.icon || '')}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-lg font-bold mb-3 transition-colors duration-300"
                    style={{ 
                      '--hover-color': currentAccentColor
                    } as React.CSSProperties}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = currentAccentColor}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = ''}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>

                  {/* Details List (Bullet Points) */}
                  {feature.details && feature.details.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {feature.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex}
                          className={`flex items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                        >
                          <div 
                            className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 bg-[#cda967]" 
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 cursor-pointer group/cta"
                    onMouseEnter={(e) => {
                      const span = e.currentTarget.querySelector('span');
                      const arrow = e.currentTarget.querySelector('svg');
                      if (span) span.style.color = currentAccentColor;
                      if (arrow) arrow.style.color = currentAccentColor;
                    }}
                    onMouseLeave={(e) => {
                      const span = e.currentTarget.querySelector('span');
                      const arrow = e.currentTarget.querySelector('svg');
                      if (span) span.style.color = '';
                      if (arrow) arrow.style.color = '';
                    }}
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
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Kontakt aufnehmen
                    </span>
                    <ArrowRight 
                      className={`w-5 h-5 transition-all duration-300 group-hover/cta:translate-x-1 ${
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
          <Workflow className="w-8 h-8 mb-2" style={{ color: currentAccentColor }} />
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">Skalier dein E-Commerce Business – mit klaren Prozessen und sauberen Datenflüssen.</h2>
          <p className={`text-lg sm:text-xl mb-6 font-normal ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>
            Ich helfe dir, dein E-Commerce-Fundament zu stabilisieren – mit strukturierter Systemarchitektur, sauberen Datenflüssen, smarten Workflows und KI-gestützter Prozessautomatisierung.
          </p>
          <div 
            className="w-16 h-1 rounded-full opacity-60 mb-2" 
            style={{ backgroundColor: getAccentColor(iconName) }}
          />
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