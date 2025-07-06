"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode !== null) {
        setIsDarkMode(savedDarkMode === 'true');
      } else {
        // Check system preference if no saved preference exists
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
      }
      setIsInitialized(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', newDarkMode.toString());
    }
  };

  useEffect(() => {
    // Only update CSS variables and attributes after initialization to prevent flash
    if (isInitialized) {
      const root = document.documentElement;
      
      if (isDarkMode) {
        root.style.setProperty('--background', '#0a0a0a');
        root.style.setProperty('--foreground', '#ededed');
        root.style.setProperty('--section-bg-primary', '#0a0a0a');
        root.style.setProperty('--section-bg-secondary', '#111111');
        root.style.setProperty('--section-bg-tertiary', '#1a1a1a');
        root.style.setProperty('--card-bg', '#1a1a1a');
        root.style.setProperty('--card-border', '#333333');
        root.setAttribute('data-theme', 'dark');
      } else {
        root.style.setProperty('--background', '#ffffff');
        root.style.setProperty('--foreground', '#171717');
        root.style.setProperty('--section-bg-primary', '#ffffff');
        root.style.setProperty('--section-bg-secondary', '#f8f8f8');
        root.style.setProperty('--section-bg-tertiary', '#ffffff');
        root.style.setProperty('--card-bg', '#ffffff');
        root.style.setProperty('--card-border', '#e5e5e5');
        root.setAttribute('data-theme', 'light');
      }
    }
  }, [isDarkMode, isInitialized]);

  // Listen for system preference changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        // Only update if user hasn't manually set a preference
        if (localStorage.getItem('darkMode') === null) {
          setIsDarkMode(e.matches);
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}; 