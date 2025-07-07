import { motion } from "framer-motion";
import { useRef } from "react";

import { Typography } from "@components/shared";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import { timelineVariants, timelineItemVariants } from "./Experience.animations";
import { data } from "./Experience.data";
import * as Styled from "./Experience.styles";

export const Experience = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.ExperienceSection
      ref={heroSectionRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      <Styled.ExperienceTypographyWrapper>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
          <Typography.Headers.H1>Experience</Typography.Headers.H1>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.4}>
          <Typography.Headers.H5>
            I have had the opportunity to work with a diverse range of clients and projects,
            providing me with years of experience in Frontend Development and UX/UI Design. I have
            also collaborated with teams on various projects, which has allowed me to develop my
            team working skills. My experience allows me to provide high-quality solutions that meet
            the unique needs of each of my clients, whether it's working independently or as part of
            a team.
          </Typography.Headers.H5>
        </motion.div>
      </Styled.ExperienceTypographyWrapper>
      <Styled.ExperienceTimeline variants={timelineVariants} initial="hidden" animate="visible">
        {data.map((item, index) => (
          <Styled.ExperienceTimelineRow
            key={`${item.title}-${index}`}
            variants={timelineItemVariants}
            custom={index * 0.1}
          >
            <Styled.ExperienceTimelineHeaderItem>
              {item.company}
            </Styled.ExperienceTimelineHeaderItem>
            <Styled.ExperienceTimelineItem>{item.title}</Styled.ExperienceTimelineItem>
            <Styled.ExperienceTimelineItem>{item.date}</Styled.ExperienceTimelineItem>
          </Styled.ExperienceTimelineRow>
        ))}
      </Styled.ExperienceTimeline>
    </Styled.ExperienceSection>
  );
};
