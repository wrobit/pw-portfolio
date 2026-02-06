import { fadeInUp } from "@utils/animations/variants";

import * as Styled from "../Pricing.styles";

const FAQ_ITEMS = [
  {
    question: "What is included in the project build price?",
    answer:
      "Build pricing includes planning, design implementation, development, QA, and deployment support for the agreed scope.",
  },
  {
    question: "How should I read net and gross values?",
    answer:
      "Net values are base PLN prices. Gross values are PLN + VAT at 23%, calculated from the net amount.",
  },
  {
    question: "When does managed mode monthly pricing apply?",
    answer:
      "Managed mode applies when the project remains under our management without handover, including maintenance and iterative updates.",
  },
  {
    question: "Are third-party tools included in listed prices?",
    answer:
      "No. External subscriptions and tools such as Framer plans, email services, CRM tools, and paid integrations are billed separately.",
  },
];

export const PricingFaq = () => {
  return (
    <Styled.FaqSection variants={fadeInUp} initial="hidden" animate="visible" custom={0.5}>
      <Styled.PriceValue as="h2">FAQ</Styled.PriceValue>
      <Styled.FaqList>
        {FAQ_ITEMS.map((item) => (
          <Styled.FaqItem key={item.question}>
            <Styled.FaqQuestion>{item.question}</Styled.FaqQuestion>
            <Styled.FaqAnswer as="p">{item.answer}</Styled.FaqAnswer>
          </Styled.FaqItem>
        ))}
      </Styled.FaqList>
    </Styled.FaqSection>
  );
};
