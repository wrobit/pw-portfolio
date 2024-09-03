import { projects } from "data/projects";
import { ProjectBox } from "./ProjectBox/ProjectBox";
import * as Styled from "./ProjectShowcase.styles";

export const ProjectShowcase = () => {
  return (
    <Styled.ProjectShowcaseContainer>
      {projects.map(project => (
        <ProjectBox key={project.id} {...project} />
      ))}
    </Styled.ProjectShowcaseContainer>
  );
};
