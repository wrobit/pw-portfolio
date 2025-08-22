import { motion } from "framer-motion";
import { useRef } from "react";

import { Typography } from "@components/shared";
import { fadeInUp, pageTransition } from "@utils/animations/variants";

import { data } from "./Technologies.data";
import * as Styled from "../../shared/styles";

export const Technologies = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.Section ref={parentRef} variants={pageTransition} initial="initial" animate="animate">
      <Styled.TypographyWrapper>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}>
          <Typography.Headers.H1>Technologies</Typography.Headers.H1>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.4}>
          <Typography.Headers.H5>
            As a developer, I use the latest and most advanced technologies to provide the best
            solutions for my clients. Modern technologies I work with, allows me to create
            innovative and cutting-edge solutions that are tailored to my clients' needs. I am
            always eager to explore new technologies and tools, and I believe it's always a great
            opportunity to learn new ways of developing applications.
          </Typography.Headers.H5>
        </motion.div>
      </Styled.TypographyWrapper>
      <Styled.List>
        {data.map((item, index) => (
          <Styled.ListRow key={`${item.title}-${index}`}>
            <Styled.ListItemHeader>{item.title}</Styled.ListItemHeader>
          </Styled.ListRow>
        ))}
      </Styled.List>
    </Styled.Section>
  );
};
