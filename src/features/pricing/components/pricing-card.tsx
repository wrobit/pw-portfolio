import { Button } from "@components/shared";
import { createPlanMailtoHref, trackPricingCtaClick } from "@features/pricing/utils/pricing.utils";
import { fadeInUp } from "@utils/animations/variants";
import { useI18n } from "@utils/i18n/i18n-provider";
import { PricingPlan } from "data/pricing.data";

import { PriceRow } from "./price-row";
import * as Styled from "../pricing.styles";

type PricingCardProps = {
  plan: PricingPlan;
  animationDelay: number;
};

export const PricingCard = ({ plan, animationDelay }: PricingCardProps) => {
  const { messages } = useI18n();
  const planHref = createPlanMailtoHref({
    category: plan.category,
    planSlug: plan.slug,
  });

  const onPlanCtaClick = () => {
    trackPricingCtaClick({
      category: plan.category,
      planSlug: plan.slug,
    });

    window.location.href = planHref;
  };

  return (
    <Styled.PricingCard
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={animationDelay}
      $isFeatured={Boolean(plan.badge)}
    >
      <Styled.CardHeader>
        {plan.badge && <Styled.Badge>{plan.badge}</Styled.Badge>}
        <Styled.PriceValue as="h3">{plan.name}</Styled.PriceValue>
        <Styled.CardDescription as="p">{plan.description}</Styled.CardDescription>
      </Styled.CardHeader>

      <Styled.PriceRows>
        <PriceRow
          buildNetValue={plan.buildPricePlnNet}
          buildUsdValue={plan.usdApproxBuild}
          maintenanceNetValue={plan.maintenancePlnNetMonthly}
          maintenanceUsdValue={plan.usdApproxMaintenanceMonthly}
          ariaLabel={`${plan.name} pricing`}
        />
      </Styled.PriceRows>

      <Styled.FeatureList>
        {plan.features.map((feature) => (
          <Styled.FeatureItem key={feature}>
            <Styled.PriceMeta as="span">{feature}</Styled.PriceMeta>
          </Styled.FeatureItem>
        ))}
      </Styled.FeatureList>

      <Styled.CardFooter>
        <Button type="button" onClick={onPlanCtaClick}>
          {messages.pricing.planCta}
        </Button>
      </Styled.CardFooter>
    </Styled.PricingCard>
  );
};
