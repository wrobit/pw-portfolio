import { hexToRgba } from "@utils/helpers/colors.helper";
import styled from "styled-components";

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;
  transition: color 100ms linear;

  &:active {
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.6)};
  }

  &:hover {
    color: ${({ theme }) => hexToRgba(theme.colors.white, 0.8)};
  }
`;

export { Link };
