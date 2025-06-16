import { Buttons } from "@components/shared/Typography/Buttons/Buttons";
import { Default } from "@components/shared/Typography/Default/Default";
import { Headers } from "@components/shared/Typography/Headers/Headers";
import { Logo } from "@components/shared/Typography/Logo/Logo";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const Typography = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

Typography.Headers = Headers;
Typography.Logo = Logo;
Typography.Buttons = Buttons;
Typography.Default = Default;
