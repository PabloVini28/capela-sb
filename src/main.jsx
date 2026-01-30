import React from "react";
import './index.css'
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Login from "./pages/login/Login"
import Register from './pages/signup/Register'
import Home from './pages/home/Home'

const router = createHashRouter([
  {
    path:"/",
    element: <Login/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/home",
    element: <Home/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
