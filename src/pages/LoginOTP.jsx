import { Link } from "react-router-dom"
import iconGorku from "../static/images/iconGorku.svg"

const LoginOTP = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col w-5/6">
        {/* logo section */}
        <div className="flex justify-center">
          <img src={iconGorku} alt="" />
        </div>

        {/* login section */}
        <div className="flex items-center h-2/3">
          <div className="flex flex-col w-full space-y-8">
            <div>
              <p className=" text-center">Masukan kode OTP</p>
              <p className=" text-center">
                OTP dikirimkan ke{" "}
                <span className="text-blue-primary"> +628*******892 </span>
              </p>
            </div>

            <div className="flex space-x-2 h-11 px-6">
              <input
                className="w-1/4 border-[1px] border-gray-primary rounded-lg px-2  text-center"
                placeholder="X"
              />
              <input
                className="w-1/4 border-[1px] border-gray-primary rounded-lg px-2  text-center"
                placeholder="X"
              />
              <input
                className="w-1/4 border-[1px] border-gray-primary rounded-lg px-2  text-center"
                placeholder="X"
              />
              <input
                className="w-1/4 border-[1px] border-gray-primary rounded-lg px-2  text-center"
                placeholder="X"
              />
            </div>

            <div className="pt-3">
              <button className="bg-blue-primary hover:bg-blue-primary/90 w-full text-white rounded-lg py-2">
                Selanjutnya
              </button>
            </div>

            <div>
              <p className=" text-center">
                belum menerima kode OTP?{" "}
                <span className="text-blue-primary hover:text-[#c4c4c4]"> Kirim lagi </span>
              </p>
              <p className="text-blue-primary text-center">00:12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginOTP
