import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { Button, Typography } from "@components/shared";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";
import { projects } from "data/projects";

import * as Styled from "./Project.styles";

const DEFAULT_STACK = ["React", "TypeScript", "Vite", "Styled-components", "Framer Motion"];

const DEFAULT_RESPONSIBILITIES = [
  "Built a modular layout that adapts across desktop, tablet, and mobile.",
  "Connected the narrative with clear calls-to-action for conversion-focused sections.",
  "Balanced motion design with accessibility and performance considerations.",
];

const buildHighlights = (title: string) => [
  `${title} is presented with a story-first hero and supporting sections.`,
  "Reusable content blocks for problem, solution, results, and trust signals.",
  "Motion cues and hover states to guide attention without adding friction.",
];

const buildOutcomes = (hasLiveLink: boolean, hasRepositoryLink: boolean) => [
  hasLiveLink
    ? "Public live link available for stakeholders and prospects."
    : "Live experience kept private; access can be shared on request.",
  hasRepositoryLink
    ? "Codebase available for review to illustrate implementation details."
    : "Repository remains private to respect client constraints.",
  "Performance-checked visuals to keep motion smooth and copy readable.",
];

export const Project = () => {
  const navigate = useNavigate();
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

  const { id, title, description, image, backgroundImage, liveLink, repositoryLink } = project;
  const highlights = buildHighlights(title);
  const outcomes = buildOutcomes(Boolean(liveLink), Boolean(repositoryLink));
  const links = [
    liveLink ? { label: "View live project", href: liveLink } : null,
    repositoryLink ? { label: "View repository", href: repositoryLink } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <PageTemplateWrapper>
      <Styled.ProjectPage>
        <Styled.ProjectHero $backgroundImage={backgroundImage}>
          <Styled.ProjectHeroContent>
            <Styled.BadgeRow>
              <Styled.Badge>{`Project #${id}`}</Styled.Badge>
              {liveLink && <Styled.Badge $variant="success">Live</Styled.Badge>}
              {repositoryLink && <Styled.Badge $variant="neutral">Code</Styled.Badge>}
            </Styled.BadgeRow>
            <Typography.Headers.H1>{title}</Typography.Headers.H1>
            <Styled.ProjectHeroDescription>{description}</Styled.ProjectHeroDescription>
            <Styled.ProjectHeroActions>
              {liveLink && (
                <Styled.ActionLink href={liveLink} target="_blank" rel="noreferrer noopener">
                  View live
                </Styled.ActionLink>
              )}
              {repositoryLink && (
                <Styled.ActionLink href={repositoryLink} target="_blank" rel="noreferrer noopener">
                  View repository
                </Styled.ActionLink>
              )}
              <Button size="small" onClick={() => navigate(-1)}>
                Go back
              </Button>
            </Styled.ProjectHeroActions>
            <Styled.MetaGrid>
              <Styled.MetaTile>
                <Styled.MetaLabel>Live link</Styled.MetaLabel>
                <Styled.MetaValue>{liveLink ? "Available" : "Not shared"}</Styled.MetaValue>
              </Styled.MetaTile>
              <Styled.MetaTile>
                <Styled.MetaLabel>Repository</Styled.MetaLabel>
                <Styled.MetaValue>
                  {repositoryLink ? "Available" : "Private or NDA"}
                </Styled.MetaValue>
              </Styled.MetaTile>
            </Styled.MetaGrid>
          </Styled.ProjectHeroContent>

          <Styled.ProjectHeroVisual>
            <Styled.ProjectHeroImageCard>
              <Styled.ProjectHeroImage src={image} alt={title} loading="lazy" decoding="async" />
            </Styled.ProjectHeroImageCard>
          </Styled.ProjectHeroVisual>
        </Styled.ProjectHero>

        <Styled.ContentGrid>
          <Styled.Section>
            <Typography.Headers.H4>Overview</Typography.Headers.H4>
            <Styled.SectionBody>
              <span>
                {title} highlights a brand-forward experience with a concise value proposition,
                tailored visuals, and a CTA path that keeps the focus on engagement.
              </span>
              <span>
                This page is generated dynamically from shared project data, so adding more fields
                to the data source will immediately enrich the case study.
              </span>
            </Styled.SectionBody>
          </Styled.Section>

          <Styled.Section>
            <Typography.Headers.H4>Highlights</Typography.Headers.H4>
            <Styled.List>
              {highlights.map((item) => (
                <Styled.ListItem key={item}>{item}</Styled.ListItem>
              ))}
            </Styled.List>
          </Styled.Section>

          <Styled.Section>
            <Typography.Headers.H4>What I delivered</Typography.Headers.H4>
            <Styled.List>
              {DEFAULT_RESPONSIBILITIES.map((item) => (
                <Styled.ListItem key={item}>{item}</Styled.ListItem>
              ))}
            </Styled.List>
          </Styled.Section>

          <Styled.Section>
            <Typography.Headers.H4>Tech used</Typography.Headers.H4>
            <Styled.Chips>
              {DEFAULT_STACK.map((item) => (
                <Styled.Chip key={item}>{item}</Styled.Chip>
              ))}
            </Styled.Chips>
            <Styled.SectionBody>
              <span>
                The stack mirrors this portfolio build, making it easy to keep interactions,
                theming, and performance consistent across pages.
              </span>
            </Styled.SectionBody>
          </Styled.Section>

          <Styled.Section>
            <Typography.Headers.H4>Outcomes</Typography.Headers.H4>
            <Styled.List>
              {outcomes.map((item) => (
                <Styled.ListItem key={item}>{item}</Styled.ListItem>
              ))}
            </Styled.List>
          </Styled.Section>

          <Styled.Section>
            <Typography.Headers.H4>Links</Typography.Headers.H4>
            {links.length ? (
              <Styled.LinkList>
                {links.map((link) => (
                  <Styled.ExternalLink
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {link.label}
                  </Styled.ExternalLink>
                ))}
              </Styled.LinkList>
            ) : (
              <Styled.SectionBody>
                <span>Links are not publicly listed for this project yet.</span>
              </Styled.SectionBody>
            )}
          </Styled.Section>
        </Styled.ContentGrid>
      </Styled.ProjectPage>
    </PageTemplateWrapper>
  );
};
