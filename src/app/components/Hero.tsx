"use client";

import React, { useState, useRef, useEffect } from "react";

const menuLinks = [
  { label: "Leistungen", href: "#features" },
  { label: "Projekte & Skills", href: "#experience" },
  { label: "Kontakt", href: "#contact" },
];

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");

  // Dark Mode Toggle Handler
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Update CSS variables
    const root = document.documentElement;
    if (!isDarkMode) {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
    }
  };

  // Tool logos based on dark mode
  const toolLogos = [
    { src: isDarkMode ? "/Media/shopify_monotone_white.svg" : "/Media/shopify_monotone_black.svg", alt: "Shopify" },
    { src: isDarkMode ? "/Media/PlentyONE-logo-white.svg" : "/Media/PlentyONE-logo-blue.svg", alt: "Plentymarkets" },
    { src: isDarkMode ? "/Media/klaviyo_white.svg" : "/Media/klaviyo_black.svg", alt: "Klaviyo" },
    { src: "/Media/N8N.Io_idQ-KxEpHW_0.png", alt: "n8n" },
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen w-full flex flex-col items-center font-sans transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`} style={{ color: isDarkMode ? '#ededed' : '#1A1A1A' }}>
      {/* Glassmorphism Stickybar mit Name links */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none" style={{background: 'transparent'}}>
        {/* Desktop: normale Bar */}
        <nav
          className={`pointer-events-auto hidden lg:flex items-center justify-center gap-2 rounded-3xl shadow-2xl backdrop-blur px-6 py-3 mx-auto max-w-fit mt-4 transition-colors duration-300 ${isDarkMode ? 'bg-black/30' : 'bg-white/20'}`}
          style={{ border: '0.5px solid #cda96755' }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-extrabold text-[#cda967] px-3 text-base tracking-wide select-none whitespace-nowrap hover:text-[#b8934e] transition-colors cursor-pointer"
          >
            Yannic Nandy
          </button>
          {menuLinks.map((link) => (
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
          ))}
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
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-extrabold text-[#cda967] text-base tracking-wide select-none whitespace-nowrap hover:text-[#b8934e] transition-colors cursor-pointer"
            >
              Yannic Nandy
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
            <div className={`absolute top-14 left-1/2 -translate-x-1/2 mt-2 rounded-2xl shadow-2xl border border-[#cda967]/20 flex flex-col items-stretch min-w-[180px] z-50 animate-fadeIn transition-colors duration-300 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'}`}>
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    `px-6 py-3 text-base font-medium rounded-2xl transition-colors text-center ` +
                    (activeSection === link.href.replace('#','')
                      ? "bg-[#cda967]/20 font-semibold text-[#cda967] shadow"
                      : `${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'} hover:bg-[#cda967]/10 hover:text-[#cda967]`)
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
              ))}
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
        <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 max-w-full sm:max-w-3xl leading-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
          style={{ fontFamily: 'inherit', maxWidth: '100vw', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
          Freelancer für <span className="text-[#cda967]">skalierbare E-Commerce-Systeme</span>.
        </h1>
        <p className={`text-base sm:text-lg md:text-xl max-w-full sm:max-w-xl mx-auto mb-2 sm:mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-[#1A1A1A]'}`}
          style={{ fontFamily: 'inherit', maxWidth: '100vw', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
          Shopify, Plentymarkets, Klaviyo & n8n – von Setup bis Automatisierung.
        </p>
        {/* Toolstack Logos Marquee */}
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
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center w-full max-w-full">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#cda967] px-5 sm:px-7 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white shadow-md hover:bg-[#b8934e] transition-colors max-w-full"
            style={{ fontFamily: 'inherit', maxWidth: '100vw', overflowWrap: 'break-word', wordBreak: 'break-word' }}
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 110; // 110px Offset für Stickybar
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Kontakt aufnehmen <span className="text-xl">→</span>
          </a>
          <a
            href="#experience"
            className={`inline-flex items-center gap-2 rounded-full border border-[#cda967]/40 px-5 sm:px-7 py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-md hover:bg-[#cda967]/10 hover:text-[#cda967] transition-colors max-w-full ${isDarkMode ? 'bg-black text-white' : 'bg-white text-[#1A1A1A]'}`}
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

export default Hero;