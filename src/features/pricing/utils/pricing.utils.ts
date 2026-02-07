import { PricingCategory } from "data/pricing.data";

type PricingAnalyticsPayload = {
  planSlug: string;
  category: PricingCategory;
};

const formatCurrencyAmount = (value: number) =>
  Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const formatPln = (value: number) => `${formatCurrencyAmount(value)} PLN`;

export const formatUsd = (value: number) => `${formatCurrencyAmount(value)} USD`;

export const createPlanMailtoHref = ({ category, planSlug }: PricingAnalyticsPayload) => {
  const subject = encodeURIComponent(`Pricing inquiry: ${planSlug}`);
  const body = encodeURIComponent(
    [
      "Hi Piotr,",
      "",
      `I am interested in the ${planSlug} plan (${category}).`,
      "",
      "Please share the next steps and estimated timeline.",
    ].join("\n")
  );

  return `mailto:piotrwrobel.ajiiz@gmail.com?subject=${subject}&body=${body}`;
};

export const trackPricingCtaClick = ({ category, planSlug }: PricingAnalyticsPayload) => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "pricing_cta_click", {
    plan_slug: planSlug,
    plan_category: category,
  });
};
