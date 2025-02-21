import { projects } from "data/projects";
import { ProjectBox } from "./ProjectBox/ProjectBox";
import * as Styled from "./ProjectShowcase.styles";

export const ProjectShowcase = () => {
  return (
    <Styled.ProjectShowcaseContainer>
      {projects.map((project, index) => (
        <ProjectBox key={project.id} {...project} index={index} />
      ))}
    </Styled.ProjectShowcaseContainer>
  );
};
