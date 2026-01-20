import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { AnimatedLink } from "@components/shared/animated-link/animated-link";
import { useScrollAnimation } from "@utils/animations/hooks";
import { fadeInUp, pageTransition } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";
import { projects } from "data/projects";

import * as Styled from "./Project.styles";
import { Hero } from "../../components/hero/hero";

export const Project = () => {
  const { projectId } = useParams();
  const { controls, isInView, ref } = useScrollAnimation();

  const numericProjectId = useMemo(() => Number(projectId), [projectId]);
  const project = useMemo(
    () =>
      !Number.isNaN(numericProjectId)
        ? projects.find((item) => item.id === numericProjectId)
        : undefined,
    [numericProjectId]
  );

  if (!project) {
    return <Navigate to={routes.error404} replace />;
  }

  const {
    title,
    description,
    liveLink,
    repositoryLink,
    client,
    role,
    technologies,
    dateFrom,
    dateTo,
  } = project;
  const dateRange = [dateFrom, dateTo].filter(Boolean).join(" – ");

  return (
    <PageTemplateWrapper>
      <Hero title={title} description={description} showScrollToExplore={false} />
      <Styled.ProjectInfoSection
        ref={ref}
        variants={pageTransition}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <Styled.ProjectInfoGrid>
          <Styled.ProjectInfoItem
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            custom={0.2}
          >
            <Styled.ProjectInfoLabel>Client</Styled.ProjectInfoLabel>
            <Styled.ProjectInfoValue>{client}</Styled.ProjectInfoValue>
          </Styled.ProjectInfoItem>
          <Styled.ProjectInfoItem
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            custom={0.4}
          >
            <Styled.ProjectInfoLabel>Role</Styled.ProjectInfoLabel>
            <Styled.ProjectInfoValue>{role}</Styled.ProjectInfoValue>
          </Styled.ProjectInfoItem>
          <Styled.ProjectInfoItem
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            custom={0.6}
          >
            <Styled.ProjectInfoLabel>Technologies</Styled.ProjectInfoLabel>
            <Styled.ProjectInfoList>
              {technologies.map((technology) => (
                <Styled.ProjectInfoValue key={technology}>{technology}</Styled.ProjectInfoValue>
              ))}
            </Styled.ProjectInfoList>
          </Styled.ProjectInfoItem>
          <Styled.ProjectInfoItem
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            custom={0.8}
          >
            <Styled.ProjectInfoLabel>Date</Styled.ProjectInfoLabel>
            <Styled.ProjectInfoValue>{dateRange}</Styled.ProjectInfoValue>
          </Styled.ProjectInfoItem>
        </Styled.ProjectInfoGrid>
      </Styled.ProjectInfoSection>
      {(liveLink || repositoryLink) && (
        <Styled.ProjectLinksWrapper>
          {liveLink && (
            <AnimatedLink
              label="LIVE"
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              align="left"
            />
          )}
          {repositoryLink && (
            <AnimatedLink
              label="SOURCE CODE"
              href={repositoryLink}
              target="_blank"
              rel="noreferrer"
              align="left"
            />
          )}
        </Styled.ProjectLinksWrapper>
      )}
    </PageTemplateWrapper>
  );
};
