import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const ContactBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${float} 6s ease-in-out infinite;
  will-change: transform;
`;

export const ContactContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  // ... existing styles ...
`;
