import { useLocation } from "react-router-dom";
import { MoreWork } from "./MoreWork/MoreWork";
import { ProjectBox } from "./ProjectBox/ProjectBox";
import * as Styled from "./ProjectShowcase.styles";
import { projects } from "data/projects";
import { routes } from "@utils/constants/routes.constants";

const PROJECTS_TO_SHOW_ON_HOME_PAGE = 6;

export const ProjectShowcase = () => {
  const location = useLocation();
  const isWorkPage = location.pathname === routes.work;
  const projectsToShow = isWorkPage ? projects : projects.slice(0, PROJECTS_TO_SHOW_ON_HOME_PAGE);

  return (
    <Styled.ProjectShowcaseWrapper>
      <Styled.ProjectShowcaseContainer>
        {projectsToShow.map((project, index) => (
          <ProjectBox key={project.id} {...project} index={index} isExpanded={isWorkPage ? project.isExpanded : false} />
        ))}
      </Styled.ProjectShowcaseContainer>
      {!isWorkPage && <MoreWork delay={0.8 + projects.length * 0.2} />}
    </Styled.ProjectShowcaseWrapper>
  );
};
