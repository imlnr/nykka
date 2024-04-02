import axios from "axios";
import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./action-types";
import { Navigate } from "react-router-dom";
export const url = 'https://nykka-88xf.onrender.com';

export const signup = ({ name, email, password, avatar }) => {
    console.log(name, email, password, avatar);
    return async (dispatch) => {
        try {
            const res = await axios.post(`https://nykka-88xf.onrender.com/api/user/register`, {
                name: name,
                avatar: avatar,
                email: email,
                password: password
            });
            if (res) {
                console.log(res);
                toast({
                    title: "Registered Successful",
                    description: "You have account has been successfully registered.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                navigate('/login')
            }
        } catch (error) {
            console.log("login Failed", error);
            toast({
                title: "Login Failed",
                description: "Invalid email or password.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    }
}

export const login_fun = ({ email, password },toast) => {
    return async (dispatch) => {
        dispatch({ type: GET_LOGIN_REQUEST })
        try {
            const res = await axios.post(`${url}/api/user/login`, {
                email: email,
                password: password
            });
            if (res && res.data.token) {
                console.log(res.data);
                localStorage.setItem("token", res.data.token)
                dispatch({ type: GET_LOGIN_SUCCESS });
                toast({
                    title: "Login Successful",
                    description: "You have successfully loggedIn.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            dispatch({ type: GET_LOGIN_FAILURE })
            toast({
                title: "Login Failed",
                description: "Invalid email or password.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            console.log(error);
        }
    }
}
