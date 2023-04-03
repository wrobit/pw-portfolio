import { Navbar } from "@components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};
