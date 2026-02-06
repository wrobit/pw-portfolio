import { PricingGroupModel } from "@features/pricing/pricing.types";
import { fadeInUp } from "@utils/animations/variants";

import { PricingCard } from "./PricingCard";
import * as Styled from "../Pricing.styles";

type PricingGroupProps = {
  group: PricingGroupModel;
  animationDelay: number;
};

export const PricingGroup = ({ group, animationDelay }: PricingGroupProps) => {
  return (
    <Styled.GroupSection
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={animationDelay}
    >
      <Styled.GroupHeading>
        <Styled.PriceValue as="h2">{group.title}</Styled.PriceValue>
        <Styled.GroupDescription as="p">{group.description}</Styled.GroupDescription>
      </Styled.GroupHeading>

      <Styled.CardsGrid>
        {group.plans.map((plan, index) => (
          <PricingCard
            key={plan.slug}
            plan={plan}
            animationDelay={animationDelay + 0.12 + index * 0.08}
          />
        ))}
      </Styled.CardsGrid>
    </Styled.GroupSection>
  );
};
