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
    usdApproxBuild: 1250,
    usdApproxMaintenanceMonthly: 100,
    features: ["Up to 5 responsive pages", "Basic CMS setup", "SEO essentials", "Basic analytics"],
  },
  {
    category: "framer",
    slug: "framer-business",
    name: "Framer Business",
    description: "For growing teams that need broader content coverage.",
    buildPricePlnNet: 9000,
    maintenancePlnNetMonthly: 800,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 2750,
    usdApproxMaintenanceMonthly: 250,
    features: [
      "Up to 10 responsive pages",
      "Advanced CMS collections",
      "Reusable page sections and components",
    ],
  },
  {
    category: "framer",
    slug: "framer-pro",
    name: "Framer Pro",
    description: "For established brands scaling campaigns and content.",
    buildPricePlnNet: 16000,
    maintenancePlnNetMonthly: 1500,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 5000,
    usdApproxMaintenanceMonthly: 450,
    features: [
      "Multi-section website",
      "Complex CMS architecture",
      "Priority optimization",
      "Internationalization",
      "Custom integrations",
    ],
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
    features: ["Up to 5 responsive pages", "Reusable UI foundation", "SEO-ready routing"],
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
      "Up to 10 responsive pages",
      "Advanced CMS collections",
      "Custom integrations",
      "Internationalization",
      "Basic analytics",
    ],
  },
  {
    category: "code",
    slug: "code-pro",
    name: "Code Pro",
    description: "For advanced product builds.",
    buildPricePlnNet: 32000,
    maintenancePlnNetMonthly: 3200,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 11010,
    usdApproxMaintenanceMonthly: 1101,
    features: [
      "Multi-section website",
      "Complex CMS architecture",
      "Priority optimization",
      "Advanced analytics",
    ],
  },
];
