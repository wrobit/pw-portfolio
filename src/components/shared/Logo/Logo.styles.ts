import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContent = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const LogoImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: contain;
`;

export { Wrapper, LogoContent, LogoImage };
