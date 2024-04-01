import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './Pages/SignIn'
import MainRoutes from './AllRoutes/MainRoutes'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    {/* <SignIn/> */}
    <MainRoutes/>
    </>
  )
}

export default App
