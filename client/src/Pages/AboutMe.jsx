import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="min-h-screen text-center flex flex-col gap-10 mb-20 items-center justify-center w-full">
      <Helmet>
        <title>About Me | Ahammad Abdullah</title>
      </Helmet>
      <h3 className="text-3xl text-secondary mt-32 font-semibold">Who am i</h3>
      <div className="w-[80%]">
        <h3 className="text-secondary">
          I'm{" "}
          <Link to={"/"} className="text-highlight">
            Ahammad Abdullah
          </Link>
          , a dedicated front-end web developer drawn to the MERN stack for its
          flexibility in building interactive web applications. Having just
          completed a Diploma in engineering in Computer Science from Feni Govt.
          Computer Institute, I've cultivated methodical problem-solving
          abilities and a capacity for overcoming learning challenges. Hands-on
          experience has provided proficiency in MongoDB, Express, React and
          Node.js. As a recent graduate, I understand I still have room to
          evolve through real-world opportunities. With my eagerness, I aim to
          enhance my MERN abilities to become a skilled full-stack developer
          adept at crafting complex, scalable web apps.
        </h3>
      </div>
      <div className="text-secondary text-left w-[80%]">
        <h3 className="text-3xl text-secondary pt-10 pb-10 font-semibold text-center">
          What do i know
        </h3>
        <p>
          <span className="text-highlight">Expertise:</span>HTML5, JavaScript
          ,React JS, CSS, Tailwind, ES6 ,Axios, Express Js, Node js, MongoDB,
          Firebase, JWT, REST API, TanStack Query
        </p>
        <p>
          <span className="text-highlight">Comfortable:</span> Material-UI
        </p>
        <p>
          <span className="text-highlight">Familiar:</span> NextJS, Mongoose
        </p>
        <p>
          <span className="text-highlight">Tools and Platforms:</span>Vercel ,
          Firebase , Git, GitHub , VS Code , Figma, Adobe Photoshop, MS Office
        </p>
        <p>
          <span className="text-highlight">Interpersonal Skills:</span>{" "}
          Excellent team player with strong communication and adaptability.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
