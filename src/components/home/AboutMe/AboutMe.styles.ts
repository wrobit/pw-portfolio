import { Button } from "@components/common";
import styled from "styled-components";

const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const AboutMeButton = styled(Button)`
  width: fit-content;
`;

export { AboutMeButton, AboutMeSection };
