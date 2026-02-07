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
    usdApproxBuild: 700,
    usdApproxMaintenanceMonthly: 85,
    features: ["Up to 5 responsive pages", "Basic CMS setup", "SEO essentials", "Basic analytics"],
  },
  {
    category: "framer",
    slug: "framer-business",
    name: "Framer Business",
    description: "For growing teams that need broader content coverage.",
    buildPricePlnNet: 5500,
    maintenancePlnNetMonthly: 500,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 1600,
    usdApproxMaintenanceMonthly: 140,
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
    buildPricePlnNet: 10000,
    maintenancePlnNetMonthly: 600,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 2850,
    usdApproxMaintenanceMonthly: 175,
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
    buildPricePlnNet: 5000,
    maintenancePlnNetMonthly: 300,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 1400,
    usdApproxMaintenanceMonthly: 85,
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
    maintenancePlnNetMonthly: 500,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 3500,
    usdApproxMaintenanceMonthly: 280,
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
    buildPricePlnNet: 20000,
    maintenancePlnNetMonthly: 700,
    vatRate: DEFAULT_VAT_RATE,
    usdApproxBuild: 5800,
    usdApproxMaintenanceMonthly: 200,
    features: [
      "Advanced product architecture",
      "Complex feature development",
      "Extended integrations and automation",
    ],
  },
];
