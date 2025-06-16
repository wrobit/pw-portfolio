import { motion } from "framer-motion";
import styled from "styled-components";

import { Button } from "@components/shared";

const AboutMeSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxxl};
`;

const AboutMeHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const AboutMeButton = styled(motion(Button))`
  width: fit-content;
`;

const AboutMeImage = styled(motion.img)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 150px;
  }
`;

export { AboutMeButton, AboutMeHeader, AboutMeImage, AboutMeSection };
