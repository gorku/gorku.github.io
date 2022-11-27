import axios from "axios"
import Cookies from "universal-cookie"

const cookies = new Cookies()

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  responseType: "json",
  headers: {
    authorization:
      cookies.get("token") === null || cookies.get("token") === undefined ? "" : `Bearer ${cookies.get("token")}`,
  },
})
