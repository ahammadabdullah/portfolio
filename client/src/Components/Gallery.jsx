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
            "https://cdn.discordapp.com/attachments/796439138403352596/1193158772688965713/image.png?ex=65abb2b3&is=65993db3&hm=42060c849b68e92ea6305daf0cec72892e1614c33a3b9e26a12198ce533d79fb&"
          }
          alt=""
        />
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
        <img
          className=" rounded-t-lg "
          src={
            "https://cdn.discordapp.com/attachments/796439138403352596/1184040111478931516/image.png?ex=658a8648&is=65781148&hm=70cf9c6b8ca6df25793548a7c15ec4f0d9974ccb1dc151ca5a77817da56535a9&"
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
            "https://cdn.discordapp.com/attachments/796439138403352596/1184039765666959360/image.png?ex=658a85f6&is=657810f6&hm=b25c4ef571cbbca0adb302b6c7ff115601f5a49d2850e69d4c016455e824c056&"
          }
          alt=""
        />
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
        <img
          className=" rounded-t-lg "
          src={
            "https://cdn.discordapp.com/attachments/796439138403352596/1184039253190115348/image.png?ex=658a857c&is=6578107c&hm=94882c9067709a9797377bc33e000dcd7e703d9918870cf3dcdbfdf4cdf6bfb0&"
          }
          alt=""
        />
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
