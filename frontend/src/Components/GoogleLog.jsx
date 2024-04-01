import { GoogleLogin } from '@react-oauth/google';
import React from 'react'

const GoogleLog = () => {
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

export default GoogleLog