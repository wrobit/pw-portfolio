import { PropsWithChildren } from "react";

export type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "small" | "large";
  variant?: "primary" | "secondary";
} & PropsWithChildren;
