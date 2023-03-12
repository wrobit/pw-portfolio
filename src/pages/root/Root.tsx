import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div>
        <h1>Navbar</h1>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
