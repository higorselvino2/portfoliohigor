'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type LangContextType = {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used within LangProvider');
  return context;
}
