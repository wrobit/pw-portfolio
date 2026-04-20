import { motion } from "framer-motion";
import styled from "styled-components";

const ImageWrapper = styled(motion.div)`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xxl} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 225px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radius.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 200px;
  }
`;

export { Image, ImageWrapper };
