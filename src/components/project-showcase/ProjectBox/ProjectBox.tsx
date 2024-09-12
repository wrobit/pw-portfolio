import UpperRightArrow from "@assets/icons/arrow-upper-right.svg";
import * as Styled from "./ProjectBox.styles";
import { ProjectBoxProps } from "./ProjectBox.types";

export const ProjectBox = ({ title, image, id }: ProjectBoxProps) => {
  return (
    <Styled.ProjectBoxContainer>
      <Styled.ProjectBoxImageWrapper>
        <Styled.ProjectBoxImage src={image} alt={title} />
      </Styled.ProjectBoxImageWrapper>
      <Styled.ProjectBoxLink href={`/project/${id}`}>
        <Styled.ProjectBoxTitle>{title}</Styled.ProjectBoxTitle>
        <Styled.ProjectBoxIcon src={UpperRightArrow} alt="arrow" />
      </Styled.ProjectBoxLink>
    </Styled.ProjectBoxContainer>
  );
};
