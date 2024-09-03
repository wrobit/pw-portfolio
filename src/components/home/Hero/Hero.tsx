import ScrollDownIcon from "@assets/icons/expand-down-double.svg";
import { Typography } from "@components/common";
import * as Styled from "@components/home/Hero/Hero.styles";
import { useRef } from "react";
import { useTheme } from "styled-components";

export const Hero = () => {
  const theme = useTheme();
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const scrollToExplore = () => {
    if (heroSectionRef.current) {
      window.scrollTo({ top: heroSectionRef.current.offsetHeight + Number(theme.sizes.navbar.height.slice(0, 2)), behavior: "smooth" });
    }
  };

  return (
    <Styled.HeroSection ref={heroSectionRef}>
      <Styled.HeroTypographyWrapper>
        <Typography.Headers.H1>Software Engineer & UX / UI Designer</Typography.Headers.H1>
        <Typography.Headers.H4>
          Software developer based in Poland. Mostly interested in web development and UI/UX design. Person that always seek to create everything from
          his own ideas. Looking for new opportunities and ideas.
        </Typography.Headers.H4>
      </Styled.HeroTypographyWrapper>
      <Styled.HeroButtonWrapper>
        <Styled.HeroButton onClick={scrollToExplore}>
          <Typography.Buttons.Small color="inherit">scroll to explore</Typography.Buttons.Small>
          <Styled.HeroButtonIcon src={ScrollDownIcon} />
        </Styled.HeroButton>
      </Styled.HeroButtonWrapper>
    </Styled.HeroSection>
  );
};
