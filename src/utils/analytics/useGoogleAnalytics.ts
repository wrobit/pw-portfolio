import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { CookieConsentStatus } from "@utils/cookies/consent";

import { clearAnalyticsCookies, disableAnalytics, enableAnalytics } from "./googleAnalytics";

type ReactGAType = (typeof import("react-ga4"))["default"];

export const useGoogleAnalytics = (status: CookieConsentStatus) => {
  const location = useLocation();
  const isAllowed = status === "accepted";
  const currentPath = `${location.pathname}${location.search}`;
  const isInitializedRef = useRef(false);
  const analyticsRef = useRef<ReactGAType | null>(null);
  const [isReady, setIsReady] = useState(false);
  const analyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

  useEffect(() => {
    if (!analyticsId) {
      return undefined;
    }

    if (!isAllowed) {
      disableAnalytics();
      clearAnalyticsCookies();
      isInitializedRef.current = false;
      analyticsRef.current = null;
      setIsReady(false);
      return undefined;
    }

    enableAnalytics();

    let isActive = true;

    const initializeAnalytics = async () => {
      if (isInitializedRef.current) {
        setIsReady(true);
        return;
      }

      const { default: ReactGA } = await import("react-ga4");

      if (!isActive) {
        return;
      }

      analyticsRef.current = ReactGA;
      ReactGA.initialize(analyticsId, { gaOptions: { anonymizeIp: true } });
      isInitializedRef.current = true;
      setIsReady(true);
    };

    void initializeAnalytics();

    return () => {
      isActive = false;
    };
  }, [analyticsId, isAllowed]);

  useEffect(() => {
    if (!analyticsId || !isAllowed || !isReady || !analyticsRef.current) {
      return;
    }

    analyticsRef.current.send({
      hitType: "pageview",
      page: currentPath,
      title: document.title,
    });
  }, [analyticsId, currentPath, isAllowed, isReady]);
};
