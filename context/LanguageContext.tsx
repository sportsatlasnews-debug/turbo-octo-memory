"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "sq" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, dict: Record<Language, Record<string, string>>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("sq");

  // Ngarko gjuhën e ruajtur nga hera e kaluar nëse ekziston
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "sq" || savedLang === "en") {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  };

  // Funksioni ndihmës për të marrë përkthimin e saktë
  const t = (key: string, dict: Record<Language, Record<string, string>>) => {
    return dict[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage duhet të përdoret brenda një LanguageProvider");
  }
  return context;
}