import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
// import resume from "/";
import Link from "next/link";
const Title = () => {
  return (
    <div className="text-white min-h-screen lg:min-h-0 flex flex-col justify-center">
      <h6 className="text-lg">Hi There, I am</h6>
      <h3 className="xl:text-4xl text-2xl">Ahammad Abdullah</h3>
      <h3 className="text-highlight"> {">"} A MERN Stack Developer</h3>
      {/* socials here */}
      <div className="pt-8">
        <div className="xl:text-2xl text-xl">
          <a
            href="https://www.github.com/ahammadabdullah"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> <h3 className="pl-3">/ahammadabdullah</h3>
          </a>
          <a
            href="https://www.linkedin.com/in/ahammad-abdullah/"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> <h3 className="pl-3">/ahammad-abdullah</h3>
          </a>
          <a
            href="https://www.hackerrank.com/profile/ahammadabdullah1"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <FaHackerrank /> <h3 className="pl-3">/Ahammad Abdullah</h3>
          </a>
        </div>
      </div>
      {/* download resume button  */}
      <div className="mt-5">
        <Link legacyBehavior  href={"resume_jr_web_dev.pdf"}>
          <a
            className="py-2 px-3 bg-highlight rounded hover:bg-secondary"
            download
          >
            Download Resume
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Title;
