import Gallery from "../Components/Gallery";
import Title from "../Components/Title";
import bgBlur from "../assets/Background Blurs.png";

const Home = () => {
  return (
    <div className="bg-primary ">
      <div className=" relative lg:h-screen flex flex-col lg:flex-row  items-center justify-evenly overflow-hidden ">
        <Title />
        <Gallery />
        <div className="hidden">
          <h3 className="text-highlight">
            S <br />c <br />r <br />o <br /> l <br /> l <br />D <br /> o <br />{" "}
            w <br /> n
          </h3>
        </div>
        <div className="fixed md:absolute right-0 bottom-0 z-0 ">
          <img src={bgBlur} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
