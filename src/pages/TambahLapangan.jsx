import React, { useState } from "react"
import { Link } from "react-router-dom"
import back from "../static/svg/back.svg"
import cameraplus from "../static/svg/camera-plus.svg"
import { useForm } from "react-hook-form"

const TambahLapangan = () => {
  const { register, handleSubmit } = useForm()

  const handleFile = props => {
    let input = document.getElementById("inputTag")
    let imageName = document.getElementById("imageName")

    imageName.innerText = props.name
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
            Tambah Lapangan
          </div>
          <div className="flex space-x-2.5 h-16"></div>
        </div>

        {/* konten */}
        <div className="flex flex-col flex-grow max-h-screen w-full pt-2 pb-6 px-4 space-y-1.5">
          <p>Gambar Lapangan</p>
          {/* <div
            className="border-2 border-blue-primary rounded-md h-36 w-full bg-no-repeat border-dashed text-red-200"
            style={{
              backgroundImage: `url(${cameraplus})`,
              backgroundPosition: "center",
              float: "left",
              cursor: "pointer",
            }}
          >
            <input id="hide_file" type="file" className="text-6xl absolute inset-x-0" />
          </div> */}
          <div
            className="border-2 border-blue-primary rounded-md h-36 w-full bg-no-repeat border-dashed text-red-200 text-center"
            style={{
              backgroundImage: `url(${cameraplus})`,
              backgroundPosition: "center",
            }}
          >
            <label for="inputTag" className="hide_file bg-blue-200" >
              <input
                id="inputTag"
                type="file"
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
            <span id="imageName" className="text-blue-primary">
              
            </span>
          </p>

          <p>Jenis Lapangan</p>
          <div className="flex space-x-2 h-11">
            <select
              className="w-full border-[1px] border-gray-primary rounded-lg pl-2"
              required={true}
              {...register("lapanganType")}
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
              {...register("namaLapangan")}
            />
          </div>

          <p>Alamat</p>
          <div className="flex space-x-2 h-11">
            <input
              className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
              placeholder="Jalan ..."
              required
              {...register("alamat")}
            />
          </div>

          <p>Harga Sewa</p>
          <div className="flex space-x-2 h-11">
            <input
              className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
              placeholder="75.000"
              required
              {...register("hargaSewa")}
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
        <div class="sticky bg-white inset-x-0 bottom-0 flex justify-between space-x-4 p-3 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]">
          <button className="w-full h-10 bg-blue-primary rounded-lg text-white font-semibold">
            Tambah Lapangan
          </button>
        </div>
      </div>
    </>
  )
}

export default TambahLapangan
