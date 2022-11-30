import React, { useState } from "react"
import { Link } from "react-router-dom"
import back from "../static/svg/back.svg"

import detail from "../static/svg/detail.svg"
import gor from "../static/images/gor.png"
import api from "../helpers/api"
import { useEffect } from "react"
import { cookies } from "../helpers/cookies"
import toast from "react-hot-toast"

const RiwayatLapangan = () => {
  const userData =
    localStorage.getItem("user_data") !== null
      ? JSON.parse(localStorage.getItem("user_data"))
      : { type: "BUYER" }
  const role = userData.type

  const [gorHistory, setGorHistory] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`/history?type=${role}`, {
          headers: {
            Authorization: "Bearer " + cookies.get("token"),
          },
        })
        setGorHistory(response.data.data)
      } catch (err) {
        toast.error(err)
      }
    }

    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="flex flex-col h-full overflow-y-scroll no-scrollbar relative">
        {/* header */}
        <div className="flex flex-row justify-between space-x-4 px-4 h-12 bg-white sticky top-0 items-center z-10">
          <Link to="/">
            <img src={back} alt="" className="h-6" />
          </Link>
          <div className="text-sm font-semibold text-left w-full">
            Riwayat Pemesanan Lapangan
          </div>
          <div className="flex space-x-2.5 h-16"></div>
        </div>
        {gorHistory === null ? (
          <></>
        ) : gorHistory?.length === 0 ? (
          <div className="h-full w-full flex items-center justify-center px-4">
            <h1 className="font-bold text-xl text-center">
              Belum Ada Transaksi Masuk Ke GOR mu!
            </h1>
          </div>
        ) : (
          <div className="flex flex-col max-h-screen w-full pt-2 px-4 space-y-4">
            <div className="z-0">
              {gorHistory?.map((val, index) => {
                const gorData = JSON.parse(val?.payment_id)
                return (
                  <>
                    <div className="flex flex-col" key={index}>
                      <Link
                        to={`/detail-riwayat/${val?.id}`}
                        className="flex flex-row pb-4 space-x-4 w-full relative"
                      >
                        <div className="w-[50px] h-[50px] my-auto">
                          <img
                            src={gorData?.image_url ? gorData?.image_url : gor}
                            alt=""
                            className="w-full h-full rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex flex-col space-y-[0.5px]">
                          <p className="font-semibold text-[14px]">
                            {gorData?.name}
                          </p>
                          <p className="text-[#B0B0B0] text-[12px]">
                            Untuk Tanggal{" "}
                            <span className="font-semibold">
                              {" "}
                              {val?.date} ({val?.time})
                            </span>
                          </p>
                          <div className="w-2/3 text-center pt-0.5">
                            <p
                              className={`text-[10px] rounded-full font-semibold text-white ${
                                val?.status === "WAITING_PAYMENT"
                                  ? "bg-yellow-500"
                                  : "bg-green-700"
                              }`}
                            >
                              {" "}
                              {val?.status}
                            </p>
                          </div>
                        </div>
                        <div className="w-6 absolute inset-y-0 right-0 flex justify-center items-center pb-3">
                          <img src={detail} alt="" />
                        </div>
                      </Link>
                      <hr className="pb-4" />
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        )}{" "}
      </div>
    </>
  )
}

export default RiwayatLapangan
