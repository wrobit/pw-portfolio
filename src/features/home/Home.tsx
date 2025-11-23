import { ProjectShowcase } from "@components/project-showcase/ProjectShowcase";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import { AboutMe } from "./components/AboutMe/AboutMe";
import { Hero } from "./components/Hero/Hero";

export const Home = () => {
  return (
    <PageTemplateWrapper>
      <Hero />
      <ProjectShowcase />
      <AboutMe />
    </PageTemplateWrapper>
  );
};
