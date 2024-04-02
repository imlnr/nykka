import { Box, flexbox } from '@mui/system'
import React from 'react'
import applogo from "../assets/Logo.png"
import first from "../assets/Vector1.png"
import img2 from "../assets/Vector2.png"
import img3 from "../assets/Vector3.png"
import img4 from "../assets/Vector4.png"
import img5 from "../assets/Vector5.png"
import img6 from "../assets/Vector6.png"
import Grid from "@mui/material/Grid"
import AddIcon from '@mui/icons-material/Add';
import { Chip, Input, MenuItem, Select } from '@mui/material'
import ChatPeople from '../Components/ChatPeople'
// import Add from '@mui/icons-material/Add'

const Chat = () => {
    const chatData = [
        {
            avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Allen",
            lastmsg: "Haha oh man 🔥",
            time: "12m",
            chip: 1
        }, {
            avatar: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Lilly",
            lastmsg: "Bye",
            time: "12m",
            chip: "2"
        }, {
            avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Dipu",
            lastmsg: "Really ?",
            time: "12m",
            chip: "2"
        }, {
            avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Lipu",
            lastmsg: "Are you free ?",
            time: "12m",
            chip: "2"
        }, {
            avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Aman",
            lastmsg: "21",
            time: "12m",
            chip: "2"
        }, {
            avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Rohan",
            lastmsg: "Let's meet ",
            time: "12m",
            chip: "2"
        }, {
            avatar: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Ramesh",
            lastmsg: "😂😂😂",
            time: "12m",
            chip: 1
        }
    ]
    return (
        <Box display={"flex"} height={"100vh"}>
            <Box display={'flex'} width={"88px"} border={"1px solid #c3c3c3"} alignItems={'center'} justifyContent={'center'}>
                <Box height={"97vh"} display={'flex'} alignItems={"center"} justifyContent={'space-between'} flexDirection={'column'}>
                    <Box display={"flex"} flexDirection={"column"} alignItems={'center'} justifyContent={'center'}>
                        <img src={applogo} alt="" />
                        <Box display={'flex'} flexDirection={'column'} gap={"25px"} padding={"40px 0"}>
                            <img src={first} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                        </Box>
                    </Box>
                    <img src={img6} alt="" />
                </Box>
            </Box>
            <Grid width={"100%"} display={'grid'} gridTemplateColumns={"repeat(5,1fr)"} >
                <Box border={"1px solid #c3c3c3"} padding={'4%'} display={'flex'} flexDirection={"column"} gap={"20px"}>
                    <Box borderBottom={"1px solid #c3c3c3"} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                        {/* <InputLabel id="messages-label">Messages</InputLabel> */}
                        <Box  display={'flex'} gap={"10px"}>
                            <Select
                                labelId="messages-label"
                                id="messages"
                                name="message"
                                defaultValue="message"
                                sx={{ border: "none" }}
                            >

                                <MenuItem defaultValue={"Message"} value="message">Messages</MenuItem>
                            </Select>
                            <Chip label="12" sx={{ alignSelf: "center" }} />
                        </Box>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} color={"white"} height={"40px"} width={"40px"} sx={{ backgroundColor: "#615ef0" }} borderRadius={"50%"}>
                            <AddIcon fontSize='large' />
                        </Box>

                    </Box>
                    <Input type='text' placeholder='search Search message' sx={{ border:"1px solid #c3c3c3", padding: "2%", borderRadius: "8px", width: "100%" }} />
                    <Box height={"78vh"} width={"100%"} overflow={"scroll"} sx={{overflowX:"hidden"}} gap={"10px"} display={'flex'} flexDirection={"column"}>
                        {chatData.map((ele, ind) => (
                            <ChatPeople val={ele} />
                        ))}
                    </Box>
                </Box>
                <Box border={"1px solid #c3c3c3"} gridColumn={"2/span 3"}>
                    klk
                </Box>
                <Box border={"1px solid #c3c3c3"}>
                    lkjl
                </Box>
            </Grid>
        </Box>
    )
}

export default Chat