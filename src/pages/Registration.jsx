import { Link } from "react-router-dom"
import iconGorku from "../static/images/iconGorku.svg"

const Registration = () => {
  return (
    <div className="relative flex justify-center h-full">
      <div className="flex flex-col w-full px-6 overflow-y-scroll no-scrollbar">
        {/* logo section */}
        <div className="flex justify-center pt-12">
          <img src={iconGorku} alt="" width={188} height={104} />
        </div>

        {/* login section */}
        <div className="flex items-center pt-6 pb-16">
          <div className="flex flex-col w-full space-y-1">
            <div className="flex justify-center pb-4">
              <h2 className="text-blue-primary text-xl font-semibold py-3">
                Informasi pengguna
              </h2>
            </div>

            <p>Nomor Pengguna</p>
            <div className="flex space-x-2 h-11">
              <div className="flex items-center justify-center w-1/5 border-[1px] border-gray-primary rounded-lg bg-gray-primary">
                <p className="justify-center ">+62</p>
              </div>
              <input
                className="w-4/5 border-[1px] border-gray-primary rounded-lg px-2 "
                placeholder="8123456789"
              />
            </div>
            <hr className="h-2 w-full py-4" />
            <p>Nama Lengkap</p>
            <div className="flex space-x-2 h-11">
              <input
                className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
                placeholder="8123456789"
              />
            </div>
            <p>Email</p>
            <div className="flex space-x-2 h-11">
              <input
                className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
                placeholder="8123456789"
              />
            </div>
            <p>Kata Sandi</p>
            <div className="flex space-x-2 h-11">
              <input
                className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
                placeholder="8123456789"
              />
            </div>
            <p>Ulangi Kata Sandi</p>
            <div className="flex space-x-2 h-11">
              <input
                className="w-full border-[1px] border-gray-primary rounded-lg px-2 "
                placeholder="8123456789"
              />
            </div>
            <p>Mendaftar sebagai</p>
            <div className="flex space-x-2 h-11">
              {/* <input
                
                placeholder="8123456789"
              /> */}
              <select name="" id="" className="w-full border-[1px] border-gray-primary rounded-lg px-2 ">
                <option value="mercedes">Pemesan Lapangan</option>
                <option value="audi">Pemilik Lapangan</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-white max-w-full shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]">
        <div className=" w-full px-6 py-2">
          <Link to="/loginotp">
            <div className="bg-blue-primary hover:bg-blue-primary/90 w-full text-white rounded-lg py-2 text-center">
              Selanjutnya
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Registration
