import { Helmet } from "react-helmet";
import Gallery from "../Components/Gallery";
import Title from "../Components/Title";
import { useEffect } from "react";
// import bgBlur from "../assets/Background Blurs.png";

const Home = () => {
  useEffect(() => {
    window.location.href = "https://ahammadabdullah.vercel.app";
  },[])
  return null
};

export default Home;


/**
 *
<div>
      <Helmet>
        <title>Ahammad Abdullah</title>
      </Helmet>
      <div className=" relative lg:h-screen flex flex-col lg:flex-row  items-center justify-evenly overflow-hidden ">
        <Title />
        <Gallery />
        <div className="hidden lg:block ">
          <h3 className="text-highlight">
            S <br />c <br />r <br />o <br /> l <br /> l <br />D <br /> o <br />{" "}
            w <br /> n
          </h3>
        </div>
      </div>
    </div>
 * **/