import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import back from "../static/svg/back.svg"
import location from "../static/svg/location.svg"
import gor from "../static/images/gor.png"
import toast from "react-hot-toast"
import api from "../helpers/api"
import { useEffect } from "react"
import { cookies } from "../helpers/cookies"

const DetailRiwayat = () => {
  // params = {id: '7'}
  const params = useParams()

  const [detailTransaction, setDetailTransaction] = useState(null)
  const [detailGor, setDetailGor] = useState(null)

  const finishPayment = async () => {
    try {
      toast.loading("sedang membayar order anda")
      const response = await api.post(
        "/finishPayment",
        {
          order_id: parseInt(params.id),
        },
        {
          headers: {
            Authorization: "Bearer " + cookies.get("token"),
          },
        }
      )

      if (response.data.status) {
        toast.dismiss()
        window.location.reload()
      } else {
        toast.error(response.data.data)
      }
    } catch (err) {
      toast.error(err)
    }
  }

  const userData = JSON.parse(localStorage.getItem("user_data"))

  useEffect(() => {
    async function getData() {
      const resp = await api.get(`/transaction/detail?id=${params.id}`)
      setDetailGor(JSON.parse(resp.data.data.payment_id))
      setDetailTransaction(resp.data.data)
    }

    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="flex flex-col h-full overflow-y-scroll no-scrollbar relative">
        {/* header */}
        <div className="flex flex-row justify-between space-x-4 px-4 h-12 bg-white sticky top-0 items-center">
          <Link to="/riwayat-lapangan">
            <img src={back} alt="" className="h-6" />
          </Link>
          <div className="text-sm font-semibold text-left w-full py-6">
            Detail Riwayat
          </div>
        </div>

        {detailTransaction !== null ? (
          <>
            {/* konten */}
            <div className="flex flex-col space-y-6">
              <div className="h-48">
                <img
                  src={detailGor?.image_url ? detailGor?.image_url : gor}
                  alt=""
                />
              </div>
              <div className="px-6 space-y-3">
                <div className="pt-6">
                  <h1 className="text-lg font-semibold">{detailGor?.name}</h1>
                  <h3 className="text-sm text-[#B0B0B0]">
                    Lapangan {detailGor?.type}
                  </h3>
                </div>

                <div className="flex space-x-2 pt-1">
                  <img src={location} alt="" className="" />

                  <div className="text-justify leading-tight">
                    {detailGor?.address}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 px-6 w-full pt-5 pb-[36px]">
              <p className="text-sm font-semibold">Detail Transaksi</p>
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between">
                  <p>ID Transaksi</p>
                  <p className="text-[#333333] font-semibold">
                    GKU{detailTransaction?.id}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Untuk Tanggal</p>
                  <p className="text-[#333333] font-semibold">
                    {detailTransaction?.date} ({detailTransaction?.time})
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Nomor Penyewa</p>
                  <p className="text-[#333333] font-semibold">
                    {detailTransaction?.user_id}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Status Pembayaran</p>
                  <p
                    className={`text-[10px] rounded-full px-3 pt-[0.5px] font-semibold text-white ${
                      detailTransaction?.status === "WAITING_PAYMENT"
                        ? "bg-yellow-500"
                        : "bg-green-700"
                    }`}
                  >
                    {" "}
                    {detailTransaction?.status}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Nominal</p>
                  <p className="text-[#333333] font-semibold">
                    Rp{detailGor?.rent_fee},-
                  </p>
                </div>
              </div>
            </div>

            <div className="sticky bg-white inset-x-0 bottom-0 flex justify-between space-x-4 p-3">
              <a
                className={`h-10 bg-blue-secondary rounded-lg text-blue-primary flex items-center justify-center ${
                  userData?.phone_number !== detailGor?.user_id
                    ? "w-1/2"
                    : "w-full"
                }`}
                href={detailGor?.maps_link}
                target="_blank"
                rel="noreferrer"
              >
                Arahkan Kesini
              </a>
              {userData?.phone_number !== detailGor?.user_id && (
                <button
                  className={`w-1/2 h-10 bg-blue-primary rounded-lg text-white ${
                    detailTransaction?.status === "WAITING_PAYMENT"
                      ? "bg-blue-primary"
                      : "bg-gray-300"
                  }`}
                  disabled={
                    detailTransaction?.status === "WAITING_PAYMENT"
                      ? false
                      : true
                  }
                  onClick={() => {
                    finishPayment()
                  }}
                >
                  Bayar Sekarang
                </button>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default DetailRiwayat
