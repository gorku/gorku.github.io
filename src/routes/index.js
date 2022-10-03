import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router