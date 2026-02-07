import { Large } from "@components/shared/typography/buttons/large/large";
import { Small } from "@components/shared/typography/buttons/small/small";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const Buttons = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

Buttons.Small = Small;
Buttons.Large = Large;
