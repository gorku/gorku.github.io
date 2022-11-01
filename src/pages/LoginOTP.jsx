import {
  getAuth,
  RecaptchaVerifier,
} from "firebase/auth"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useOtp } from "../contexts/OtpProvider"
import { app } from "../firebase/firebaseClient"
import iconGorku from "../static/images/iconGorku.svg"

const LoginOTP = () => {
  // const { nomorTelpon, confirmationObject } = useOtp()
  // const navigate = useNavigate()

  // //Check if nomor telpon context is filled
  // useEffect(() => {
  //   if (nomorTelpon == null) {
  //     navigate.push("/login")
  //   }
  // }, [])

  // const auth = getAuth(app)

  // useEffect(() => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     "recaptcha-container",
  //     {
  //       size: "invisible",
  //     },
  //     auth
  //   )
  // }, [])

  // const [otp, setOtp] = useState(new Array(6).fill(""))
  // const [incorrectOtp, setIncorrectOtp] = useState(false)

  // const handleChange = (element, index) => {
  //   if (isNaN(element.value)) return false

  //   setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

  //   if (element.value === "") {
  //     if (element.previousSibling) element.previousSibling.focus()
  //   } else {
  //     if (element.nextSibling) element.nextSibling.focus()
  //   }
  // }

  // const intervalRef = useRef(null)

  // const [timer, setTimer] = useState("00:00:00")
  // const [timeIsUp, setTimeIsUp] = useState(false)

  // const getTimeRemaining = endtime => {
  //   const total = Date.parse(endtime) - Date.parse(new Date())
  //   const seconds = Math.floor((total / 1000) % 60)
  //   const minutes = Math.floor((total / 1000 / 60) % 60)
  //   return { total, minutes, seconds }
  // }

  // const startTimer = deadline => {
  //   let { total, minutes, seconds } = getTimeRemaining(deadline)
  //   if (total >= 0) {
  //     setTimer(
  //       (minutes > 9 ? minutes : "0" + minutes) +
  //         ":" +
  //         (seconds > 9 ? seconds : "0" + seconds)
  //     )
  //   } else {
  //     clearInterval(intervalRef.current)
  //     setTimeIsUp(true)
  //   }
  // }

  // const clearTimer = endtime => {
  //   setTimer("00:40")
  //   if (intervalRef.current) clearInterval(intervalRef.current)
  //   const id = setInterval(() => {
  //     startTimer(endtime)
  //   }, 1000)
  //   intervalRef.current = id
  // }

  // const getDeadlineTime = () => {
  //   let deadline = new Date()
  //   deadline.setSeconds(deadline.getSeconds() + 40)
  //   return deadline
  // }

  // useEffect(() => {
  //   clearTimer(getDeadlineTime())
  //   return () => {
  //     if (intervalRef.current) clearInterval(intervalRef.current)
  //   }
  // }, [])

  // const resendOtp = async () => {
  //   toast.loading("Mengirim Kembali OTP")
  //   if (intervalRef.current) clearInterval(intervalRef.current)
  //   clearTimer(getDeadlineTime())
  //   setTimeIsUp(false)
  //   try {
  //     const applicationVerifier = window.recaptchaVerifier
  //     await signInWithPhoneNumber(auth, nomorTelpon, applicationVerifier)
  //     toast.dismiss()
  //     toast.success(`OTP Telah Dikirimkan ke ${nomorTelpon}`)
  //   } catch {
  //     toast.dismiss()
  //     toast.error("Terjadi Kesalahan Pada Jaringan")
  //   }
  // }

  // const onVerifySmsCode = async () => {
  //   toast.loading("Sedang Verifikasi SMS")
  //   try {
  //     const code = otp.join("")
  //     await confirmationObject.confirm(code)
  //     toast.dismiss()
  //     toast.success("Kode OTP Terverifikasi")
  //     navigate.push("/verifikasi/berhasil")
  //   } catch {
  //     toast.dismiss()
  //     setIncorrectOtp(true)
  //   }
  // }

  const { confirmationObject, setConfirmationObject, setNomorTelpon } = useOtp()
  const navigate = useNavigate()

  const auth = getAuth(app)

  const { register, handleSubmit } = useForm()

  const onVerifySmsCode = async data => {
    toast.loading("Sedang Verifikasi SMS")
    const otpNumber =
      data.otpDigit1 +
      data.otpDigit2 +
      data.otpDigit3 +
      data.otpDigit4 +
      data.otpDigit5 +
      data.otpDigit6
    try {
      // const code = otp.join("")
      await confirmationObject.confirm(otpNumber)
      toast.dismiss()
      toast.success("Kode OTP Terverifikasi")

      setConfirmationObject(null)
      setNomorTelpon(null)
      navigate("/")
    } catch {
      toast.dismiss()
      // setIncorrectOtp(true)
    }
  }

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
          <div className="flex items-center h-2/3">
            <form
              className="flex flex-col w-full space-y-8"
              onSubmit={handleSubmit(onVerifySmsCode)}
            >
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
                  type={"number"}
                  maxLength={1}
                  required
                  {...register("otpDigit1")}
                />
                <input
                  className="w-1/4 border-[1px] border-gray-primary rounded-lg px-2  text-center"
                  placeholder="X"
                  type={"number"}
                  maxLength={1}
                  required
                  {...register("otpDigit2")}
                />
                <input
                  className="w-1/4 border-[1px] border-gray-primary rounded-lg px-2  text-center"
                  placeholder="X"
                  type={"number"}
                  maxLength={1}
                  required
                  {...register("otpDigit3")}
                />
                <input
                  className="w-1/4 border-[1px] border-gray-primary rounded-lg px-2  text-center"
                  placeholder="X"
                  type={"number"}
                  maxLength={1}
                  required
                  {...register("otpDigit4")}
                />
                <input
                  className="w-1/4 border-[1px] border-gray-primary rounded-lg px-2  text-center"
                  placeholder="X"
                  type={"number"}
                  maxLength={1}
                  required
                  {...register("otpDigit5")}
                />
                <input
                  className="w-1/4 border-[1px] border-gray-primary rounded-lg px-2  text-center"
                  placeholder="X"
                  type={"number"}
                  maxLength={1}
                  required
                  {...register("otpDigit6")}
                />
              </div>

              <div className="pt-3">
                <button
                  className="bg-blue-primary hover:bg-blue-primary/90 w-full text-white rounded-lg py-2"
                  type="submit"
                >
                  Selanjutnya
                </button>
              </div>

              <div>
                <p className=" text-center">
                  belum menerima kode OTP?{" "}
                  <span className="text-blue-primary hover:text-[#c4c4c4]">
                    {" "}
                    Kirim lagi{" "}
                  </span>
                </p>
                <p className="text-blue-primary text-center">00:12</p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="recaptcha-container"></div>
    </>
  )
}

export default LoginOTP
