import React, { useState } from "react"
import { Link } from "react-router-dom"
import back from "../static/svg/back.svg"
import location from "../static/svg/location.svg"
import search from "../static/svg/search.svg"
import detail from "../static/svg/detail.svg"
import gor from "../static/images/gor.png"

const CariLapagan = () => {
  const [daftarLapangan, setDaftarLapangan] = useState([
    {
      id: 1,
      namaLapangan: "Gor Bulutangkis Aufa",
      jenisLapangan: "Lapangan Bulutangkis",
      harga: "75.000",
      location: "0.7",
    },
    {
      id: 2,
      namaLapangan: "Lapangan Basket Jatijajar",
      jenisLapangan: "Lapangan Basket",
      harga: "50.000",
      location: "0.7",
    },
    {
      id: 3,
      namaLapangan: "Lapangan Bola GS Sport",
      jenisLapangan: "Lapangan Bola",
      harga: "100.000",
      location: "0.7",
    },
    {
      id: 4,
      namaLapangan: "Gor Kukusan",
      jenisLapangan: "Lapangan Bulutangkis",
      harga: "45.000",
      location: "0.7",
    },
    {
      id: 5,
      namaLapangan: "Gor Kukusan",
      jenisLapangan: "Lapangan Bulutangkis",
      harga: "45.000",
      location: "0.7",
    },
    {
      id: 6,
      namaLapangan: "Gor Kukusan",
      jenisLapangan: "Lapangan Bulutangkis",
      harga: "45.000",
      location: "0.7",
    },
    {
      id: 7,
      namaLapangan: "Gor Kukusan",
      jenisLapangan: "Lapangan Bulutangkis",
      harga: "45.000",
      location: "0.7",
    },
  ])

  const [isLocation, setIsLocation] = useState(false)
  const [lat, setLat] = useState(-6.175859)
  const [lng, setLng] = useState(106.827129)
  const [status, setStatus] = useState(null)

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser")
    } else {
      setStatus("Locating...")

      navigator.geolocation.getCurrentPosition(
        position => {
          setStatus(null)
          setLat(position.coords.latitude)
          setLng(position.coords.longitude)
        },
        () => {
          setStatus("Unable to retrieve your location")
        }
      )
    }
  }

  return (
    <>
      <div className="flex flex-col h-full overflow-y-scroll no-scrollbar relative">
        {/* header */}
        <div className="flex flex-row justify-between space-x-4 px-4 h-12 bg-white sticky top-0 items-center z-10">
          <Link to="/">
            <img src={back} alt="" className="h-6" />
          </Link>
          <div className="text-sm font-semibold text-left w-full">
            Cari Lapangan
          </div>
          <div className="flex space-x-2.5 h-16"></div>
        </div>

        {/* konten */}
        <div className="flex flex-col max-h-screen w-full pt-2 px-4 space-y-4">
          <div>
            <p className="text-[#C4C4C4] text-xs pb-[0.5px]">Lokasi Sekarang</p>
            {isLocation ? (
              <>
                {" "}
                <div className="flex space-x-2 pt-1">
                  <img src={location} alt="" className="" />

                  <div className="text-justify leading-tight my-auto">
                    Woodland Park Residence
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col w-full h-[50px]">
                  <div
                    onClick={getLocation}
                    className="px-2 py-2 rounded-lg bg-blue-primary text-white text-center font-bold"
                  >
                    Gunakan Lokasi Saat Ini
                  </div>
                </div>
              </>
            )}
          </div>
          {/* search */}
          <div className="flex flex-row space-x-2 px-2 py-2 shadow box-border focus:outline-none bg-white rounded-lg h-12 text-sm border-[1px] border-[#E2E2E2]">
            <img src={search} alt="" className="p-1" />
            <input
              className="ml-2 text-xs w-full h-full rounded-lg"
              placeholder="Cari lapangan bulutangkis.."
              style={{
                outline: "none",
              }}
            />
          </div>

          <div className="z-0">
            {daftarLapangan.length === 0 ? (
              <>
              <div className="pt-12 text-center font-bold text-base">
              <p>Belum Terdapat Lapangan Yang Tersedia</p>
              </div>
                
              </>
            ) : (
              <>
                {" "}
                {daftarLapangan?.map(val => {
                  return (
                    <>
                      <div className="flex flex-col">
                        <Link
                          to="/detail-lapangan"
                          className="flex flex-row pb-4 space-x-4 w-full relative"
                        >
                          <div className="w-[50px] h-[50px] my-auto">
                            <img
                              src={gor}
                              alt=""
                              className="w-full h-full rounded-lg"
                            />
                          </div>
                          <div className="flex flex-col space-y-[0.5px]">
                            <p className="font-semibold text-[14px]">
                              {val?.namaLapangan}
                            </p>
                            <p className="text-[#B0B0B0] text-[12px]">
                              {val?.jenisLapangan}
                            </p>
                            <p className="text-[12px]">
                              Harga: Rp{val?.harga}
                              {",-/Jam | "} {val?.location}
                            </p>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CariLapagan
