import { PageTemplateWrapper } from "@pages/template/template.styles";
import { Hero } from "../../components/work/Hero/Hero";
import { ProjectShowcase } from "@components/project-showcase/ProjectShowcase";

export const Work = () => {
  return (
    <PageTemplateWrapper>
      <Hero />
      <ProjectShowcase />
    </PageTemplateWrapper>
  );
};
