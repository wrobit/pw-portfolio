import { motion } from "framer-motion";
import { useRef } from "react";

import { Typography } from "@components/shared";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import { timelineVariants, timelineItemVariants } from "./Education.animations";
import { data } from "./Education.data";
import * as Styled from "../../shared/styles";

export const Education = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.Section
      ref={heroSectionRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      <Styled.TypographyWrapper>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
          <Typography.Headers.H1>Education</Typography.Headers.H1>
        </motion.div>
      </Styled.TypographyWrapper>
      <Styled.List variants={timelineVariants} initial="hidden" animate="visible">
        {data.map((item, index) => (
          <Styled.ListRow
            key={`${item.title}-${index}`}
            variants={timelineItemVariants}
            custom={index * 0.1}
          >
            <Styled.ListItemHeader>{item.company}</Styled.ListItemHeader>
            <Styled.ListItem>{item.title}</Styled.ListItem>
            <Styled.ListItem>{item.date}</Styled.ListItem>
          </Styled.ListRow>
        ))}
      </Styled.List>
    </Styled.Section>
  );
};
