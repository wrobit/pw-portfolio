import { FiArrowLeft } from "react-icons/fi";

import { Seo } from "@components/seo/seo";
import { Breadcrumb, Link as StyledLink, Typography } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import * as Styled from "@features/contact/contact.styles";
import { contactLinks } from "@features/contact/utils/links-data";
import { useScrollAnimation } from "@utils/animations/hooks";
import { fadeInUp, pageTransition } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { useI18n } from "@utils/i18n/i18n-provider";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import ContactBackground from "./components/contact-background";

export const Contact = () => {
  const { messages } = useI18n();
  const { controls, isInView, ref } = useScrollAnimation();
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: messages.breadcrumb.home, href: routes.home },
    { label: messages.breadcrumb.contact },
  ];

  return (
    <PageTemplateWrapper>
      <Seo
        title="Contact"
        description="Get in touch with Piotr Wrobel for collaboration, product design, or software engineering opportunities."
        path={routes.contact}
      />
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
          <Typography.Headers.H1>{messages.contact.heading}</Typography.Headers.H1>
          <Typography.Headers.H5 as="p">{messages.contact.description}</Typography.Headers.H5>
        </Styled.ContactContentWrapper>
        <Styled.ContactContentWrapper
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          custom={0.4}
        >
          <Styled.ContactEmailRow>
            <Typography.Headers.H4 as="p">
              <StyledLink href="mailto: piotrwrobel.ajiiz@gmail.com" target="_blank">
                piotrwrobel.ajiiz@gmail.com
              </StyledLink>
            </Typography.Headers.H4>
            <Styled.ContactEmailBadge>
              {FiArrowLeft({ "aria-hidden": true })}
              {messages.contact.emailBadge}
            </Styled.ContactEmailBadge>
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
                <Typography.Headers.H6 as="span">
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
          <Typography.Headers.H6 as="p">{messages.contact.signature}</Typography.Headers.H6>
          <Typography.Headers.H6 as="p"></Typography.Headers.H6>
        </Styled.ContactContentWrapper>
      </Styled.ContactContainer>
    </PageTemplateWrapper>
  );
};
