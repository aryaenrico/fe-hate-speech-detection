import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Clasificattion } from './component/index.jsx'
import { AddDataSet } from './component/formAddDataset/index.jsx'
import { TestingData } from './component/dataTesting/index.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ErrorPage } from './component/errorPage/index.jsx'
import { LiveTweet } from './component/liveTweet/index.jsx'
import {FileUploader} from './component/upload/index.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import store from './app/store.js';
import { Provider } from 'react-redux'
import { TestingExcel } from './component/dataTestingExcel/index.jsx'
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     errorElement:<ErrorPage/>,
//   },
//   {
//     path:"/pengujian",
//     element:<Clasificattion/>
//   },
//   {
//     path:"/dataset",
//     element:<AddDataSet/>
//   },
//   {
//     path:"/testing",
//     element:<TestingData/>
//   },
//   {
//     path:"/testings",
//     element:<TestingExcel/>
//   },{
//     path:"/tweets",
//     element:<LiveTweet/>
//   },
//   {
//     path:"/upload",
//     element:<FileUploader/>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pengujian" element={<Clasificattion />} />
        <Route path="/dataset" element={<AddDataSet />} />
        <Route path="/testing" element={<TestingData />} />
        <Route path="/testings" element={<TestingExcel />} />
        <Route path="/tweets" element={<LiveTweet />} />
        <Route path="/upload" element={<FileUploader />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
