import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyButton from './Components/MyButton'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>Hello World</h1>
    <MyButton></MyButton>
  </React.StrictMode>,
)