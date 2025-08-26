"use client";

import React from "react";
import { User, Code, Coffee, Globe } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const About = () => {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "yannicn/30min",
        config: { layout: "month_view" },
        buttonPosition: "bottom-left",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  
  return (
    <section id="about" className={`py-10 sm:py-14 md:py-16 transition-colors duration-300`} style={{ 
      backgroundColor: 'var(--section-bg-primary)',
      color: isDarkMode ? '#ededed' : '#1A1A1A' 
    }}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex justify-center mb-3 sm:mb-4">
            <User className="w-8 h-8 text-[#cda967]" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4 tracking-tight">
            Über mich
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#cda967] rounded-full opacity-60 mx-auto mb-2" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
          {/* Image Section */}
          <div className="relative group h-56 sm:h-72 md:h-80 lg:h-full">
            <div className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl h-full`} style={{
              backgroundColor: 'var(--card-bg)',
              border: `1px solid var(--card-border)`
            }}>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              {/* Image */}
              <img 
                src="/Media/yannicn.jpg" 
                alt="Yannic Nandy" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Floating Info Card */}
              <div className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 p-3 sm:p-4 rounded-2xl backdrop-blur-md transition-all duration-300 ${isDarkMode ? 'bg-black/70' : 'bg-white/80'}`} style={{
                border: '1px solid rgba(205, 169, 103, 0.2)'
              }}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#cda967] animate-pulse" />
                  <span className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} drop-shadow`} style={{textShadow: '0 1px 4px rgba(0,0,0,0.25)'}}>
                    Verfügbar für neue Projekte
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text + Skills Card Section */}
          <div className={`flex flex-col h-auto lg:h-full rounded-3xl shadow-lg transition-colors duration-300`} style={{
            backgroundColor: 'var(--card-bg)',
            border: `1px solid var(--card-border)`
          }}>
            <div className="flex-1 p-4 sm:p-6 pb-2 flex flex-col justify-start">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#cda967]">
                Freelancer für skalierbare E-Commerce-Systeme
              </h3>
              <p className={`leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>                
                Mit über 5 Jahren Erfahrung in der E-Commerce-Welt helfe ich Unternehmen dabei, 
                ihre Online-Shops zu optimieren und zu skalieren. Mein Fokus liegt auf der 
                nahtlosen Integration von Shopify, Plentymarkets, Klaviyo und n8n.
              </p>
              <p className={`leading-relaxed text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>                
                Ich denke in Prozessen und Wachstum – nicht nur in Code. Meine Lösungen 
                verbinden Business-Logik mit technischer Umsetzung für messbare Ergebnisse.
              </p>
            </div>
            {/* Skills Grid */}
            <div className="p-3 sm:p-4 pt-0 flex flex-col justify-end flex-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className={`p-3 sm:p-4 rounded-2xl transition-colors duration-300`} style={{
                  backgroundColor: 'var(--card-bg)',
                  border: `1px solid var(--card-border)`
                }}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <Code className="w-5 h-5 text-[#cda967]" />
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>                      Technische Expertise
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>                    Shopify, Plentymarkets, Klaviyo, n8n, API-Integrationen
                  </p>
                </div>

                <div className={`p-3 sm:p-4 rounded-2xl transition-colors duration-300`} style={{
                  backgroundColor: 'var(--card-bg)',
                  border: `1px solid var(--card-border)`
                }}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <Coffee className="w-5 h-5 text-[#cda967]" />
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>                      Arbeitsweise
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>                    Remote-First, strukturiert, ergebnisorientiert
                  </p>
                </div>

                <div className={`p-3 sm:p-4 rounded-2xl transition-colors duration-300`} style={{
                  backgroundColor: 'var(--card-bg)',
                  border: `1px solid var(--card-border)`
                }}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <Globe className="w-5 h-5 text-[#cda967]" />
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>                      Standort
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>                  Freiburg im Breisgau – regelmäßig auch in Hamburg, Korea und im Winter gern in Spanien.
                  </p>
                </div>

                <div className={`p-3 sm:p-4 rounded-2xl transition-colors duration-300`} style={{
                  backgroundColor: 'var(--card-bg)',
                  border: `1px solid var(--card-border)`
                }}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <User className="w-5 h-5 text-[#cda967]" />
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>                      Verfügbarkeit
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>                    Begrenzt verfügbar - gerne anfragen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 