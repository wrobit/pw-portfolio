import ReactLenis from "@studio-freight/react-lenis";
import { defaultTheme } from "@utils/theme";
import AnimatedCursor from "react-animated-cursor";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Contact, Error, Home, Root, Work } from "./pages";
import { animatedCursorOptions, reactLenisOptions } from "@utils/animations";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <ReactLenis
        options={{
          ...reactLenisOptions
        }}
        root
      >
        <RouterProvider router={router} />
        <AnimatedCursor {...animatedCursorOptions} />
      </ReactLenis>
    </ThemeProvider>
  );
};

export default App;
