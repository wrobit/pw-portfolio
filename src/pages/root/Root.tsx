import { Outlet } from "react-router-dom";

import { Footer } from "@components/footer/Footer";
import { Navbar } from "@components/navbar/Navbar";
import { ScrollToTop } from "@components/shared";

import * as Styled from "./Root.styles";

export const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Styled.PageWrapper>
        <Outlet />
        <Footer />
      </Styled.PageWrapper>
    </>
  );
};
