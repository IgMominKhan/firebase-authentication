import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Providers from "./components/Providers/Providers.jsx";
import App from './App'
import LogIn from './components/LogIn.jsx'
import Register from './components/Register.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Home from "./components/Home.jsx";
import './index.css'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:'/',
        element:<LogIn/>
      },
      {
        path:'/login',
        element:<LogIn/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/home',
        element: <Home/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers> 
      <RouterProvider router={router}/>   
    </Providers>
  </React.StrictMode>,
)
