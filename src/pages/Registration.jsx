import { useForm } from "react-hook-form"
import { useAuth } from "../firebase/AuthProvider"
import iconGorku from "../static/images/iconGorku.svg"
import toast from "react-hot-toast"
import api from "../helpers/api"
import { useNavigate } from "react-router-dom"
import { cookies } from "../helpers/cookies"

const Registration = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const phoneNumber = user?.phoneNumber.slice(3)

  const { register, handleSubmit } = useForm()

  const onSubmit = async data => {
    try {
      const response = await api.post("/register/user", data, {
        headers: {
          Authorization: "Bearer " + cookies.get("token"),
        },
      })

      if (response.data.status) {
        localStorage.removeItem("need_regis")
        localStorage.setItem("user_data", JSON.stringify(response.data.data))
        navigate("/")
      }
    } catch (err) {
      toast.error(err)
    }
  }

  return (
    <form
      className="relative flex justify-center h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col overflow-y-scroll no-scrollbar w-full px-4">
        {/* logo section */}
        <div className="flex justify-center pt-2">
          <img src={iconGorku} alt="" width={188} height={104} />
        </div>

        {/* login section */}
        <div className="flex items-center pt-4 pb-16">
          <div className="flex flex-col w-full space-y-1">
            <div className="flex justify-center pb-2">
              <h2 className="text-blue-primary text-xl font-semibold py-3">
                Informasi Pengguna
              </h2>
            </div>
            <p>Nomor Pengguna</p>
            <div className="flex space-x-2 h-11 mb-4">
              <div className="flex items-center justify-center w-1/5 border-[1px] border-gray-primary rounded-lg bg-gray-primary">
                <p className="justify-center ">+62</p>
              </div>
              <div className="w-4/5 border-[1px] border-gray-primary rounded-lg px-2 pt-3 bg-gray-primary">
                {phoneNumber}
              </div>
            </div>
            <br />
            <hr className="w-full" />
            <p>Nama Lengkap</p>
            <div className="flex space-x-2 h-11">
              <input
                className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
                placeholder="Isi nama lengkap anda.."
                required
                {...register("fullName")}
              />
            </div>
            <p className="pt-3">Tipe Pengguna</p>
            <div className="flex space-x-2 h-11">
              <select
                className="w-full border-[1px] border-gray-primary rounded-lg pl-2"
                required={true}
                {...register("type")}
              >
                <option disabled value="">
                  {" "}
                  Pilih{" "}
                </option>
                <option value="BUYER"> Pengguna </option>
                <option value="SELLER"> Penyewa Lapangan </option>
              </select>
            </div>
            <p className="pt-3">Email</p>
            <div className="flex space-x-2 h-11">
              <input
                className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
                placeholder="Isi email anda.."
                {...register("email")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-white max-w-full shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]">
        <div className=" w-full px-8 py-2">
          <button
            className="bg-blue-primary hover:bg-blue-primary/90 w-full text-white rounded-lg py-2 text-center"
            type={"submit"}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </form>
  )
}

export default Registration
