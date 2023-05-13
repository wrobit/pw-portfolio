import { Button, Typography } from "@components/common";
import { routes } from "@utils/constants/routes.constants";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import * as Styled from "./Error.styles";

export const Error = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleRouteChange = () => {
    navigate(routes.home);
  };

  return (
    <Styled.ErrorContainer>
      <Styled.ErrorContentWrapper>
        <Styled.ErrorTitle fontFamily="medium" element="h1" color={theme.colors.white}>
          Oops. It looks like the page you're trying to reach{" "}
          <Typography fontFamily="medium" color={theme.colors.gray}>
            doesn't exist&nbsp;
          </Typography>
          or has been moved.
        </Styled.ErrorTitle>
        <Button onClick={handleRouteChange}>Go to Home</Button>
      </Styled.ErrorContentWrapper>
    </Styled.ErrorContainer>
  );
};
