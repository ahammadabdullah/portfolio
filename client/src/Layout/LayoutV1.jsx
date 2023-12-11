import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LayoutV1 = () => {
  return (
    <div className="bg-white flex lg:flex-row flex-col 0 justify-between items-center">
      <div>
        <Navbar />
      </div>
      <div className="flex-1 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutV1;
