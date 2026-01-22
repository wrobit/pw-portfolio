import { AnimatePresence, motion } from "framer-motion";
import { KeyboardEvent, useState } from "react";

import ArrowRight from "@assets/icons/arrow-right.svg";
import { Typography } from "@components/shared";
import {
  timelineItemVariants,
  timelineVariants,
} from "@features/home/components/AboutMe/utils/animations";
import { useScrollAnimation } from "@utils/animations";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import { data } from "./Education.data";
import * as Styled from "../../shared/styles";

export const Education = () => {
  const { controls, isInView, ref } = useScrollAnimation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  const handleToggleKeyDown = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle(index);
    }
  };

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
        {data.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <Styled.ExperienceRow
              key={`${item.title}-${index}`}
              variants={timelineItemVariants}
              custom={index * 0.1}
            >
              <Styled.ExperienceRowHeader
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onClick={() => handleToggle(index)}
                onKeyDown={(event) => handleToggleKeyDown(event, index)}
              >
                <Styled.ListItemHeader>{item.company}</Styled.ListItemHeader>
                <Styled.ListItem>{item.title}</Styled.ListItem>
                <Styled.ListItem>{item.date}</Styled.ListItem>
                <Styled.ExpandIcon
                  src={ArrowRight}
                  alt=""
                  aria-hidden="true"
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </Styled.ExperienceRowHeader>
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <Styled.ExperienceDescription
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Styled.ExperienceDescriptionText>
                      {item.description}
                    </Styled.ExperienceDescriptionText>
                  </Styled.ExperienceDescription>
                )}
              </AnimatePresence>
            </Styled.ExperienceRow>
          );
        })}
      </Styled.List>
    </Styled.Section>
  );
};
