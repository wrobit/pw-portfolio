import { Seo } from "@components/seo/Seo";
import { Breadcrumb, Typography } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import { PricingSection } from "@features/pricing/components/pricing-section";
import { fadeInUp } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import * as Styled from "./pricing.styles";

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

      <Styled.BreadcrumbWrapper variants={fadeInUp} initial="hidden" animate="visible" custom={0.1}>
        <Breadcrumb items={breadcrumbItems} />
      </Styled.BreadcrumbWrapper>

      <Styled.IntroSection variants={fadeInUp} initial="hidden" animate="visible" custom={0.16}>
        <Typography.Headers.H1>Pricing</Typography.Headers.H1>
        <Styled.IntroLead as="p">
          Transparent pricing for custom website builds. Every plan is designed to be as flexible as
          possible and can be customized to fit your needs. Contact me to discuss your project and
          get a custom quote.
        </Styled.IntroLead>
      </Styled.IntroSection>

      <PricingSection />
    </PageTemplateWrapper>
  );
};
