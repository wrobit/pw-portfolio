import styled from "styled-components";

const Button = styled.button<{ $variant: "primary" | "secondary" }>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.black : theme.colors.purple};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.purple : theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.purple};
  border-radius: 24px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme, $variant }) =>
      $variant === "primary" ? theme.colors.purple : theme.colors.black};
    color: ${({ theme, $variant }) =>
      $variant === "primary" ? theme.colors.black : theme.colors.purple};
    border: 2px solid ${({ theme }) => theme.colors.purple};
  }
`;

export { Button };
