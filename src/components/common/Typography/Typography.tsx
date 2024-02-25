import { Buttons } from "@components/common/Typography/Buttons/Buttons";
import { Default } from "@components/common/Typography/Default/Default";
import { Headers } from "@components/common/Typography/Headers/Headers";
import { Logo } from "@components/common/Typography/Logo/Logo";
import { TypographyProps } from "@components/common/Typography/Typography.types";

export const Typography = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

Typography.Headers = Headers;
Typography.Logo = Logo;
Typography.Buttons = Buttons;
Typography.Default = Default;
