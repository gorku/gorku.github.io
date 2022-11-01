import { initializeApp, getApp, getApps } from "firebase/app"

let app

const firebaseConfig = {
    apiKey: "AIzaSyB8dpmn-MeGdldTxiezCNfjjTHgppxP9L8",
    authDomain: "gorku-firebase.firebaseapp.com",
    projectId: "gorku-firebase",
    storageBucket: "gorku-firebase.appspot.com",
    messagingSenderId: "835993855889",
    appId: "1:835993855889:web:366e732d3c5e67e9f65c30",
    measurementId: "G-3F011SERXD"
}

if (getApps().length) {
  app = getApp()
} else {
  app = initializeApp(firebaseConfig)
}

export { app }