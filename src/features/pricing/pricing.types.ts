import { PricingCategory, PricingPlan } from "data/pricing.data";

export type PricingDisplayCurrency = "pln" | "usd";
export type DeliveryRoute = "handover" | "managed";

export type PricingGroupModel = {
  category: PricingCategory;
  title: string;
  description: string;
  plans: PricingPlan[];
};
