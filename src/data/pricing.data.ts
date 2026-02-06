export type PricingCategory = "framer" | "code";

export type PricingPlan = {
  category: PricingCategory;
  slug: string;
  name: string;
  description: string;
  buildPricePlnNet: number;
  maintenancePlnNetMonthly: number;
  vatRate: number;
  usdApproxBuild: number;
  usdApproxMaintenanceMonthly: number;
  features: string[];
  badge?: string;
};

const DEFAULT_VAT_RATE = 0.23;

export const pricingPlans: PricingPlan[] = [
  {
    category: "framer",
    slug: "framer-start",
    name: "Framer Start",
    description: "For focused launches and simple marketing websites.",
    buildPricePlnNet: 4000,
    maintenancePlnNetMonthly: 500,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 1376,
    usdApproxMaintenanceMonthly: 172,
    features: ["Up to 5 responsive pages", "Basic CMS setup", "SEO essentials"],
  },
  {
    category: "framer",
    slug: "framer-growth",
    name: "Framer Growth",
    description: "For growing teams that need broader content coverage.",
    buildPricePlnNet: 9000,
    maintenancePlnNetMonthly: 900,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 3097,
    usdApproxMaintenanceMonthly: 310,
    features: ["Up to 10 responsive pages", "Advanced CMS collections", "Reusable page sections"],
  },
  {
    category: "framer",
    slug: "framer-scale",
    name: "Framer Scale",
    description: "For established brands scaling campaigns and content.",
    buildPricePlnNet: 18000,
    maintenancePlnNetMonthly: 2000,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 6193,
    usdApproxMaintenanceMonthly: 688,
    features: ["Multi-section website", "Complex CMS architecture", "Priority optimization"],
  },
  {
    category: "code",
    slug: "code-start",
    name: "Code Start",
    description: "For custom-code projects with a tight initial scope.",
    buildPricePlnNet: 7000,
    maintenancePlnNetMonthly: 800,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 2408,
    usdApproxMaintenanceMonthly: 275,
    features: ["React + TypeScript implementation", "Reusable UI foundation", "SEO-ready routing"],
  },
  {
    category: "code",
    slug: "code-business",
    name: "Code Business",
    description: "For business-critical websites with integrations.",
    buildPricePlnNet: 16000,
    maintenancePlnNetMonthly: 1600,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 5505,
    usdApproxMaintenanceMonthly: 551,
    features: [
      "Scalable architecture and state handling",
      "CMS/API integrations",
      "Technical SEO and performance",
    ],
  },
  {
    category: "code",
    slug: "code-pro",
    name: "Code Pro",
    description: "For advanced product builds with long-term engineering support.",
    buildPricePlnNet: 32000,
    maintenancePlnNetMonthly: 3200,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 11010,
    usdApproxMaintenanceMonthly: 1101,
    features: ["Advanced frontend architecture", "Custom interactions", "Extended integrations"],
  },
];
