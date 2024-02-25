import { Large } from "@components/common/Typography/Buttons/Large/Large";
import { Small } from "@components/common/Typography/Buttons/Small/Small";
import { TypographyProps } from "@components/common/Typography/Typography.types";

export const Buttons = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

Buttons.Small = Small;
Buttons.Large = Large;
