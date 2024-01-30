import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyButton from './Components/MyButton'
import MapPlain from './Components/MapPlain'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, ThemeProvider, createTheme } from '@mui/material';
import MainPage from './Components/MainPage'

const darkTheme = createTheme({
  palette:{
    mode:'dark'
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
        <MainPage></MainPage>
    </ThemeProvider>
    
  </React.StrictMode>,
)