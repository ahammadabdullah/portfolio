import { LuExternalLink } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import Image from "next/image";

import taskify from "@/assets/taskify.png";
import edumi from "@/assets/edumi.png";
import foodshare from "@/assets/foodshare.png";
import portfolio from "@/assets/portfolio.png";
import aiSaaSBoilerplate from "@/assets/ai-saas-boilerplate.png";
import sellto from "@/assets/sellto.png";

const projects = [
  {
    image: sellto,
    alt: "Sellto",
    description:
      "The simplest digital store solution. Sellto is an all-in-one platform to start, run, and grow a digital business from software to communities and everything else.",
    links: {
      live: "https://beta.sellto.io",
    },
  },
  {
    image: aiSaaSBoilerplate,
    alt: "AI SaaS Boilerplate",
    description:
      "A comprehensive AI SaaS application boilerplate that integrates cutting-edge AI features, modular components, customizable email templates, and secure payment processing—providing a robust foundation for modern, scalable solutions.",
    links: {
      live: "https://ai-saas-template-three.vercel.app",
    },
  },
  {
    image: taskify,
    alt: "Taskify",
    description:
      "Effortless Task Mastery: Elevate Your Productivity with our MERN Stack Todo Website featuring Seamless Drag-and-Drop Functionality!",
    links: {
      live: "https://taskify-ahammad-abdullah.web.app/",
      code: "https://github.com/ahammadabdullah/taskify",
    },
  },
  {
    image: edumi,
    alt: "Edumi",
    description:
      "Empowered educators and engaged students through Edumi, a dynamic online learning platform built with MERN",
    links: {
      live: "https://edumi-453a2.web.app/",
      client: "https://github.com/ahammadabdullah/edumi-client",
      server: "https://github.com/ahammadabdullah/edumi-server",
    },
  },
  {
    image: foodshare,
    alt: "Food Share",
    description:
      "Through Community Food Share, I built a platform that empowers individuals to donate and receive food, fostering a sense of community and tackling food insecurity.",
    links: {
      live: "https://community-food-share.web.app",
      client: "https://github.com/ahammadabdullah/community-food-share-client",
      server: "https://github.com/ahammadabdullah/community-food-share-server",
    },
  },
  {
    image: portfolio,
    alt: "Portfolio",
    description:
      "Explore my expertise through a user-friendly, secure portfolio showcasing my work in the MERN stack.",
    links: {
      live: "https://ahammad-abdullah.web.app",
      full: "https://github.com/ahammadabdullah/portfolio",
    },
  },
];

type LinkKey = "live" | "code" | "client" | "server" | "full";

const linkDetails: Record<LinkKey, { icon: JSX.Element; label: string }> = {
  live: { icon: <LuExternalLink />, label: "Live Site" },
  code: { icon: <FaCode />, label: "Code" },
  client: { icon: <FaCode />, label: "Client" },
  server: { icon: <FaCode />, label: "Server" },
  full: { icon: <FaCode />, label: "Full Project" },
};

const Gallery = () => {
  return (
    <div className="overflow-y-scroll h-[80%] space-y-5 z-10 my-12">
      <h3 className="text-center text-3xl text-secondary pb-10 block lg:hidden">
        Projects
      </h3>
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-primary h-fit w-[350px] text-secondary mx-auto rounded-lg border-secondary border-[1px]"
        >
          <Image
            className="rounded-t-lg"
            src={project.image}
            alt={project.alt || "Project Image"}
          />
          <div className="p-4 border-t-[1px] border-secondary">
            <h3 className="text-sm">{project.description}</h3>
            <div className="flex justify-between">
              {Object.entries(project.links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1"
                >
                  {linkDetails[key as LinkKey].icon}{" "}
                  <span>{linkDetails[key as LinkKey].label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
