import * as Styled from "@components/common/Button/Button.styles";
import { ButtonProps } from "@components/common/Button/Button.types";
import { Typography } from "@components/common/Typography/Typography";
import { useTheme } from "styled-components";

export const Button = ({ size = "small", children, ...props }: ButtonProps) => {
  const theme = useTheme();

  return (
    <Styled.Button {...props}>
      {size === "small" ? (
        <Typography.Buttons.Small color="inherit">{children}</Typography.Buttons.Small>
      ) : (
        <Typography.Buttons.Large color="inherit">{children}</Typography.Buttons.Large>
      )}
    </Styled.Button>
  );
};
