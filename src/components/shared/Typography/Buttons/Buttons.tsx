import { Large } from "@components/shared/Typography/Buttons/Large/Large";
import { Small } from "@components/shared/Typography/Buttons/Small/Small";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const Buttons = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

Buttons.Small = Small;
Buttons.Large = Large;
