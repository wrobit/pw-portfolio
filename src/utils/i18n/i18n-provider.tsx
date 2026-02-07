import { createContext, PropsWithChildren, useContext, useEffect, useMemo } from "react";

import { AppMessages, Locale } from "./i18n.types";
import { enMessages, plMessages } from "./messages";
import { useLocale } from "./use-locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
  messages: AppMessages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const messagesByLocale: Record<Locale, AppMessages> = {
  en: enMessages,
  pl: plMessages,
};

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      setLocale,
      messages: messagesByLocale[locale],
    };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
};
