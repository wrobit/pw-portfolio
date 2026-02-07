import { H1 } from "@components/shared/typography/headers/h1/h1";
import { H2 } from "@components/shared/typography/headers/h2/h2";
import { H3 } from "@components/shared/typography/headers/h3/h3";
import { H4 } from "@components/shared/typography/headers/h4/h4";
import { H5 } from "@components/shared/typography/headers/h5/h5";
import { H6 } from "@components/shared/typography/headers/h6/h6";
import { TypographyProps } from "@components/shared/typography/typography.types";

export const Headers = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

Headers.H1 = H1;
Headers.H2 = H2;
Headers.H3 = H3;
Headers.H4 = H4;
Headers.H5 = H5;
Headers.H6 = H6;
