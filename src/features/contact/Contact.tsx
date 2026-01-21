import { Breadcrumb, Link as StyledLink, Typography } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import * as Styled from "@features/contact/Contact.styles";
import { contactLinks } from "@features/contact/utils/linksData";
import { useScrollAnimation } from "@utils/animations/hooks";
import { fadeInUp, pageTransition } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import ContactBackground from "./components/ContactBackground";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Home", href: routes.home },
  { label: "Contact" },
];

export const Contact = () => {
  const { controls, isInView, ref } = useScrollAnimation();

  return (
    <PageTemplateWrapper>
      <Styled.ContactBreadcrumb variants={fadeInUp} initial="hidden" animate="visible" custom={0.1}>
        <Breadcrumb items={breadcrumbItems} />
      </Styled.ContactBreadcrumb>
      <Styled.ContactContainer
        ref={ref}
        variants={pageTransition}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <ContactBackground />
        <Styled.ContactContentWrapper
          width="75%"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          custom={0.2}
        >
          <Typography.Headers.H1>Contact me</Typography.Headers.H1>
          <Typography.Headers.H5>
            Connect with me and let's deploy our ideas together. Communicating is the key.
          </Typography.Headers.H5>
        </Styled.ContactContentWrapper>
        <Styled.ContactContentWrapper
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          custom={0.4}
        >
          <Styled.ContactEmailRow>
            <Typography.Headers.H4>
              <StyledLink href="mailto: piotrwrobel.ajiiz@gmail.com" target="_blank">
                piotrwrobel.ajiiz@gmail.com
              </StyledLink>
            </Typography.Headers.H4>
            <Styled.ContactEmailBadge>Click to email</Styled.ContactEmailBadge>
          </Styled.ContactEmailRow>
          <Styled.ContactLinksWrapper>
            {contactLinks?.map(({ id, name, url, icon }, index) => (
              <Styled.ContactLinkItem
                key={id}
                variants={fadeInUp}
                initial="hidden"
                animate={controls}
                custom={0.6 + index * 0.1}
              >
                <Styled.ContactLinkIcon>{icon()}</Styled.ContactLinkIcon>
                <Typography.Headers.H6>
                  <StyledLink href={url} target="_blank">
                    {name}
                  </StyledLink>
                </Typography.Headers.H6>
              </Styled.ContactLinkItem>
            ))}
          </Styled.ContactLinksWrapper>
        </Styled.ContactContentWrapper>
        <Styled.ContactContentWrapper
          width="100%"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          custom={0.8}
        >
          <Typography.Headers.H6>From Poland with love, coding at home</Typography.Headers.H6>
          <Typography.Headers.H6></Typography.Headers.H6>
        </Styled.ContactContentWrapper>
      </Styled.ContactContainer>
    </PageTemplateWrapper>
  );
};
