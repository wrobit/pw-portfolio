import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import { Seo } from "@components/seo/seo";
import { Button, Typography } from "@components/shared";
import * as Styled from "@features/error/error.styles";
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
      <Seo
        title="404 - Page Not Found"
        description="The page you are looking for does not exist or has been moved. Please try again."
        path={routes.error404}
        noIndex
      />
      <Styled.ErrorContainer>
        <Styled.ErrorContentWrapper>
          <Styled.ErrorTitle>
            This page{" "}
            <Typography.Default color={theme.colors.gray}>doesn't exist.</Typography.Default>
          </Styled.ErrorTitle>
          <Button onClick={handleRouteChange}>Back to home</Button>
        </Styled.ErrorContentWrapper>
      </Styled.ErrorContainer>
    </PageTemplateWrapper>
  );
};
