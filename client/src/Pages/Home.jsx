import Gallery from "../Components/Gallery";
import Title from "../Components/Title";

const Home = () => {
  return (
    <>
      <div className="bg-primary lg:h-screen flex items-center justify-evenly overflow-hidden ">
        <Title />
        <Gallery />
      </div>
    </>
  );
};

export default Home;
