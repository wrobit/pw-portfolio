import { motion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { Seo } from "@components/seo/Seo";
import { Breadcrumb } from "@components/shared";
import { AnimatedLink } from "@components/shared/animated-link/animated-link";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import { useScrollAnimation } from "@utils/animations/hooks";
import { fadeInUp, pageTransition } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";
import { projects } from "data/projects.data";

import * as Styled from "./Project.styles";
import { Hero } from "../../components/hero/hero";

export const Project = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { controls, isInView, ref } = useScrollAnimation();
  const { controls: imageControls, isInView: isImageInView, ref: imageRef } = useScrollAnimation();
  const {
    controls: activitiesControls,
    isInView: isActivitiesInView,
    ref: activitiesRef,
  } = useScrollAnimation();
  const { isInView: isNavigationInView, ref: navigationRef } = useScrollAnimation();

  const numericProjectId = useMemo(() => Number(projectId), [projectId]);
  const project = useMemo(
    () =>
      !Number.isNaN(numericProjectId)
        ? projects.find((item) => item.id === numericProjectId)
        : undefined,
    [numericProjectId]
  );

  const dateRange = [project?.dateFrom, project?.dateTo].filter(Boolean).join(" – ");
  const projectIndex = useMemo(
    () => projects.findIndex((item) => item.id === numericProjectId),
    [numericProjectId]
  );
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex >= 0 && projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
  const projectPath = project ? `${routes.project}/${project.id}` : routes.project;

  const breadcrumbItems = useMemo(
    () => [
      { label: "Home", href: routes.home },
      { label: "Work", href: routes.work },
      { label: project?.title },
    ],
    [project?.title]
  );
  const previousProjectIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (previousProjectIdRef.current === null) {
      previousProjectIdRef.current = numericProjectId;
      return;
    }

    if (previousProjectIdRef.current === numericProjectId) {
      return;
    }

    previousProjectIdRef.current = numericProjectId;
    controls.set("hidden");
    imageControls.set("hidden");
    activitiesControls.set("hidden");

    if (isInView) {
      controls.start("visible");
    }

    if (isImageInView) {
      imageControls.start("visible");
    }

    if (isActivitiesInView) {
      activitiesControls.start("visible");
    }
  }, [
    activitiesControls,
    controls,
    imageControls,
    isActivitiesInView,
    isImageInView,
    isInView,
    numericProjectId,
  ]);

  const handleProjectNavigate = (projectIdToNavigate: number) => {
    navigate(`${routes.project}/${projectIdToNavigate}`);
  };

  if (!project) {
    return <Navigate to={routes.error404} replace />;
  }

  return (
    <PageTemplateWrapper key={numericProjectId}>
      <Seo
        title={project?.title}
        description={project?.description}
        path={projectPath}
        type="article"
      />
      <Styled.ProjectBreadcrumb variants={fadeInUp} initial="hidden" animate="visible" custom={0.1}>
        <Breadcrumb items={breadcrumbItems as BreadcrumbItem[]} />
      </Styled.ProjectBreadcrumb>
      <Hero title={project?.title} description={project?.description} showScrollToExplore={false} />
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
            <Styled.ProjectInfoValue>{project?.client}</Styled.ProjectInfoValue>
          </Styled.ProjectInfoItem>
          <Styled.ProjectInfoItem
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            custom={0.4}
          >
            <Styled.ProjectInfoLabel>Role</Styled.ProjectInfoLabel>
            <Styled.ProjectInfoValue>{project?.role}</Styled.ProjectInfoValue>
          </Styled.ProjectInfoItem>
          <Styled.ProjectInfoItem
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            custom={0.6}
          >
            <Styled.ProjectInfoLabel>Technologies</Styled.ProjectInfoLabel>
            <Styled.ProjectInfoList>
              {project?.technologies.map((technology: string) => (
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
      {(project?.liveLink || project?.repositoryLink) && (
        <Styled.ProjectLinksWrapper>
          <AnimatedLink
            label="LIVE"
            href={project?.liveLink}
            target="_blank"
            rel="noreferrer"
            align="left"
            delay={1}
            disabled={!project?.liveLink}
          />
          <AnimatedLink
            label="SOURCE CODE"
            href={project?.repositoryLink}
            target="_blank"
            rel="noreferrer"
            align="left"
            delay={1.2}
            disabled={!project?.repositoryLink}
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
          $backgroundImage={project?.backgroundImage}
          variants={fadeInUp}
          initial="hidden"
          animate={imageControls}
          custom={0.4}
        >
          <Styled.ProjectImage
            src={project?.image}
            alt={`${project?.title} preview`}
            loading="lazy"
          />
        </Styled.ProjectImageWrapper>
      </Styled.ProjectMediaSection>
      {project?.activities && project?.activities.length > 0 && (
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
            {project?.activities.map((activity: string, index: number) => (
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
      {(previousProject || nextProject) && (
        <Styled.ProjectNavigation
          ref={navigationRef}
          variants={pageTransition}
          initial="initial"
          animate={isNavigationInView ? "animate" : "initial"}
        >
          {previousProject && (
            <Styled.ProjectNavigationItem>
              <AnimatedLink
                label="Previous"
                align="left"
                direction="left"
                onClick={() => handleProjectNavigate(previousProject?.id)}
                delay={0.2}
              />
            </Styled.ProjectNavigationItem>
          )}
          {nextProject && (
            <Styled.ProjectNavigationItem $align="right">
              <AnimatedLink
                label="Next"
                align="left"
                onClick={() => handleProjectNavigate(nextProject?.id)}
                delay={0.4}
              />
            </Styled.ProjectNavigationItem>
          )}
        </Styled.ProjectNavigation>
      )}
    </PageTemplateWrapper>
  );
};
