import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import back from "../static/svg/back.svg"
import location from "../static/svg/location.svg"
import harga from "../static/svg/harga.png"
import copy from "../static/svg/copy.svg"
import chat from "../static/svg/chat.svg"
import gor from "../static/images/gor.png"
import toast from "react-hot-toast"
import api from "../helpers/api"
import { cookies } from "../helpers/cookies"

const DetailLapangan = () => {
  const [waktuPesan, setWaktuPesan] = useState([])

  const params = useParams()
  // params = {id: '7'}

  const notify = () => {
    setTimeout(() => {
      toast.custom(t => (
        <div className="bg-blue-primary text-white py-2 px-4 rounded-md border-[1px] border-white w-5/6">
          Link berhasil disalin!
        </div>
      ))
    }, 500)
  }

  const [active, setActive] = useState(1)
  const [timeSelected, setTimeSelected] = useState(null)

  const handleActive = async props => {
    try {
      const tanggal = changeDateString(props - 1)
      const response = await api.get(
        `/gor/time?gor_id=${params.id}&date=${tanggal}`
      )

      setTimeSelected(null)
      setActive(props)
      setWaktuPesan(response.data.data)
    } catch (err) {
      toast.error(err)
    }
  }

  const handleJam = props => {
    const waktuPesanTemp = waktuPesan.map(val => {
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

    setTimeSelected(waktuPesan[props]?.waktu)
    setWaktuPesan(waktuPesanTemp)
  }

  const [detailLapangan, setDetailLapangan] = useState(null)

  const fetchGorDetail = async () => {
    try {
      const response = await api.get(`/gor/detail?gor_id=${params.id}`)

      setDetailLapangan(response.data.data)
    } catch (err) {
      toast.error(err)
    }
  }

  const today = new Date()
  const dd = String(today.getDate()).padStart(2, "0")
  const mm = String(today.getMonth() + 1).padStart(2, "0")
  const yyyy = today.getFullYear()

  const [dateString, setDateString] = useState(dd + "/" + mm + "/" + yyyy)

  const changeDateString = addition => {
    const today = new Date()
    today.setDate(today.getDate() + addition)
    const dd = String(today.getDate()).padStart(2, "0")
    const mm = String(today.getMonth() + 1).padStart(2, "0")
    const yyyy = today.getFullYear()

    setDateString(dd + "/" + mm + "/" + yyyy)

    return dd + "/" + mm + "/" + yyyy
  }

  const fetchTodayTime = async () => {
    try {
      const response = await api.get(
        `/gor/time?gor_id=${params.id}&date=${dateString}`
      )

      setWaktuPesan(response.data.data)
    } catch (err) {
      toast.error(err)
    }
  }

  const loopDate = [1, 2, 3, 4, 5, 6, 7]

  useEffect(() => {
    fetchGorDetail()
    fetchTodayTime()
    // eslint-disable-next-line
  }, [])

  const navigate = useNavigate()

  const bookGor = async () => {
    try {
      if (timeSelected !== null) {
        const response = await api.post(
          "/order",
          {
            gor_id: params.id,
            date: dateString,
            time: timeSelected,
          },
          {
            headers: {
              Authorization: "Bearer " + cookies.get("token"),
            },
          }
        )  

        if (response.data.status) {
          toast.success("Berhasil Membuat Order")
          navigate('/riwayat-lapangan')
        } else {
          toast.error(response.data.data)
        }
      } else {
        toast.error("silahkan pilih waktu terlebih dahulu")
      }
    } catch (err) {
      toast.error(err)
    }
  }

  console.log(timeSelected)
  console.log(waktuPesan)

  return (
    <>
      {detailLapangan ? (
        <>
          <div className="flex flex-col h-full overflow-y-scroll no-scrollbar relative">
            {/* header */}
            <div className="flex flex-row justify-between space-x-4 px-4 h-12 bg-white sticky top-0 items-center">
              <Link to="/cari-lapangan">
                <img src={back} alt="" className="h-6" />
              </Link>
              <div className="text-sm font-semibold text-left w-full">
                Detail Lapangan
              </div>
              <div className="flex space-x-2.5">
                <a
                  href={`https://api.whatsapp.com/send?phone=${detailLapangan?.user_id}&text=Mau%2C%20Pesan!`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={chat} alt="" className="h-16" />
                </a>
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
                <img
                  src={
                    detailLapangan?.image_url ? detailLapangan?.image_url : gor
                  }
                  alt=""
                />
              </div>
              <div className="px-6 space-y-3 pt-6">
                <div>
                  <h1 className="text-lg font-semibold">
                    {detailLapangan?.name}
                  </h1>
                  <h3 className="text-sm text-[#B0B0B0]">
                    Lapangan {detailLapangan?.type}
                  </h3>
                </div>

                <div className="flex space-x-2 pt-1">
                  <img src={location} alt="" className="" />

                  <div className="text-justify leading-tight">
                    {detailLapangan?.address}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <img src={harga} alt="" className="w-[20px]" />

                  <div className="text-justify leading-tight my-auto">
                    Harga sewa{" "}
                    <span className="font-bold">
                      Rp {detailLapangan?.rent_fee}/jam
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 max-h-screen  w-full pt-6 pb-[36px]">
              {/* Jadwal */}
              <div className="flex flex-row w-screen overflow-x-scroll space-x-2 px-6 no-scrollbar">
                {loopDate.map((val, index) => {
                  const today = new Date()
                  today.setDate(today.getDate() + (val - 1))
                  const dd = String(today.getDate()).padStart(2, "0")

                  return (
                    <button
                      id={val}
                      key={index}
                      onClick={() => {
                        handleActive(val)
                      }}
                      className={
                        active === val
                          ? "border-[1px] px-4 h-[72px] rounded-lg bg-blue-primary text-white font-medium"
                          : "border-[1px] px-4 h-[72px] rounded-lg text-blue-primary font-medium"
                      }
                    >
                      <p className="w-10">
                        {val === 1 ? "Hari ini" : `D+${val - 1}`}
                      </p>
                      <p>{dd}</p>
                    </button>
                  )
                })}
              </div>

              {waktuPesan.length > 0 && (
                <div className="px-6 flex flex-wrap">
                  {waktuPesan?.map((val, index) => {
                    return (
                      <div className="px-[1px] py-1" key={index}>
                        <button
                          onClick={() => {
                            handleJam(val?.id)
                          }}
                          disabled={val?.isBooked === "true" ? true : false}
                          className={
                            val?.status === "true"
                              ? "border-[1px] px-4 h-[44px] rounded-lg bg-blue-primary text-white font-medium"
                              : "border-[1px] px-4 h-[44px] rounded-lg text-blue-primary font-medium" &&
                                val?.isBooked === "true"
                              ? "border-[1px] px-4 h-[44px] rounded-lg bg-[#E2E2E2] text-[#C4C4C4] font-medium disabled"
                              : "border-[1px] px-4 h-[44px] rounded-lg text-blue-primary font-medium"
                          }
                        >
                          <p className="w-10">{val?.waktu}</p>
                        </button>
                      </div>
                    )
                  })}
                </div>
              )}
              {/* Jam */}
            </div>

            {/* footer */}
            {/* <div className="bg-red-400">
            lorem
        </div> */}

            <div className="sticky bg-white inset-x-0 bottom-0 flex justify-between space-x-4 p-3">
              <a
                className="w-1/2 h-10 bg-blue-secondary rounded-lg text-blue-primary flex items-center justify-center"
                href={detailLapangan?.maps_link}
                target="_blank"
                rel="noreferrer"
              >
                Arahkan Kesini
              </a>

              <button
                className="w-1/2 h-10 bg-blue-primary rounded-lg text-white"
                onClick={bookGor}
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default DetailLapangan
