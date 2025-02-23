import { projects } from "data/projects";
import { MoreWork } from "./MoreWork/MoreWork";
import { ProjectBox } from "./ProjectBox/ProjectBox";
import * as Styled from "./ProjectShowcase.styles";

export const ProjectShowcase = () => {
  return (
    <Styled.ProjectShowcaseWrapper>
      <Styled.ProjectShowcaseContainer>
        {projects.map((project, index) => (
          <ProjectBox key={project.id} {...project} index={index} />
        ))}
      </Styled.ProjectShowcaseContainer>
      <MoreWork delay={0.8 + projects.length * 0.2} />
    </Styled.ProjectShowcaseWrapper>
  );
};
