import { Button } from "@components/common";
import { motion } from "framer-motion";
import styled from "styled-components";

const AboutMeSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const AboutMeButton = styled(motion(Button))`
  width: fit-content;
`;

export { AboutMeButton, AboutMeSection };
