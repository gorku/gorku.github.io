// import core dependencies
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { AuthProvider } from "./firebase/AuthProvider"
import { OtpProvider } from "./contexts/OtpProvider"
import router from "./routes"

// import global CSS
import "./static/css/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <OtpProvider>
        <div id="fullBody" className="bg-cyan-100">
          <div id="content" className="bg-white">
            <RouterProvider router={router} />
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 3000,
                style: {
                  marginTop: "30px",
                  fontWeight: "bold",
                  color: "white",
                },
                success: {
                  iconTheme: {
                    primary: "white",
                    secondary: "#008800",
                  },
                  style: {
                    backgroundColor: "#008800",
                  },
                },
                error: {
                  iconTheme: {
                    primary: "white",
                    secondary: "#EB4D3D",
                  },
                  style: {
                    backgroundColor: "#EB4D3D",
                  },
                },
                loading: {
                  style: {
                    backgroundColor: "#999999",
                    color: "#F2F4F4",
                  },
                },
              }}
            />
          </div>
        </div>
      </OtpProvider>
    </AuthProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
