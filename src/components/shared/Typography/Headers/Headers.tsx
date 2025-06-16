import { H1 } from "@components/shared/Typography/Headers/H1/H1";
import { H2 } from "@components/shared/Typography/Headers/H2/H2";
import { H3 } from "@components/shared/Typography/Headers/H3/H3";
import { H4 } from "@components/shared/Typography/Headers/H4/H4";
import { H5 } from "@components/shared/Typography/Headers/H5/H5";
import { H6 } from "@components/shared/Typography/Headers/H6/H6";
import { TypographyProps } from "@components/shared/Typography/Typography.types";

export const Headers = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

Headers.H1 = H1;
Headers.H2 = H2;
Headers.H3 = H3;
Headers.H4 = H4;
Headers.H5 = H5;
Headers.H6 = H6;
