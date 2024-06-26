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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLog from '../Components/GoogleLog';
import { url } from '../redux/AppReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from '../redux/AppReducer/action-types';


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

const defaultTheme = createTheme();
export default function SignIn() {
    const isloading = useSelector((state) => state.isLoading);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const login_fun = ({ email, password }) => {
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
                    navigate('/')
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const inp = {
            email: data.get('email'),
            password: data.get('password'),
        };
        console.log(inp);
        dispatch(login_fun(inp))
    };
    return (
        <Container component="main" sx={{ height: "100vh" }} maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    {isloading ? <LoadingButton
                        loading
                        fullWidth
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                    >
                        Logging in....
                    </LoadingButton> :

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    }
                    <Grid container>
                        <Grid item xs>
                            {/* <Link href="#" variant="body2">
                                Forgot password?
                            </Link> */}
                        </Grid>
                        <Grid item>

                            <Link to="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <FormControlLabel
                        control={<Typography>or</Typography>}>
                    </FormControlLabel>
                    <GoogleLog />
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}