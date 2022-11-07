import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LoginOTP from "../pages/LoginOTP";
import About from "../pages/About";
import Registration from "../pages/Registration";
import DetailLapangan from "../pages/DetailLapangan";


const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/loginotp",
    element: <LoginOTP />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/detail-lapangan",
    element: <DetailLapangan />,
  },
]);

export default router