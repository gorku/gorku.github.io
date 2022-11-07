import React from "react"
import "../static/css/App.css"
import { cookies } from "../helpers/cookies"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import { ReactComponent as MyLogo } from "../static/svg/card.svg";

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
      <MyLogo />
    </div>
  )
}

export default Home
