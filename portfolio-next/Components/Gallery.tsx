import { LuExternalLink } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import Image from "next/image";
import taskify from "@/assets/taskify.png";
import edumi from "@/assets/edumi.png";
import foodshare from "@/assets/foodshare.png";
import portfolio from "@/assets/portfolio.png";

const Gallery = () => {
  return (
    <div className="overflow-y-scroll h-[80%] space-y-5 z-10 my-12 ">
      <h3 className="text-center text-3xl text-secondary pb-10 block lg:hidden">
        {" "}
        Projects
      </h3>
      <div className="bg-primary h-fit w-[350px] text-secondary  mx-auto rounded-lg border-secondary border-[1px] ">
        <Image className=" rounded-t-lg " src={taskify} alt="" />
        <div className="p-4 border-t-[1px] border-secondary">
          <h3 className="text-sm">
            Effortless Task Mastery: Elevate Your Productivity with our MERN
            Stack Todo Website featuring Seamless Drag-and-Drop Functionality!
          </h3>
          <div className="flex justify-between">
            <a
              href="https://taskify-ahammad-abdullah.web.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <LuExternalLink /> <span>Live Site</span>
            </a>
            <a
              href="https://github.com/ahammadabdullah/taskify"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FaCode /> <span>Code </span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary h-fit w-[350px] text-secondary  mx-auto rounded-lg border-secondary border-[1px] ">
        <Image className=" rounded-t-lg " src={edumi} alt="" />
        <div className="p-4 border-t-[1px] border-secondary">
          <h3 className="text-sm">
            Empowered educators and engaged students through Edumi, a dynamic
            online learning platform built with MERN
          </h3>
          <div className="flex justify-between">
            <a
              href="https://edumi-453a2.web.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <LuExternalLink /> <span>Live Site</span>
            </a>
            <a
              href="https://github.com/ahammadabdullah/edumi-client"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FaCode /> <span>Client </span>
            </a>
            <a
              href="https://github.com/ahammadabdullah/edumi-server"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FaCode /> <span>Server </span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary h-fit text-secondary w-[350px] mx-auto rounded-lg border-secondary border-[1px] ">
        <Image className=" rounded-t-lg " src={foodshare} alt="" />
        <div className="p-4 border-t-[1px] border-secondary">
          <h3 className="text-sm">
            Through Community Food Share, I built a platform that empowers
            individuals to donate and receive food, fostering a sense of
            community and tackling food insecurity.
          </h3>
          <div className="flex justify-between">
            <a
              href="https://community-food-share.web.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <LuExternalLink /> <span>Live Site</span>
            </a>
            <a
              href="https://github.com/ahammadabdullah/community-food-share-client"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FaCode /> <span>Client </span>
            </a>
            <a
              href="https://github.com/ahammadabdullah/community-food-share-server"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FaCode /> <span>Server </span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary h-fit w-[350px] text-secondary  mx-auto rounded-lg border-secondary border-[1px] ">
        <Image className=" rounded-t-lg " src={portfolio} alt="" />
        <div className="p-4 border-t-[1px] border-secondary">
          <h3 className="text-sm">
            Explore my expertise through a user-friendly, secure portfolio
            showcasing my work in the MERN stack.
          </h3>
          <div className="flex justify-between">
            <a
              href="https://ahammad-abdullah.web.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <LuExternalLink /> <span>Live Site</span>
            </a>
            <a
              href="https://github.com/ahammadabdullah/portfolio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FaCode /> <span>Full Project </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
