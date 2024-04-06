import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
  
   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/login',
            element:<Login />
        }
      ]
    },
  ]);