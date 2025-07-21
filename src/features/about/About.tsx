import { PageTemplateWrapper } from "@utils/template/template.styles";

import { SectionsWrapper } from "./About.styles";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { HeroImage } from "./components/HeroImage/HeroImage";

export const About = () => {
  return (
    <PageTemplateWrapper>
      <Hero />
      <HeroImage />
      <SectionsWrapper>
        <Experience />
        <Education />
      </SectionsWrapper>
    </PageTemplateWrapper>
  );
};
