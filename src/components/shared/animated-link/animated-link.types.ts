export interface AnimatedLinkProps {
  label: string;
  delay?: number;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  disabled?: boolean;
  align?: "left" | "center";
  direction?: "left" | "right";
  size?: "normal" | "big";
}
