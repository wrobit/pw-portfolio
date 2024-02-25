import { H1 } from "@components/common/Typography/Headers/H1/H1";
import { H2 } from "@components/common/Typography/Headers/H2/H2";
import { H3 } from "@components/common/Typography/Headers/H3/H3";
import { H6 } from "@components/common/Typography/Headers/H6/H6";
import { TypographyProps } from "@components/common/Typography/Typography.types";

export const Headers = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

Headers.H1 = H1;
Headers.H2 = H2;
Headers.H3 = H3;
Headers.H6 = H6;
