import React from "react"
import "../static/css/App.css"
import { cookies } from "../helpers/cookies"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const isAuth = cookies.get("token")

    if (!isAuth) {
      navigate("/login")
    }
  })

  return (
    <div className="App">
    </div>
  )
}

export default Home
