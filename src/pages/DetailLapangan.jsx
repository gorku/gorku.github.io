import React, { useState } from "react"
import { Link } from "react-router-dom"
import back from "../static/svg/back.svg"
import location from "../static/svg/location.svg"
import copy from "../static/svg/copy.svg"
import chat from "../static/svg/chat.svg"
import gor from "../static/images/gor.png"
import toast, { Toaster } from "react-hot-toast"

const DetailLapangan = () => {
  const [waktuPesan, setWaktuPesan] = useState([
    {
      id: 0,
      waktu: "08:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 1,
      waktu: "09:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 2,
      waktu: "10:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 3,
      waktu: "11:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 4,
      waktu: "12:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 5,
      waktu: "13:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 6,
      waktu: "14:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 7,
      waktu: "15:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 8,
      waktu: "16:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 9,
      waktu: "17:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 10,
      waktu: "18:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 11,
      waktu: "19:00",
      status: "false",
      isBooked: "false",
    },
    {
      id: 12,
      waktu: "20:00",
      status: "false",
      isBooked: "false",
    },
    { id: 13, waktu: "21:00", status: "false", isBooked: "false" },
    { id: 14, waktu: "22:00", status: "false", isBooked: "false" },
  ])

  const notify = () => {
    setTimeout(() => {
      toast.custom(t => (
        <div className="bg-blue-primary text-white py-2 px-4 rounded-md border-[1px] border-white w-5/6">
          Link berhasil disalin!
        </div>
      ))
    }, 500)
  }

  const [active, setActive] = useState("")

  const handleActive = props => {
    setActive(props)
  }

  let i = 0
  const handleJam = props => {
    const waktuPesanTemp = waktuPesan.map((val, index) => {
      if (val.id === props) {
        if (val.status === "false") {
          val.status = "true"
        } else {
          val.status = "false"
        }
      } else {
        val.status = "false"
      }
      return val
    })

    setWaktuPesan(waktuPesanTemp)
    // setWaktuPesan(waktuPesan)
  }

  return (
    <>
      <div className="flex flex-col h-full overflow-y-scroll no-scrollbar relative">
        {/* header */}
        <div className="flex flex-row justify-between space-x-4 px-4 h-12 bg-white sticky top-0 items-center">
          <Link to="/">
            <img src={back} alt="" className="h-6" />
          </Link>
          <div className="text-sm font-semibold text-left w-full">
            Detail Lapangan
          </div>
          <div className="flex space-x-2.5">
            <button>
              <img src={chat} alt="" className="h-16" />
            </button>
            <button
              onClick={() => {
                navigator.clipboard
                  .writeText(document.location.href)
                  .then(notify("as"))
              }}
            >
              <img src={copy} alt="" className="h-8" />
            </button>
          </div>
        </div>

        {/* konten */}
        <div className="flex flex-col space-y-6">
          <div className="h-48">
            <img src={gor} alt="" />
          </div>
          <div className="px-6 space-y-3">
            <div>
              <h1 className="text-lg font-semibold">Lapangan Tunas Bogor</h1>
              <h3 className="text-sm text-[#B0B0B0]">lapangan bulutangkis</h3>
            </div>

            <div className="flex space-x-2 pt-1">
              <img src={location} alt="" className="" />

              <div className="text-justify leading-tight">
                Jalan H.Mandor Salim No. 3A 6 1, RT.2, Srengseng, Kembangan,
                West Jakarta City, Jakarta 11630
              </div>
            </div>

            <div className="flex space-x-2">
              <img src={location} alt="" className="" />

              <div className="text-justify leading-tight my-auto">
                Harga sewa Rp 60.000,00/jam
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 max-h-screen  w-full pt-6 pb-[72px]">
          {/* Jadwal */}
          <div className="flex flex-row w-screen overflow-x-scroll space-x-4 px-6 no-scrollbar">
            <button
              id={1}
              onClick={() => {
                handleActive(1)
              }}
              className={
                active === 1
                  ? "border-[1px] px-4 h-[72px] rounded-lg bg-blue-primary text-white font-medium"
                  : "border-[1px] px-4 h-[72px] rounded-lg text-blue-primary font-medium"
              }
            >
              <p className="w-10">Hari ini</p>
              <p>10</p>
            </button>
            <button
              id={2}
              onClick={() => {
                handleActive(2)
              }}
              className={
                active === 2
                  ? "border-[1px] px-4 h-[72px] rounded-lg bg-blue-primary text-white font-medium"
                  : "border-[1px] px-4 h-[72px] rounded-lg text-blue-primary font-medium"
              }
            >
              <p className="w-10">Hari ini</p>
              <p>10</p>
            </button>
            <button
              id={3}
              onClick={() => {
                handleActive(3)
              }}
              className={
                active === 3
                  ? "border-[1px] px-4 h-[72px] rounded-lg bg-blue-primary text-white font-medium"
                  : "border-[1px] px-4 h-[72px] rounded-lg text-blue-primary font-medium"
              }
            >
              <p className="w-10">Hari ini</p>
              <p>10</p>
            </button>
            <button
              id={4}
              onClick={() => {
                handleActive(4)
              }}
              className={
                active === 4
                  ? "border-[1px] px-4 h-[72px] rounded-lg bg-blue-primary text-white font-medium"
                  : "border-[1px] px-4 h-[72px] rounded-lg text-blue-primary font-medium"
              }
            >
              <p className="w-10">Hari ini</p>
              <p>10</p>
            </button>
            <button
              id={5}
              onClick={() => {
                handleActive(5)
              }}
              className={
                active === 5
                  ? "border-[1px] px-4 h-[72px] rounded-lg bg-blue-primary text-white font-medium"
                  : "border-[1px] px-4 h-[72px] rounded-lg text-blue-primary font-medium"
              }
            >
              <p className="w-10">Hari ini</p>
              <p>10</p>
            </button>
            <button
              id={6}
              onClick={() => {
                handleActive(6)
              }}
              className={
                active === 6
                  ? "border-[1px] px-4 h-[72px] rounded-lg bg-blue-primary text-white font-medium"
                  : "border-[1px] px-4 h-[72px] rounded-lg text-blue-primary font-medium"
              }
            >
              <p className="w-10">Hari ini</p>
              <p>10</p>
            </button>
            <button
              id={7}
              onClick={() => {
                handleActive(7)
              }}
              className={
                active === 7
                  ? "border-[1px] px-4 h-[72px] rounded-lg bg-blue-primary text-white font-medium"
                  : "border-[1px] px-4 h-[72px] rounded-lg text-blue-primary font-medium"
              }
            >
              <p className="w-10">Hari ini</p>
              <p>10</p>
            </button>
          </div>

          {/* Jam */}
          <div className="px-6 flex flex-wrap">
            {waktuPesan?.map(val => {
              return (
                <>
                  <div className="px-[1px] py-1">
                    <button
                      onClick={() => {
                        handleJam(val?.id)
                      }}
                      className={
                        val?.status === "true"
                          ? "border-[1px] px-4 h-[44px] rounded-lg bg-blue-primary text-white font-medium"
                          : "border-[1px] px-4 h-[44px] rounded-lg text-blue-primary font-medium"
                      }
                    >
                      <p className="w-10">{val?.waktu}</p>
                    </button>
                  </div>
                </>
              )
            })}

            {/* <button
              id={1}
              onClick={() => {
                handleActive(1)
              }}
              className={
                active === 1
                  ? "border-[1px] px-4 h-[72px] rounded-lg bg-blue-primary text-white font-medium"
                  : "border-[1px] px-4 h-[44px] rounded-lg text-blue-primary font-medium"
              }
            >
              <p className="w-10">09:00</p>
            </button> */}
          </div>
        </div>

        {/* footer */}
        {/* <div className="bg-red-400">
            lorem
        </div> */}

        <div class="sticky bg-white inset-x-0 bottom-0 flex justify-between space-x-4 p-3">
          <button className="w-1/2 h-10 bg-blue-secondary rounded-lg text-blue-primary">
            Arahkan Kesini
          </button>
          <button className="w-1/2 h-10 bg-blue-primary rounded-lg text-white">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </>
  )
}

export default DetailLapangan
