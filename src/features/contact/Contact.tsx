import { Link as StyledLink, Typography } from "@components/shared";
import * as Styled from "@features/contact/Contact.styles";
import { contactLinks } from "@features/contact/utils/linksData";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import ContactBackground from "./components/ContactBackground";

export const Contact = () => {
  return (
    <PageTemplateWrapper>
      <Styled.ContactContainer>
        <ContactBackground />
        <Styled.ContactContentWrapper width="75%">
          <Typography.Headers.H1>Contact me</Typography.Headers.H1>
          <Typography.Headers.H5>
            Connect with me and let's deploy our ideas together. Communicating is the key.
          </Typography.Headers.H5>
        </Styled.ContactContentWrapper>
        <Styled.ContactContentWrapper>
          <Typography.Headers.H4>
            <StyledLink href="mailto: piotrwrobel.ajiiz@gmail.com" target="_blank">
              piotrwrobel.ajiiz@gmail.com
            </StyledLink>
          </Typography.Headers.H4>
          <Styled.ContactLinksWrapper>
            {contactLinks?.map(({ id, name, url }) => (
              <Typography.Headers.H6 key={id}>
                <StyledLink href={url} target="_blank">
                  {name}
                </StyledLink>
              </Typography.Headers.H6>
            ))}
          </Styled.ContactLinksWrapper>
        </Styled.ContactContentWrapper>
        <Styled.ContactContentWrapper width="100%">
          <Typography.Headers.H6>From Poland with love, coding at home</Typography.Headers.H6>
          <Typography.Headers.H6></Typography.Headers.H6>
        </Styled.ContactContentWrapper>
      </Styled.ContactContainer>
    </PageTemplateWrapper>
  );
};
