import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./ui/components/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const routes = createBrowserRouter([
  {path:'/',
  element: <Layout/>,
  children: [
    {path:'', index:true, element: <Home/>},
    {path:'login', element: <Login/>}
  ]}
])

function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
