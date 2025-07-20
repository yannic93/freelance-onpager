"use client";

import React from "react";
import { Zap, Settings, Brain, Puzzle, Bot, BarChart, Workflow } from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { FeatureConfig } from "../../data/types";

interface DynamicFeaturesProps {
  features: FeatureConfig[];
}

const DynamicFeatures = ({ features }: DynamicFeaturesProps) => {
  const { isDarkMode } = useDarkMode();

  // Icon-Mapping für die ursprünglichen Icons
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
      default:
        return <span className="text-2xl">📊</span>;
    }
  };

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