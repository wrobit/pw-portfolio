import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import { AnimatedLink } from "@components/shared/animated-link/animated-link";
import { fadeInUp } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { projects } from "data/projects.data";

import { ProjectBox } from "./project-box/project-box";
import * as Styled from "./project-showcase.styles";
import { Project } from "./project-showcase.types";

const PROJECTS_TO_SHOW_ON_HOME_PAGE = 9;

export const ProjectShowcase = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isWorkPage = location.pathname === routes.work;
  const projectsToShow = isWorkPage ? projects : projects.slice(0, PROJECTS_TO_SHOW_ON_HOME_PAGE);
  const commercialProjects = projectsToShow.filter((project) => project.commercial);
  const nonCommercialProjects = projectsToShow.filter((project) => !project.commercial);

  const renderProjectSection = (
    sectionTitle: string,
    sectionDescription: string,
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
        <Styled.ProjectShowcaseHeader>
          <Styled.ProjectShowcaseTitle as="h2">{sectionTitle}</Styled.ProjectShowcaseTitle>
          <Styled.ProjectShowcaseDescription as="p">
            {sectionDescription}
          </Styled.ProjectShowcaseDescription>
        </Styled.ProjectShowcaseHeader>
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
    <Styled.ProjectShowcaseWrapper $isWorkPage={isWorkPage}>
      {commercialProjects.length > 0 &&
        renderProjectSection(
          "Client Builds",
          "Production projects delivered for companies and growing teams.",
          commercialProjects,
          0
        )}
      {nonCommercialProjects.length > 0 &&
        renderProjectSection(
          "Independent Builds",
          "Self-initiated products, experiments, and engineering explorations.",
          nonCommercialProjects,
          commercialProjects.length
        )}
      {!isWorkPage && (
        <AnimatedLink
          label="More work"
          delay={projects.length * 0.175}
          align="center"
          onClick={() => navigate(routes.work)}
          as="button"
        />
      )}
    </Styled.ProjectShowcaseWrapper>
  );
};
