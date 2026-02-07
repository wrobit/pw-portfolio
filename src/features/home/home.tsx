import { useNavigate } from "react-router-dom";

import { Hero } from "@components/hero/hero";
import { ProjectShowcase } from "@components/project-showcase/project-showcase";
import { Seo } from "@components/seo/seo";
import { routes } from "@utils/constants/routes.constants";
import { useI18n } from "@utils/i18n/i18n-provider";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import { AboutMe } from "./components/about-me/about-me";

export const Home = () => {
  const { messages } = useI18n();
  const navigate = useNavigate();

  return (
    <PageTemplateWrapper>
      <Seo
        description="Software engineer and UX/UI designer based in Poland, creating modern web experiences with a focus on clean design, performance, and user-centric interfaces."
        path={routes.home}
      />
      <Hero
        title={messages.home.heroTitle}
        description={messages.home.heroDescription}
        ctaLabel={messages.home.connectCta}
        onCtaClick={() => navigate(routes.contact)}
      />
      <ProjectShowcase />
      <AboutMe />
    </PageTemplateWrapper>
  );
};
