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
        description="If you are considering a website or web application built end-to-end by me, the packages below provide clear starting pricing. I am also available for B2B collaboration, and scope can be tailored based on complexity, integrations, and delivery goals. For custom requirements, contact me for a dedicated quote."
        showScrollToExplore={false}
        compactSpacing
      />
      <PricingSection />
    </PageTemplateWrapper>
  );
};
