import { AnimatePresence, motion } from "framer-motion";
import { KeyboardEvent, useRef, useState } from "react";

import ArrowRight from "@assets/icons/arrow-right.svg";
import { Typography } from "@components/shared";
import {
  timelineItemVariants,
  timelineVariants,
} from "@features/home/components/about-me/utils/animations";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import { data } from "./experience.data";
import * as Styled from "../../shared/styles";

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <Styled.Section ref={sectionRef} variants={pageTransition} initial="initial" animate="animate">
      <Styled.TypographyWrapper>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
          <Typography.Headers.H1 as="h2">Experience</Typography.Headers.H1>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.4}>
          <Typography.Headers.H5 as="p">
            I have had the opportunity to work with a diverse range of clients and projects,
            providing me with years of experience in Frontend Development and UX/UI Design. I have
            also collaborated with teams on various projects, which has allowed me to develop my
            team working skills. My experience allows me to provide high-quality solutions that meet
            the unique needs of each of my clients, whether it's working independently or as part of
            a team.
          </Typography.Headers.H5>
        </motion.div>
      </Styled.TypographyWrapper>
      <Styled.List variants={timelineVariants} initial="hidden" animate="visible">
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
                <Styled.ListItemHeader>
                  <Styled.ExperienceCompanyLink
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {item.company}
                  </Styled.ExperienceCompanyLink>
                </Styled.ListItemHeader>
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
