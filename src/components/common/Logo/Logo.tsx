import * as Styled from "@components/common/Logo/Logo.styles";
import { Typography } from "@components/common/Typography/Typography";
import { routes } from "@utils/constants/routes.constants";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Styled.Wrapper>
      <Link to={routes.home}>
        <Typography.Logo>pw.</Typography.Logo>
      </Link>
    </Styled.Wrapper>
  );
};
