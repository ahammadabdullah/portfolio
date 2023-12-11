import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LayoutV1 = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutV1;
