import { useNavigate } from "react-router-dom";

import { Hero } from "@components/hero/hero";
import { ProjectShowcase } from "@components/project-showcase/project-showcase";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import { AboutMe } from "./components/AboutMe/AboutMe";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTemplateWrapper>
      <Hero
        title="Software Engineer & UX / UI Designer"
        description="Software developer based in Poland. Mostly interested in web development and UI/UX design. Person that always seek to create everything from his own ideas. Looking for new opportunities and ideas."
        ctaLabel="Connect with me"
        onCtaClick={() => navigate(routes.contact)}
      />
      <ProjectShowcase />
      <AboutMe />
    </PageTemplateWrapper>
  );
};
