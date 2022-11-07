import React from "react"
import "../static/css/App.css"
import { cookies } from "../helpers/cookies"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import GorKu from "../static/images/iconGorku.svg"
import gorkusimple from "../static/svg/gorku-simple.svg"
import search from "../static/svg/search.svg"
import history from "../static/svg/history.svg"
import down from "../static/svg/down.svg"
import { Link } from "react-router-dom"
import sportfamilyamico from "../static/svg/sport-family-amico.svg"
import BadmintonAmico from "../static/svg/Badminton-amico.svg"

import { ReactComponent as MyLogo } from "../static/svg/card.svg"

function Home() {
  const navigate = useNavigate()
  const role = "pengguna"

  // useEffect(() => {
  //   const isAuth = cookies.get("token")

  //   if (!isAuth) {
  //     navigate("/login")
  //   }
  // })

  return (
    <>
      {role === "pemilik" ? (
        <>
          <div className="h-full flex flex-col overflow-y-hidden relative">
            {/* header */}
            <div className="flex bg-white justify-center top-0 pt-4">
              <img src={GorKu} alt="" />
            </div>

            {/* konten */}
            <div className="flex flex-col flex-grow max-h-screen my-28 absolute inset-0 justify-center items-center space-y-8 z-10">
              <div className="w-5/6 text-center font-black text-[16px]">
                Halo,{" "}
                <span className="text-blue-primary">
                  {" "}
                  Hafiz Bhadrika Alamsyah!{" "}
                </span>
                <br />
                Apa yang ingin kamu lakukan hari ini?
              </div>

              <div className="flex flex-row space-x-12">
                <Link to="/cari-lapangan" className="text-center space-y-2">
                  <div className="h-20 w-20 bg-blue-secondary flex justify-center items-center rounded-lg border-[1px] border-blue-primary">
                    <img src={search} alt="" className="w-1/2" />
                  </div>
                  <p className="w-20 text-blue-primary font-black text-[14px]">
                    Cari Lapangan
                  </p>
                </Link>
                <Link to="/riwayat-lapangan" className="text-center space-y-2">
                  <div className="h-20 w-20 bg-blue-secondary flex justify-center items-center rounded-lg border-[1px] border-blue-primary">
                    {" "}
                    <img src={history} alt="" className="w-1/2" />
                  </div>
                  <p className="w-20 text-blue-primary font-black text-[14px]">
                    Riwayat Pesanan
                  </p>
                </Link>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-[-100px] z-0 flex justify-center">
              <img src={sportfamilyamico} alt="" className="h-64" />
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="h-full flex flex-col overflow-y-hidden relative px-6">
            {/* header */}
            {/* <div className="bg-white top-0 pt-4">
              <img src={gorkusimple} alt="" />
            </div> */}
            <div className="flex bg-white justify-center top-0 pt-4">
              <img src={GorKu} alt="" />
            </div>

            {/* konten */}
            <div className="flex flex-col flex-grow max-h-screen absolute inset-x-0 bottom-[50px] justify-center items-center space-y-4 z-10">
              <div className="w-5/6 text-center font-black text-[16px]">
                Halo,{" "}
                <span className="text-blue-primary"> Andre Silalahi! </span>
                <br />
                Selamat bergabung di{" "}
                <span className="text-blue-primary"> GorKu </span>
              </div>

              <div>
                <img src={BadmintonAmico} alt="" className="h-40" />
              </div>

              <div className="w-5/6 text-center font-black text-[16px]">
                Yuk <span className="text-blue-primary"> daftarkan </span>
                lapangan olahraga yang kamu punya di bawah sini
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex justify-center">
                  <img src={down} alt="" className="animate-bounce h-8 w-8" />
                </div>

                <Link
                  to="/tambah-lapangan"
                  className="font-black text-white bg-blue-primary px-6 py-3 text-base rounded-md"
                >
                  Tambahkan Lapangan Baru
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Home
