import styled from "styled-components";

const Default = styled.span`
  color: ${({ theme, color }) => color || theme.colors.white};
  font-family: inherit;
  font-size: inherit;
`;

export { Default };
