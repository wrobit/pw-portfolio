import { AnimatePresence } from "framer-motion";

import { Typography } from "@components/shared/Typography/Typography";
import { CookieConsentStatus } from "@utils/cookies/consent";

import * as Styled from "./CookieBanner.styles";

type CookieBannerProps = {
  status: CookieConsentStatus;
  onAccept: () => void;
  onReject: () => void;
};

export const CookieBanner = ({ status, onAccept, onReject }: CookieBannerProps) => {
  const shouldShow = status === "unset";

  return (
    <AnimatePresence>
      {shouldShow && (
        <Styled.BannerWrapper
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Styled.Banner>
            <Styled.BannerContent>
              <Typography.Headers.H6>Cookies & Analytics</Typography.Headers.H6>
              <Typography.Default>
                We use cookies to measure usage and improve this portfolio experience. You can
                accept or reject analytics cookies.
              </Typography.Default>
            </Styled.BannerContent>
            <Styled.BannerActions>
              <Styled.BannerButton type="button" onClick={onAccept}>
                Accept
              </Styled.BannerButton>
              <Styled.BannerButton type="button" onClick={onReject}>
                Reject
              </Styled.BannerButton>
            </Styled.BannerActions>
          </Styled.Banner>
        </Styled.BannerWrapper>
      )}
    </AnimatePresence>
  );
};
