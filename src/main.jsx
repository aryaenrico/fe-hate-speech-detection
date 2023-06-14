import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Clasificattion } from './component/index.jsx'
import { AddDataSet } from './component/formAddDataset/index.jsx'
import { TestingData } from './component/dataTesting/index.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ErrorPage } from './component/errorPage/index.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import store from './app/store.js';
import { Provider } from 'react-redux'
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
  {
    path:"/dataset",
    element:<AddDataSet/>
  },
  {
    path:"/testing",
    element:<TestingData/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
