import { Buttons } from "@components/shared/typography/buttons/buttons";
import { Default } from "@components/shared/typography/default/default";
import { Headers } from "@components/shared/typography/headers/headers";
import { Logo } from "@components/shared/typography/logo/logo";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const Typography = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

Typography.Headers = Headers;
Typography.Logo = Logo;
Typography.Buttons = Buttons;
Typography.Default = Default;
