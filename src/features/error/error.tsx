import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import { Seo } from "@components/seo/seo";
import { Button, Typography } from "@components/shared";
import * as Styled from "@features/error/error.styles";
import { routes } from "@utils/constants/routes.constants";
import { useI18n } from "@utils/i18n/i18n-provider";
import { PageTemplateWrapper } from "@utils/template/template.styles";

export const Error = () => {
  const { messages } = useI18n();
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
            {messages.error.headlineStart}{" "}
            <Typography.Default color={theme.colors.gray}>
              {messages.error.headlineMuted}&nbsp;
            </Typography.Default>
            {messages.error.headlineEnd}
          </Styled.ErrorTitle>
          <Button onClick={handleRouteChange}>{messages.error.goHome}</Button>
        </Styled.ErrorContentWrapper>
      </Styled.ErrorContainer>
    </PageTemplateWrapper>
  );
};
