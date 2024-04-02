// import { Box, Center } from '@chakra-ui/react'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { GET_LOGOUT } from '../redux/AppReducer/action-types'
import { useToast } from '@chakra-ui/react'
const Home = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const handleLogout = ()=>{
    dispatch({type:GET_LOGOUT});
    toast({
      title: "Logout",
      description: "successfully logged out",
      status: "success",
      duration: 5000,
      isClosable: true,
  });
  }
  return (
    <Box height={"100vh"} width={"100vw"} display={"flex"} alignItems={'center'} flexDirection={"column"} justifyContent={"center"}>
      <Button onClick={handleLogout} sx={{position:"absolute",top:"20px",right:"20px"}} variant='contained'>logout</Button>
      <Box>
        <Typography fontSize={"x-large"}>Welcome to our Site!</Typography>
        <Box display={"flex"} alignItems={'center'} justifyContent={"space-around"}>
          <Link to={'/bugs'}><Button variant='contained'>Bugs</Button></Link>
          <Link to={'/chats'}><Button variant='contained'>Chat</Button></Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Home