import { Outlet } from "react-router-dom";

import { Footer } from "@components/footer/Footer";
import { Navbar } from "@components/navbar/Navbar";
import { CookieBanner, ScrollToTop } from "@components/shared";
import { useGoogleAnalytics } from "@utils/analytics/useGoogleAnalytics";
import { useCookieConsent } from "@utils/cookies/useCookieConsent";

import * as Styled from "./Root.styles";

export const Root = () => {
  const { status, accept, reject } = useCookieConsent();
  useGoogleAnalytics(status);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Styled.PageWrapper>
        <Outlet />
        <Footer />
      </Styled.PageWrapper>
      <CookieBanner status={status} onAccept={accept} onReject={reject} />
    </>
  );
};
