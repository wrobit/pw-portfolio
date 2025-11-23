import { motion } from "framer-motion";
import { useEffect } from "react";

import { Typography } from "@components/shared";
import { useScrollAnimation } from "@utils/animations";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import { timelineVariants, timelineItemVariants } from "./Education.animations";
import { data } from "./Education.data";
import * as Styled from "../../shared/styles";

export const Education = () => {
  const { controls, isInView, ref } = useScrollAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Styled.Section
      ref={ref}
      variants={pageTransition}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <Styled.TypographyWrapper>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls} custom={0.2}>
          <Typography.Headers.H1>Education</Typography.Headers.H1>
        </motion.div>
      </Styled.TypographyWrapper>
      <Styled.List variants={timelineVariants} initial="hidden" animate={controls}>
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
