import { Footer } from "@components/footer/Footer";
import { Navbar } from "@components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import * as Styled from "./Root.styles";

export const Root = () => {
  return (
    <>
      <Navbar />
      <Styled.PageWrapper>
        <Outlet />
        <Footer />
      </Styled.PageWrapper>
    </>
  );
};
