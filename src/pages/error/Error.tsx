import { Button, Typography } from "@components/common";
import * as Styled from "@pages/error/Error.styles";
import { PageTemplateWrapper } from "@pages/template/template.styles";
import { routes } from "@utils/constants/routes.constants";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

export const Error = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleRouteChange = () => {
    navigate(routes.home);
  };

  return (
    <PageTemplateWrapper>
      <Styled.ErrorContentWrapper>
        <Styled.ErrorTitle>
          Oops. It looks like the page you're trying to reach <Typography.Default color={theme.colors.gray}>doesn't exist&nbsp;</Typography.Default>
          or has been moved.
        </Styled.ErrorTitle>
        <Button onClick={handleRouteChange}>Go to Home</Button>
      </Styled.ErrorContentWrapper>
    </PageTemplateWrapper>
  );
};
