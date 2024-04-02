import { Box, Chip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ChatPeople = ({ val }) => {
    const [state, setstate] = useState(false);
    console.log(val.chip);
    // let st = false;
    const handleClick = () => {
        // st = !st
        setstate(prev => !prev);
    }
    useEffect(() => {

    }, [handleClick, state])
    return (
        <Box sx={state ? { backgroundColor: "#c3c3c3" } : {}} border={"1px solid"} display={'flex'} padding={"2%"} borderRadius={"8px"} alignItems={'center'} width={"100%"} justifyContent={"space-between"} onClick={handleClick}>
            <img width={"20%"} style={{ alignSelf: "start", borderRadius: "8px" }} src={val.avatar} alt="" />
            <Box width={"70%"}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography>{val.name}</Typography>
                    <Typography>{val.time}</Typography>
                </Box>
                <Typography>{val.lastmsg}</Typography>
                {val.chip == 2 ? <Box><Chip label="Request" /><Chip label="Question" /></Box> : <Chip label="Bug" />}
            </Box>
        </Box>
    )
}

export default ChatPeople