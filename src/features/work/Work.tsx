import { ProjectShowcase } from "@components/project-showcase/ProjectShowcase";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import { Hero } from "../../components/work/Hero/Hero";

export const Work = () => {
  return (
    <PageTemplateWrapper>
      <Hero />
      <ProjectShowcase />
    </PageTemplateWrapper>
  );
};
