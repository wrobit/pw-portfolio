import { Typography } from "@components/common";
import * as Styled from "./ProjectBox.styles";
import { ProjectBoxProps } from "./ProjectBox.types";

export const ProjectBox = ({ title, image }: ProjectBoxProps) => {
  return (
    <Styled.ProjectBoxContainer>
      <Styled.ProjectBoxImageWrapper>
        <Styled.ProjectBoxImage src={image} alt={title} />
      </Styled.ProjectBoxImageWrapper>
      <Typography.Headers.H6>{title}</Typography.Headers.H6>
    </Styled.ProjectBoxContainer>
  );
};
