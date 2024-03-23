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
            "https://cdn.discordapp.com/attachments/796439138403352596/1193158772688965713/image.png?ex=6607fbb3&is=65f586b3&hm=5751a636976320e580dfc23629fa781f340654e37d6d22f0ba368d54500b1825&"
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
            "https://cdn.discordapp.com/attachments/796439138403352596/1184040111478931516/image.png?ex=660bb948&is=65f94448&hm=def89c40b1746d64e5f059e89668b85e55d036a9b495c624cab8980c056f6679&"
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
            "https://cdn.discordapp.com/attachments/796439138403352596/1184039765666959360/image.png?ex=660bb8f6&is=65f943f6&hm=aa4fb35ce29336d2cd1e07e4d377151c37cefa24fdf6940b627fdc75a74f68cb&"
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
            "https://cdn.discordapp.com/attachments/796439138403352596/1184039253190115348/image.png?ex=660bb87c&is=65f9437c&hm=92ce00e325dbbb682965fa506e908018308679c0b2107bc5502d74ebe308d635&"
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
