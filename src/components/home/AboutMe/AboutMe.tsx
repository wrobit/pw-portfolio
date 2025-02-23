import { Typography } from "@components/common";
import * as Styled from "@components/home/AboutMe/AboutMe.styles";
import { routes } from "@utils/constants/routes.constants";
import { useNavigate } from "react-router-dom";

export const AboutMe = () => {
  const navigate = useNavigate();

  const handleRouteChange = () => {
    navigate(routes.about);
  };

  return (
    <Styled.AboutMeSection>
      <Typography.Headers.H4>
        I’m a developer that is dedicated to every project I undertake. I closely work with every team and client to understand needs and deliver the
        best solutions. Creating a product that exceeds my client’s expectations is what I seek to.
      </Typography.Headers.H4>
      <Styled.AboutMeButton onClick={handleRouteChange}>About me</Styled.AboutMeButton>
    </Styled.AboutMeSection>
  );
};
