import React, { useState } from "react"
import { Link } from "react-router-dom"
import back from "../static/svg/back.svg"
import location from "../static/svg/location.svg"

import gor from "../static/images/gor.png"
import toast from "react-hot-toast"
import api from "../helpers/api"
import { useEffect } from "react"

const DetailRiwayat = () => {
  const [waktuPesan, setWaktuPesan] = useState([
    {
      id: 0,
      waktu: "08:00",
      status: "false",
      isBooked: "true",
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
      isBooked: "true",
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
      isBooked: "true",
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

  useEffect(() => {
    async function getData() {
    const data = 1
      const resp = await api.get('/history/gor',data)
      console.log(resp)
    }

    getData()
  }, [])

  const no = "6281233110190"

  return (
    <>
      <div className="flex flex-col h-full overflow-y-scroll no-scrollbar relative">
        {/* header */}
        <div className="flex flex-row justify-between space-x-4 px-4 h-12 bg-white sticky top-0 items-center">
          <Link to="/riwayat-lapangan">
            <img src={back} alt="" className="h-6" />
          </Link>
          <div className="text-sm font-semibold text-left w-full">
            Detail Riwayat
          </div>
          {/* <div className="flex space-x-2.5">
            <a href={`https://api.whatsapp.com/send?phone=${no}&text=Mau%2C%20Pesan!`} target="_blank">
              <img src={chat} alt="" className="h-16" />
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(document.location.href).then(notify("as"))
              }}
            >
              <img src={copy} alt="" className="h-8" />
            </button>
          </div> */}
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
          </div>
        </div>

        <div className="flex flex-col space-y-4 px-6 w-full pt-5 pb-[36px]">
          <p className="text-sm font-semibold">Detail Transaksi</p>
          <div className="flex flex-col space-y-1">
            <div className="flex justify-between">
              <p>ID Transaksi</p>
              <p className="text-[#333333] font-semibold">GKU27102022</p>
            </div>
            <div className="flex justify-between">
              <p>Untuk Tanggal</p>
              <p className="text-[#333333] font-semibold">
                27 Okt 2022 (10.00-12.00)
              </p>
            </div>
            <div className="flex justify-between">
              <p>Nama Penyewa</p>
              <p className="text-[#333333] font-semibold">Ahmad</p>
            </div>
            <div className="flex justify-between">
              <p>Status Pembayaran</p>
              <p className="text-[10px] bg-green-700 rounded-full px-3 pt-[0.5px] font-semibold text-white">
                {" "}
                Lunas
              </p>
            </div>
            <div className="flex justify-between">
              <p>Nominal</p>
              <p className="text-[#333333] font-semibold">Rp120.000,-</p>
            </div>
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
            Bayar Sekarang
          </button>
        </div>
        {/* <div class="sticky bg-white inset-x-0 bottom-0 flex justify-between space-x-4 p-3">
          <button className="w-full h-10 bg-blue-primary rounded-lg text-white">
            Arahkan Kesini
          </button>
        </div> */}
        {/* <div class="sticky bg-white inset-x-0 bottom-0 flex justify-between space-x-4 p-3">
          <button className="w-full h-10 bg-blue-secondary rounded-lg text-blue-primary">
            Pesan Lapangan Ini Lagi
          </button>
        </div> */}
      </div>
    </>
  )
}

export default DetailRiwayat

{
  /* <div class="sticky bg-white inset-x-0 bottom-0 flex justify-between space-x-4 p-3">
<button className="w-1/2 h-10 bg-blue-secondary rounded-lg text-blue-primary">
  Arahkan Kesini
</button>
<button className="w-1/2 h-10 bg-blue-primary rounded-lg text-white">
  Bayar Sekarang
</button>
</div> */
}
