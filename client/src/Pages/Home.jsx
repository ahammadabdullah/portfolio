import Gallery from "../Components/Gallery";
import Title from "../Components/Title";

const Home = () => {
  return (
    <>
      <div className="bg-primary lg:h-screen flex items-center justify-evenly overflow-hidden ">
        <Title />
        <Gallery />
        <div>
          <h3 className="text-highlight">
            S <br />c <br />r <br />o <br /> l <br /> l <br />D <br /> o <br />{" "}
            w <br /> n
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
