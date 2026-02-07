import { Link } from "react-router-dom";

import logo from "@assets/logo.png";
import * as Styled from "@components/shared/logo/logo.styles";
import { Typography } from "@components/shared/typography/typography";
import { routes } from "@utils/constants/routes.constants";

export const Logo = () => {
  return (
    <Styled.Wrapper>
      <Link to={routes.home}>
        <Styled.LogoContent>
          <Styled.LogoImage src={logo} alt="Wrobit logo" />
          <Typography.Logo as="span">wrobit.</Typography.Logo>
        </Styled.LogoContent>
      </Link>
    </Styled.Wrapper>
  );
};
