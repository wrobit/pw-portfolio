import { AnimatePresence } from "framer-motion";

import { Typography } from "@components/shared/typography/typography";
import { CookieConsentStatus } from "@utils/cookies/consent";
import { useI18n } from "@utils/i18n/i18n-provider";

import * as Styled from "./cookie-banner.styles";

type CookieBannerProps = {
  status: CookieConsentStatus;
  onAccept: () => void;
  onReject: () => void;
};

export const CookieBanner = ({ status, onAccept, onReject }: CookieBannerProps) => {
  const { messages } = useI18n();
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
              <Typography.Headers.H6 as="p">{messages.cookieBanner.title}</Typography.Headers.H6>
              <Typography.Default>{messages.cookieBanner.description}</Typography.Default>
            </Styled.BannerContent>
            <Styled.BannerActions>
              <Styled.BannerButton type="button" onClick={onAccept}>
                {messages.cookieBanner.accept}
              </Styled.BannerButton>
              <Styled.BannerButton type="button" onClick={onReject}>
                {messages.cookieBanner.reject}
              </Styled.BannerButton>
            </Styled.BannerActions>
          </Styled.Banner>
        </Styled.BannerWrapper>
      )}
    </AnimatePresence>
  );
};
