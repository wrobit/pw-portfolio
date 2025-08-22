import { motion } from "framer-motion";
import { useRef } from "react";

import { Typography } from "@components/shared";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import { timelineVariants, timelineItemVariants } from "./Education.animations";
import { data } from "./Education.data";
import * as Styled from "../Experience/Experience.styles";

export const Education = () => {
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
          <Typography.Headers.H1>Education</Typography.Headers.H1>
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
