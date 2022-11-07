import { createContext, useContext, useEffect, useState } from "react"
import { getAuth } from "firebase/auth"
import { app } from "../firebase/firebaseClient"
import { cookies } from "../helpers/cookies"

const auth = getAuth(app)

const AuthContext = createContext({
  user: null,
  uid: null,
})

const setToken = token => {
  // This function is for set token to cookies
  const isDevelopment = window.location.hostname === "localhost"

  let options = {
    path: "/",
    expires: new Date(Date.now()+86400000)
  }

  if (!isDevelopment) {
    options = {
      secure: true,
      sameSite: "None",
      domain: "." + window.location.hostname.replace("www.", ""),
      ...options,
    }
  }

  cookies.set("token", token, options)
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [uid, setUid] = useState(null)

  useEffect(() => {
    return auth.onIdTokenChanged(async userChange => {
      if (!userChange) {
        setUser(null)
        setUid(null)
        cookies.remove("token")
        return
      }

      console.info(`Updating JWT Token`)
      const token = await userChange.getIdTokenResult()

      setUser(userChange)
      setUid(userChange.uid)
      setToken(token.token)

      return
    })
  }, [])

  // force refresh the token every 1 Days
  useEffect(() => {
    const handle = setInterval(async () => {
      console.info(`Refreshing JWT Token`)
      const userRefresh = auth.currentUser
      if (userRefresh) await userRefresh.getIdTokenResult(true)
    }, 1 * 24 * 60 * 60 * 1000)
    return () => clearInterval(handle)
  }, [])

  return (
    <AuthContext.Provider value={{ user, uid }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export { useAuth, AuthProvider }
