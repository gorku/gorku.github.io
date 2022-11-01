// import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import iconGorku from "../static/images/iconGorku.svg"
import { useNavigate } from "react-router-dom"
import { app } from "../firebase/firebaseClient"
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth"
import { useEffect } from "react"
import { useOtp } from "../contexts/OtpProvider"
import toast from "react-hot-toast"

const Login = () => {
  const navigate = useNavigate()
  const auth = getAuth(app)

  const { setConfirmationObject, setNomorTelpon } = useOtp()

  const onSubmit = async data => {
    // data = {phoneNumber: '123456'}
    toast.loading("Memproses Login Anda")

    // this use react-phone-number-input library
    // if (isValidPhoneNumber(notelp) == false) {
    //   toast.dismiss()
    //   toast.error(`No Telp Terlalu Panjang / Tidak Valid`)
    //   return
    // }

    const applicationVerifier = window.recaptchaVerifier

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        "+" + data.phoneNumber,
        applicationVerifier
      )
      setConfirmationObject(confirmationResult)
      setNomorTelpon(data.phoneNumber)
      toast.dismiss()
      toast.success(`OTP Telah Dikirimkan ke ${data.phoneNumber}`)

      navigate("/loginotp")
    } catch {
      toast.dismiss()
      toast.error(
        `Request Dengan Nomor Telpon ${data.phoneNumber} terlalu banyak, coba sesaat lagi`
      )
    }
  }

  const { register, handleSubmit } = useForm()
  // const onSubmit = data => {
  //   console.log(data)
  //   navigate('/loginotp')
  // }

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      },
      auth
    )
  }, [auth])

  return (
    <>
      <div className="flex justify-center h-full">
        <div className="flex flex-col w-5/6">
          {/* logo section */}
          <div className="flex justify-center">
            <img src={iconGorku} alt="" />
          </div>

          {/* login section */}
          <form
            className="flex items-center h-2/3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col w-full space-y-2">
              <p className="">Nomor Telepon</p>
              <div className="flex space-x-2 h-11">
                <div className="flex items-center justify-center w-1/5 border-[1px] border-gray-primary rounded-lg bg-gray-primary">
                  <p className="justify-center ">+62</p>
                </div>
                <input
                  className="w-4/5 border-[1px] border-gray-primary rounded-lg px-2 "
                  placeholder="8123456789"
                  type={"number"}
                  {...register("phoneNumber")}
                />
              </div>
              <p className=" text-[#C4C4C4]">
                *masukan nomor telepon tanpa 0 diawal
              </p>
              <div className="pt-3">
                <button
                  className="bg-blue-primary hover:bg-blue-primary/90 w-full text-white rounded-lg py-2 text-center"
                  type={"submit"}
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div id="recaptcha-container"></div>
    </>
  )
}

export default Login
