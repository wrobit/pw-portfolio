import styled from "styled-components";

const HeroSection = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

const HeroTypographyWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

const HeroButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.gray};
  border: none;
  cursor: pointer;
  transition: color 200ms linear;

  &:hover {
    color: ${({ theme }) => theme.colors.white};

    & span {
      color: ${({ theme }) => theme.colors.white};
    }

    & img {
      animation-play-state: paused;
    }
  }
`;

const HeroButtonIcon = styled.img`
  animation: bounce 500ms infinite linear;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export { HeroButton, HeroButtonIcon, HeroButtonWrapper, HeroSection, HeroTypographyWrapper };
