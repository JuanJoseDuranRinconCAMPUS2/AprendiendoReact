import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import './style.css'
let app = document.querySelector('#root');
ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
)
