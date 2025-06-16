import { Link } from "react-router-dom";

import * as Styled from "@components/shared/Logo/Logo.styles";
import { Typography } from "@components/shared/Typography/Typography";
import { routes } from "@utils/constants/routes.constants";

export const Logo = () => {
  return (
    <Styled.Wrapper>
      <Link to={routes.home}>
        <Typography.Logo>wrobit.</Typography.Logo>
      </Link>
    </Styled.Wrapper>
  );
};
