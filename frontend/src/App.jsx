import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './Pages/SignIn'
import MainRoutes from './AllRoutes/MainRoutes'
import { Paper, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BugsDashboard } from './Pages/BugsDashboard'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'


function App() {
  const [count, setCount] = useState(0)
  const theme = createTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <>
      <ChakraProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GoogleOAuthProvider clientId='29787571856-dqsifnqon7r2vi90qoaif8n80276l5vr.apps.googleusercontent.com'>
              <BrowserRouter>
                <MainRoutes />
              </BrowserRouter>
            </GoogleOAuthProvider>
          </ThemeProvider>
        </Provider>
      </ChakraProvider>
    </>
  )
}

export default App
