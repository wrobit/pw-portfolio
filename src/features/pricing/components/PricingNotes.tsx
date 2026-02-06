import { fadeInUp } from "@utils/animations/variants";

import * as Styled from "../Pricing.styles";

const PRICING_NOTES = [
  "All PLN prices are net unless marked as PLN + VAT (gross at 23%).",
  "USD values are approximate and based on reference exchange rate.",
  "Maintenance applies when project remains under our management (no handover).",
  "Third-party subscriptions/tools are billed separately (e.g., Framer plan/add-ons, email/CRM tools).",
];

export const PricingNotes = () => {
  return (
    <Styled.NotesSection variants={fadeInUp} initial="hidden" animate="visible" custom={0.42}>
      <Styled.PriceValue as="h2">Notes and exclusions</Styled.PriceValue>
      <Styled.NoteList>
        {PRICING_NOTES.map((note) => (
          <Styled.NoteItem key={note}>
            <Styled.PriceMeta as="p">{note}</Styled.PriceMeta>
          </Styled.NoteItem>
        ))}
      </Styled.NoteList>
    </Styled.NotesSection>
  );
};
