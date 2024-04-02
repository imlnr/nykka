import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import Signup from '../Pages/Signup'
import { BugsDashboard } from '../Pages/BugsDashboard'
import Chat from '../Pages/Chat'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/bugs' element={<BugsDashboard/>}/>
      <Route path='/chats' element={<Chat/>}/>
    </Routes>
  )
}

export default MainRoutes