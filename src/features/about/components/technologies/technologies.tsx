import { motion } from "framer-motion";

import leavesImage from "@assets/leaves.avif";
import { Typography } from "@components/shared";
import {
  timelineItemVariants,
  timelineVariants,
} from "@features/home/components/about-me/utils/animations";
import { useScrollAnimation } from "@utils/animations/hooks";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import { data } from "./technologies.data";
import * as TechnologiesStyled from "./technologies.styles";
import * as Styled from "../../shared/styles";

export const Technologies = () => {
  const { controls, isInView, ref } = useScrollAnimation();

  return (
    <Styled.Section
      ref={ref}
      variants={pageTransition}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <Styled.TypographyWrapper>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls} custom={0.2}>
          <Typography.Headers.H1 as="h2">Technologies</Typography.Headers.H1>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls} custom={0.4}>
          <Typography.Headers.H5 as="p">
            As a developer, I use the latest and most advanced technologies to provide the best
            solutions for my clients. Modern technologies I work with, allows me to create
            innovative and cutting-edge solutions that are tailored to my clients' needs. I am
            always eager to explore new technologies and tools, and I believe it's always a great
            opportunity to learn new ways of developing applications.
          </Typography.Headers.H5>
        </motion.div>
      </Styled.TypographyWrapper>
      <Styled.List variants={timelineVariants} initial="hidden" animate={controls}>
        {data.map((item, index) => (
          <TechnologiesStyled.ListRow
            variants={timelineItemVariants}
            key={`${item.title}-${index}`}
          >
            <TechnologiesStyled.ListItemHeaderWrapper>
              <Styled.ListItemHeader>{item.title}</Styled.ListItemHeader>
              <TechnologiesStyled.ListItemDescription>
                {item.description}
              </TechnologiesStyled.ListItemDescription>
            </TechnologiesStyled.ListItemHeaderWrapper>
            <TechnologiesStyled.TechnologiesList>
              {item.technologies.map((technology) => (
                <TechnologiesStyled.ListItemContent key={technology.name}>
                  {technology.icon()}
                  <Typography.Headers.H6 as="span">{technology.name}</Typography.Headers.H6>
                </TechnologiesStyled.ListItemContent>
              ))}
            </TechnologiesStyled.TechnologiesList>
          </TechnologiesStyled.ListRow>
        ))}
      </Styled.List>
      <motion.div variants={fadeInUp} initial="hidden" animate={controls} custom={1.8}>
        <Styled.FooterImage
          src={leavesImage}
          alt="Decorative leaves"
          loading="lazy"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>
    </Styled.Section>
  );
};
