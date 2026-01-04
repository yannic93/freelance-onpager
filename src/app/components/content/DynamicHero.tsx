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

  const [activeSection, setActiveSection] = useState<string>("");
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

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
    { src: isDarkMode ? "/Media/klaviyo_white.svg" : "/Media/klaviyo_black.svg", alt: "Klaviyo" },
    { src: "/Media/N8N.Io_idQ-KxEpHW_0.png", alt: "n8n" },
    { src: "/Media/gorgias-Dark.svg", alt: "Gorgias" },
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
      id: "klaviyo",
      title: "Klaviyo",
      description: "E-Mail Marketing Automatisierung",
      href: "/klaviyo-automation",
      logo: isDarkMode ? "/Media/klaviyo_white.svg" : "/Media/klaviyo_black.svg",
      color: "#e76e5b",
      displayColor: getServiceColor("#e76e5b", isDarkMode)
    },
    {
      id: "gorgias",
      title: "Gorgias",
      description: "Customer Support Automatisierung",
      href: "/gorgias-automation",
      logo: "/Media/gorgias-Dark.svg",
      color: "#FE8D78",
      displayColor: "#FE8D78"
    },
    {
      id: "plentymarkets",
      title: "PlentyONE",
      description: "Systemverbindungen und Automatisierung",
      href: "/plenty-one",
      logo: isDarkMode ? "/Media/PlentyONE-logo-white.svg" : "/Media/PlentyONE-logo-blue.svg",
      color: "#0f2532",
      displayColor: getServiceColor("#0f2532", isDarkMode)
    }
  ];



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
    <div
      className="min-h-screen w-full flex flex-col items-center font-sans transition-colors duration-300"
      style={{
        backgroundColor: 'var(--section-bg-primary)',
        backgroundImage: `radial-gradient(circle at top, ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'}, transparent 60%)`,
        color: isDarkMode ? '#ededed' : '#1A1A1A'
      }}
    >
      {/* Glassmorphism Stickybar mit Name links */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none" style={{ background: 'transparent' }}>
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
                      (activeSection === link.href.replace('#', '')
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
                    (activeSection === link.href.replace('#', '')
                      ? " bg-[#cda967]/20 font-semibold text-[#cda967] shadow"
                      : ` ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'} hover:bg-[#cda967]/10 hover:text-[#cda967]`)
                  }
                  style={{ fontFamily: 'inherit' }}
                  onClick={e => {
                    e.preventDefault();
                    const id = link.href.replace('#', '');
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
        {/* Mobile: kompakter Button */}
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
              onClick={() => setMobileOpen(true)}
            >
              <svg className="h-6 w-6 text-[#cda967]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Slide-Out Menu */}
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-Out Panel */}
        <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[380px] z-[9999] lg:hidden transform transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          } ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'} shadow-2xl`}
          style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
        >

          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-[#cda967]/20">
            <h2 className="text-xl font-bold text-[#cda967]">Navigation</h2>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-[#cda967]/10 transition-colors"
              aria-label="Menü schließen"
            >
              <svg className="h-6 w-6 text-[#cda967]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Content */}
          <div className="overflow-y-auto h-[calc(100%-88px)] pb-6">
            <div className="p-6 space-y-4">
              {menuLinks.map((link) => {
                if (link.label === "Leistungen") {
                  return (
                    <div key={link.href} className="space-y-4">
                      <div className={`text-lg font-semibold px-6 py-3 ${activeSection === link.href.replace('#', '') ? "text-[#cda967]" : `${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}`}>
                        {link.label}
                      </div>
                      <div className="space-y-2">
                        {services.map((service) => (
                          <a
                            key={service.id}
                            href={service.href}
                            className="group block px-6 py-4 transition-all duration-200 relative overflow-hidden cursor-pointer"
                            style={{
                              backgroundColor: `${service.displayColor}08`,
                              borderLeft: `4px solid ${service.displayColor}`,
                              pointerEvents: 'auto',
                              touchAction: 'manipulation'
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
                            <div className="flex items-center gap-4">
                              <div className="flex-shrink-0">
                                <img
                                  src={service.logo}
                                  alt={service.title}
                                  className="w-8 h-8 object-contain"
                                />
                              </div>
                              <div className="flex-1">
                                <div
                                  className="font-semibold text-base"
                                  style={{ color: service.displayColor }}
                                >
                                  {service.title}
                                </div>
                                <div className={`text-sm mt-0.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                  {service.description}
                                </div>
                              </div>
                              <svg
                                className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                              </svg>
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
                      className={`block px-6 py-4 text-lg font-medium transition-all duration-200 cursor-pointer ${activeSection === link.href.replace('#', '')
                        ? "text-[#cda967] bg-[#cda967]/10 border-l-4 border-[#cda967]"
                        : `${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'} hover:bg-[#cda967]/5 hover:text-[#cda967] border-l-4 border-transparent`
                        }`}
                      style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
                      onClick={e => {
                        e.preventDefault();
                        setMobileOpen(false);
                        const id = link.href.replace('#', '');
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
            </div>
          </div>
        </div>
      </div>
      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-stretch text-left px-6 sm:px-8 pt-32 pb-16 w-full max-w-full overflow-x-hidden">
        <div className="w-full max-w-[900px] mx-auto">
          <div className="mb-4 sm:mb-6">
            <span
              className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-[#1A1A1A]'} inline-flex items-center gap-2 rounded-full border border-[#cda967]/40 px-3 py-1 text-xs sm:text-sm font-mono shadow-sm transition-colors`}
            >
              <span className="relative inline-flex w-2.5 h-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
              </span>
              Kapazitäten frei - gerne anfragen.
            </span>
          </div>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 leading-tight ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
            style={{ fontFamily: 'inherit' }}
            dangerouslySetInnerHTML={{ __html: processTitle(config.title || '', config.titleVariant) }}
          />
          <div className="mb-4 sm:mb-6">
            <div
              className="h-1.5 w-24 sm:w-32 md:w-40 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #cda967, #b8955a)',
                boxShadow: '0 4px 14px rgba(205,169,103,0.35)'
              }}
            />
          </div>

          {config.subtitle && (
            <h2
              className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 leading-relaxed ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
              style={{ fontFamily: 'inherit' }}
              dangerouslySetInnerHTML={{ __html: config.subtitle || '' }}
            />
          )}

          {config.description && (
            <p
              className={`text-base sm:text-lg md:text-xl max-w-[700px] mb-6 sm:mb-8 ${isDarkMode ? 'text-white/80' : 'text-[#1A1A1A]/80'}`}
              style={{ fontFamily: 'inherit' }}
            >
              {config.description}
            </p>
          )}

          <div className="cta mb-8 sm:mb-10 flex flex-wrap gap-3 sm:gap-4">
            {config.ctaText && config.ctaLink && (
              <a
                href={config.ctaLink}
                className={getCtaClasses(config.ctaVariant)}
                onClick={e => {
                  e.preventDefault();
                  if (config.ctaLink) {
                    const el = document.getElementById(config.ctaLink.replace('#', ''));
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 110;
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
              className={`inline-flex items-center gap-2 rounded-xl border border-[#cda967]/40 px-5 sm:px-7 py-2 sm:py-3 text-base sm:text-lg font-semibold hover:bg-[#cda967]/10 hover:text-[#cda967] transition-all duration-300 hover:scale-105 hover:shadow-lg ${isDarkMode ? 'bg-black text-white' : 'bg-white text-[#1A1A1A]'}`}
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('experience');
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 110;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              CV <span className="text-xl">↓</span>
            </a>
          </div>

          {config.showLogoCarousel !== false && (
            <div className="logos flex items-center gap-5 sm:gap-6 md:gap-7 flex-wrap">
              {toolLogos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 sm:h-7 md:h-8 w-auto"
                  draggable="false"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicHero;