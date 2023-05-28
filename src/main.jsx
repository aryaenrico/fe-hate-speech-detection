import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Clasificattion } from './component/index.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App />}>
      </Route>
      <Route path='/pengujian' element={ <Clasificattion />}>
      </Route>
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
)
