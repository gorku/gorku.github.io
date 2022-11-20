import axios from "axios"
import { cookies } from "./cookies"

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  responseType: "json",
  headers: {
    authorization:
      cookies.get("token") === null ? "" : `Bearer ${cookies.get("token")}`,
  },
})
