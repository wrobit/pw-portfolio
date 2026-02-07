import { useCallback, useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_KEY,
  LOCALE_COOKIE_MAX_AGE_DAYS,
  SUPPORTED_LOCALES,
} from "./i18n.constants";
import { Locale } from "./i18n.types";

const isSupportedLocale = (value: string): value is Locale => {
  return SUPPORTED_LOCALES.includes(value as Locale);
};

const resolveBrowserLocale = (): Locale => {
  if (typeof navigator === "undefined") {
    return DEFAULT_LOCALE;
  }

  const preferredLocales = [...(navigator.languages ?? []), navigator.language].filter(Boolean);

  for (const locale of preferredLocales) {
    const normalized = locale.toLowerCase();
    const base = normalized.split("-")[0];

    if (isSupportedLocale(base)) {
      return base;
    }
  }

  return DEFAULT_LOCALE;
};

const buildCookieOptions = () => ({
  path: "/",
  sameSite: "lax" as const,
  maxAge: LOCALE_COOKIE_MAX_AGE_DAYS * 24 * 60 * 60,
});

export const useLocale = () => {
  const [cookies, setCookie] = useCookies([LOCALE_COOKIE_KEY]);

  const locale = useMemo<Locale>(() => {
    const storedLocale = cookies[LOCALE_COOKIE_KEY];

    if (typeof storedLocale === "string" && isSupportedLocale(storedLocale)) {
      return storedLocale;
    }

    return resolveBrowserLocale();
  }, [cookies]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      setCookie(LOCALE_COOKIE_KEY, nextLocale, buildCookieOptions());
    },
    [setCookie]
  );

  useEffect(() => {
    const storedLocale = cookies[LOCALE_COOKIE_KEY];

    if (typeof storedLocale === "string" && isSupportedLocale(storedLocale)) {
      return;
    }

    setCookie(LOCALE_COOKIE_KEY, locale, buildCookieOptions());
  }, [cookies, locale, setCookie]);

  return { locale, setLocale };
};
