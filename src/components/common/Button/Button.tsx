import * as Styled from "./Button.styles";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = (props: ButtonProps) => {
  return <Styled.Button {...props}>{props.children}</Styled.Button>;
};
