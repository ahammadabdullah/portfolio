import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="text-white min-h-screen lg:min-h-0 flex flex-col justify-center">
      <h6 className="text-lg">Hi All. I am</h6>
      <h3 className="text-4xl">Ahammad Abdullah</h3>
      <h3 className="text-highlight"> {">"} A MERN Stack Developer</h3>
      {/* socials here */}
      <div className="pt-8">
        <div className="text-2xl">
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
            <FaLinkedin /> <h3 className="pl-3">/ahammadabdullah</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Title;
