import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyButton from './Components/MyButton'
import MapPlain from './Components/MapPlain'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapPlain/>
  </React.StrictMode>,
)