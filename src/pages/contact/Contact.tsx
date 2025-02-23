import { Link as StyledLink, Typography } from "@components/common";
import * as Styled from "@pages/contact/Contact.styles";
import { contactLinks } from "@pages/contact/ContactLinks";
import { PageTemplateWrapper } from "@pages/template/template.styles";
import ContactBackground from "./ContactBackground";

export const Contact = () => {
  return (
    <PageTemplateWrapper>
      <Styled.ContactContainer>
        <ContactBackground />
        <Styled.ContactContentWrapper width="75%">
          <Typography.Headers.H1>Contact me</Typography.Headers.H1>
          <Typography.Headers.H5>Connect with me and let's deploy our ideas together. Communicating is the key.</Typography.Headers.H5>
        </Styled.ContactContentWrapper>
        <Styled.ContactContentWrapper>
          <Typography.Headers.H3>
            <StyledLink href="mailto: piotrwrobel.ajiiz@gmail.com" target="_blank">
              piotrwrobel.ajiiz@gmail.com
            </StyledLink>
          </Typography.Headers.H3>
          <Styled.ContactLinksWrapper>
            {contactLinks?.map(({ id, name, url }) => (
              <Typography.Headers.H5 key={id}>
                <StyledLink href={url} target="_blank">
                  {name}
                </StyledLink>
              </Typography.Headers.H5>
            ))}
          </Styled.ContactLinksWrapper>
        </Styled.ContactContentWrapper>
        <Styled.ContactContentWrapper width="100%">
          <Typography.Headers.H5>From Poland with love,</Typography.Headers.H5>
          <Typography.Headers.H5>coding at home</Typography.Headers.H5>
        </Styled.ContactContentWrapper>
      </Styled.ContactContainer>
    </PageTemplateWrapper>
  );
};

export default Contact;
