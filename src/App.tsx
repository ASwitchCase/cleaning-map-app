import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MapPlain from './Components/MapPlain'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, ThemeProvider, createTheme } from '@mui/material';
import MainPage from './Components/MainPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const darkTheme = createTheme({
  palette:{
    mode:'dark'
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
  {
    path: "/maps",
    element: <MainPage></MainPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router}/>
    </ThemeProvider>
    
  </React.StrictMode>,
)