import { useCallback, useMemo } from "react";
import { useCookies } from "react-cookie";

import {
  COOKIE_CONSENT_KEY,
  COOKIE_MAX_AGE_DAYS,
  CookieConsentStatus,
  StoredConsent,
} from "./consent";

const buildCookieOptions = () => ({
  path: "/",
  sameSite: "lax" as const,
  maxAge: COOKIE_MAX_AGE_DAYS * 24 * 60 * 60,
});

export const useCookieConsent = () => {
  const [cookies, setCookie] = useCookies([COOKIE_CONSENT_KEY]);

  const status = useMemo<CookieConsentStatus>(() => {
    const value = cookies[COOKIE_CONSENT_KEY];

    if (value === "accepted" || value === "rejected") {
      return value;
    }

    return "unset";
  }, [cookies]);

  const updateConsent = useCallback(
    (value: StoredConsent) => {
      setCookie(COOKIE_CONSENT_KEY, value, buildCookieOptions());
    },
    [setCookie]
  );

  const accept = useCallback(() => updateConsent("accepted"), [updateConsent]);
  const reject = useCallback(() => updateConsent("rejected"), [updateConsent]);

  return { status, accept, reject };
};
