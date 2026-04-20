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
        title="Software Engineer, Designer, Runner"
        description="Software engineer based in Poland. I build web products with full-stack development from concept to launch. I think carefully about interfaces, and I run long distances. The two are more related than they sound."
        ctaLabel="Get in touch"
        additionalActionLabel="About me"
        onAdditionalActionClick={() => navigate(routes.about)}
        onCtaClick={() => navigate(routes.contact)}
        showScrollToExplore={false}
      />
      <ProjectShowcase />
    </PageTemplateWrapper>
  );
};
