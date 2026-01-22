import { Hero } from "@components/hero/hero";
import { HeroImage } from "@components/hero-image/hero-image";
import { Seo } from "@components/seo/Seo";
import { Breadcrumb } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import { fadeInUp } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import * as Styled from "./About.styles";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Technologies } from "./components/Technologies/Technologies";

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
        description="My name is Piotr Wrobel. I am passionate about using my skills and experience to help individuals and businesses achieve their goals. I have honed my craft and developed a strong understanding of what it takes to deliver successful projects."
        showScrollToExplore={false}
      />
      <HeroImage />
      <Styled.SectionsWrapper>
        <Experience />
        <Education />
        <Technologies />
      </Styled.SectionsWrapper>
    </PageTemplateWrapper>
  );
};
