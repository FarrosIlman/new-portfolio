import React, { createContext, useContext, useState, useEffect } from 'react';
import { en, id } from '../locales';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id'); // Default is id

  useEffect(() => {
    // Check if there is a saved language preference
    const savedLang = localStorage.getItem('portfolio_language');
    if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'id' ? 'en' : 'id';
    setLanguage(newLang);
    localStorage.setItem('portfolio_language', newLang);
  };

  const t = language === 'id' ? id : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
