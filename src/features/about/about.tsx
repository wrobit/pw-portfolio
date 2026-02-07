import { motion } from "framer-motion";

import { Hero } from "@components/hero/hero";
import { HeroImage } from "@components/hero-image/hero-image";
import { Seo } from "@components/seo/seo";
import { Breadcrumb, ResumeDownloadButton } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import { fadeInUp } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { useI18n } from "@utils/i18n/i18n-provider";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import * as Styled from "./about.styles";
import { Education } from "./components/education/education";
import { Experience } from "./components/experience/experience";
import { Technologies } from "./components/technologies/technologies";

export const About = () => {
  const { messages } = useI18n();
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: messages.breadcrumb.home, href: routes.home },
    { label: messages.breadcrumb.about },
  ];

  return (
    <PageTemplateWrapper>
      <Seo
        title="About"
        description="Learn more about Wrobit - Piotr Wrobel, a software engineer and UX/UI designer focused on building successful, user-centered digital products."
        path={routes.about}
      />
      <Styled.BreadcrumbWrapper variants={fadeInUp} initial="hidden" animate="visible" custom={0.1}>
        <Breadcrumb items={breadcrumbItems} />
      </Styled.BreadcrumbWrapper>
      <Hero
        title={messages.about.heroTitle}
        description={messages.about.heroDescription}
        showScrollToExplore={false}
        compactSpacing
      />
      <Styled.ResumeActions>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.6}>
          <ResumeDownloadButton label={messages.about.downloadResume} />
        </motion.div>
      </Styled.ResumeActions>
      <HeroImage />
      <Styled.SectionsWrapper>
        <Experience />
        <Education />
        <Technologies />
      </Styled.SectionsWrapper>
    </PageTemplateWrapper>
  );
};
