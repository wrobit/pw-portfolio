import { motion } from "framer-motion";

import { Hero } from "@components/hero/hero";
import { ProjectShowcase } from "@components/project-showcase/project-showcase";
import { Seo } from "@components/seo/seo";
import { Breadcrumb } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import { fadeInUp } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { PageTemplateWrapper } from "@utils/template/template.styles";

const breadcrumbItems: BreadcrumbItem[] = [{ label: "Home", href: routes.home }, { label: "Work" }];

export const Work = () => {
  return (
    <PageTemplateWrapper>
      <Seo
        title="Work"
        description="Explore commercial and personal projects built by Piotr Wrobel, showcasing web development, UI design, and product engineering work."
        path={routes.work}
      />
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.1}>
        <Breadcrumb items={breadcrumbItems} />
      </motion.div>
      <Hero
        title="Work"
        description="Check out my latest commercial and personal projects and see how I've managed to bring visions to life."
        showScrollToExplore={false}
        compactSpacing
      />
      <ProjectShowcase />
    </PageTemplateWrapper>
  );
};
