import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../assets/_Resume Of Ahammad Abdullah.pdf";
const Title = () => {
  return (
    <div className="text-white min-h-screen lg:min-h-0 flex flex-col justify-center">
      <h6 className="text-lg">Hi All. I am</h6>
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
        </div>
      </div>
      {/* download resume button  */}
      <div>
        <a href={resume} download={"resume_ahammadabdullah"}>
          <button className="py-2 px-3 bg-highlight rounded mt-5 hover:bg-secondary">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Title;
