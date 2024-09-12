import { Typography } from "@components/common";
import styled from "styled-components";

const ProjectBoxContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 350px;
  }
`;

const ProjectBoxImageWrapper = styled.div`
  width: 100%;
  height: 454px;
  border-radius: ${({ theme }) => theme.radius.xl};
  cursor: pointer;
`;

const ProjectBoxLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectBoxTitle = styled(Typography.Headers.H6)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

const ProjectBoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.xl};
`;

const ProjectBoxIcon = styled.img``;

export { ProjectBoxContainer, ProjectBoxIcon, ProjectBoxImage, ProjectBoxImageWrapper, ProjectBoxLink, ProjectBoxTitle };
