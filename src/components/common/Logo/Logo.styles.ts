import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.h1`
  font-family: ${({ theme }) => theme.font.medium};
  font-size: 28px;
`;
