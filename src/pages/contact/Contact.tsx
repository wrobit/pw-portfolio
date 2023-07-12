import { Link as StyledLink, Typography } from "@components/common";
import * as Styled from "./Contact.styles";
import { contactLinks } from "./ContactLinks";

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
        <Styled.ContactEmailWrapper>
          <Typography element="span" fontSize="56px">
            <StyledLink href="mailto: piotrwrobel.ajiiz@gmail.com" target="_blank">
              piotrwrobel.ajiiz
            </StyledLink>
          </Typography>
          <Typography element="span" fontSize="56px">
            <StyledLink href="mailto: piotrwrobel.ajiiz@gmail.com" target="_blank">
              @gmail.com
            </StyledLink>
          </Typography>
        </Styled.ContactEmailWrapper>
        <Styled.ContactLinksWrapper>
          {contactLinks?.map(({ id, name, url }) => (
            <Typography element="span" fontSize="20px" key={id}>
              <StyledLink href={url} target="_blank">
                {name}
              </StyledLink>
            </Typography>
          ))}
        </Styled.ContactLinksWrapper>
      </Styled.ContactContentWrapper>
      <Styled.ContactContentWrapper width="100%">
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
