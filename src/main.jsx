import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Compunent/Root/Root.jsx';
import Home from './Compunent/Home/Home.jsx';
import Login from './Compunent/Login/Login.jsx';
import Register from './Compunent/Register/Register.jsx';
import HeroRegister from './Compunent/HeroRegister/HeroRegister.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element : <Login></Login>
      },
      {
        path: "/register",
        element : <Register></Register>
      },
      {
        path: "/heroregister",
        element: <HeroRegister></HeroRegister>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
