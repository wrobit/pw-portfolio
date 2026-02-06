import { useMemo, useState } from "react";

import { PricingGroupModel } from "@features/pricing/pricing.types";
import { fadeInUp } from "@utils/animations/variants";
import { PricingCategory, pricingPlans } from "data/pricing.data";

import { PricingGroup } from "./pricing-group";
import * as Styled from "../pricing.styles";

const CATEGORY_OPTIONS: { label: string; value: PricingCategory }[] = [
  { label: "Framer", value: "framer" },
  { label: "Code", value: "code" },
];

const getGroupedPlans = (): PricingGroupModel[] => [
  {
    category: "framer",
    title: "Framer plans",
    description: "Fast-moving website packages built in Framer for marketing-focused teams.",
    plans: pricingPlans.filter((plan) => plan.category === "framer"),
  },
  {
    category: "code",
    title: "Code plans",
    description:
      "Custom React and TypeScript implementations for flexible product and business needs.",
    plans: pricingPlans.filter((plan) => plan.category === "code"),
  },
];

export const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<PricingCategory>("framer");
  const groupedPlans = useMemo(() => getGroupedPlans(), []);

  const activeGroup =
    groupedPlans.find((group) => group.category === selectedCategory) ?? groupedPlans[0];

  return (
    <>
      <Styled.ControlsRow variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
        <Styled.ControlButtonGroup role="tablist" aria-label="Plan category switch">
          {CATEGORY_OPTIONS.map((option) => (
            <Styled.ControlButton
              key={option.value}
              type="button"
              role="tab"
              $isActive={selectedCategory === option.value}
              aria-selected={selectedCategory === option.value}
              onClick={() => setSelectedCategory(option.value)}
            >
              {option.label}
            </Styled.ControlButton>
          ))}
        </Styled.ControlButtonGroup>
      </Styled.ControlsRow>

      <Styled.GroupsWrapper>
        <PricingGroup group={activeGroup} animationDelay={0.28} />
      </Styled.GroupsWrapper>
    </>
  );
};
