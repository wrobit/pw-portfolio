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
`;

const ProjectBoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.xl};
`;

export { ProjectBoxContainer, ProjectBoxImage, ProjectBoxImageWrapper };
