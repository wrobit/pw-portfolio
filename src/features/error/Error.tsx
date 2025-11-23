import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import { Button, Typography } from "@components/shared";
import * as Styled from "@features/error/Error.styles";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";

export const Error = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleRouteChange = () => {
    navigate(routes.home);
  };

  return (
    <PageTemplateWrapper>
      <Styled.ErrorContainer>
        <Styled.ErrorContentWrapper>
          <Styled.ErrorTitle>
            Oops. It looks like the page you're trying to reach{" "}
            <Typography.Default color={theme.colors.gray}>doesn't exist&nbsp;</Typography.Default>
            or has been moved.
          </Styled.ErrorTitle>
          <Button onClick={handleRouteChange}>Go to Home</Button>
        </Styled.ErrorContentWrapper>
      </Styled.ErrorContainer>
    </PageTemplateWrapper>
  );
};
