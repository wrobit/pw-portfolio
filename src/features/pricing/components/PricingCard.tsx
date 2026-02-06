import { fadeInUp } from "@utils/animations/variants";
import { PricingPlan } from "data/pricing.data";

import { PriceRow } from "./PriceRow";
import * as Styled from "../Pricing.styles";

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
          netValue={plan.buildPricePlnNet}
          usdApproxValue={plan.usdApproxBuild}
          ariaLabel={`${plan.name} build pricing`}
        />
        <PriceRow
          label="Managed mode"
          caption="Monthly"
          netValue={plan.maintenancePlnNetMonthly}
          usdApproxValue={plan.usdApproxMaintenanceMonthly}
          ariaLabel={`${plan.name} maintenance pricing`}
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
