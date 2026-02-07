import { motion } from "framer-motion";

import { Hero } from "@components/hero/hero";
import { ProjectShowcase } from "@components/project-showcase/project-showcase";
import { Seo } from "@components/seo/seo";
import { Breadcrumb } from "@components/shared";
import { BreadcrumbItem } from "@components/shared/breadcrumb/breadcrumb.types";
import { fadeInUp } from "@utils/animations/variants";
import { routes } from "@utils/constants/routes.constants";
import { useI18n } from "@utils/i18n/i18n-provider";
import { PageTemplateWrapper } from "@utils/template/template.styles";

export const Work = () => {
  const { messages } = useI18n();
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: messages.breadcrumb.home, href: routes.home },
    { label: messages.breadcrumb.work },
  ];

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
        title={messages.work.heroTitle}
        description={messages.work.heroDescription}
        showScrollToExplore={false}
        compactSpacing
      />
      <ProjectShowcase />
    </PageTemplateWrapper>
  );
};
