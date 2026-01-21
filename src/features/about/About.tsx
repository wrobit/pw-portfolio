import { Hero } from "@components/hero/hero";
import { HeroImage } from "@components/hero-image/hero-image";
import { PageTemplateWrapper } from "@utils/template/template.styles";

import { SectionsWrapper } from "./About.styles";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Technologies } from "./components/Technologies/Technologies";

export const About = () => {
  return (
    <PageTemplateWrapper>
      <Hero
        title="About me"
        description="I am passionate about using my skills and experience to help individuals and businesses achieve their goals. I have honed my craft and developed a strong understanding of what it takes to deliver successful projects."
        showScrollToExplore={false}
      />
      <HeroImage />
      <SectionsWrapper>
        <Experience />
        <Education />
        <Technologies />
      </SectionsWrapper>
    </PageTemplateWrapper>
  );
};
