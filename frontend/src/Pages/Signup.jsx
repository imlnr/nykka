import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import GoogleLog from '../Components/GoogleLog';
import { useDispatch } from 'react-redux';
// import { signup } from '../redux/AppReducer/action';
import axios from 'axios';
import { useToast } from '@chakra-ui/react'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();
    const signup = ({ name, email, password, avatar }) => {
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
                    console.log(res.data.msg);
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
            }
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const inputData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            repeatPass: data.get('repeatPassword'),
            avatar: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
        };
        console.log(inputData);
        if (inputData.password !== inputData.repeatPass) {
            console.log("password not matchintg");
            return toast({
                title: "Password not matching",
                description: "Please enter the same password.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });;
        }
        dispatch(signup(inputData));
    };

    return (
        <Container component="main" sx={{height:"100vh"}} maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    // marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="repeatPassword"
                        label="Repeat Password"
                        type="password"
                        id="repeatPassword"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/login" variant="body2">
                                {"Already have an account? Login"}
                            </Link>
                        </Grid>
                    </Grid>
                    <FormControlLabel
                        control={<Typography>or</Typography>}>
                    </FormControlLabel>
                    <GoogleLog />
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} ></Copyright>
        </Container>
    );
}