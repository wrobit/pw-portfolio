import { motion } from "framer-motion";

import { Hero } from "@components/hero/hero";
import { Seo } from "@components/seo/seo";
import { Breadcrumb } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import { PricingSection } from "@features/pricing/components/pricing-section";
import { fadeInUp } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Home", href: routes.home },
  { label: "Pricing" },
];

export const Pricing = () => {
  return (
    <PageTemplateWrapper>
      <Seo
        title="Pricing"
        description="Website pricing for Framer and custom code projects. Compare build costs in PLN + VAT and USD, plus managed monthly maintenance options."
        path={routes.pricing}
      />
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.1}>
        <Breadcrumb items={breadcrumbItems} />
      </motion.div>
      <Hero
        title="Pricing"
        description="Starting prices for websites and web apps. The final price depends on what you need. For a custom project or B2B work, get in touch."
        showScrollToExplore={false}
        compactSpacing
      />
      <PricingSection />
    </PageTemplateWrapper>
  );
};
