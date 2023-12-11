import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import LayoutV1 from "../Layout/LayoutV1";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutV1 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
