import { Typography } from "@components/common";
import * as Styled from "@components/home/Hero/Hero.styles";

export const Hero = () => {
  return (
    <Styled.HeroSection>
      <Typography.Headers.H1>React Developer & UX / UI Designer</Typography.Headers.H1>
      <Typography.Headers.H4>
        Software developer based in Poland. Mostly interested in web development and UI/UX design. Person that always seek to create everything from
        his own ideas. Looking for new opportunities and ideas.
      </Typography.Headers.H4>
    </Styled.HeroSection>
  );
};
