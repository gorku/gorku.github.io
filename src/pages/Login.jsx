import { Link } from "react-router-dom"
import iconGorku from "../static/images/iconGorku.svg"

const Login = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col w-5/6">
        {/* logo section */}
        <div className="flex justify-center">
          <img src={iconGorku} alt="" />
        </div>

        {/* login section */}
        <div className="flex items-center h-2/3">
          <div className="flex flex-col w-full space-y-2">
            <p className="">Nomor Telepon</p>
            <div className="flex space-x-2 h-11">
              <div className="flex items-center justify-center w-1/5 border-[1px] border-gray-primary rounded-lg bg-gray-primary">
                <p className="justify-center ">+62</p>
              </div>
              <input
                className="w-4/5 border-[1px] border-gray-primary rounded-lg px-2 "
                placeholder="8123456789"
              />
            </div>
            <p className=" text-[#C4C4C4]">
              *masukan nomor telepon tanpa 0 diawal
            </p>
            <div className="pt-3">
              <Link to="/loginotp" >
                <div className="bg-blue-primary hover:bg-blue-primary/90 w-full text-white rounded-lg py-2 text-center">
                Selanjutnya
                </div>
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
