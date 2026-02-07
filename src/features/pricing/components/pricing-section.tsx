import { useMemo, useState } from "react";

import { PricingGroupModel } from "@features/pricing/pricing.types";
import { fadeInUp } from "@utils/animations/variants";
import { useI18n } from "@utils/i18n/i18n-provider";
import { AppMessages } from "@utils/i18n/i18n.types";
import { PricingCategory, pricingPlans } from "data/pricing.data";

import { PricingGroup } from "./pricing-group";
import * as Styled from "../pricing.styles";

const getGroupedPlans = (messages: AppMessages): PricingGroupModel[] => [
  {
    category: "framer",
    title: messages.pricing.framerPlansTitle,
    description: messages.pricing.framerPlansDescription,
    plans: pricingPlans.filter((plan) => plan.category === "framer"),
  },
  {
    category: "code",
    title: messages.pricing.codePlansTitle,
    description: messages.pricing.codePlansDescription,
    plans: pricingPlans.filter((plan) => plan.category === "code"),
  },
];

export const PricingSection = () => {
  const { messages } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<PricingCategory>("framer");
  const groupedPlans = useMemo(() => getGroupedPlans(messages), [messages]);
  const categoryOptions: { label: string; value: PricingCategory }[] = [
    { label: messages.pricing.categoryFramer, value: "framer" },
    { label: messages.pricing.categoryCode, value: "code" },
  ];

  const activeGroup =
    groupedPlans.find((group) => group.category === selectedCategory) ?? groupedPlans[0];

  return (
    <>
      <Styled.ControlsRow variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
        <Styled.ControlButtonGroup role="tablist" aria-label={messages.pricing.categorySwitchAria}>
          {categoryOptions.map((option) => (
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
