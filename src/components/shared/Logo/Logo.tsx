import { Link } from "react-router-dom";

import logo from "@assets/logo.png";
import * as Styled from "@components/shared/Logo/Logo.styles";
import { Typography } from "@components/shared/Typography/Typography";
import { routes } from "@utils/constants/routes.constants";

export const Logo = () => {
  return (
    <Styled.Wrapper>
      <Link to={routes.home}>
        <Styled.LogoContent>
          <Styled.LogoImage src={logo} alt="Wrobit logo" />
          <Typography.Logo>wrobit.</Typography.Logo>
        </Styled.LogoContent>
      </Link>
    </Styled.Wrapper>
  );
};
