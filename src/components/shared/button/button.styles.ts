import styled from "styled-components";

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export { Button };
