import { AboutMe } from "@components/home/AboutMe/AboutMe";
import { Hero } from "@components/home/Hero/Hero";
import { ProjectShowcase } from "@components/project-showcase/ProjectShowcase";
import { PageTemplateWrapper } from "@pages/template/template.styles";

export const Home = () => {
  return (
    <PageTemplateWrapper>
      <Hero />
      <ProjectShowcase />
      <AboutMe />
    </PageTemplateWrapper>
  );
};
