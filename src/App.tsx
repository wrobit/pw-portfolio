import ReactLenis from "@studio-freight/react-lenis";
import AnimatedCursor from "react-animated-cursor";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { About } from "@features/about/About";
import { Contact, Error, Home, Project, Work } from "@features/index";
import { Root } from "@pages/root/Root";
import { animatedCursorOptions, reactLenisOptions } from "@utils/animations";
import { defaultTheme } from "@utils/theme";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="project/:projectId" element={<Project />} />
        <Route path="404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <ReactLenis
        options={{
          ...reactLenisOptions,
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
