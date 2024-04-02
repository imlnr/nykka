import React from 'react'
import {useSelector} from 'react-redux'
import SignIn from '../Pages/SignIn'
const PrivateRoutes = ({children}) => {
  const state = useSelector(state => state.isLogin)
  return (
    <div>
      {state?children:<SignIn/>}
    </div>
  )
}

export default PrivateRoutes