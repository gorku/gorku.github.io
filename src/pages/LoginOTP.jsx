import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { useEffect, useState, useRef } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useOtp } from "../contexts/OtpProvider"
import { app } from "../firebase/firebaseClient"
import api from "../helpers/api"
import iconGorku from "../static/images/iconGorku.svg"

const LoginOTP = () => {
  const {
    confirmationObject,
    setConfirmationObject,
    setNomorTelpon,
    nomorTelpon,
  } = useOtp()
  const navigate = useNavigate()

  const auth = getAuth(app)

  const { handleSubmit } = useForm()

  const onVerifySmsCode = async () => {
    toast.loading("Sedang Verifikasi SMS")
    console.log(otp)
    try {
      const code = otp.join("")
      console.log(code)
      await confirmationObject.confirm(code)
      toast.dismiss()
      toast.success("Kode OTP Terverifikasi")

      await checkUser()
    } catch (err) {
      console.log(err)
      toast.dismiss()
    }
  }

  const checkUser = async () => {
    try {
      toast.loading("Sedang Memeriksa Data Diri")

      const data = await api.post('/user/check', {
        "phone_number": nomorTelpon
      })

      setConfirmationObject(null)
      setNomorTelpon(null)

      if (data.data.status === false) {
        localStorage.setItem("need_regis", "true")
        navigate("/registration")
      } else {
        localStorage.setItem("user_data", JSON.stringify(data.data.data))
        navigate("/")
      }
      toast.dismiss()
    } catch (err) {
      console.log(err)
      toast.error(err)
    }
  }

  const resendOtp = async () => {
    toast.loading("Mengirim Kembali OTP")
    if (intervalRef.current) clearInterval(intervalRef.current)
    clearTimer(getDeadlineTime())
    setTimeIsUp(false)
    try {
      const applicationVerifier = window.recaptchaVerifier
      await signInWithPhoneNumber(auth, nomorTelpon, applicationVerifier)
      toast.dismiss()
      toast.success(`OTP Telah Dikirimkan ke ${nomorTelpon}`)
    } catch {
      toast.dismiss()
      toast.error("Terjadi Kesalahan Pada Jaringan")
    }
  }

  const [otp, setOtp] = useState(new Array(6).fill(""))

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    if (element.value === "") {
      if (element.previousSibling) element.previousSibling.focus()
    } else {
      if (element.nextSibling) element.nextSibling.focus()
    }
  }

  const intervalRef = useRef(null)

  const [timer, setTimer] = useState("00:00:00")
  const [timeIsUp, setTimeIsUp] = useState(false)

  const getTimeRemaining = endtime => {
    const total = Date.parse(endtime) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    return { total, minutes, seconds }
  }

  const startTimer = deadline => {
    let { total, minutes, seconds } = getTimeRemaining(deadline)
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      )
    } else {
      clearInterval(intervalRef.current)
      setTimeIsUp(true)
    }
  }

  const clearTimer = endtime => {
    setTimer("00:40")
    if (intervalRef.current) clearInterval(intervalRef.current)
    const id = setInterval(() => {
      startTimer(endtime)
    }, 1000)
    intervalRef.current = id
  }

  const getDeadlineTime = () => {
    let deadline = new Date()
    deadline.setSeconds(deadline.getSeconds() + 40)
    return deadline
  }

  useEffect(() => {
    clearTimer(getDeadlineTime())
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      },
      auth
    )
    // eslint-disable-next-line
  }, [])

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
                  <span className="text-blue-primary"> {nomorTelpon} </span>
                </p>
              </div>

              <div className="flex space-x-2 h-11 px-6">
                {otp.map((data, index) => {
                  return (
                    <input
                      className="w-1/4 border-[1px] border-gray-primary rounded-lg px-2  text-center"
                      type="text"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={e => handleChange(e.target, index)}
                      onFocus={e => e.target.select()}
                    />
                  )
                })}
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
                  <button
                    className={"hover:text-[#c4c4c4] " + (!timeIsUp ? 'text-gray-300' : 'text-blue-primary')}
                    disabled={!timeIsUp ? true : false}
                    onClick={resendOtp}
                  >
                    {" "}
                    Kirim lagi{" "}
                  </button>
                </p>
                <p className="text-blue-primary text-center">{timer}</p>
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
