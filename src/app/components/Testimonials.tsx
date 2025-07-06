"use client";

import React from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

const testimonials = [
  {
    name: "Anna Müller",
    role: "Projektleiterin, TechCorp",
    text: "Mit diesem Tool ist unser Team so effizient wie nie zuvor! Die Automatisierung spart uns täglich Zeit.",
    avatar: "A",
  },
  {
    name: "Jonas Becker",
    role: "CEO, Startify",
    text: "Modern, intuitiv und zuverlässig. Genau das, was wir gesucht haben!",
    avatar: "J",
  },
];

const Testimonials = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <section id="testimonials" className={`py-16 transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0a] text-[#ededed]' : 'bg-white text-[#1A1A1A]'}`}>
      <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-10 tracking-tight">
        Was unsere Kunden sagen
      </h2>
      <div className="flex justify-center gap-8 flex-wrap max-w-5xl mx-auto px-4">
        {testimonials.map((t, i) => (
          <div key={i} className={`rounded-2xl p-8 min-w-[280px] flex-1 max-w-[340px] text-center shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] border border-[#333]' : 'bg-[#f8f8f8]'}`}>
            <div className="w-14 h-14 rounded-full bg-[#cda967] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {t.avatar}
            </div>
            <p className="text-lg italic mb-3 leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="font-bold text-lg">{t.name}</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 