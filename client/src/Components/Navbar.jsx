import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="fixed lg:block lg:bottom-0 w-full lg:bg-transparent lg:w-[100px]">
      <div className="  bg-primary w-full lg:bg-transparent lg:w-[100px] h-12 lg:h-screen py-10  flex justify-center items-center">
        <div className="flex lg:flex-col  flex-row gap-5 items-center justify-center   ">
          <NavLink
            className={
              location.pathname === "/"
                ? "text-white text-xl"
                : "text-highlight"
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
    </div>
  );
};

export default Navbar;
