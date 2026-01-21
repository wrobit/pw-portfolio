import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import { AnimatedLink } from "@components/shared/animated-link/animated-link";
import { fadeInUp } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { projects } from "data/projects";

import { ProjectBox } from "./project-box/project-box";
import * as Styled from "./project-showcase.styles";
import { Project } from "./project-showcase.types";

const PROJECTS_TO_SHOW_ON_HOME_PAGE = 6;

export const ProjectShowcase = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isWorkPage = location.pathname === routes.work;
  const projectsToShow = isWorkPage ? projects : projects.slice(0, PROJECTS_TO_SHOW_ON_HOME_PAGE);
  const commercialProjects = projectsToShow.filter((project) => project.commercial);
  const nonCommercialProjects = projectsToShow.filter((project) => !project.commercial);

  const handleMoreWorkClick = () => {
    navigate(routes.work);
  };

  const renderProjectSection = (
    sectionTitle: string,
    sectionProjects: Project[],
    startIndex: number
  ) => (
    <Styled.ProjectShowcaseSection>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0.6 + startIndex * 0.2}
      >
        <Styled.ProjectShowcaseTitle>{sectionTitle}</Styled.ProjectShowcaseTitle>
      </motion.div>
      <Styled.ProjectShowcaseContainer>
        {sectionProjects.map((project, index) => (
          <ProjectBox
            key={project.id}
            {...project}
            index={startIndex + index}
            isExpanded={isWorkPage ? project.isExpanded : false}
          />
        ))}
      </Styled.ProjectShowcaseContainer>
    </Styled.ProjectShowcaseSection>
  );

  return (
    <Styled.ProjectShowcaseWrapper>
      {commercialProjects.length > 0 &&
        renderProjectSection("Commercial projects", commercialProjects, 0)}
      {nonCommercialProjects.length > 0 &&
        renderProjectSection("Personal projects", nonCommercialProjects, commercialProjects.length)}
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
