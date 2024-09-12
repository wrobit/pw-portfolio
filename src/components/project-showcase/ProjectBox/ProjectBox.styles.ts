import styled from "styled-components";

const ProjectBoxContainer = styled.div`
  width: 47%;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
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

const ProjectBoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.xl};
`;

const ProjectBoxIcon = styled.img``;

export { ProjectBoxContainer, ProjectBoxIcon, ProjectBoxImage, ProjectBoxImageWrapper, ProjectBoxLink };
