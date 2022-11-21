import React, { useState } from "react"
import { Link } from "react-router-dom"
import back from "../static/svg/back.svg"
import cameraplus from "../static/svg/camera-plus.svg"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api"
import { v4 as uuidv4 } from "uuid"
import toast from "react-hot-toast"
import {
  getImageStorageUrl,
  getUploadImageUrl,
} from "../constants/cloudStorage"
import { getGmapsPlaceUrl } from "../helpers/gmaps"
import api from "../helpers/api"

const TambahLapangan = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = async data => {
    data.maps_link = getGmapsPlaceUrl(lat, lng)
    data.image_url = foto
    data.lat = lat.toString()
    data.long = lng.toString()
    data.rent_fee = parseInt(data.rent_fee)
    const response = await api.post("/register/gor", data)
    
    if (response.data.status === true) {
      navigate("/")
    } else {
      toast.error(response)
    }
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  // eslint-disable-next-line
  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [lat, setLat] = useState(-6.175859)
  const [lng, setLng] = useState(106.827129)
  // eslint-disable-next-line
  const [status, setStatus] = useState(null)
  const [foto, setFoto] = useState(null)

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

  const handleFile = async e => {
    const photoFile = e.target.files[0]
    const contentType = e.target.files[0].type
    const uid = uuidv4()
    const imageType = contentType.split("/")[1]
    const UPLOAD_IMAGE_URL = getUploadImageUrl(uid, imageType)
    const SUCCESS_UPLOAD_IMAGE_URL = getImageStorageUrl(uid, imageType)
    try {
      toast.loading("Sedang Mengupload Fotomu")
      await fetch(UPLOAD_IMAGE_URL, {
        method: "POST",
        headers: {
          "Content-Type": contentType,
        },
        body: photoFile,
      })
      toast.dismiss()
      toast.success("Upload Sukses")
      setFoto(SUCCESS_UPLOAD_IMAGE_URL)
    } catch (error) {
      toast.error(
        "Terdapat kesalahan saat upload fotomu, periksa jaringanmu ya"
      )
    }
  }

  if (!isLoaded) {
    return <></>
  }

  return (
    <>
      <form
        className="h-full overflow-y-scroll relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* header */}
        <div className="flex flex-row justify-between space-x-4 px-4 h-12 bg-white sticky top-0 items-center z-10">
          <Link to="/">
            <img src={back} alt="" className="h-6" />
          </Link>
          <div className="text-sm font-semibold text-left w-full">
            Tambah Lapangan
          </div>
          <div className="flex space-x-2.5 h-16"></div>
        </div>

        {/* konten */}
        <div className="flex flex-col w-full pt-2 pb-6 px-4 space-y-1.5">
          <p>Gambar Lapangan</p>
          <div
            className="border-2 border-blue-primary rounded-md h-36 w-full bg-no-repeat border-dashed text-red-200 text-center"
            style={{
              backgroundImage:
                foto == null ? `url(${cameraplus})` : `url(${foto})`,
              backgroundPosition: "center",
            }}
          >
            <label htmlFor="inputTag" className="hide_file bg-blue-200">
              <input
                id="inputTag"
                type="file"
                onInput={handleFile}
                accept="image/png, image/jpeg"
                style={{
                  display: "none",
                }}
                onChange={() => {
                  handleFile(
                    document.querySelector("input[type=file]").files[0]
                  )
                }}
              />
            </label>
          </div>
          <p>
            <span id="imageName" className="text-blue-primary"></span>
          </p>

          <div className="flex flex-col w-full pt-2 pb-6 space-y-1.5 h-[250px]">
            <p>Lokasi Lapangan (Gerakkan Marker)</p>
            <GoogleMap
              center={{ lat: lat, lng: lng }}
              zoom={15}
              className={"map"}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={map => setMap(map)}
            >
              <MarkerF
                position={{ lat: lat, lng: lng }}
                draggable={true}
                onDragEnd={val => {
                  setLat(val.latLng.lat())
                  setLng(val.latLng.lng())
                }}
              />
            </GoogleMap>
          </div>

          <div className="flex flex-col w-full h-[50px]">
            <div
              onClick={getLocation}
              className="px-2 py-2 rounded-lg bg-blue-primary text-white text-center font-bold"
            >
              Gunakan Lokasi Saat Ini
            </div>
          </div>

          <p>Jenis Lapangan</p>
          <div className="flex space-x-2 h-11">
            <select
              className="w-full border-[1px] border-gray-primary rounded-lg pl-2"
              required={true}
              {...register("type")}
            >
              <option hidden value="" className="text-[#c4c4c4]">
                {" "}
                Pilih satu jenis lapangan{" "}
              </option>
              <option value="Badminton"> Lapangan Badminton</option>
              <option value="Tennis"> Lapangan Tennis</option>
              <option value="Basket"> Lapangan Basket</option>
              <option value="Futsal"> Lapangan Futsal</option>
            </select>
          </div>

          <p>Nama Lapangan</p>
          <div className="flex space-x-2 h-11">
            <input
              className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
              placeholder="Lapangan ..."
              required
              {...register("name")}
            />
          </div>

          <p>Alamat</p>
          <div className="flex space-x-2 h-11">
            <input
              className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
              placeholder="Jalan ..."
              required
              {...register("address")}
            />
          </div>

          <p>Harga Sewa</p>
          <div className="flex space-x-2 h-11">
            <input
              className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
              placeholder="75.000"
              required
              {...register("rent_fee")}
            />
          </div>

          <p className="text-[10px]">
            <span className="font-bold">
              Catatan: <br />
            </span>
            Untuk saat ini, jam buka lapangan adalah jam 8 pagi hingga 10 malam
          </p>
        </div>

        {/* footer */}
        <div className="sticky bg-white inset-x-0 bottom-0 flex justify-between space-x-4 p-3 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]">
          <button className="w-full h-10 bg-blue-primary rounded-lg text-white font-semibold">
            Tambah Lapangan
          </button>
        </div>
      </form>
    </>
  )
}

export default TambahLapangan
