const GA_SCRIPT_ID = "ga-script";

const getAnalyticsId = () => import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
const getDisableKey = (analyticsId: string) => `ga-disable-${analyticsId}`;

const setDisableFlag = (analyticsId: string, value: boolean) => {
  const disableKey = getDisableKey(analyticsId);
  (window as unknown as Record<string, boolean | undefined>)[disableKey] = value;
};

export const enableAnalytics = () => {
  const analyticsId = getAnalyticsId();

  if (!analyticsId) {
    return;
  }

  setDisableFlag(analyticsId, false);
};

export const disableAnalytics = () => {
  const analyticsId = getAnalyticsId();

  if (!analyticsId) {
    return;
  }

  setDisableFlag(analyticsId, true);

  const script = document.getElementById(GA_SCRIPT_ID);
  script?.remove();
};

const deleteCookie = (name: string, domain?: string) => {
  const domainSegment = domain ? `; domain=${domain}` : "";
  document.cookie = `${name}=; Max-Age=0; path=/;${domainSegment}`;
};

export const clearAnalyticsCookies = () => {
  const analyticsId = getAnalyticsId();

  if (typeof document === "undefined") {
    return;
  }

  const currentDomain = window.location.hostname;
  const domainParts = currentDomain.split(".");
  const rootDomain = domainParts.length > 1 ? domainParts.slice(-2).join(".") : currentDomain;
  const domains = Array.from(
    new Set([currentDomain, `.${currentDomain}`, rootDomain, `.${rootDomain}`])
  );

  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter(
      (name) =>
        name.startsWith("_ga") ||
        name.startsWith("_gid") ||
        name.startsWith("_gat") ||
        name.startsWith("_gac") ||
        name.startsWith("_gcl")
    )
    .filter(Boolean);

  if (analyticsId) {
    cookieNames.push(`_ga_${analyticsId.replace("G-", "")}`);
  }

  const uniqueNames = Array.from(new Set(cookieNames));

  uniqueNames.forEach((name) => {
    deleteCookie(name);
    domains.forEach((domain) => deleteCookie(name, domain));
  });
};
