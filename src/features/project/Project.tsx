import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";
import { projects } from "data/projects";

import { Hero } from "../../components/hero/hero";

export const Project = () => {
  const { projectId } = useParams();

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

  const { title, description } = project;

  return (
    <PageTemplateWrapper>
      <Hero title={title} description={description} showScrollToExplore={false} />
    </PageTemplateWrapper>
  );
};
