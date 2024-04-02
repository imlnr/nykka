import axios from "axios";
import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./action-types";
import { Navigate } from "react-router-dom";
const url = 'https://nykka-88xf.onrender.com';

export const signup = ({ name, email, password, avatar }) => {
    console.log(name,email,password,avatar);
    return async (dispatch) => {
        // dispatch({type:GET_LOGIN_REQUEST})
        try {
            const res = await axios.post(`${url}/api/user/register`, {
                name: name,
                avatar: avatar,
                email: email,
                password: password
            });
            if (res) {
                // dispatch({type: GET_LOGIN_SUCCESS});
                console.log(res.data.msg);
            }
        } catch (error) {
            // dispatch({type:GET_LOGIN_FAILURE})
            console.log("login Failed",error);
        }
    }
}

const login_fun = (inp) => {
    return async (dispatch) => {
        dispatch({ type: GET_LOGIN_REQUEST })
        try {
            const res = await axios.post(`${url}/api/user/register`, inp);
            if (res && res.data.token) {
                dispatch({ type: GET_LOGIN_SUCCESS });

            }
        } catch (error) {
            dispatch({ type: GET_LOGIN_FAILURE })
        }
    }
}