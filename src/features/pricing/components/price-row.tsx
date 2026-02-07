import { formatPln, formatUsd } from "@features/pricing/utils/pricing.utils";
import { useI18n } from "@utils/i18n/i18n-provider";

import * as Styled from "../pricing.styles";

type PriceRowProps = {
  buildNetValue: number;
  buildUsdValue: number;
  maintenanceNetValue: number;
  maintenanceUsdValue: number;
  ariaLabel: string;
};

export const PriceRow = ({
  buildNetValue,
  buildUsdValue,
  maintenanceNetValue,
  maintenanceUsdValue,
  ariaLabel,
}: PriceRowProps) => {
  const { messages } = useI18n();

  return (
    <Styled.PriceRow role="group" aria-label={ariaLabel}>
      <Styled.PriceRowSection>
        <Styled.PriceRowHeading>
          <Styled.PriceValue as="p">{messages.pricing.buildPriceLabel}</Styled.PriceValue>
        </Styled.PriceRowHeading>
        <Styled.PriceMeta as="p">
          {formatPln(buildNetValue)} + VAT or {formatUsd(buildUsdValue)}
        </Styled.PriceMeta>
      </Styled.PriceRowSection>

      <Styled.PriceRowSection>
        <Styled.PriceRowHeading>
          <Styled.PriceValue as="p">{messages.pricing.maintenanceLabel}</Styled.PriceValue>
          <Styled.PriceRowCaption as="p">{messages.pricing.monthly}</Styled.PriceRowCaption>
        </Styled.PriceRowHeading>
        <Styled.PriceMeta as="p">
          {formatPln(maintenanceNetValue)} + VAT or {formatUsd(maintenanceUsdValue)}
        </Styled.PriceMeta>
      </Styled.PriceRowSection>
    </Styled.PriceRow>
  );
};
