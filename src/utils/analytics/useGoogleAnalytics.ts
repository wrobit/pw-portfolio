import { useEffect, useRef } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

import { CookieConsentStatus } from "@utils/cookies/consent";

import { clearAnalyticsCookies, disableAnalytics, enableAnalytics } from "./googleAnalytics";

export const useGoogleAnalytics = (status: CookieConsentStatus) => {
  const location = useLocation();
  const isAllowed = status !== "rejected";
  const currentPath = `${location.pathname}${location.search}`;
  const isInitializedRef = useRef(false);
  const analyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

  useEffect(() => {
    if (!analyticsId) {
      return;
    }

    if (!isAllowed) {
      disableAnalytics();
      clearAnalyticsCookies();
      isInitializedRef.current = false;
      return;
    }

    enableAnalytics();

    if (!isInitializedRef.current) {
      ReactGA.initialize(analyticsId, { gaOptions: { anonymizeIp: true } });
      isInitializedRef.current = true;
    }
  }, [analyticsId, isAllowed]);

  useEffect(() => {
    if (!analyticsId || !isAllowed || !isInitializedRef.current) {
      return;
    }

    ReactGA.send({
      hitType: "pageview",
      page: currentPath,
      title: document.title,
    });
  }, [analyticsId, currentPath, isAllowed]);
};
