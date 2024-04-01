'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation'; 

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed lg:block lg:bottom-0 w-full lg:bg-transparent lg:w-[100px]">
      <div className="  bg-primary w-full lg:bg-transparent lg:w-[100px] h-12 lg:h-screen py-10  flex justify-center items-center">
        <div className="flex lg:flex-col  flex-row gap-5 items-center justify-center   ">
          <Link
            className={
              pathname === "/"
                ? "text-white text-xl"
                : "text-highlight"
            }
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={
              pathname === "/about-me"
                ? "text-white text-xl"
                : "text-highlight"
            }
            href={"/about-me"}
          >
            About Me
          </Link>
          <Link
            className={
              pathname === "/contact"
                ? "text-white text-xl"
                : "text-highlight"
            }
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
