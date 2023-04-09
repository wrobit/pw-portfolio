import { Button } from "@components/common";
import * as Styled from "./Error.styles";

export const Error = () => {
  return (
    <Styled.ErrorContainer>
      <Styled.ErrorContentWrapper>
        <Styled.ErrorTitle>
          Oops. It looks like the page you're trying to reach <Styled.ErrorDisclaimer>doesn't exist</Styled.ErrorDisclaimer> or has been moved.
        </Styled.ErrorTitle>
        <Button>Go to Home</Button>
      </Styled.ErrorContentWrapper>
    </Styled.ErrorContainer>
  );
};
