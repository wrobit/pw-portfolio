import { formatPln, formatUsd } from "@features/pricing/utils/pricing.utils";

import * as Styled from "../Pricing.styles";

type PriceRowProps = {
  label?: string;
  netValue: number;
  usdApproxValue: number;
  caption?: string;
  ariaLabel: string;
};

export const PriceRow = ({
  label,
  netValue,
  usdApproxValue,
  caption,
  ariaLabel,
}: PriceRowProps) => {
  return (
    <Styled.PriceRow role="group" aria-label={ariaLabel}>
      {(label || caption) && (
        <Styled.PriceRowHeading>
          {label && <Styled.PriceValue as="p">{label}</Styled.PriceValue>}
          {caption && <Styled.PriceRowCaption as="p">{caption}</Styled.PriceRowCaption>}
        </Styled.PriceRowHeading>
      )}
      <Styled.PriceMeta as="p">
        Net: {formatPln(netValue)} + VAT; {formatUsd(usdApproxValue)};
      </Styled.PriceMeta>
    </Styled.PriceRow>
  );
};
