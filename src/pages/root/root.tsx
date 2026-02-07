import { Outlet } from "react-router-dom";

import { Footer } from "@components/footer/footer";
import { Navbar } from "@components/navbar/navbar";
import { CookieBanner, ScrollToTop } from "@components/shared";
import { useGoogleAnalytics } from "@utils/analytics/use-google-analytics";
import { useCookieConsent } from "@utils/cookies/use-cookie-consent";

import * as Styled from "./root.styles";

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
