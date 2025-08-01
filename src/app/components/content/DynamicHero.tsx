"use client";

import React, { useState, useRef, useEffect } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { HeroConfig } from "../../data/types";

interface DynamicHeroProps {
  config: HeroConfig;
}

const menuLinks = [
  { label: "Leistungen", href: "#features" },
  { label: "Projekt-Portfolio", href: "#experience" },
  { label: "Kontakt", href: "#contact" },
];

const DynamicHero = ({ config }: DynamicHeroProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // CTA Color variants with dark mode support
  const getCtaClasses = (variant: string = 'default') => {
    const baseClasses = "inline-flex items-center gap-2 rounded-xl px-5 sm:px-7 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg max-w-full";
    
    switch (variant) {
      case 'plenty':
        // PlentyONE: hellere Variante im Dark Mode für bessere Sichtbarkeit
        return isDarkMode 
          ? `${baseClasses} bg-[#1a3a4a] hover:bg-[#2a4a5a]`
          : `${baseClasses} bg-[#0f2532] hover:bg-[#1a3a4a]`;
      case 'shopify':
        // Shopify: etwas kräftiger im Dark Mode
        return isDarkMode
          ? `${baseClasses} bg-[#a5c965] hover:bg-[#9ebe59]`
          : `${baseClasses} bg-[#9ebe59] hover:bg-[#8ba84f]`;
      case 'klaviyo':
        // Klaviyo: leicht heller im Dark Mode
        return isDarkMode
          ? `${baseClasses} bg-[#eb7c6b] hover:bg-[#e76e5b]`
          : `${baseClasses} bg-[#e76e5b] hover:bg-[#d85a46]`;
      default:
        // Standard Gold
        return `${baseClasses} bg-[#cda967] hover:bg-[#b8955a]`;
    }
  };

  // Title Color variants with dark mode support
  const getBrandColor = (variant: string = 'default') => {
    switch (variant) {
      case 'plenty':
        // PlentyONE: hellere Variante im Dark Mode für bessere Sichtbarkeit
        return isDarkMode ? '#2a4a5a' : '#0f2532';
      case 'shopify':
        // Shopify: etwas kräftiger im Dark Mode
        return isDarkMode ? '#a5c965' : '#9ebe59';
      case 'klaviyo':
        // Klaviyo: leicht heller im Dark Mode für bessere Sichtbarkeit
        return isDarkMode ? '#eb7c6b' : '#e76e5b';
      default:
        // Standard Gold
        return '#cda967';
    }
  };

  // Process title with dynamic brand colors
  const processTitle = (title: string, titleVariant?: string) => {
    if (!titleVariant || titleVariant === 'default') {
      return title;
    }
    
    const brandColor = getBrandColor(titleVariant);
    // Replace any existing color style with dynamic brand color
    return title.replace(
      /style="color:\s*[^"]*"/g,
      `style="color: ${brandColor}"`
    );
  };

  // Tool logos based on dark mode
  const toolLogos = [
    { src: isDarkMode ? "/Media/shopify_monotone_white.svg" : "/Media/shopify_monotone_black.svg", alt: "Shopify" },
    { src: isDarkMode ? "/Media/PlentyONE-logo-white.svg" : "/Media/PlentyONE-logo-blue.svg", alt: "Plentymarkets" },
    { src: isDarkMode ? "/Media/klaviyo_white.svg" : "/Media/klaviyo_black.svg", alt: "Klaviyo" },
    { src: "/Media/N8N.Io_idQ-KxEpHW_0.png", alt: "n8n" },
  ];

  // Helper function for dark mode optimized service colors
  const getServiceColor = (baseColor: string, forDarkMode: boolean = false) => {
    switch (baseColor) {
      case "#9ebe59": // Shopify
        return forDarkMode ? "#a5c965" : "#9ebe59";
      case "#0f2532": // PlentyONE
        return forDarkMode ? "#2a4a5a" : "#0f2532";
      case "#e76e5b": // Klaviyo
        return forDarkMode ? "#eb7c6b" : "#e76e5b";
      default:
        return baseColor;
    }
  };

  // Services for dropdown
  const services = [
    {
      id: "shopify",
      title: "Shopify",
      description: "Shop-Einrichtung und Performance-Optimierung",
      href: "/shopify-freelancer",
      logo: isDarkMode ? "/Media/shopify_monotone_white.svg" : "/Media/shopify_monotone_black.svg",
      color: "#9ebe59",
      displayColor: getServiceColor("#9ebe59", isDarkMode)
    },
    {
      id: "plentymarkets",
      title: "PlentyONE",
      description: "Systemverbindungen und Automatisierung",
      href: "/plenty-one",
      logo: isDarkMode ? "/Media/PlentyONE-logo-white.svg" : "/Media/PlentyONE-logo-blue.svg",
      color: "#0f2532",
      displayColor: getServiceColor("#0f2532", isDarkMode)
    },
    {
      id: "klaviyo",
      title: "Klaviyo",
      description: "E-Mail Marketing Automatisierung",
      href: "/klaviyo-automation",
      logo: isDarkMode ? "/Media/klaviyo_white.svg" : "/Media/klaviyo_black.svg",
      color: "#e76e5b",
      displayColor: getServiceColor("#e76e5b", isDarkMode)
    }
  ];

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.offsetWidth);
    }
    // Re-calc on window resize
    const handleResize = () => {
      if (marqueeRef.current) {
        setMarqueeWidth(marqueeRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation duration: 100px = 2s, min 10s
  const duration = Math.max(10, (marqueeWidth / 100) * 2);

  // Scrollspy für aktive Sektion
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["features", "experience", "contact"];
      let current = "";
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section ist aktiv, wenn ihr Top <= 130px (unterhalb der Bar) und ihr Bottom > 130px
          if (rect.top <= 130 && rect.bottom > 130) {
            current = sectionIds[i];
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`min-h-screen w-full flex flex-col items-center font-sans transition-colors duration-300`} style={{ 
      backgroundColor: 'var(--section-bg-primary)',
      color: isDarkMode ? '#ededed' : '#1A1A1A' 
    }}>
      {/* Glassmorphism Stickybar mit Name links */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none" style={{background: 'transparent'}}>
        {/* Desktop: normale Bar */}
        <nav
          className={`pointer-events-auto hidden lg:flex items-center justify-center gap-2 rounded-3xl shadow-2xl backdrop-blur px-6 py-3 mx-auto max-w-fit mt-4 transition-colors duration-300 ${isDarkMode ? 'bg-black/30' : 'bg-white/20'}`}
          style={{ border: '0.5px solid #cda96755' }}
        >
          <button
            onClick={() => window.location.href = '/'}
            className="font-extrabold text-[#cda967] px-3 text-base tracking-wide select-none whitespace-nowrap hover:text-[#b8934e] transition-colors cursor-pointer"
          >
            {config.brandName || 'Yannic Nandy'}
          </button>
          {menuLinks.map((link) => {
            if (link.label === "Leistungen") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                      dropdownTimeoutRef.current = null;
                    }
                    setServicesDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setServicesDropdownOpen(false);
                    }, 150);
                  }}
                >
                  <button
                    className={
                      `px-4 py-1.5 rounded-full text-base font-medium transition-colors flex items-center gap-1` +
                      (activeSection === link.href.replace('#','')
                        ? " bg-[#cda967]/20 font-semibold text-[#cda967] shadow"
                        : ` ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'} hover:bg-[#cda967]/10 hover:text-[#cda967]`)
                    }
                    style={{ fontFamily: 'inherit' }}
                    onClick={() => {
                      setServicesDropdownOpen(!servicesDropdownOpen);
                    }}
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Services Dropdown */}
                  {servicesDropdownOpen && (
                    <div 
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-80 rounded-2xl shadow-2xl border border-[#cda967]/20 transition-colors duration-300 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`}
                      style={{ zIndex: 9999, marginTop: '4px' }}
                      onMouseEnter={() => {
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current);
                          dropdownTimeoutRef.current = null;
                        }
                        setServicesDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        dropdownTimeoutRef.current = setTimeout(() => {
                          setServicesDropdownOpen(false);
                        }, 150);
                      }}
                    >
                      <div className="p-4">
                        <div className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: '#cda967' }}>Hauptleistungen</div>
                        <div className="space-y-3">
                          {services.map((service) => (
                            <a
                              key={service.id}
                              href={service.href}
                              className="group block relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1"
                              style={{
                                backgroundColor: 'var(--card-bg)',
                                border: '1px solid var(--card-border)',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
                              }}
                              onClick={e => {
                                if (service.href.startsWith('#')) {
                                  e.preventDefault();
                                  setServicesDropdownOpen(false);
                                  const id = service.href.replace('#', '');
                                  const el = document.getElementById(id);
                                  if (el) {
                                    const y = el.getBoundingClientRect().top + window.scrollY - 110;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                  }
                                } else {
                                  setServicesDropdownOpen(false);
                                }
                              }}
                            >
                              {/* Service color accent */}
                              <div 
                                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:opacity-100"
                                style={{
                                  backgroundColor: service.displayColor,
                                  opacity: 0.4
                                }}
                              />
                              
                              <div className="p-4">
                                <div className="flex items-center gap-3">
                                  {/* Logo container with colored background */}
                                  <div 
                                    className="flex-shrink-0 p-3 rounded-lg transition-colors duration-300"
                                    style={{ 
                                      backgroundColor: `${service.displayColor}15`
                                    }}
                                  >
                                    <img
                                      src={service.logo}
                                      alt={service.title}
                                      className="w-8 h-6 object-contain"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div 
                                      className={`font-semibold text-sm mb-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
                                      onMouseEnter={(e) => {
                                        (e.target as HTMLElement).style.color = service.displayColor;
                                      }}
                                      onMouseLeave={(e) => {
                                        (e.target as HTMLElement).style.color = '';
                                      }}
                                    >
                                      {service.title}
                                    </div>
                                    <div className={`text-xs leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      {service.description}
                                    </div>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <svg 
                                      className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" 
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                      style={{ color: service.displayColor }}
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    `px-4 py-1.5 rounded-full text-base font-medium transition-colors` +
                    (activeSection === link.href.replace('#','')
                      ? " bg-[#cda967]/20 font-semibold text-[#cda967] shadow"
                      : ` ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'} hover:bg-[#cda967]/10 hover:text-[#cda967]`)
                  }
                  style={{ fontFamily: 'inherit' }}
                  onClick={e => {
                    e.preventDefault();
                    const id = link.href.replace('#','');
                    const el = document.getElementById(id);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 110; // 110px Offset für Stickybar
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </a>
              );
            }
          })}
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1.5 rounded-full text-base font-medium transition-colors hover:bg-[#cda967]/10 hover:text-[#cda967]"
            aria-label={isDarkMode ? "Light Mode aktivieren" : "Dark Mode aktivieren"}
          >
            {isDarkMode ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </nav>
        {/* Mobile: kompakter Button + Dropdown */}
        <div className="pointer-events-auto flex lg:hidden items-center justify-center mx-auto w-full">
          <div className={`flex items-center gap-2 rounded-2xl shadow-xl backdrop-blur px-4 py-2 border border-[#cda967]/20 max-w-fit mx-auto mt-4 transition-colors duration-300 ${isDarkMode ? 'bg-black/40' : 'bg-white/30'}`}>
            <button
              onClick={() => window.location.href = '/'}
              className="font-extrabold text-[#cda967] text-base tracking-wide select-none whitespace-nowrap hover:text-[#b8934e] transition-colors cursor-pointer"
            >
              {config.brandName || 'Yannic Nandy'}
            </button>
            {/* Dark Mode Toggle Button Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-[#cda967]/10 transition-colors"
              aria-label={isDarkMode ? "Light Mode aktivieren" : "Dark Mode aktivieren"}
            >
              {isDarkMode ? (
                <svg className="h-5 w-5 text-[#cda967]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-[#cda967]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
            <button
              aria-label="Menü öffnen"
              className="p-2 rounded-md hover:bg-[#cda967]/10 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg className="h-6 w-6 text-[#cda967]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Dropdown */}
          {mobileOpen && (
            <div className={`absolute top-14 left-1/2 -translate-x-1/2 mt-2 rounded-2xl shadow-2xl border border-[#cda967]/20 flex flex-col items-stretch min-w-[280px] max-w-[320px] w-[90vw] z-50 animate-fadeIn transition-colors duration-300 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm`}>
              {menuLinks.map((link) => {
                if (link.label === "Leistungen") {
                  return (
                    <div key={link.href} className="px-4 py-3">
                      <div className={`px-3 py-2 text-base font-semibold text-center ${activeSection === link.href.replace('#','') ? "bg-[#cda967]/20 font-semibold text-[#cda967] shadow rounded-xl" : `${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}`}>
                        {link.label}
                      </div>
                      <div className="mt-3 space-y-2">
                        {services.map((service) => (
                          <a
                            key={service.id}
                            href={service.href}
                            className="group block p-4 rounded-xl transition-all duration-200 border border-transparent hover:shadow-sm"
                            style={{
                              '--service-color': service.displayColor,
                              '--service-bg': `${service.displayColor}10`,
                              '--service-border': `${service.displayColor}20`
                            } as React.CSSProperties}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = `${service.displayColor}10`;
                              e.currentTarget.style.borderColor = `${service.displayColor}30`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '';
                              e.currentTarget.style.borderColor = 'transparent';
                            }}
                            onClick={e => {
                              setMobileOpen(false);
                              if (service.href.startsWith('#')) {
                                e.preventDefault();
                                const id = service.href.replace('#', '');
                                const el = document.getElementById(id);
                                if (el) {
                                  const y = el.getBoundingClientRect().top + window.scrollY - 110;
                                  window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                              }
                            }}
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 mt-0.5">
                                <img
                                  src={service.logo}
                                  alt={service.title}
                                  className="w-8 h-6 object-contain"
                                />
                              </div>
                              <div className="flex-1 min-w-0 text-left">
                                <div 
                                  className={`font-semibold text-base transition-colors ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
                                  onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.color = service.displayColor;
                                  }}
                                  onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.color = '';
                                  }}
                                >
                                  {service.title}
                                </div>
                                <div className={`text-sm mt-1 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                  {service.description}
                                </div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={
                        `mx-4 mb-3 px-6 py-4 text-base font-medium rounded-xl transition-colors text-center ` +
                        (activeSection === link.href.replace('#','')
                          ? "bg-[#cda967]/20 font-semibold text-[#cda967] shadow"
                          : `${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'} hover:bg-[#cda967]/10 hover:text-[#cda967] hover:shadow-sm`)
                      }
                      style={{ fontFamily: 'inherit' }}
                      onClick={e => {
                        e.preventDefault();
                        setMobileOpen(false);
                        const id = link.href.replace('#','');
                        const el = document.getElementById(id);
                        if (el) {
                          const y = el.getBoundingClientRect().top + window.scrollY - 110;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  );
                }
              })}
              {/* Bottom padding for dropdown */}
              <div className="h-2"></div>
            </div>
          )}
        </div>
      </div>
      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-2 sm:px-4 pt-32 pb-16 w-full max-w-full overflow-x-hidden">
        <div className="mb-4 sm:mb-6 flex justify-center w-full">
          <span className={`inline-flex items-center gap-2 rounded-md border border-[#cda967]/40 px-2 sm:px-3 py-1 text-xs sm:text-sm font-mono shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-[#1A1A1A]'}`}
            style={{maxWidth: '100vw', overflowWrap: 'break-word', wordBreak: 'break-word'}}>
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: '#FFD600' }}></span>
            Begrenzt verfügbar - gerne Anfragen
          </span>
        </div>
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 max-w-full sm:max-w-3xl leading-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
          style={{ fontFamily: 'inherit', maxWidth: '75vw', overflowWrap: 'break-word', wordBreak: 'break-word' }}
          dangerouslySetInnerHTML={{ __html: processTitle(config.title, config.titleVariant) }}>
        </h1>
        {config.subtitle && (
          <h2 className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 max-w-full sm:max-w-3xl leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
            style={{ fontFamily: 'inherit', maxWidth: '85vw', overflowWrap: 'break-word', wordBreak: 'break-word' }}
            dangerouslySetInnerHTML={{ __html: config.subtitle }}>
          </h2>
        )}
        {config.description && (
          <p className={`text-base sm:text-lg md:text-xl max-w-full sm:max-w-2xl mx-auto mb-4 sm:mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
            style={{ fontFamily: 'inherit', maxWidth: '80vw', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
            {config.description}
          </p>
        )}
        {/* Toolstack Logos Marquee - optional */}
        {config.showLogoCarousel !== false && (
          <div className="relative flex justify-center items-center mb-6 sm:mb-8 w-full max-w-full overflow-x-hidden" style={{ maxWidth: 480 }}>
            {/* Gradient Overlays */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-12 z-10" style={{background: `linear-gradient(to right, ${isDarkMode ? '#0a0a0a' : '#fff'} 70%, transparent)`}} />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-12 z-10" style={{background: `linear-gradient(to left, ${isDarkMode ? '#0a0a0a' : '#fff'} 70%, transparent)`}} />
            <div className="overflow-x-hidden w-full">
              <div
                className="flex gap-6 sm:gap-10 py-2 whitespace-nowrap"
                ref={marqueeRef}
                style={{
                  display: 'inline-flex',
                  animation: marqueeWidth
                    ? `marquee ${duration}s linear infinite`
                    : undefined,
                  minWidth: marqueeWidth ? marqueeWidth * 2 : undefined,
                  willChange: 'transform',
                  maxWidth: '100vw',
                }}
              >
                {toolLogos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200 max-w-[80px] sm:max-w-[120px]"
                    draggable="false"
                    style={{ userSelect: 'none', maxWidth: '20vw' }}
                  />
                ))}
                {toolLogos.map((logo, i) => (
                  <img
                    key={toolLogos.length + i}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200 max-w-[80px] sm:max-w-[120px]"
                    draggable="false"
                    style={{ userSelect: 'none', maxWidth: '20vw' }}
                  />
                ))}
              </div>
            </div>
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-${marqueeWidth}px); }
              }
            `}</style>
          </div>
        )}
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center w-full max-w-full">
          {config.ctaText && config.ctaLink && (
            <a
              href={config.ctaLink}
              className={getCtaClasses(config.ctaVariant)}
              style={{ fontFamily: 'inherit', maxWidth: '100vw', overflowWrap: 'break-word', wordBreak: 'break-word' }}
                             onClick={e => {
                 e.preventDefault();
                 if (config.ctaLink) {
                   const el = document.getElementById(config.ctaLink.replace('#', ''));
                   if (el) {
                     const y = el.getBoundingClientRect().top + window.scrollY - 110; // 110px Offset für Stickybar
                     window.scrollTo({ top: y, behavior: 'smooth' });
                   }
                 }
               }}
            >
              {config.ctaText} <span className="text-xl">→</span>
            </a>
          )}
          <a
            href="#experience"
            className={`inline-flex items-center gap-2 rounded-xl border border-[#cda967]/40 px-5 sm:px-7 py-2 sm:py-3 text-base sm:text-lg font-semibold hover:bg-[#cda967]/10 hover:text-[#cda967] transition-all duration-300 hover:scale-105 hover:shadow-lg max-w-full ${isDarkMode ? 'bg-black text-white' : 'bg-white text-[#1A1A1A]'}`}
            style={{ fontFamily: 'inherit', maxWidth: '100vw', overflowWrap: 'break-word', wordBreak: 'break-word' }}
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('experience');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 110; // 110px Offset für Stickybar
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            CV <span className="text-xl">↓</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DynamicHero; 