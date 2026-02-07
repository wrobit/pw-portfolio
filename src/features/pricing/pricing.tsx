import { Seo } from "@components/seo/seo";
import { Breadcrumb, Typography } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import { PricingSection } from "@features/pricing/components/pricing-section";
import { fadeInUp } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { useI18n } from "@utils/i18n/i18n-provider";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import * as Styled from "./pricing.styles";

export const Pricing = () => {
  const { messages } = useI18n();
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: messages.breadcrumb.home, href: routes.home },
    { label: messages.breadcrumb.pricing },
  ];

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
        <Typography.Headers.H1>{messages.pricing.pageTitle}</Typography.Headers.H1>
        <Styled.IntroLead as="p">{messages.pricing.introLead}</Styled.IntroLead>
      </Styled.IntroSection>

      <PricingSection />
    </PageTemplateWrapper>
  );
};
