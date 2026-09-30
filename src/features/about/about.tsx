import { motion } from "framer-motion";

import { Hero } from "@components/hero/hero";
import { HeroImage } from "@components/hero-image/hero-image";
import { Seo } from "@components/seo/seo";
import { Breadcrumb, ResumeDownloadButton } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import { fadeInUp } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import * as Styled from "./about.styles";
import { Education } from "./components/education/education";
import { Experience } from "./components/experience/experience";
import { Technologies } from "./components/technologies/technologies";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Home", href: routes.home },
  { label: "About" },
];

export const About = () => {
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
        title="About me"
        description="My name is Piter. I'm a software engineer with experience in frontend, backend, and mobile development. I enjoy building scalable design systems and software architectures. My goal is to deliver high-quality products that solve real-world problems."
        showScrollToExplore={false}
        compactSpacing
      />
      <Styled.ResumeActions>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.6}>
          <ResumeDownloadButton />
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
