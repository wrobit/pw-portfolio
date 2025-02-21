import { Navbar } from "@components/navbar/Navbar";
import { pageTransition } from "@utils/animations/variants";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

export const Root = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} variants={pageTransition} initial="initial" animate="animate" exit="exit">
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </>
  );
};
