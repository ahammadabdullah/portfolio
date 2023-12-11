import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="  bg-primary h-12 flex items-center ">
      <div className="flex lg:flex-col flex-row gap-3 items-center text-center  ">
        <NavLink
          className={
            location.pathname === "/" ? "text-white text-xl" : "text-highlight"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={
            location.pathname === "/about-me"
              ? "text-white text-xl"
              : "text-highlight"
          }
          to={"/about-me"}
        >
          About Me
        </NavLink>
        <NavLink
          className={
            location.pathname === "/contact"
              ? "text-white text-xl"
              : "text-highlight"
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
