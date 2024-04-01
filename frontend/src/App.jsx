import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './Pages/SignIn'
import MainRoutes from './AllRoutes/MainRoutes'
import { Paper, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'


function App() {
  const [count, setCount] = useState(0)
  const theme = createTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Paper> */}
        <MainRoutes />
        {/* </Paper> */}
      </ThemeProvider>
    </>
  )
}

export default App
