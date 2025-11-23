import { forwardRef } from "react";

import * as Styled from "@components/shared/Button/Button.styles";
import { ButtonProps } from "@components/shared/Button/Button.types";
import { Typography } from "@components/shared/Typography/Typography";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "small", children, ...props }, ref) => {
    return (
      <Styled.Button ref={ref} {...props}>
        {size === "small" ? (
          <Typography.Buttons.Small color="inherit">{children}</Typography.Buttons.Small>
        ) : (
          <Typography.Buttons.Large color="inherit">{children}</Typography.Buttons.Large>
        )}
      </Styled.Button>
    );
  }
);
