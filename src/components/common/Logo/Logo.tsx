import { routes } from "@utils/constants/routes.constants";
import { Link } from "react-router-dom";
import * as Styled from "./Logo.styles";

export const Logo = () => {
  return (
    <Styled.Wrapper>
      <Link to={routes.home}>
        <Styled.Content>pw.</Styled.Content>
      </Link>
    </Styled.Wrapper>
  );
};
