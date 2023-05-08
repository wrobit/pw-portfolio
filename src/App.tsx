import { defaultTheme } from "@utils/theme";
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
};

export default App;
