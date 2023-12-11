import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import bgBlur from "../assets/Background Blurs.png";
import { Toaster } from "react-hot-toast";

const LayoutV1 = () => {
  return (
    <div className="bg-primary">
      <Toaster />
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col  justify-between items-center">
        <div className="z-30 w-full h-full flex-1 flex justify-center lg:pl-10">
          <Navbar />
        </div>
        <div className="w-full xl:flex-0 min-h-screen z-20">
          <Outlet />
        </div>
        <div className="fixed  right-0 bottom-0 top-10 z-0 ">
          <img className="min-h-screen" src={bgBlur} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LayoutV1;
