import styled from "styled-components";

const PageWrapper = styled.main`
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.sizes.navbar.height};
`;

export { PageWrapper };
