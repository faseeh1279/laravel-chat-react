import { useEffect, useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
// import Chat from '../Chat'
// import api from "../api/axios";
import LoginPage from '../features/auth/pages/LoginPage'
import AppRoutes from './routes'

// async function testSanctum() {
//     try {
//         await api.get("/sanctum/csrf-cookie");

//         console.log("CSRF cookie received");
//     } catch (error) {
//         console.error("Sanctum error:", error);
//     }
// }


function App() {
  
  return (
    <>
       <AppRoutes/>
    </>
  )
}

export default App
