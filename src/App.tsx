import { theme } from "@utils/theme";
import styled, { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paragraph>Hello world</Paragraph>
    </ThemeProvider>
  );
};

export default App;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
