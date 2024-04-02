import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import Signup from '../Pages/Signup'
import { BugsDashboard } from '../Pages/BugsDashboard'
import Chat from '../Pages/Chat'
import PrivateRoutes from './PrivateRoutes'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PrivateRoutes><Home /></PrivateRoutes>} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/bugs' element={<PrivateRoutes><BugsDashboard /></PrivateRoutes>} />
      <Route path='/chats' element={<PrivateRoutes><Chat /></PrivateRoutes>} />
    </Routes>
  )
}

export default MainRoutes