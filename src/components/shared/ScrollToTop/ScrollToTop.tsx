import { useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 0.8 });
    }
  }, [location.pathname, lenis]);

  return null;
};
