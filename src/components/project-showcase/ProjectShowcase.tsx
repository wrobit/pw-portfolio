import { useLocation, useNavigate } from "react-router-dom";

import { AnimatedLink } from "@components/shared/animated-link/animated-link";
import { routes } from "@utils/constants/routes.constants";
import { projects } from "data/projects";

import { ProjectBox } from "./ProjectBox/ProjectBox";
import * as Styled from "./ProjectShowcase.styles";

const PROJECTS_TO_SHOW_ON_HOME_PAGE = 6;

export const ProjectShowcase = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isWorkPage = location.pathname === routes.work;
  const projectsToShow = isWorkPage ? projects : projects.slice(0, PROJECTS_TO_SHOW_ON_HOME_PAGE);

  const handleMoreWorkClick = () => {
    navigate(routes.work);
  };

  return (
    <Styled.ProjectShowcaseWrapper>
      <Styled.ProjectShowcaseContainer>
        {projectsToShow.map((project, index) => (
          <ProjectBox
            key={project.id}
            {...project}
            index={index}
            isExpanded={isWorkPage ? project.isExpanded : false}
          />
        ))}
      </Styled.ProjectShowcaseContainer>
      {!isWorkPage && (
        <AnimatedLink
          label="More work"
          delay={0.8 + projects.length * 0.2}
          align="center"
          onClick={handleMoreWorkClick}
        />
      )}
    </Styled.ProjectShowcaseWrapper>
  );
};
