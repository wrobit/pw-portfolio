import { Hero } from "@components/hero/hero";
import { ProjectShowcase } from "@components/project-showcase/ProjectShowcase";
import { PageTemplateWrapper } from "@utils/template/template.styles";

export const Work = () => {
  return (
    <PageTemplateWrapper>
      <Hero
        title="Work"
        description="Check out my latest commercial and personal projects and see how I've managed to bring visions to life."
        showScrollToExplore={false}
      />
      <ProjectShowcase />
    </PageTemplateWrapper>
  );
};
