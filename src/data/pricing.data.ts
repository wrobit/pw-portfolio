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
    buildPricePlnNet: 2500,
    maintenancePlnNetMonthly: 300,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 650,
    usdApproxMaintenanceMonthly: 80,
    features: ["Up to 5 responsive pages", "Basic CMS setup", "SEO essentials", "Basic analytics"],
  },
  {
    category: "framer",
    slug: "framer-business",
    name: "Framer Business",
    description: "For growing teams that need broader content coverage.",
    buildPricePlnNet: 6500,
    maintenancePlnNetMonthly: 600,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 1670,
    usdApproxMaintenanceMonthly: 155,
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
    buildPricePlnNet: 12000,
    maintenancePlnNetMonthly: 1100,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 3080,
    usdApproxMaintenanceMonthly: 285,
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
    description: "For early-stage digital products with a focused implementation scope.",
    buildPricePlnNet: 4500,
    maintenancePlnNetMonthly: 500,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 1150,
    usdApproxMaintenanceMonthly: 130,
    features: [
      "Custom frontend architecture",
      "Reusable component foundation",
      "Core delivery and release setup",
    ],
  },
  {
    category: "code",
    slug: "code-business",
    name: "Code Business",
    description: "For production-grade products requiring integrations and scalable workflows.",
    buildPricePlnNet: 12000,
    maintenancePlnNetMonthly: 1200,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 3080,
    usdApproxMaintenanceMonthly: 310,
    features: [
      "Scalable architecture and state management",
      "Third-party API and service integrations",
      "Performance, quality assurance, and delivery process",
    ],
  },
  {
    category: "code",
    slug: "code-pro",
    name: "Code Pro",
    description: "For complex application ecosystems with long-term engineering support.",
    buildPricePlnNet: 26000,
    maintenancePlnNetMonthly: 2600,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 6670,
    usdApproxMaintenanceMonthly: 670,
    features: [
      "Advanced product architecture",
      "Complex feature development",
      "Extended integrations and automation",
    ],
  },
];
