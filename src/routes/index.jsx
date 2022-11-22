import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LoginOTP from "../pages/LoginOTP";
import About from "../pages/About";
import Registration from "../pages/Registration";
import DetailLapangan from "../pages/DetailLapangan";
import DetailRiwayat from "../pages/DetailRiwayat";
import CariLapangan from "../pages/CariLapangan";
import TambahLapangan from "../pages/TambahLapangan";
import RiwayatLapangan from "../pages/RiwayatLapangan";


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
    path: "/cari-lapangan",
    element: <CariLapangan />,
  },
  {
    path: "/detail-lapangan",
    element: <DetailLapangan />,
  },
  {
    path: "/tambah-lapangan",
    element: <TambahLapangan />,
  },
  {
    path: "/riwayat-lapangan",
    element: <RiwayatLapangan />,
  },
  {
    path: "/detail-riwayat",
    element: <DetailRiwayat />,
  },
]);

export default router