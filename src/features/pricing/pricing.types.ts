import { PricingCategory, PricingPlan } from "data/pricing.data";

export type PricingGroupModel = {
  category: PricingCategory;
  title: string;
  description: string;
  plans: PricingPlan[];
};
