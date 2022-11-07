import { useForm } from "react-hook-form"
import { useAuth } from "../firebase/AuthProvider"
import iconGorku from "../static/images/iconGorku.svg"
import toast from "react-hot-toast"

const Registration = () => {
  const { user } = useAuth()
  const phoneNumber = user?.phoneNumber.slice(3)

  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    if (data?.password !== data?.retypePassword) {
      toast.error("Ulangi Password Tidak Sama")

      return
    }
    console.log(data)
  }

  return (
    <form
      className="relative flex justify-center h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col overflow-y-scroll no-scrollbar w-full">
        {/* logo section */}
        <div className="flex justify-center pt-6">
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
              <input
                className="w-4/5 border-[1px] border-gray-primary rounded-lg px-2"
                value={phoneNumber}
                disabled
                {...register("phoneNumber")}
              />
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
                {...register("customerType")}
              >
                <option disabled value="">
                  {" "}
                  Pilih{" "}
                </option>
                <option value="pengguna"> Pengguna </option>
                <option value="penyewa"> Penyewa Lapangan </option>
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
            <p>Mendaftar sebagai</p>
            <div className="flex space-x-2 h-11">
              <select className="w-full border-[1px] border-gray-primary rounded-lg px-2 ">
                <option value="mercedes">Pemesan Lapangan</option>
                <option value="audi">Pemilik Lapangan</option>
              </select>
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
