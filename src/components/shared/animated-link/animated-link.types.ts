export interface AnimatedLinkProps {
  label: string;
  delay?: number;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  align?: "left" | "center";
  size?: "normal" | "big";
}
