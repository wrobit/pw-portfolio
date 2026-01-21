import { motion } from "framer-motion";
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
  const { controls: imageControls, isInView: isImageInView, ref: imageRef } = useScrollAnimation();
  const {
    controls: activitiesControls,
    isInView: isActivitiesInView,
    ref: activitiesRef,
  } = useScrollAnimation();

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
    image,
    backgroundImage,
    activities,
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
          <AnimatedLink
            label="LIVE"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            align="left"
            delay={1}
          />
          <AnimatedLink
            label="SOURCE CODE"
            href={repositoryLink}
            target="_blank"
            rel="noreferrer"
            align="left"
            delay={1.2}
            disabled={!repositoryLink}
          />
        </Styled.ProjectLinksWrapper>
      )}
      <Styled.ProjectMediaSection
        ref={imageRef}
        variants={pageTransition}
        initial="initial"
        animate={isImageInView ? "animate" : "initial"}
      >
        <Styled.ProjectImageWrapper
          $backgroundImage={backgroundImage}
          variants={fadeInUp}
          initial="hidden"
          animate={imageControls}
          custom={0.4}
        >
          <Styled.ProjectImage src={image} alt={`${title} preview`} loading="lazy" />
        </Styled.ProjectImageWrapper>
      </Styled.ProjectMediaSection>
      {activities && activities.length > 0 && (
        <Styled.ProjectMediaSection
          ref={activitiesRef}
          variants={pageTransition}
          initial="initial"
          animate={isActivitiesInView ? "animate" : "initial"}
        >
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={activitiesControls}
            custom={0.2}
          >
            <Styled.ProjectSectionTitle>Activities</Styled.ProjectSectionTitle>
          </motion.div>
          <Styled.ProjectActivitiesList
            variants={fadeInUp}
            initial="hidden"
            animate={activitiesControls}
            custom={0.3}
          >
            {activities.map((activity, index) => (
              <Styled.ProjectActivitiesItem
                key={`${activity}-${index}`}
                variants={fadeInUp}
                initial="hidden"
                animate={activitiesControls}
                custom={0.4 + index * 0.1}
              >
                <Styled.ProjectActivitiesIndex>
                  {String(index + 1).padStart(2, "0")}
                </Styled.ProjectActivitiesIndex>
                <Styled.ProjectActivitiesText>{activity}</Styled.ProjectActivitiesText>
              </Styled.ProjectActivitiesItem>
            ))}
          </Styled.ProjectActivitiesList>
        </Styled.ProjectMediaSection>
      )}
    </PageTemplateWrapper>
  );
};
