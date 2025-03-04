import ReactLenis from "@studio-freight/react-lenis";
import { defaultTheme } from "@utils/theme";
import AnimatedCursor from "react-animated-cursor";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Contact, Error, Home, Root, Work } from "./pages";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  const animatedCursorOptions = {
    color: "255, 255, 255",
    innerSize: 8,
    innerScale: 0.7,
    outerSize: 8,
    outerAlpha: 0.15,
    outerScale: 5,
    disableOnMobile: true
  };

  const reactLenisOptions = {
    smoothWheel: true,
    wheelMultiplier: 1.5,
    easing: (t: number) => t * (2 - t)
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <ReactLenis
        options={{
          ...reactLenisOptions
        }}
        root
      >
        <RouterProvider router={router}></RouterProvider>
        <AnimatedCursor {...animatedCursorOptions} />
      </ReactLenis>
    </ThemeProvider>
  );
};

export default App;
