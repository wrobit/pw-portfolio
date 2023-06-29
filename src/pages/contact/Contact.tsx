import { Typography } from "@components/common";
import * as Styled from "./Contact.styles";

export const Contact = () => {
  return (
    <Styled.ContactContainer>
      <Styled.ContactContentWrapper width="75%">
        <Typography element="h1" fontSize="85px">
          Contact me
        </Typography>
        <Typography element="span" fontSize="32px">
          Connect with me and let's deploy our ideas together. Communicating is the key.
        </Typography>
      </Styled.ContactContentWrapper>
      <Styled.ContactContentWrapper>
        <Typography element="span" fontSize="56px">
          piotrwrobel.ajiiz@gmail.com
        </Typography>
        <Styled.ContactLinksWrapper>
          <Typography element="span" fontSize="20px">
            github
          </Typography>
          <Typography element="span" fontSize="20px">
            linkedin
          </Typography>
          <Typography element="span" fontSize="20px">
            instagram
          </Typography>
        </Styled.ContactLinksWrapper>
      </Styled.ContactContentWrapper>
      <Styled.ContactContentWrapper width="25%">
        <Typography element="span" fontSize="24px">
          From Poland with love,
        </Typography>
        <Typography element="span" fontSize="24px">
          coding at home
        </Typography>
      </Styled.ContactContentWrapper>
    </Styled.ContactContainer>
  );
};
