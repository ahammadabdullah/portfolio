// import image2 from '../assets/Group 4.png'
// import image3 from '../assets/Group 4.png'
import { LuExternalLink } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";

const Gallery = () => {
  return (
    <div className="overflow-y-scroll h-[80%] space-y-5 z-10 my-12">
      <h3 className="text-center text-3xl text-secondary pb-10 block lg:hidden">
        {" "}
        Projects
      </h3>
      <div className="bg-primary h-fit w-[350px] text-secondary  mx-auto rounded-lg border-secondary border-[1px] ">
        <img
          className=" rounded-t-lg "
          src={
            "https://cdn.discordapp.com/attachments/796439138403352596/1183864609896144896/BBClone.jpg?ex=6589e2d6&is=65776dd6&hm=b4a8318f07627313ace8c6611555ff9fa4db019c2b83292519e4836ed263cea9&"
          }
          alt=""
        />
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
        <img
          className=" rounded-t-lg "
          src={
            "https://cdn.discordapp.com/attachments/796439138403352596/1183864609896144896/BBClone.jpg?ex=6589e2d6&is=65776dd6&hm=b4a8318f07627313ace8c6611555ff9fa4db019c2b83292519e4836ed263cea9&"
          }
          alt=""
        />
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
      <div className="bg-primary h-fit w-[350px] text-secondary  mx-auto rounded-lg border-secondary border-[1px] ">
        <img
          className=" rounded-t-lg "
          src={
            "https://cdn.discordapp.com/attachments/796439138403352596/1183864609896144896/BBClone.jpg?ex=6589e2d6&is=65776dd6&hm=b4a8318f07627313ace8c6611555ff9fa4db019c2b83292519e4836ed263cea9&"
          }
          alt=""
        />
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
    </div>
  );
};

export default Gallery;
