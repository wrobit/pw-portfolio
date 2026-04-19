import styled from "styled-components";

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.orange};
  border: 2px solid ${({ theme }) => theme.colors.orange};
  border-radius: 24px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.orange};
  }
`;

export { Button };
