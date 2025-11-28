import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { content, type Content, type Lang } from './content';

export type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Content;
};

const I18nContext = createContext<I18nContextType>({
  lang: 'fr',
  setLang: () => {},
  toggle: () => {},
  t: content.fr,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');

  useEffect(() => {
    const saved = (localStorage.getItem('lang') as Lang | null) || undefined;
    if (saved === 'en' || saved === 'fr') setLangState(saved);
    else {
      const nav = navigator.language?.toLowerCase() || 'fr';
      setLangState(nav.startsWith('en') ? 'en' : 'fr');
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
    document.documentElement.lang = l;
  };

  const toggle = () => setLang(lang === 'fr' ? 'en' : 'fr');

  const t = useMemo(() => content[lang], [lang]);

  const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
