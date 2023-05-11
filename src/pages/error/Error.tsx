import { Button } from "@components/common";
import { routes } from "@utils/constants/routes.constants";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Error.styles";

export const Error = () => {
  const navigate = useNavigate();

  const handleRouteChange = () => {
    navigate(routes.home);
  };

  return (
    <Styled.ErrorContainer>
      <Styled.ErrorContentWrapper>
        <Styled.ErrorTitle>
          Oops. It looks like the page you're trying to reach <Styled.ErrorDisclaimer>doesn't exist</Styled.ErrorDisclaimer> or has been moved.
        </Styled.ErrorTitle>
        <Button onClick={handleRouteChange}>Go to Home</Button>
      </Styled.ErrorContentWrapper>
    </Styled.ErrorContainer>
  );
};
