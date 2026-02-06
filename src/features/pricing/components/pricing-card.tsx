import { fadeInUp } from "@utils/animations/variants";
import { PricingPlan } from "data/pricing.data";

import { PriceRow } from "./price-row";
import * as Styled from "../pricing.styles";

type PricingCardProps = {
  plan: PricingPlan;
  animationDelay: number;
};

export const PricingCard = ({ plan, animationDelay }: PricingCardProps) => {
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
    </Styled.PricingCard>
  );
};
