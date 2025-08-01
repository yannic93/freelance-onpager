"use client";

import React, { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

  const serviceOptions = [
    "Shopify Setup / Support",
    "Klaviyo Strategie / E-Mail-Marketing",
    "n8n Automatisierungen",
    "Performance Marketing (Meta / Google Ads)",
    "Datenfeeds (Channable, Export-Optimierung)",
    "Systemarchitektur / Prozessberatung",
    "Projektanfrage allgemein",
    "Technische Umsetzung",
    "UX / Conversion-Optimierung",
    "Sonstiges",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        });
        setFormData({ name: "", email: "", message: "", services: [] });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Ein Fehler ist aufgetreten",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Verbindungsfehler. Bitte versuche es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-16 transition-colors duration-300`} style={{ 
      backgroundColor: 'var(--section-bg-secondary)',
      color: isDarkMode ? '#ededed' : '#1A1A1A' 
    }}>
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
          Projektanfrage
        </h2>
        <p className={`text-center mb-8 max-w-lg mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Du hast ein Projekt oder brauchst technischen Support? Ich melde mich zeitnah und persönlich bei dir zurück.
        </p>
        <form onSubmit={handleSubmit} className={`rounded-2xl shadow-lg p-8 flex flex-col gap-6 transition-colors duration-300`} style={{
          backgroundColor: 'var(--card-bg)',
          border: `1px solid var(--card-border)`
        }}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className={`px-4 py-3 rounded-lg border border-[#cda967] text-base focus:outline-none focus:ring-2 focus:ring-[#cda967]/40 transition disabled:opacity-50 ${isDarkMode ? 'bg-[#2a2a2a] text-[#ededed] placeholder-gray-400' : 'bg-white text-[#1A1A1A]'}`}
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail *"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className={`px-4 py-3 rounded-lg border border-[#cda967] text-base focus:outline-none focus:ring-2 focus:ring-[#cda967]/40 transition disabled:opacity-50 ${isDarkMode ? 'bg-[#2a2a2a] text-[#ededed] placeholder-gray-400' : 'bg-white text-[#1A1A1A]'}`}
          />
          
          {/* Multi-Select Services */}
          <div className="relative">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border border-[#cda967] text-base focus:outline-none focus:ring-2 focus:ring-[#cda967]/40 transition disabled:opacity-50 text-left flex justify-between items-center ${isDarkMode ? 'bg-[#2a2a2a] text-[#ededed]' : 'bg-white text-[#1A1A1A]'}`}
              >
                <span className={formData.services.length === 0 ? (isDarkMode ? "text-gray-400" : "text-gray-500") : (isDarkMode ? "text-[#ededed]" : "text-gray-900")}>
                  {formData.services.length === 0
                    ? "Thema auswählen"
                    : `${formData.services.length} ausgewählt`}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className={`absolute z-10 w-full mt-1 border border-[#cda967] rounded-lg shadow-lg max-h-60 overflow-y-auto transition-colors duration-300 ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-white'}`}>
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200 ${isDarkMode ? 'hover:bg-[#3a3a3a] border-gray-700' : 'hover:bg-[#f5efe6]'}`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        disabled={isSubmitting}
                        className="w-4 h-4 text-[#cda967] border-[#cda967] rounded focus:ring-[#cda967]/40"
                      />
                      <span className={`ml-3 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{service}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            
            {/* Selected Services Display */}
            {formData.services.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {formData.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#cda967]/10 text-[#cda967] border border-[#cda967]/20"
                  >
                    {service}
                    <button
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      disabled={isSubmitting}
                      className="ml-2 text-[#cda967] hover:text-[#b8934e] disabled:opacity-50"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <textarea
            name="message"
            placeholder="Nachricht *"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            disabled={isSubmitting}
            className={`px-4 py-3 rounded-lg border border-[#cda967] text-base focus:outline-none focus:ring-2 focus:ring-[#cda967]/40 transition disabled:opacity-50 ${isDarkMode ? 'bg-[#2a2a2a] text-[#ededed] placeholder-gray-400' : 'bg-white text-[#1A1A1A]'}`}
          />
          
          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#cda967] hover:bg-[#b8934e] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
          </button>
        </form>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="mailto:info@yannicnandy.com"
            className="flex items-center justify-center gap-3 rounded-full border-2 border-[#cda967] text-[#cda967] bg-white px-6 py-3 font-semibold text-base shadow-lg hover:bg-[#f5efe6] hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            E-Mail
          </a>
          <a
            href="https://www.linkedin.com/in/yannic-nandy-7287631a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-full border-2 border-[#cda967] text-[#cda967] bg-white px-6 py-3 font-semibold text-base shadow-lg hover:bg-[#f5efe6] hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 