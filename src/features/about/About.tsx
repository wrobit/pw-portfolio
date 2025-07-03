import { PageTemplateWrapper } from "@utils/template/template.styles";

import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { HeroImage } from "./components/HeroImage/HeroImage";

export const About = () => {
  return (
    <PageTemplateWrapper>
      <Hero />
      <HeroImage />
      <Experience />
    </PageTemplateWrapper>
  );
};
