import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Clasificattion } from './component/index.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ErrorPage } from './component/errorPage/index.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
  },
  {
    path:"/pengujian",
    element:<Clasificattion/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
