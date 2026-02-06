import { DeliveryRoute } from "@features/pricing/pricing.types";
import { PricingCategory } from "data/pricing.data";

type PricingAnalyticsPayload = {
  planSlug: string;
  category: PricingCategory;
  selectedRoute: DeliveryRoute;
};

const plnFormatter = new Intl.NumberFormat("pl-PL", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const usdFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const calculateGross = (netValue: number, vatRate: number) => netValue * (1 + vatRate);

export const formatPln = (value: number) => `${plnFormatter.format(Math.round(value))} PLN`;

export const formatUsd = (value: number) => `${usdFormatter.format(Math.round(value))} USD`;

export const getDeliveryRouteLabel = (route: DeliveryRoute) =>
  route === "managed" ? "Managed mode" : "Handover";

export const createPlanMailtoHref = ({
  category,
  planSlug,
  selectedRoute,
}: PricingAnalyticsPayload) => {
  const subject = encodeURIComponent(`Pricing inquiry: ${planSlug}`);
  const body = encodeURIComponent(
    [
      "Hi Piotr,",
      "",
      `I am interested in the ${planSlug} plan (${category}).`,
      `Preferred project route: ${getDeliveryRouteLabel(selectedRoute)}.`,
      "",
      "Please share the next steps and estimated timeline.",
    ].join("\n")
  );

  return `mailto:piotrwrobel.ajiiz@gmail.com?subject=${subject}&body=${body}`;
};

export const trackPricingCtaClick = ({
  category,
  planSlug,
  selectedRoute,
}: PricingAnalyticsPayload) => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "pricing_cta_click", {
    plan_slug: planSlug,
    plan_category: category,
    selected_route: selectedRoute,
  });
};
