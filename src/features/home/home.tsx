import { useNavigate } from "react-router-dom";

import { Hero } from "@components/hero/hero";
import { ProjectShowcase } from "@components/project-showcase/project-showcase";
import { Seo } from "@components/seo/seo";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTemplateWrapper>
      <Seo
        description="Software engineer and UX/UI designer based in Poland, creating modern web experiences with a focus on clean design, performance, and user-centric interfaces."
        path={routes.home}
      />
      <Hero
        title="Engineer, Maker, Runner"
        description="I'm Piter, a software engineer based in Poland, specializing in web and mobile development. I focus on building scalable applications and high-quality products. Outside of work, I enjoy long-distance running."
        ctaLabel="Get in touch"
        additionalActionLabel="About me"
        onAdditionalActionClick={() => navigate(routes.about)}
        onCtaClick={() => navigate(routes.contact)}
      />
      <ProjectShowcase />
    </PageTemplateWrapper>
  );
};
